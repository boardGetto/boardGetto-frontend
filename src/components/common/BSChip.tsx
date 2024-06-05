'use client';

import React, { ReactNode } from 'react';

const defaultCss =
  'duration-300 px-4 py-2 border text-primary-getto500 border-primary-getto500 rounded-3xl w-fit hover hover:bg-primary-getto50';

const isCheckCss = 'bg-primary-getto500 text-nutral-white-01';

interface BSChipProps {
  value?: string;
  disabled?: boolean;
  checked?: boolean;
  children: ReactNode;
  onClick?: (value: string) => void;
}

export default function BSChip({
  value = '',
  children,
  disabled = false,
  checked = false,
  onClick = () => {},
}: BSChipProps) {
  return (
    <div className="flex flex-wrap gap-3 text-textRegular-14">
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
