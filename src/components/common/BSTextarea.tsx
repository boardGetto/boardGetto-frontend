import { useState } from 'react';

interface BSTextareaProps {
  placeholder?: string;
  disabled?: boolean;
  value: string;
}

export default function BSTextarea({
  placeholder = '내용을 입력해주세요.',
  disabled = false,
  value = '',
}: BSTextareaProps) {
  const [textCount, setTextCount] = useState<number>(value.length);

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextCount(e.target.value.length);
  };

  return (
    <div className="my-2">
      <textarea
        onChange={handleTextChange}
        placeholder={placeholder}
        disabled={disabled}
        value={value}
        className="w-full h-[200px]  p-3 border rounded-lg resize-none placeholder:text-nutral-gray-01 border-nutral-white-03 focus focus:outline-primary-getto200 focus:text-nutral-black-02"
      />
      <div className="flex ml-1 text-nutral-gray-01 text-captionRegular-12 focus:text-primary-getto400">
        <span>{textCount}</span>
        <span>&nbsp; /&nbsp; 150</span>
      </div>
    </div>
  );
}
