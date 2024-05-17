interface BSItemListProps {
  title: string;
  content: string;
}

export default function BSItemList({
  title = '',
  content = '',
}: BSItemListProps) {
  return (
    <div className="flex items-center justify-between py-5 ">
      <p className="text-nutral-black-02 text-text-16">{title}</p>
      <p className="text-nutral-gray-03 text-textRegular-14">{content}</p>
    </div>
  );
}
