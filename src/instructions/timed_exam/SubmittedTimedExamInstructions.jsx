import React, { useContext } from 'react';
import { FormattedMessage } from '@edx/frontend-platform/i18n';
import ExamStateContext from '../../context';

const SubmittedTimedExamInstructions = () => {
  const state = useContext(ExamStateContext);

  return (
    <h3 className="h3" data-testid="exam.submittedExamInstructions.title">
      {state.timeIsOver
        ? (
          <FormattedMessage
            id="exam.submittedExamInstructions.overtimeTitle"
            defaultMessage="分配给本次考试的时间已过。您的考试已提交并且您已完成所有作业将会被评分。"
          />
        )
        : (
          <FormattedMessage
            id="exam.submittedExamInstructions.title"
            defaultMessage="您的计时考试已提交。"
          />
        )}
    </h3>
  );
};

export default SubmittedTimedExamInstructions;
