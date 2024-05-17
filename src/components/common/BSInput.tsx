import React, { useState } from 'react';
import Image from 'next/image';
import { CloseIcon } from '../../../public/icons/close.svg';

const defaultInputCss =
  'text-nutral-black-02 text-textRegular-16 focus:border-primary-getto300 w-full py-4 px-2 text-body-02 placeholder:text-body-02 placeholder:text-nutral-gray-01 disabled:bg-nutral-white-03 rounded disabled:bg-nutral-white-02 disabled:text-nutral-white-04 disabled:border-0';

const isFocusBorderCss = 'border-nutral-white-03 border';

const isErrorCss = '';

const errorMsgCss = 'mt-2';

const closeBtnCss = 'absolute right-4 cursor-pointer hover:opacity-80';

let inputSizeCss = '';

interface InputProps {
  disabled?: boolean;
  placeholder?: string;
  isErr?: boolean;
  errorMsg?: string;
  value: string;
  handleInputChange?: (value: string) => void;
  size?: 'lg' | 'md' | 'sm';
}

export default function WhInput({
  disabled = false,
  size = 'md',
  placeholder = '내용을 입력해주세요.',
  isErr = false,
  errorMsg = '',
  value = '',
  handleInputChange,
}: InputProps) {
  const [inputValue, setInputValue] = useState('');

  if (size === 'lg') {
    inputSizeCss = 'h-11';
  } else if (size === 'md') {
    inputSizeCss = 'h-10';
  } else if (size === 'sm') {
    inputSizeCss = 'h-9';
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    handleInputChange(e.target.value);
  };

  const handleClear = () => {
    setInputValue('');
    handleInputChange('');
  };

  return (
    <div>
      <div className="relative flex flex-col ">
        <div className="flex items-center">
          <input className="text-nutral-gray-01 text-textRegular-16 focus:border-primary-getto300 disabled:bg-nutral-white-03" />
          <input
            type="text"
            className={`${inputSizeCss} ${defaultInputCss} ${
              isErr ? `${isErrorCss}` : `${isFocusBorderCss}`
            }`}
            disabled={disabled}
            placeholder={placeholder}
            value={value}
            onChange={handleChange}
          />
          {inputValue && (
            <Image
              src={CloseIcon}
              className={`${closeBtnCss}`}
              onClick={handleClear}
              priority
              width={24}
              height={24}
            />
          )}
        </div>
        {isErr && <span className={errorMsgCss}>{errorMsg}</span>}
      </div>
    </div>
  );
}
