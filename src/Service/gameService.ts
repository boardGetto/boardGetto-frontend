import axios from 'axios';

export interface GameDetailType {
  id: string;
  name: string;
  description: string;
  releaseDate: string;
  genre: string;
  images: {
    dreamWorldFront: string;
  };
}

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

export const fetchGameDetail = async (
  gameId: string
): Promise<GameDetailType> => {
  const requestUrl = `/api/products/${gameId}`;
  const response = await remote.get<GameDetailType>(requestUrl);
  return response.data;
};

// interface Pageable {
//   offset: number;
//   pageNumber: number;
//   pageSize: number;
//   paged: boolean;
// }

interface SaleGames {
  boardGameTitle: string;
  createdAt: string;
  id: number;
  interestCount: number;
  maxPlayerCount: number;
  minPlayerCount: number;
  modifiedAt: string;
  partsDamaged: boolean;
  partsMissing: boolean;
  price: number;
  thumbnailUrl: string;
  title: string;
  town: string;
}

export interface SaleGameListResponseType {
  content: SaleGames[];
  empty: boolean;
  first: boolean;
  last: boolean;
  number: number;
  numberOfElements: number;
  pageable: Pageable;
  sort: Sort;
  size: string;
}

export const fetchSaleGame = async (
  page: number = 0
): Promise<SaleGameListResponseType> => {
  const defaultUrl = `/api/products?page=${page}&size=10`;

  const response = await remote.get<SaleGameListResponseType>(defaultUrl);

  return response.data;
};
