import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from '@edx/frontend-platform/i18n';

const RestProviderInstructions = ({
  providerName, supportEmail, supportPhone, instructions,
}) => (
  <>
    <p>
      <FormattedMessage
        id="exam.DownloadSoftwareProctoredExamInstructions.text1"
        defaultMessage="注意：作为监考考试设置的一部分，系统会询问您以验证您的身份。在开始之前，请确保您是在带有网络摄像头的计算机上，并且您有有效的表格带照片的身份证明，例如驾驶执照或护照。"
      />
    </p>
    <ol>
      {instructions.map((item, index) => (
        <li key={`${index.toString()}`}>
          {item}
        </li>
      ))}
    </ol>
    {supportEmail && supportPhone && (
      <p>
        <FormattedMessage
          id="exam.DownloadSoftwareProctoredExamInstructions.supportText"
          defaultMessage="如果您有与监考相关的问题，您可以通过发送电子邮件至 {provider_tech_support_email} 或致电 {provider_tech_support_phone } 联系 {provider_name} 技术支持。"
          values={{
            supportEmail,
            supportPhone,
            providerName,
          }}
        />
      </p>
    )}
  </>
);

RestProviderInstructions.propTypes = {
  providerName: PropTypes.string,
  supportEmail: PropTypes.string,
  supportPhone: PropTypes.string,
  instructions: PropTypes.arrayOf(PropTypes.string).isRequired,
};

RestProviderInstructions.defaultProps = {
  providerName: '',
  supportEmail: '',
  supportPhone: '',
};

export default RestProviderInstructions;
