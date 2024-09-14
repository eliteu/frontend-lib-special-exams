import React, { useContext } from 'react';
import { FormattedMessage } from '@edx/frontend-platform/i18n';
import { Button } from '@edx/paragon';
import ExamStateContext from '../../context';

const SubmittedPracticeExamInstructions = () => {
  const state = useContext(ExamStateContext);
  const { resetExam } = state;

  return (
    <div>
      <h3 className="h3" data-testid="exam-instructions-title">
        <FormattedMessage
          id="exam.SubmittedOnboardingExamInstructions.title"
          defaultMessage="您已提交此模拟监考考试"
        />
      </h3>
      <p>
        <FormattedMessage
          id="exam.SubmittedProctoredExamInstructions.text1"
          defaultMessage={'练习考试不会影响您的成绩。'
          + '您已完成本次模拟考试，可以继续您的课程作业。'}
        />
      </p>
      <Button
        data-testid="retry-exam-button"
        variant="primary"
        onClick={resetExam}
      >
        <FormattedMessage
          id="exam.SubmittedPracticeExamInstructions.retryExamButton"
          defaultMessage="重试我的考试"
        />
      </Button>
    </div>
  );
};

export default SubmittedPracticeExamInstructions;
