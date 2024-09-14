import React, { useContext } from 'react';
import { FormattedMessage } from '@edx/frontend-platform/i18n';
import { Button } from '@edx/paragon';
import ExamStateContext from '../../context';

const ErrorOnboardingExamInstructions = () => {
  const state = useContext(ExamStateContext);
  const { resetExam } = state;

  return (
    <div>
      <h3 className="h3">
        <FormattedMessage
          id="exam.ErrorOnboardingExamInstructions.title"
          defaultMessage="错误：您的入职会话出现问题"
        />
      </h3>
      <p className="mb-0">
        <FormattedMessage
          id="exam.ErrorOnboardingExamInstructions.text"
          defaultMessage={'您的监考课程在您完成入职考试之前就结束了。'
          + '您应该重试此入职考试。'}
        />
      </p>
      <Button
        data-testid="retry-exam-button"
        variant="primary"
        onClick={resetExam}
      >
        <FormattedMessage
          id="exam.ErrorOnboardingExamInstructions.retryExamButton"
          defaultMessage="重试我的考试"
        />
      </Button>
    </div>
  );
};

export default ErrorOnboardingExamInstructions;
