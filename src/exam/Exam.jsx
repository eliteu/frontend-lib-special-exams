/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { injectIntl, intlShape, FormattedMessage } from '@edx/frontend-platform/i18n';
import { Alert, Spinner } from '@edx/paragon';
import { Info } from '@edx/paragon/icons';
import { ExamTimerBlock } from '../timer';
import Instructions from '../instructions';
import ExamStateContext from '../context';
import ExamAPIError from './ExamAPIError';
import { ExamStatus, ExamType } from '../constants';
import messages from './messages';

/**
 * Exam component is intended to render exam instructions before and after exam.
 * It is also responsible for rendering exam timer block/component during the exam.
 * If children do not relate to exam sequence, render them directly.
 * @param isTimeLimited - boolean used to identify if we need to process sequence as an exam
 * @param children - sequence content
 * @returns {JSX.Element}
 * @constructor
 */
const Exam = ({
  isGated, isTimeLimited, originalUserIsStaff, canAccessProctoredExams, children, intl,
}) => {
  const state = useContext(ExamStateContext);
  const {
    isLoading, activeAttempt, showTimer, stopExam, exam,
    expireExam, pollAttempt, apiErrorMsg, pingAttempt,
    getProctoringSettings, submitExam,
  } = state;

  const {
    attempt,
    type: examType,
    id: examId,
    passed_due_date: passedDueDate,
    hide_after_due: hideAfterDue,
  } = exam || {};
  const { attempt_status: attemptStatus } = attempt || {};

  const shouldShowMasqueradeAlert = () => {
    // if course staff is masquerading as a specific learner, they should be able
    // to view the exam content regardless of the learner's current state
    if (originalUserIsStaff && isTimeLimited) {
      if (examType === ExamType.TIMED && passedDueDate && !hideAfterDue) {
        // if the learner is able to view exam content after the due date is passed,
        // don't show this alert
        return false;
      }
      return attemptStatus !== ExamStatus.STARTED;
    }
    return false;
  };

  const [hasProctoredExamAccess, setHasProctoredExamAccess] = useState(true);

  const proctoredExamTypes = [ExamType.ONBOARDING, ExamType.PRACTICE, ExamType.PROCTORED];

  useEffect(() => {
    if (proctoredExamTypes.includes(examType)) {
      // only fetch proctoring settings for a proctored exam
      if (examId) {
        getProctoringSettings();
      }

      // Only exclude Timed Exam when restricting access to exams
      setHasProctoredExamAccess(canAccessProctoredExams);
    }
    // this makes sure useEffect gets called only one time after the exam has been fetched
    // we can't leave this empty since initially exam is just an empty object, so
    // API calls above would not get triggered
  }, [examId]);

  if (isLoading) {
    return (
      <div data-testid="spinner" className="d-flex justify-content-center align-items-center flex-column my-5 py-5">
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }

  if (!hasProctoredExamAccess) {
    // If the user cannot acces proctoring exam, and the current exam is a proctoring exam,
    // we want to display a message box to let learner know they have no access.
    return (
      <div data-testid="no-access" className="d-flex justify-content-center align-items-center flex-column">
        {intl.formatMessage(messages.proctoredExamAccessDenied)}
      </div>
    );
  }

  // eslint-disable-next-line react/jsx-no-useless-fragment
  const sequenceContent = <>{children}</>;

  return (
    <div className="d-flex flex-column justify-content-center">
      {shouldShowMasqueradeAlert() && (
        <Alert variant="info" icon={Info} data-testid="masquerade-alert">
          <FormattedMessage
            id="exam.hiddenContent"
            defaultMessage="这次考试对学习者是隐藏的。"
          />
        </Alert>
      )}
      {showTimer && (
        <ExamTimerBlock
          attempt={activeAttempt}
          stopExamAttempt={stopExam}
          submitExam={submitExam}
          expireExamAttempt={expireExam}
          pollExamAttempt={pollAttempt}
          pingAttempt={pingAttempt}
        />
      )}
      { // show the error message only if you are in the exam sequence
        isTimeLimited && apiErrorMsg && <ExamAPIError />
      }
      {isTimeLimited && !originalUserIsStaff && !isGated
        ? <Instructions>{sequenceContent}</Instructions>
        : sequenceContent}
    </div>
  );
};

Exam.propTypes = {
  isTimeLimited: PropTypes.bool.isRequired,
  isGated: PropTypes.bool.isRequired,
  originalUserIsStaff: PropTypes.bool.isRequired,
  canAccessProctoredExams: PropTypes.bool,
  children: PropTypes.element.isRequired,
  intl: intlShape.isRequired,
};

Exam.defaultProps = {
  canAccessProctoredExams: true,
};

export default injectIntl(Exam);
