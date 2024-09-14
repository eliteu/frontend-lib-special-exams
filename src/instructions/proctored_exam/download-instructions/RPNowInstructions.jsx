import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from '@edx/frontend-platform/i18n';
import ExamCode from './ExamCode';

const RPNowInstructions = ({ code }) => (
  <>
    <div className="h4">
      <FormattedMessage
        id="exam.DefaultDownloadSoftwareProctoredExamInstructions.step1.title"
        defaultMessage="步骤一"
      />
    </div>
    <div>
      <ExamCode code={code} />
    </div>
    <p>
      <FormattedMessage
        id="exam.DefaultDownloadSoftwareProctoredExamInstructions.step1.body"
        defaultMessage="选择考试代码，然后使用 Control + C (Windows) 或 Command + C (Mac) 复制它。"
      />
    </p>
    <div className="h4">
      <FormattedMessage
        id="exam.DefaultDownloadSoftwareProctoredExamInstructions.step2.title"
        defaultMessage="步骤二"
      />
    </div>
    <p>
      <FormattedMessage
        id="exam.DefaultDownloadSoftwareProctoredExamInstructions.step2.body1"
        defaultMessage="立即开始系统检查。此步骤将打开一个新窗口，您将验证您的身份。"
      />
    </p>
    <p>
      <FormattedMessage
        id="exam.DefaultDownloadSoftwareProctoredExamInstructions.step2.body2"
        defaultMessage="确保你："
      />
    </p>
    <ul>
      <li>
        <FormattedMessage
          id="exam.DefaultDownloadSoftwareProctoredExamInstructions.step2.body3"
          defaultMessage="拥有一台带有网络摄像头的计算机"
        />
      </li>
      <li>
        <FormattedMessage
          id="exam.DefaultDownloadSoftwareProctoredExamInstructions.step2.body4"
          defaultMessage="准备好带照片的有效身份证件（例如驾驶执照或护照）"
        />
      </li>
    </ul>
  </>
);

RPNowInstructions.propTypes = {
  code: PropTypes.string.isRequired,
};

export default RPNowInstructions;
