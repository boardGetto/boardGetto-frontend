import axios from 'axios';

const remote = axios.create();

export interface GameListResponseType {
  count: number;
  next: string;
  results: {
    name: string;
    url: string;
  }[];
}

export const fetchGame = async (nextUrl?: string) => {
  const requestUrl = nextUrl ? nextUrl : 'https://pokeapi.co/api/v2/pokemon';
  const response = await remote.get<GameListResponseType>(requestUrl);

  // console.log(response);
  return response.data;
};

interface GameDetailType {
  // id: number;
  // weight: number;
  // height: number;
  // name: string;
  // types: {
  //   type: {
  //     name: string;
  //   };
  // }[];
  // sprites: {
  //   front_default: string;
  //   other: {
  //     dream_world: {
  //       front_default: string;
  //     };
  //     'official-artwork': {
  //       front_default: string;
  //     };
  //   };
  // };
  // stats: {
  //   base_stat: number;
  //   stat: {
  //     name: string;
  //   };
  // }[];
  id: number;
  weight: number;
  height: number;
  name: string;
  types: string;
  images: {
    frontDefault: string;
    dreamWorldFront: string;
    officialArtWorkFront: string;
  };
  baseStats: {
    name: string;
    value: number;
  };
}

export interface GameDetailResponseType {
  id: number;
  weight: number;
  height: number;
  name: string;
  types: {
    type: {
      name: string;
    };
  }[];
  sprites: {
    front_default: string;
    other: {
      dream_world: {
        front_default: string;
      };
      'official-artwork': {
        front_default: string;
      };
    };
  };
  stats: {
    base_stat: number;
    stat: {
      name: string;
    };
  }[];
}

export interface GameDetailType {
  id: number;
  weight: number;
  height: number;
  name: string;
  koreanName: string;
  color: string;
  types: string[];
  images: {
    frontDefault: string;
    dreamWorldFront: string;
    officialArtworkFront: string;
  };
  baseStats: {
    name: string;
    value: number;
  }[];
}

export const fetchGameDetail = async (
  name: string
): Promise<GameDetailType> => {
  const gameDetailUrl = `https://pokeapi.co/api/v2/pokemon/${name}`;
  const response = await remote.get<GameDetailResponseType>(gameDetailUrl);
  const gameSpeciesUrl = `https://pokeapi.co/api/v2/pokemon-species/${name}`;

  // test
  const speciesResponse =
    await remote.get<GameDetailResponseType>(gameSpeciesUrl);

  // test

  console.log(speciesResponse.data);

  const detail = response.data;
  return {
    id: detail.id,
    name: detail.name,
    height: detail.height / 10,
    weight: detail.weight / 10,
    types: detail.types.map((item) => item.type.name),
    images: {
      frontDefault: detail.sprites.front_default,
      dreamWorldFront: detail.sprites.other.dream_world.front_default,
      officialArtworkFront:
        detail.sprites.other['official-artwork'].front_default,
    },
    baseStats: detail.stats.map((item) => {
      return {
        name: item.stat.name,
        value: item.base_stat,
      };
    }),
  };

  console.log(response);
};
