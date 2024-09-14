import React, { useContext } from 'react';
import { FormattedMessage } from '@edx/frontend-platform/i18n';
import { Button, MailtoLink } from '@edx/paragon';
import ExamStateContext from '../../context';

const EntranceOnboardingExamInstructions = () => {
  const state = useContext(ExamStateContext);
  const { createProctoredExamAttempt, proctoringSettings } = state;
  const {
    provider_name: providerName,
    learner_notification_from_email: learnerNotificationFromEmail,
    integration_specific_email: integrationSpecificEmail,
  } = proctoringSettings || {};

  return (
    <>
      <div className="h3" data-testid="exam-instructions-title">
        <FormattedMessage
          id="exam.EntranceOnboardingExamInstructions.title"
          defaultMessage="监考入职考试"
        />
      </div>
      <p>
        <FormattedMessage
          id="exam.EntranceOnboardingExamInstructions.text1"
          defaultMessage="为什么这对您很重要："
        />
      </p>
      <ul>
        <li>
          <FormattedMessage
            id="exam.EntranceOnboardingExamInstructions.listItem1"
            defaultMessage="通过监考系统建立您的身份以参加监考考试"
          />
        </li>
        <li>
          <FormattedMessage
            id="exam.EntranceOnboardingExamInstructions.listItem2"
            defaultMessage="创建您的入职资料，以便将来更快地访问"
          />
        </li>
        <li>
          <FormattedMessage
            id="exam.EntranceOnboardingExamInstructions.listItem3"
            defaultMessage="练习参加监考测试"
          />
        </li>
      </ul>
      <p>
        <FormattedMessage
          id="exam.EntranceOnboardingExamInstructions.text2"
          defaultMessage={'本课程的监考由 {providerName} 提供。'
          + '入职审核（包括身份验证）可能需要 2 个以上工作日。'}
          values={{ providerName }}
        />
      </p>
      {learnerNotificationFromEmail && (
        <p data-testid="learner-notification-email-contact">
          <FormattedMessage
            id="exam.EntranceOnboardingExamInstructions.text3"
            defaultMessage={'一旦您的个人资料经过审核，您将收到一封包含审核结果的电子邮件。'
            + '该电子邮件将来自 '}
          />
          <MailtoLink to={learnerNotificationFromEmail}>
            {learnerNotificationFromEmail}
          </MailtoLink>
          <FormattedMessage
            id="exam.EntranceOnboardingExamInstructions.text4"
            defaultMessage="。确保此电子邮件已添加到您的收件箱过滤器中。"
          />
        </p>
      )}
      {integrationSpecificEmail && (
        <p data-testid="integration-email-contact">
          <FormattedMessage
            id="exam.EntranceOnboardingExamInstructions.text6"
            defaultMessage="如果您有疑问，"
          />
          <FormattedMessage
            id="exam.EntranceOnboardingExamInstructions.text5"
            defaultMessage="请联系 "
          />
          <MailtoLink to={integrationSpecificEmail}>
            {integrationSpecificEmail}
          </MailtoLink>

        </p>
      )}
      <p className="pl-4 m-md-0">
        <Button
          data-testid="start-exam-button"
          variant="primary"
          onClick={createProctoredExamAttempt}
        >
          <FormattedMessage
            id="exam.EntranceOnboardingExamInstructions.startExamButtonText"
            defaultMessage="继续入职"
          />
        </Button>
      </p>
      <p className="pl-md-4">
        <FormattedMessage
          id="exam.EntranceOnboardingExamInstructions.text7"
          defaultMessage="我们将指导您完成在线监考软件设置和身份验证。"
        />
      </p>
    </>
  );
};

export default EntranceOnboardingExamInstructions;
