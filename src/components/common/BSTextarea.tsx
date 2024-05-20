import { ReactNode } from 'react';

interface BSTextareaProps {
  placeholder: string;
}

export default function BSTextarea({
  placeholder = '내용을 입력해주세요.',
}: BSTextareaProps) {
  return (
    <textarea
      placeholder={placeholder}
      className="w-full p-3 border rounded-lg placeholder:text-nutral-gray-01 border-nutral-white-03 focus:border-primary-getto200 focus:text-nutral-black-02"
    />
  );
}
