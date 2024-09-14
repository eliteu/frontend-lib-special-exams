import React from 'react';
import { FormattedMessage } from '@edx/frontend-platform/i18n';

const SubmittedProctoredExamInstructions = () => (
  <div>
    <h3 className="h3" data-testid="proctored-exam-instructions-title">
      <FormattedMessage
        id="exam.SubmittedProctoredExamInstructions.title"
        defaultMessage="您已提交此监考考试至审核"
      />
    </h3>
    <ul>
      <li>
        <FormattedMessage
          id="exam.SubmittedProctoredExamInstructions.list1"
          defaultMessage="您记录的数据现在应该上传以供审核。"
        />
        <ul>
          <li>
            <FormattedMessage
              id="exam.SubmittedProctoredExamInstructions.list2"
              defaultMessage="如果监考软件窗口仍然打开，请立即关闭它并确认您要退出该应用程序。"
            />
          </li>
        </ul>
      </li>
      <li>
        <FormattedMessage
          id="exam.SubmittedProctoredExamInstructions.list3"
          defaultMessage="监考结果通常会在您提交考试后 5 个工作日内提供。"
        />

      </li>
    </ul>
    <p className="mb-0">
      <FormattedMessage
        id="exam.SubmittedProctoredExamInstructions.text"
        defaultMessage="如果您对的监考考试结果有任何问题，请联系技术支持帮助。"
      />
    </p>
  </div>
);

export default SubmittedProctoredExamInstructions;
