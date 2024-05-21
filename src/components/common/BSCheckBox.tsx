'use client';

import React, { ReactNode } from 'react';
import Image from 'next/image';
import CheckBoxFill from '../../../public/icons/checkbox-fill.svg';
import CheckBoxBlank from '../../../public/icons/checkbox-blank.svg';

const defaultCss =
  'duration-300 px-4 py-2 border text-primary-getto500 border-primary-getto500 rounded-3xl w-fit hover hover:bg-primary-getto50';

const isCheckCss = 'bg-primary-getto500 text-nutral-white-01';

interface BSCheckBoxProps {
  value?: string;
  disabled?: boolean;
  checked?: boolean;
  children: ReactNode;
  onClick?: (value: string) => void;
}

export default function BSCheckBox({
  value = '',
  children,
  disabled = false,
  checked = false,
  onClick = () => {},
}: BSCheckBoxProps) {
  return (
    <div className="flex gap-3">
      <Image src={CheckBoxFill} alt="checkbox fill" width={24} height={24} />
      <Image src={CheckBoxBlank} alt="checkbox black" width={24} height={24} />
      <button
        type="button"
        disabled={disabled}
        value={value}
        onClick={() => onClick(value)}
        className={`${defaultCss} ${checked ? isCheckCss : ''}`}
      >
        {children}
      </button>
    </div>
  );
}
