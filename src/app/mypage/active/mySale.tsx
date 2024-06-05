import BSButton from '@/components/common/BSButton';
import BSChip from '@/components/common/BSChip';

export default function InterestGameList() {
  const statusList = [
    { id: 0, title: '판매중', status: 0 },
    { id: 1, title: '판매완료', status: 1 },
    { id: 2, title: '비공개', status: 2 },
    { id: 3, title: '임시저장', status: 3 },
  ];

  return (
    <div>
      <p className="text-nutral-gray-03 text-bodyRegular-14">
        판매 게임이 없습니다. <br />
        보드살롱에서 게임을 찾아볼까요?
      </p>
      <div className="bg-nutral-white-02">
        <BSChip>
          {statusList.map((item) => (
            <span key={item.id}>{item.title}</span>
          ))}
        </BSChip>
      </div>

      <BSButton onClick={() => {}}>판매게임 등록하러가기</BSButton>
    </div>
  );
}
