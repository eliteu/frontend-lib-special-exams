import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from '@edx/frontend-platform/i18n';
import { Button } from '@edx/paragon';
import ExamStateContext from '../../context';
import SkipProctoredExamButton from './SkipProctoredExamButton';

const EntranceProctoredExamInstructions = ({ skipProctoredExam }) => {
  const state = useContext(ExamStateContext);
  const { exam, createProctoredExamAttempt, allowProctoringOptOut } = state;
  const { attempt } = exam || {};
  const { total_time: totalTime = 0 } = attempt;

  return (
    <>
      { attempt.attempt_ready_to_resume ? (
        <div>
          <div className="h3" data-testid="proctored-exam-instructions-title">
            <FormattedMessage
              id="exam.ReadyToResumeProctoredExamInstructions.title"
              defaultMessage="您的考试已准备好恢复。"
            />
          </div>
          <p>
            <FormattedMessage
              id="exam.ReadyToResumeProctoredExamInstructions.text"
              defaultMessage="您将获得 {total_time} 来完成考试。"
              values={{ totalTime }}
            />
          </p>
        </div>
      ) : (
        <div className="h3" data-testid="proctored-exam-instructions-title">
          <FormattedMessage
            id="exam.EntranceProctoredExamInstructions.title"
            defaultMessage="需开启监考模式"
          />
        </div>
      )}
      <p>
        <FormattedMessage
          id="exam.EntranceProctoredExamInstructions.text1"
          defaultMessage="要获得与本课程相关的学分或课程证书的资格，您必须通过本次考试的监考审核。"
        />
      </p>
      <p className="mt-4 pl-md-4">
        <FormattedMessage
          id="exam.EntranceProctoredExamInstructions.text2"
          defaultMessage="我们将指导您完成设置在线监考软件并验证您的身份的步骤。"
        />
      </p>
      <p className="pl-md-4">
        <Button
          data-testid="start-exam-button"
          variant="primary"
          onClick={createProctoredExamAttempt}
        >
          <FormattedMessage
            id="exam.startExamInstructions.startExamButtonText"
            defaultMessage="继续参加我监考的考试。"
          />
        </Button>
      </p>
      {allowProctoringOptOut && <SkipProctoredExamButton handleClick={skipProctoredExam} />}
    </>
  );
};

EntranceProctoredExamInstructions.propTypes = {
  skipProctoredExam: PropTypes.func.isRequired,
};

export default EntranceProctoredExamInstructions;
