import axios from 'axios';

interface Game {
  id: string;
  name: string;
}

interface Sort {
  empty: boolean;
  sorted: boolean;
  unsorted: boolean;
}

interface Pageable {
  pageNumber: number;
  pageSize: number;
  sort: Sort;
  offset: number;
  paged: boolean;
  unpaged: boolean;
}

interface FetchGamesResponse {
  content: Game[];
  pageable: Pageable;
  size: number;
  number: number;
  sort: Sort;
  numberOfElements: number;
  first: boolean;
  last: boolean;
  empty: boolean;
}

const remote = axios.create();

export const fetchGames = async (
  page: number = 0
): Promise<FetchGamesResponse> => {
  const requestUrl = `/api/products?page=${page}&size=10`;
  const response = await remote.get<FetchGamesResponse>(requestUrl);
  return response.data;
};
