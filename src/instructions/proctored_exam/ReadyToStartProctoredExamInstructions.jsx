import React, { useContext, useEffect, useState } from 'react';
import { FormattedMessage } from '@edx/frontend-platform/i18n';
import { getConfig } from '@edx/frontend-platform';
import { Button, Container, Spinner } from '@edx/paragon';
import ExamStateContext from '../../context';
import Footer from './Footer';

const ReadyToStartProctoredExamInstructions = () => {
  const state = useContext(ExamStateContext);
  const {
    exam,
    getExamReviewPolicy,
    startProctoredExam,
  } = state;
  const { attempt, reviewPolicy } = exam;
  const examDuration = attempt.total_time ? attempt.total_time : exam.total_time;
  const platformName = getConfig().SITE_NAME;
  const rulesUrl = getConfig().PROCTORED_EXAM_RULES_URL;
  const [beginExamClicked, setBeginExamClicked] = useState(false);

  useEffect(() => {
    getExamReviewPolicy();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleStart = () => {
    setBeginExamClicked(true);
    startProctoredExam();
  };

  return (
    <div>
      <Container className="border py-5 mb-4">
        <div className="h3" data-testid="exam-instructions-title">
          <FormattedMessage
            id="exam.ReadyToStartProctoredExamInstructions.title1"
            defaultMessage="重要的"
          />
        </div>
        <ul>
          <li data-testid="duration-text">
            <FormattedMessage
              id="exam.ReadyToStartProctoredExamInstructions.text1"
              defaultMessage="您有 {examDuration}s 来完成本次考试。"
              values={{ examDuration }}
            />
          </li>
          <li>
            <FormattedMessage
              id="exam.ReadyToStartProctoredExamInstructions.text2"
              defaultMessage="一旦开始考试，就无法停止计时器。"
            />
          </li>
          <li>
            <FormattedMessage
              id="exam.ReadyToStartProctoredExamInstructions.text3"
              defaultMessage='对于所有问题类型，您必须单击“提交”才能完成您的回答。'
            />
          </li>
          <li>
            <FormattedMessage
              id="exam.ReadyToStartProctoredExamInstructions.text4"
              defaultMessage='如果在您单击“结束我的考试”之前时间已到，则只会对您提交的答案进行评分。'
            />
          </li>
        </ul>
        <div className="h3">
          <FormattedMessage
            id="exam.ReadyToStartProctoredExamInstructions.title2"
            defaultMessage="监考考试规则"
          />
        </div>
        <p>
          <FormattedMessage
            id="exam.ReadyToStartProctoredExamInstructions.text5"
            defaultMessage="完成本次考试时，您必须遵守以下规则。"
          />
          &nbsp;
          <strong>
            <FormattedMessage
              id="exam.ReadyToStartProctoredExamInstructions.text6"
              defaultMessage={'如果您违反这些规则，您的考试成绩将为 0 分，并且您将没有资格获得学术课程学分。'}
            />
          </strong>
          <br />
          <Button
            variant="link"
            target="_blank"
            href={rulesUrl}
            data-testid="proctored-exam-instructions-rulesLink"
          >
            <FormattedMessage
              id="exam.ReadyToStartProctoredExamInstructions.rulesLink"
              defaultMessage="{platformName} 在线监考考试规则"
              values={{ platformName }}
            />
          </Button>
        </p>
        {reviewPolicy && (
          <>
            <div className="h3">
              <FormattedMessage
                id="exam.ReadyToStartProctoredExamInstructions.title3"
                defaultMessage="附加考试规则"
              />
            </div>
            <p>
              <FormattedMessage
                id="exam.ReadyToStartProctoredExamInstructions.text7"
                defaultMessage={'以下附加规则适用于本考试。这些规则优先于在线监考考试规则。'}
              />
            </p>
            <p>
              {reviewPolicy}
            </p>
          </>
        )}
        <Button
          data-testid="start-exam-button"
          variant="primary"
          onClick={handleStart}
          disabled={beginExamClicked}
        >
          { beginExamClicked && <Spinner data-testid="exam-loading-spinner" animation="border" /> }
          <FormattedMessage
            id="exam.startExamInstructions.startExamButtonText"
            defaultMessage="开始考试"
          />
        </Button>
      </Container>
      <Footer />
    </div>
  );
};

export default ReadyToStartProctoredExamInstructions;
