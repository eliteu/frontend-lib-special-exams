import React, { useContext } from 'react';
import { FormattedMessage } from '@edx/frontend-platform/i18n';
import { Container, MailtoLink, Hyperlink } from '@edx/paragon';
import ExamStateContext from '../../context';
import { ExamStatus } from '../../constants';
import Footer from './Footer';

const OnboardingErrorProctoredExamInstructions = () => {
  const state = useContext(ExamStateContext);
  const { exam, proctoringSettings } = state;
  const { attempt, onboarding_link: onboardingLink } = exam;
  const {
    integration_specific_email: integrationSpecificEmail,
    provider_name: providerName,
  } = proctoringSettings;

  const renderBody = () => {
    switch (attempt.attempt_status) {
      case ExamStatus.ONBOARDING_MISSING:
      case ExamStatus.ONBOARDING_EXPIRED:
        return (
          <>
            <p data-testid="onboarding_missing">
              <FormattedMessage
                id="exam.OnboardingErrorProctoredExamInstructions.missingText"
                defaultMessage="请在尝试此考试之前完成入职考试。"
              />
            </p>
            {onboardingLink && (
              <Hyperlink href={onboardingLink}>
                <FormattedMessage
                  id="exam.OnboardingErrorProctoredExamInstructions.onboardingButtonText"
                  defaultMessage="导航至入职考试"
                />
              </Hyperlink>
            )}
          </>
        );
      case ExamStatus.ONBOARDING_PENDING:
        return (
          <p data-testid="onboarding_pending">
            <FormattedMessage
              id="exam.OnboardingErrorProctoredExamInstructions.pendingText"
              defaultMessage="您的入职考试正在接受审核。在尝试此项考试之前，请预留 2 个以上工作日的时间来审核您的入职考试。"
            />
          </p>
        );
      case ExamStatus.ONBOARDING_FAILED:
        return (
          <>
            <p data-testid="onboarding_failed">
              <FormattedMessage
                id="exam.OnboardingErrorProctoredExamInstructions.failedText"
                defaultMessage="您的入职考试未能通过所有要求。"
              />
            </p>
            {onboardingLink && (
              <Hyperlink href={onboardingLink}>
                <FormattedMessage
                  id="exam.OnboardingErrorProctoredExamInstructions.onboardingButtonText"
                  defaultMessage="导航至入职考试"
                />
              </Hyperlink>
            )}
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <Container className="border py-5 mb-4">
        <div className="h3">
          <FormattedMessage
            id="exam.OnboardingErrorProctoredExamInstructions.title"
            defaultMessage="在参加此监考考试之前，您必须完成入职考试"
          />
        </div>
        {renderBody()}
        {integrationSpecificEmail && (
          <p className="pt-2">
            <FormattedMessage
              id="exam.OnboardingErrorProctoredExamInstructions.providerInfo"
              defaultMessage={'通过 {providerName}. 提供考试监考服务。'
              + '如果您对入职考试的状态有疑问，请联系 '}
              values={{ providerName }}
            />
            <MailtoLink to={integrationSpecificEmail}>
              {integrationSpecificEmail}
            </MailtoLink>
          </p>
        )}
      </Container>
      <Footer />
    </div>
  );
};

export default OnboardingErrorProctoredExamInstructions;
