import React, { useContext } from 'react';
import { FormattedMessage } from '@edx/frontend-platform/i18n';
import { getConfig } from '@edx/frontend-platform';
import { Hyperlink, MailtoLink } from '@edx/paragon';
import ExamStateContext from '../../context';

const ErrorProctoredExamInstructions = () => {
  const state = useContext(ExamStateContext);
  const {
    proctoring_escalation_email: proctoringEscalationEmail,
  } = state.proctoringSettings || {};
  const platformName = getConfig().SITE_NAME;
  const contactUsUrl = getConfig().CONTACT_URL;

  const renderBody = () => {
    if (proctoringEscalationEmail) {
      return (
        <FormattedMessage
          id="exam.ErrorProctoredExamInstructions.text1"
          defaultMessage={'您监考的考试出现系统错误。'
          + '请联系您的课程团队位于 {supportLink} 寻求帮助，'
          + '并在收到进一步指示后返回考试。'}
          values={{ supportLink: <MailtoLink to={proctoringEscalationEmail}>{proctoringEscalationEmail}</MailtoLink> }}
        />
      );
    }

    return (
      <FormattedMessage
        id="exam.ErrorProctoredExamInstructions.text2"
        defaultMessage={'您监考的考试出现系统错误。'
        + '请联系 {supportLink} 帮助，'
        + '并在收到进一步指示后返回考试。'}
        values={{ supportLink: <Hyperlink href={contactUsUrl} target="_blank">{platformName} Support</Hyperlink> }}
      />
    );
  };

  return (
    <div>
      <div className="h3">
        <FormattedMessage
          id="exam.ErrorProctoredExamInstructions.title"
          defaultMessage="监考考试发生错误"
        />
      </div>
      <p className="mb-0">
        {renderBody()}
      </p>
    </div>
  );
};

export default ErrorProctoredExamInstructions;
