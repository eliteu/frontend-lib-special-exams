import React from 'react';
import { FormattedMessage } from '@edx/frontend-platform/i18n';
import { Container } from '@edx/paragon';

const ExpiredExamInstructions = () => (
  <Container className="border py-5 mb-4 bg-warning-100">
    <h3 className="h3" data-testid="expired-exam-instructions-title">
      <FormattedMessage
        id="exam.ExpiredExamInstructions.title"
        defaultMessage="已超过此考试的截止日期"
      />
    </h3>
    <p>
      <FormattedMessage
        id="exam.ExpiredExamInstructions.body"
        defaultMessage="已超过截止日期，您无法进行考试。"
      />
    </p>
  </Container>
);

export default ExpiredExamInstructions;
