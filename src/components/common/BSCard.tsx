interface BSCardProps {
  saleCount: number;
  interestGame: number;
}

const defaultCardCss =
  'flex items-center justify-center gap-12 py-6 text-center border border-nutral-white-03 rounded-2xl';

export default function BSCard({
  saleCount = 0,
  interestGame = 0,
}: BSCardProps) {
  return (
    <div className={defaultCardCss}>
      <div>
        <p className="mb-4 text-nutral-black-01 text-headBold-18">
          {saleCount > 20 ? `${saleCount}+` : saleCount}
        </p>
        <p>판매게임</p>
      </div>

      <div>
        <p className="mb-4 text-nutral-black-01 text-headBold-18">
          {interestGame}
        </p>
        <p>관심게임 </p>
      </div>
    </div>
  );
}
