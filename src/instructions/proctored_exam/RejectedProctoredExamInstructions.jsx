import React from 'react';
import { FormattedMessage } from '@edx/frontend-platform/i18n';
import { getConfig } from '@edx/frontend-platform';

const RejectedProctoredExamInstructions = () => {
  const platformName = getConfig().SITE_NAME;

  return (
    <>
      <h3 className="h3" data-testid="proctored-exam-instructions-title">
        <FormattedMessage
          id="exam.RejectedProctoredExamInstructions.title"
          defaultMessage="您的监考课程已经过审核，但未通过所有要求"
        />
      </h3>
      <p className="mb-0">
        <FormattedMessage
          id="exam.RejectedProctoredExamInstructions.description"
          defaultMessage={'如果您对监考会话结果的状态有疑问，'
          + ' 请联系 {platformName} 支持。'}
          values={{ platformName }}
        />
      </p>
    </>
  );
};

export default RejectedProctoredExamInstructions;
