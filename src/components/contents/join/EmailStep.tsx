import Input from '@components/common/Input';

import React from 'react';
import { Control, Controller, FieldValues } from 'react-hook-form';

type EmailStepProps = {
  control: Control<FieldValues, unknown>;
  isValid: boolean;
  onClick: () => void;
};

const EmailStep = ({ control, isValid, onClick }: EmailStepProps) => {
  return (
    <div className="px-[16px] flex gap-[8px] ">
      <Controller
        defaultValue=""
        name="email"
        control={control}
        rules={{
          required: true,
          pattern: {
            value:
              /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/,
            message: '올바른 형식이아닙니다',
          },
        }}
        render={({ field, fieldState }) => (
          <Input
            value={field.value}
            onChange={(e) => field.onChange(e.target.value)}
            label="이메일을 알려주세요"
            placeholder="dodosedid@dazim.com"
            errorMessage={fieldState?.error?.message}
          />
        )}
      />
      <button
        disabled={!isValid}
        className={
          isValid
            ? `h-[52px] my-[48px] bg-primary text-[16px] font-semibold rounded-[8px] px-[16px] py-[12px] text-white`
            : `h-[52px] my-[48px] bg-gray-30 text-[16px] font-semibold rounded-[8px] px-[16px] py-[12px] text-gray-60 `
        }
        onClick={onClick}
      >
        인증완료
      </button>
    </div>
  );
};

export default EmailStep;