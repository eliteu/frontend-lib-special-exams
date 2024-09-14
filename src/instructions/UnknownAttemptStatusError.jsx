import React from 'react';
import { FormattedMessage } from '@edx/frontend-platform/i18n';
import { Alert } from '@edx/paragon';

const UnknownAttemptStatusError = () => (
  <Alert variant="danger" data-testid="unknown-status-error">
    <Alert.Heading>
      <FormattedMessage
        id="exam.defaultError"
        defaultMessage="您的考试发生了系统错误。请联系支持人员寻求帮助。"
      />
    </Alert.Heading>
  </Alert>
);

export default UnknownAttemptStatusError;
