'use client';

import { ChangeEvent, ReactElement, ReactNode, useEffect, useRef } from 'react';
import CheckBoxSmFill from '../../../public/icons/checkboxSm-fill.svg';
import CheckBoxSmBlank from '../../../public/icons/checkboxSm-blank.svg';
import CheckBoxMdFill from '../../../public/icons/checkboxMd-fill.svg';
import CheckBoxMdBlank from '../../../public/icons/checkboxMd-blank.svg';

interface BSCheckboxProps {
  children?: ReactNode;
  id: string;
  value: string;
  checked?: boolean;
  disabled?: boolean;
  indeterminate?: boolean;
  size?: 'sm' | 'md';
  onChange?: (checked: boolean, value: string) => void;
}

function setCheckboxIcon(
  size: 'sm' | 'md',
  checked?: boolean,
  indeterminate?: boolean
): ReactElement {
  if (indeterminate) {
    return size === 'sm' ? <CheckBoxSmBlank /> : <CheckBoxMdBlank />;
  }
  if (checked) {
    return size === 'sm' ? <CheckBoxSmFill /> : <CheckBoxMdFill />;
  }
  return size === 'sm' ? <CheckBoxSmBlank /> : <CheckBoxMdBlank />;
}

const defaultCheckboxCss =
  'w-full h-full appearance-none outline-none border border-neutral-white-03 rounded hover:[&:not([disabled])]:border-primary-light disabled:bg-neutral-white-02 disabled:cursor-auto checked:border-primary-main checked:bg-primary-main transition duration-150 ease-in-out cursor-pointer';

export default function BSCheckbox({
  children,
  id,
  value,
  checked = false,
  disabled = false,
  indeterminate = false,
  size = 'sm',
  onChange = () => {},
}: BSCheckboxProps) {
  const checkboxRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (checkboxRef.current) {
      checkboxRef.current.indeterminate = indeterminate || false;
    }
  }, [indeterminate]);

  const checkboxSizeCss =
    size === 'sm'
      ? 'relative flex justify-center items-center w-5 h-5'
      : 'relative flex justify-center items-center w-6 h-6';
  const checkboxWrapperSizeCss =
    size === 'sm'
      ? 'inline-flex gap-3 text-body-02'
      : 'inline-flex gap-5 text-body-01';
  const checkboxIndeterminateCss = indeterminate
    ? 'bg-primary-main border-0'
    : '';

  return (
    <div className={`${checkboxWrapperSizeCss}`}>
      <div className={`${checkboxSizeCss}`}>
        <input
          ref={checkboxRef}
          className={`${defaultCheckboxCss} ${checkboxIndeterminateCss}`}
          type="checkbox"
          id={id}
          value={value}
          checked={checked}
          disabled={disabled}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            onChange(e.target.checked, value);
          }}
        />
        <label className="absolute" htmlFor={id}>
          {setCheckboxIcon(size, checked, indeterminate)}
        </label>
      </div>
      <label htmlFor={id} className="cursor-pointer">
        {children}
      </label>
    </div>
  );
}
