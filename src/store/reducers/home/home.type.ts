import {Post} from '../../../types/api.type';

export const HOME_GET_DATA_SERVER_LOADING = 'HOME_GET_DATA_SERVER_LOADING';
export const HOME_GET_DATA_SERVER_SUCCESS = 'HOME_GET_DATA_SERVER_SUCCESS';
export const HOME_GET_DATA_SERVER_FAIL = 'HOME_GET_DATA_SERVER_FAIL';
export const CATEGORIES_GET_DATA_SERVER_SUCCESS =
  'CATEGORIES_GET_DATA_SERVER_SUCCESS';

export interface HomeGetDataSeverFail {
  type: typeof HOME_GET_DATA_SERVER_FAIL;
}

export interface HomeGetDataSeverSuccess {
  type: typeof HOME_GET_DATA_SERVER_SUCCESS;
  payload: any;
}

export interface HomeGetDataSeverLoading {
  type: typeof HOME_GET_DATA_SERVER_LOADING;
}

export interface CategoriesGetDataSeverSuccess {
  type: typeof CATEGORIES_GET_DATA_SERVER_SUCCESS;
  payload: any;
}

export type HomeGetDataSeverDispatchTypes =
  | HomeGetDataSeverLoading
  | HomeGetDataSeverFail
  | HomeGetDataSeverSuccess
  | CategoriesGetDataSeverSuccess;

export type HomeMenu = {
  id: string;
  titre: string;
  lastUpdate?: string;
  slide?: Post[];
  slideHashtags?: HomeSlideHashtags[];
  posts?: Post[];
};
export type HomeSlideHashtags = {id: string; titre: string; posts?: Post[]};
export type HomeBreves = {
  id: string;
  icons: string;
  titre: string;
  posts: Post[];
};
export type HomeAgora = {
  id: string;
  titre: string;
  posts: Post[];
};
export type HomeDossier = {
  id: string;
  titre: string;
  description: string;
  posts: Post[];
};
export type HomeRubriques = {
  id: string;
  titre: string;
  icons: string;
  posts: Post[];
};
