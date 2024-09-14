import React, { useContext } from 'react';
import { getConfig } from '@edx/frontend-platform';
import { FormattedMessage } from '@edx/frontend-platform/i18n';
import { Button } from '@edx/paragon';
import ExamStateContext from '../../context';
import { ExamType } from '../../constants';

const SubmitProctoredExamInstructions = () => {
  const state = useContext(ExamStateContext);
  const {
    submitExam,
    exam,
    activeAttempt,
  } = state;
  const { type: examType, attempt } = exam || {};
  const { exam_display_name: examName } = activeAttempt;
  const examHasLtiProvider = !attempt.use_legacy_attempt_api;
  const submitLtiAttemptUrl = `${getConfig().EXAMS_BASE_URL}/lti/end_assessment/${attempt.attempt_id}`;

  const handleSubmitClick = () => {
    if (examHasLtiProvider) {
      window.location.assign(submitLtiAttemptUrl);
    }
    submitExam();
  };

  return (
    <>
      <h3 className="h3" data-testid="proctored-exam-instructions-title">
        <FormattedMessage
          id="exam.SubmitProctoredExamInstructions.title"
          defaultMessage="您确定结束监考考试？"
        />
      </h3>
      <ul>
        <li>
          <FormattedMessage
            id="exam.SubmitProctoredExamInstructions.warningText1"
            defaultMessage="在提交考试之前，请确保您已为每个答案选择「提交」。"
          />
        </li>
        <li>
          <FormattedMessage
            id="exam.SubmitProctoredExamInstructions.warningText2"
            defaultMessage="单击「是，结束我的监考考试」后，考试将关闭，并且您的监考课程将提交以供审核。"
          />
        </li>
      </ul>
      {examType === ExamType.ONBOARDING && (
        <p data-testid="submit-onboarding-exam">
          <FormattedMessage
            id="exam.SubmitOnboardingExamInstructions.text"
            defaultMessage={'您正在参加 "{examName}" 作为入职考试。您必须单击「是的，结束我的监考考试」并提交您的监考课程才能完成入职。'}
            values={{ examName }}
          />
        </p>
      )}
      <Button variant="primary" onClick={handleSubmitClick} className="mr-2" data-testid="end-exam-button">
        <FormattedMessage
          id="exam.SubmitProctoredExamInstructions.submit"
          defaultMessage="是的，结束我的监考考试"
        />
      </Button>
    </>
  );
};

export default SubmitProctoredExamInstructions;
