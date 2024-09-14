import React, { useContext } from 'react';
import { FormattedMessage } from '@edx/frontend-platform/i18n';
import { Button, MailtoLink, useToggle } from '@edx/paragon';
import ExamStateContext from '../../context';

const SubmittedOnboardingExamInstructions = () => {
  const [isConfirm, confirm] = useToggle(false);
  const state = useContext(ExamStateContext);
  const { proctoringSettings, resetExam } = state;
  const {
    learner_notification_from_email: learnerNotificationFromEmail,
    integration_specific_email: integrationSpecificEmail,
  } = proctoringSettings || {};

  return (
    <div>
      <h3 className="h3" data-testid="exam-instructions-title">
        <FormattedMessage
          id="exam.SubmittedOnboardingExamInstructions.title"
          defaultMessage="您已提交此入职考试"
        />
      </h3>
      <p>
        <FormattedMessage
          id="exam.SubmittedProctoredExamInstructions.text1"
          defaultMessage="如果您没有系统的入职资料，Verificient 将审核您提交的内容并创建入职指南个人资料，以授予您参加监考考试的权限。入职个人资料审核可能需要 2 个以上工作日。"
        />
      </p>
      <p>
        <FormattedMessage
          id="exam.SubmittedProctoredExamInstructions.text2"
          defaultMessage="一旦您的个人资料经过审核，您将收到一封电子邮件并附有审核结果。该电子邮件将来自"
        />
        <MailtoLink to={learnerNotificationFromEmail}>
          {learnerNotificationFromEmail}
        </MailtoLink>
        <FormattedMessage
          id="exam.SubmittedProctoredExamInstructions.text3"
          defaultMessage="因此，请确保此电子邮件已添加到您的收件箱过滤器中。"
        />
      </p>
      <p>
        <FormattedMessage
          id="exam.SubmittedProctoredExamInstructions.text4"
          defaultMessage="如果您没有系统的入职资料，Verificient 将审核您提交的内容并创建入职指南个人资料，以授予您参加监考考试的权限。入职个人资料审核可能需要 2 个以上工作日。"
        />
      </p>
      <p>
        <FormattedMessage
          id="exam.SubmittedProctoredExamInstructions.text5"
          defaultMessage="如果您已经有通过其他课程批准的入职资料，该提交内容将不会被审核。您可以随时重试此考试验证您的设置是否仍然满足监考要求。"
        />
      </p>
      <p>
        <Button variant="link" onClick={confirm}>
          <FormattedMessage
            id="exam.SubmittedProctoredExamInstructions.confirm"
            defaultMessage="我了解并希望重置此入职考试。"
          />
        </Button>
      </p>
      <Button
        data-testid="retry-exam-button"
        variant="primary"
        onClick={resetExam}
        disabled={!isConfirm}
      >
        <FormattedMessage
          id="exam.ErrorOnboardingExamInstructions.retryExamButton"
          defaultMessage="重试我的考试"
        />
      </Button>
      <p className="mt-4">
        <FormattedMessage
          id="exam.SubmittedProctoredExamInstructions.text7"
          defaultMessage="如果您有疑问，"
        />
        <FormattedMessage
          id="exam.SubmittedProctoredExamInstructions.text6"
          defaultMessage="请联系 "
        />
        <MailtoLink to={integrationSpecificEmail}>
          {integrationSpecificEmail}
        </MailtoLink>

      </p>
    </div>
  );
};

export default SubmittedOnboardingExamInstructions;
