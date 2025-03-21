import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Container } from '@edx/paragon';
import { FormattedMessage } from '@edx/frontend-platform/i18n';
import ExamStateContext from '../../../context';
import PendingPrerequisitesProctoredExamInstructions from './Pending';
import FailedPrerequisitesProctoredExamInstructions from './Failed';
import Footer from '../Footer';

const PrerequisitesProctoredExamInstructions = ({ skipProctoredExam }) => {
  const state = useContext(ExamStateContext);
  const { exam, allowProctoringOptOut } = state;
  const { prerequisite_status: prerequisitesData } = exam;
  const { pending_prerequisites: pending, failed_prerequisites: failed } = prerequisitesData;

  let child = null;
  if (failed && failed.length > 0) {
    child = (
      <FailedPrerequisitesProctoredExamInstructions
        prerequisites={failed}
        allowProctoringOptOut={allowProctoringOptOut}
        skipProctoredExam={skipProctoredExam}
      />
    );
  } else if (pending && pending.length > 0) {
    child = (
      <PendingPrerequisitesProctoredExamInstructions
        prerequisites={pending}
        allowProctoringOptOut={allowProctoringOptOut}
        skipProctoredExam={skipProctoredExam}
      />
    );
  }

  return (
    <div>
      <Container className="border py-5 mb-4">
        <div className="h3" data-testid="exam-instructions-title">
          <FormattedMessage
            id="exam.EntranceProctoredExamInstructions.title"
            defaultMessage="需开启监考模式"
          />
        </div>
        {child}
      </Container>
      <Footer />
    </div>
  );
};

PrerequisitesProctoredExamInstructions.propTypes = {
  skipProctoredExam: PropTypes.func.isRequired,
};

export default PrerequisitesProctoredExamInstructions;
