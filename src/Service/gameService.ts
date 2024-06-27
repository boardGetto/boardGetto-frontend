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

const remote = axios.create();

export const fetchGameDetail = async (
  gameId: string
): Promise<GameDetailType> => {
  const requestUrl = `/api/products/${gameId}`;
  const response = await remote.get<GameDetailType>(requestUrl);
  return response.data;
};

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
  const requestUrl = `/api/products?page=${page}&size=10`;
  const response = await remote.get<SaleGameListResponseType>(requestUrl);

  return response.data;
};
