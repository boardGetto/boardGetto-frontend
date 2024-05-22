import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import CloseIcon from '../../../public/icons/close-btn.svg';
import SearchIcon from '../../../public/icons/search.svg';

const defaultInputCss =
  'w-full py-[10px] pr-12 text-body-02 placeholder:text-body-02 placeholder:text-nutral-white-03 rounded-lg disabled:bg-nutral-white-03 disabled:text-nutral-white-03 disabled:bg-opacity-30 border-nutral-white-03';

const isFocusBorderCss =
  'focus:outline-primary-getto500 border-nutral-getto500 border';

const defaultLabelCss = 'text-nutral-gray-02 mb-1 text-captionRegular-12';

const isErrorCss = 'border border-caption-error02 outline-caption-error02';

const errorMsgCss =
  'text-caption-error02 text-caption-error02 mt-1 text-captionBold-12 text-end';

const searchCss = 'absolute left-4 focus focus:text-primary-getto300';

const closeBtnCss = 'absolute right-4 cursor-pointer hover:opacity-80';

interface BSInputProps {
  disabled?: boolean;
  placeholder?: string;
  label?: string;
  isError?: boolean;
  errorMsg?: string;
  value: string;
  searchImg?: boolean;
  handleInputChange?: (value: string) => void;
}

export default function BSInput({
  disabled = false,
  placeholder = '내용을 입력해주세요.',
  label = '',
  isError = false,
  errorMsg = '',
  value = '',
  searchImg = false,
  handleInputChange,
}: BSInputProps) {
  const [inputValue, setInputValue] = useState(value);

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    if (handleInputChange) {
      handleInputChange(e.target.value);
    }
  };

  const handleClear = () => {
    setInputValue('');
    if (handleInputChange) {
      handleInputChange('');
    }
  };

  return (
    <div>
      <div className="relative flex flex-col">
        {label && (
          <label htmlFor="input-field" className={`${defaultLabelCss}`}>
            {label}
          </label>
        )}
        <div className="flex items-center">
          {searchImg && (
            <Image
              src={SearchIcon}
              alt="search icon"
              width={24}
              height={24}
              priority
              className={searchCss}
            />
          )}
          <input
            type="text"
            className={`${defaultInputCss} ${isError ? isErrorCss : isFocusBorderCss} ${searchImg ? 'p-12' : 'pl-4'}`}
            disabled={disabled}
            placeholder={placeholder}
            value={inputValue}
            onChange={handleChange}
          />
          {inputValue && (
            <Image
              src={CloseIcon}
              alt="close icon"
              width={24}
              height={24}
              className={closeBtnCss}
              onClick={handleClear}
            />
          )}
        </div>
        {isError && <span className={errorMsgCss}>{errorMsg}</span>}
      </div>
    </div>
  );
}
