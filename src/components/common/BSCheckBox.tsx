'use client';

// import React, { ReactNode } from 'react';
import Image from 'next/image';
import CheckBoxFill from '../../../public/icons/checkbox-fill.svg';
import CheckBoxBlank from '../../../public/icons/checkbox-blank.svg';

// interface BSCheckBoxProps {
//   id: string;
//   value: string;
//   disabled?: boolean;
//   checked?: boolean;
//   children: ReactNode;
//   onChange?: (value: string) => void;
// }

export default function BSCheckBox() {
  //   {
  //   id,
  //   value = '',
  //   children,
  //   disabled = false,
  //   checked = false,
  //   onChange = () => {},
  return (
    <div className="flex gap-3">
      <Image src={CheckBoxFill} alt="checkbox fill" width={24} height={24} />
      <Image src={CheckBoxBlank} alt="checkbox black" width={24} height={24} />
    </div>
  );
}
