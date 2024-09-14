import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from '@edx/frontend-platform/i18n';
import { Button, Container } from '@edx/paragon';
import ExamStateContext from '../../context';
import Footer from './Footer';

const SkipProctoredExamInstruction = ({ cancelSkipProctoredExam }) => {
  const state = useContext(ExamStateContext);
  const { skipProctoringExam } = state;

  return (
    <>
      <Container className="border py-5 mb-4">
        <p data-testid="proctored-exam-instructions-title">
          <FormattedMessage
            id="exam.skipProctoredExamInstructions.text1"
            defaultMessage="您确定关闭监考模式？"
          />
        </p>
        <p>
          <FormattedMessage
            id="exam.skipProctoredExamInstructions.text2"
            defaultMessage="如果您在没有监考的情况下参加此考试，您将没有资格获得课程学分或 MicroMasters 证书（如果其中任何一项适用于本课程）。"
          />
        </p>
        <p className="mb-0">
          <Button
            data-testid="skip-confirm-exam-button"
            variant="primary"
            className="mr-3 mb-2"
            onClick={skipProctoringExam}
          >
            <FormattedMessage
              id="exam.entranceExamInstructions.skipConfirmExamButtonText1"
              defaultMessage="关闭监考模式"
            />
          </Button>
          <Button
            data-testid="skip-cancel-exam-button"
            variant="secondary"
            className="mb-2"
            onClick={cancelSkipProctoredExam}
          >
            <FormattedMessage
              id="exam.entranceExamInstructions.skipCancelExamButtonText"
              defaultMessage="返回"
            />
          </Button>
        </p>
      </Container>
      <Footer />
    </>
  );
};

SkipProctoredExamInstruction.propTypes = {
  cancelSkipProctoredExam: PropTypes.func.isRequired,
};

export default SkipProctoredExamInstruction;
