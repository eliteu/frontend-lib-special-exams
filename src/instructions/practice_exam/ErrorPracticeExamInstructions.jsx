import React, { useContext } from 'react';
import { FormattedMessage } from '@edx/frontend-platform/i18n';
import { Button } from '@edx/paragon';
import ExamStateContext from '../../context';

const ErrorPracticeExamInstructions = () => {
  const state = useContext(ExamStateContext);
  const { resetExam } = state;

  return (
    <div>
      <h3 className="h3">
        <FormattedMessage
          id="exam.ErrorPracticeExamInstructions.title"
          defaultMessage="您的模拟监考环节出现问题"
        />
      </h3>
      <h4 className="h4">
        <FormattedMessage
          id="exam.ErrorPracticeExamInstructions.title2"
          defaultMessage="您的模拟监考结果："
        />
        <span className="font-weight-bold">
          <FormattedMessage
            id="exam.ErrorPracticeExamInstructions.title2.result"
            defaultMessage="不满意"
          />
        </span>
      </h4>
      <p className="mb-0">
        <FormattedMessage
          id="exam.ErrorPracticeExamInstructions.text"
          defaultMessage={'您的监考课程在您完成本次模拟考试之前就结束了。'
          + '如果您在设置在线监考软件时遇到问题，可以重试此模拟考试。'}
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

export default ErrorPracticeExamInstructions;
