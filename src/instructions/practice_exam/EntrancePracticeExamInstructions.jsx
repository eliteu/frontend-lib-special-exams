import React, { useContext } from 'react';
import { FormattedMessage } from '@edx/frontend-platform/i18n';
import { Button } from '@edx/paragon';
import ExamStateContext from '../../context';

const EntrancePracticeExamInstructions = () => {
  const state = useContext(ExamStateContext);
  const { createProctoredExamAttempt } = state;

  return (
    <>
      <div className="h3" data-testid="exam-instructions-title">
        <FormattedMessage
          id="exam.EntrancePracticeExamInstructions.title"
          defaultMessage="尝试监考考试"
        />
      </div>
      <p>
        <FormattedMessage
          id="exam.EntrancePracticeExamInstructions.text1"
          defaultMessage="在课程后期，要熟悉真实考试的监考流程。此次练习考试不会影响你在课程中的成绩。"
        />
      </p>
      <p className="pl-4 m-md-0">
        <Button
          data-testid="start-exam-button"
          variant="primary"
          onClick={createProctoredExamAttempt}
        >
          <FormattedMessage
            id="exam.EntrancePracticeExamInstructions.startExamButtonText"
            defaultMessage="继续进行模拟考试"
          />
        </Button>
      </p>
      <p className="pl-md-4">
        <FormattedMessage
          id="exam.EntrancePracticeExamInstructions.text2"
          defaultMessage="我们将指导您完成设置在线监考软件并验证您的身份的步骤。"
        />
      </p>
    </>
  );
};

export default EntrancePracticeExamInstructions;
