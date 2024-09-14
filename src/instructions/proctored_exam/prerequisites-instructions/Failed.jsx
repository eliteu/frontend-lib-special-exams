import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from '@edx/frontend-platform/i18n';
import { getConfig } from '@edx/frontend-platform';
import SkipProctoredExamButton from '../SkipProctoredExamButton';

const FailedPrerequisitesProctoredExamInstructions = (props) => {
  const {
    allowProctoringOptOut, prerequisites, skipProctoredExam,
  } = props;
  const platformName = getConfig().SITE_NAME;

  return (
    <>
      <p className="pb-2" data-testid="failed-prerequisites">
        <FormattedMessage
          id="exam.FailedPrerequisitesProctoredExamInstructions.text1"
          defaultMessage="您不符合参加本次监考考试的要求。"
        />
      </p>
      <p>
        <FormattedMessage
          id="exam.FailedPrerequisitesProctoredExamInstructions.text2"
          defaultMessage="您不满足下列先修条件："
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
      {allowProctoringOptOut && (
        <>
          <p>
            <FormattedMessage
              id="exam.startExamInstructions.skipExamText"
              defaultMessage="您不满足先修条件，无法开启监考模式。"
            />
          </p>
          <SkipProctoredExamButton handleClick={skipProctoredExam} />
        </>
      )}
      <p>
        <FormattedMessage
          id="exam.FailedPrerequisitesProctoredExamInstructions.text3"
          defaultMessage="如果您对监考会话结果的状态有疑问，请联系 {platform_name} 支持。"
          values={{ platformName }}
        />
      </p>
    </>
  );
};

FailedPrerequisitesProctoredExamInstructions.propTypes = {
  allowProctoringOptOut: PropTypes.bool.isRequired,
  prerequisites: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  skipProctoredExam: PropTypes.func.isRequired,
};

export default FailedPrerequisitesProctoredExamInstructions;
