import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from '@edx/frontend-platform/i18n';
import SkipProctoredExamButton from '../SkipProctoredExamButton';

const PendingPrerequisitesProctoredExamInstructions = ({ allowProctoringOptOut, prerequisites, skipProctoredExam }) => (
  <>
    <p className="pb-2" data-testid="pending-prerequisites">
      <FormattedMessage
        id="exam.PendingPrerequisitesProctoredExamInstructions.text1"
        defaultMessage="您尚未完成本次考试的先决条件。您必须满足所有要求才能参加此监考考试。"
      />
    </p>
    <p>
      <FormattedMessage
        id="exam.PendingPrerequisitesProctoredExamInstructions.text2"
        defaultMessage="以下先修条件任务为"
      />
      &nbsp;
      <strong>
        <FormattedMessage
          id="exam.PendingPrerequisitesProctoredExamInstructions.text3"
          defaultMessage="待处理"
        />
      </strong>
      &nbsp;
      <FormattedMessage
        id="exam.PendingPrerequisitesProctoredExamInstructions.text4"
        defaultMessage="状态， 请务必先成功完成任务再继续操作下一步："
      />
    </p>
    <ol style={{ listStyleType: 'disc' }}>
      {prerequisites.map((item, index) => (
        <li key={`${index.toString()}`}>
          {item.jumpto_url
            ? <a href={item.jumpto_url}>{item.display_name}</a>
            : item.display_name}
        </li>
      ))}
    </ol>
    <p>
      <FormattedMessage
        id="exam.PendingPrerequisitesProctoredExamInstructions.text5"
        defaultMessage="仅当成功完成所有先决条件后，您才能参加有监考的考试。"
      />
    </p>
    {allowProctoringOptOut && <SkipProctoredExamButton handleClick={skipProctoredExam} />}
  </>
);

PendingPrerequisitesProctoredExamInstructions.propTypes = {
  allowProctoringOptOut: PropTypes.bool.isRequired,
  prerequisites: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  skipProctoredExam: PropTypes.func.isRequired,
};

export default PendingPrerequisitesProctoredExamInstructions;
