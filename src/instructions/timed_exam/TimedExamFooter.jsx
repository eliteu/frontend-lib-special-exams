import React from 'react';
import { FormattedMessage } from '@edx/frontend-platform/i18n';

const TimedExamFooter = () => (
  <div className="footer-sequence">
    <div className="h4">
      <FormattedMessage
        id="exam.startExamInstructions.footerTitle"
        defaultMessage="我可以申请额外考试时间吗？"
      />
    </div>
    <p>
      <FormattedMessage
        id="exam.startExamInstructions.footerText"
        defaultMessage={'如果您身体有残疾问题，'
        + '那么您可能有资格申请额外的考试时间。'
        + '您可以向您的课程团队咨询关于额外考试时间的信息。'}
      />
    </p>
  </div>
);

export default TimedExamFooter;
