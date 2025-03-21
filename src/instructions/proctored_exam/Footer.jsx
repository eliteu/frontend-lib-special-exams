import React from 'react';
import { Button } from '@edx/paragon';
import { FormattedMessage } from '@edx/frontend-platform/i18n';
import { getConfig } from '@edx/frontend-platform';

const Footer = () => {
  const faqUrl = getConfig().PROCTORED_EXAM_FAQ_URL;

  return (
    <div className="footer-sequence">
      {faqUrl && (
        <Button
          data-testid="request-exam-time-button"
          variant="link"
          href={faqUrl}
          target="_blank"
        >
          <FormattedMessage
            id="exam.startExamInstructions.footerButton"
            defaultMessage="关于监考考试"
          />
        </Button>
      )}
    </div>
  );
};

export default Footer;
