import React, { useContext } from 'react';
import { FormattedMessage } from '@edx/frontend-platform/i18n';
import { Button } from '@edx/paragon';
import ExamStateContext from '../../context';

const SubmitTimedExamInstructions = () => {
  const state = useContext(ExamStateContext);
  const { submitExam } = state;

  return (
    <>
      <h3 className="h3" data-testid="exam-instructions-title">
        <FormattedMessage
          id="exam.submitExamInstructions.title"
          defaultMessage="您确定要提交此限时考试吗？"
        />
      </h3>
      <p>
        <FormattedMessage
          id="exam.submitExamInstructions.warningText"
          defaultMessage="请确保您已点击「提交」每个问题的答案，然后再提交考试。"
        />
      </p>
      <p>
        <FormattedMessage
          id="exam.submitExamInstructions.text"
          defaultMessage="在您提交考试后，会对您的回答进行评分。"
        />
      </p>
      <Button variant="primary" onClick={submitExam} className="mr-2" data-testid="end-exam-button">
        <FormattedMessage
          id="exam.submitExamInstructions.submit"
          defaultMessage="确定提交"
        />
      </Button>
    </>
  );
};

export default SubmitTimedExamInstructions;
