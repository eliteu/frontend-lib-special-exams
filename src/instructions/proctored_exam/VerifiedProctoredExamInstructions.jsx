import React from 'react';
import { FormattedMessage } from '@edx/frontend-platform/i18n';

const VerifiedProctoredExamInstructions = () => (
  <div>
    <h3 className="h3" data-testid="proctored-exam-instructions-title">
      <FormattedMessage
        id="exam.VerifiedProctoredExamInstructions.title"
        defaultMessage={'您的监考会话已成功审核。'
        + '期末成绩很快就会出来。'}
      />
    </h3>
  </div>
);

export default VerifiedProctoredExamInstructions;
