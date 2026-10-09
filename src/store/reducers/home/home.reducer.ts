import {Post} from '../../../types/api.type';
import {
  CATEGORIES_GET_DATA_SERVER_SUCCESS,
  HomeAgora,
  HomeBreves,
  HomeDossier,
  HomeGetDataSeverDispatchTypes,
  HomeMenu,
  HomeRubriques,
  HomeSlideHashtags,
  HOME_GET_DATA_SERVER_FAIL,
  HOME_GET_DATA_SERVER_LOADING,
  HOME_GET_DATA_SERVER_SUCCESS,
} from './home.type';

interface InitialState {
  menu: HomeMenu[];
  slide: Post[];
  slideHashtags: HomeSlideHashtags[];
  breves: HomeBreves[];
  agora: HomeAgora[];
  dossier: HomeDossier | null;
  rubriques: HomeRubriques[];
  bestof: Post[];
  loading: boolean;
  error: boolean;
  lastUpdate: string | null;
}

const initialState: InitialState = {
  menu: [],
  slide: [],
  slideHashtags: [],
  breves: [],
  agora: [],
  dossier: null,
  rubriques: [],
  bestof: [],
  loading: false,
  error: false,
  lastUpdate: null,
};
const homeReducer = (
  state: InitialState = initialState,
  action: HomeGetDataSeverDispatchTypes,
): InitialState => {
  switch (action.type) {
    case HOME_GET_DATA_SERVER_FAIL:
      return {...state, loading: false, error: true};
    case HOME_GET_DATA_SERVER_LOADING:
      return {...state, loading: true};
    case HOME_GET_DATA_SERVER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        ...action.payload,
      };
    case CATEGORIES_GET_DATA_SERVER_SUCCESS:
      return {
        ...state,
        menu: action.payload,
      };

    default:
      return state;
  }
};

export default homeReducer;
