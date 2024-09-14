import React, { useContext } from 'react';
import { FormattedMessage } from '@edx/frontend-platform/i18n';
import { Button } from '@edx/paragon';
import ExamStateContext from '../../context';

const StartTimedExamInstructions = () => {
  const state = useContext(ExamStateContext);
  const { exam, startTimedExam } = state;
  const examDuration = exam.total_time;

  return (
    <>
      <div className="h3" data-testid="exam-instructions-title">
        <FormattedMessage
          id="exam.startExamInstructions.title"
          defaultMessage="子部分是一个计时考试（{examDuration}）"
          values={{ examDuration }}
        />
      </div>
      <p>
        <FormattedMessage
          id="exam.startExamInstructions.text1"
          defaultMessage="本次考试有时间限制。"
        />
        <strong>
          <FormattedMessage
            id="exam.startExamInstructions.text2"
            defaultMessage="要通过本次考试，你必须在允许的时间内完成所有题目。"
          />
        </strong>
        <FormattedMessage
          id="exam.startExamInstructions.text3"
          defaultMessage={'选择完成后 "我准备好开始此门限时考试了", '
          + '您将有 {examDuration} 来完成并提交考试。'}
          values={{ examDuration }}
        />
      </p>
      <Button
        data-testid="start-exam-button"
        variant="outline-primary"
        onClick={startTimedExam}
      >
        <FormattedMessage
          id="exam.startExamInstructions.startExamButtonText"
          defaultMessage="我已准备好开始此限时考试。"
        />
      </Button>
    </>
  );
};

export default StartTimedExamInstructions;
