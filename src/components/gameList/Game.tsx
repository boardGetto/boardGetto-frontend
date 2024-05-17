import { Game as IGame } from '@/models/game';

export default function Game({ game }: { game: IGame }) {
  return (
    <div>
      <div>{game.name}</div>
      <div>{game.comment}</div>
      <div>{game.starRating}</div>
      <div>{game.mainImageUrl}</div>
      <div>{game.price}</div>
    </div>
  );
}
