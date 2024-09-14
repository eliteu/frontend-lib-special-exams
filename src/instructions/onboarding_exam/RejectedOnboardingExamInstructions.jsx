import React, { useContext } from 'react';
import { FormattedMessage } from '@edx/frontend-platform/i18n';
import { Button, MailtoLink } from '@edx/paragon';
import ExamStateContext from '../../context';

const RejectedOnboardingExamInstructions = () => {
  const state = useContext(ExamStateContext);
  const { proctoringSettings, resetExam } = state;
  const { integration_specific_email: integrationSpecificEmail } = proctoringSettings || {};

  return (
    <>
      <h3 className="h3" data-testid="rejected-onboarding-title">
        <FormattedMessage
          id="exam.RejectedOnboardingExamInstructions.title"
          defaultMessage="您的入职培训已通过审核，但未通过所有要求"
        />
      </h3>
      {integrationSpecificEmail && (
        <p data-testid="integration-email-contact">
          <FormattedMessage
            id="exam.RejectedOnboardingExamInstructions.text1"
            defaultMessage="请联系 "
          />
          <MailtoLink to={integrationSpecificEmail}>
            {integrationSpecificEmail}
          </MailtoLink>
          <FormattedMessage
            id="exam.RejectedOnboardingExamInstructions.text2"
            defaultMessage=' 如果您有疑问。您可以通过单击“重试我的考试”来重新参加此入职考试。'
          />
        </p>
      )}
      <Button
        data-testid="reset-exam-button"
        variant="primary"
        onClick={resetExam}
      >
        <FormattedMessage
          id="exam.RejectedOnboardingExamInstructions.resetExamButton"
          defaultMessage="重试我的考试"
        />
      </Button>
    </>
  );
};

export default RejectedOnboardingExamInstructions;
