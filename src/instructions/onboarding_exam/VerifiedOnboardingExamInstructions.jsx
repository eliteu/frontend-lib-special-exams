import React, { useContext } from 'react';
import { FormattedMessage } from '@edx/frontend-platform/i18n';
import { MailtoLink } from '@edx/paragon';
import ExamStateContext from '../../context';

const VerifiedOnboardingExamInstructions = () => {
  const state = useContext(ExamStateContext);
  const {
    integration_specific_email: integrationSpecificEmail,
  } = state.proctoringSettings || {};

  return (
    <div>
      <h3 className="h3" data-testid="exam-instructions-title">
        <FormattedMessage
          id="exam.VerifiedOnboardingExamInstructions.title"
          defaultMessage="您的入职资料已成功审核"
        />
      </h3>
      <p>
        <FormattedMessage
          id="exam.VerifiedOnboardingExamInstructions.text"
          defaultMessage="您的个人资料已建立，您已准备好参加本课程的监考考试。"
        />
      </p>
      <p>

        <FormattedMessage
          id="exam.VerifiedOnboardingExamInstructions.helpText2"
          defaultMessage="如果您有疑问。"
        />
        <FormattedMessage
          id="exam.VerifiedOnboardingExamInstructions.helpText1"
          defaultMessage="请联系 "
        />
        <MailtoLink to={integrationSpecificEmail}>
          {integrationSpecificEmail}
        </MailtoLink>
      </p>
    </div>
  );
};

export default VerifiedOnboardingExamInstructions;
