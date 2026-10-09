import {Dispatch} from '@reduxjs/toolkit';
import HomeService from '../../../services/home.sevices';
import {PostsApiType} from '../../../types/api.type';
import {
  CATEGORIES_GET_DATA_SERVER_SUCCESS,
  HomeAgora,
  HomeBreves,
  HomeGetDataSeverDispatchTypes,
  HomeMenu,
  HomeRubriques,
  HomeSlideHashtags,
  HOME_GET_DATA_SERVER_FAIL,
  HOME_GET_DATA_SERVER_LOADING,
  HOME_GET_DATA_SERVER_SUCCESS,
} from './home.type';

export const getHomeDataServerAction =
  () => async (dispatch: Dispatch<HomeGetDataSeverDispatchTypes>) => {
    try {
      dispatch({
        type: HOME_GET_DATA_SERVER_LOADING,
      });
      const res = await HomeService.getHomeData();

      const menu: HomeMenu[] = [];
      Object.entries(res.menu).forEach(([key, value]: any) => {
        menu.push({id: key, titre: value});
      });

      const slideHashtags: HomeSlideHashtags[] = [];
      Object.entries(res.slideHashtags).forEach(([key, value]: any) => {
        slideHashtags.push({id: key, titre: value.titre, posts: value.posts});
      });

      const breves: HomeBreves[] = [];
      Object.entries(res.breves).forEach(([key, value]: any) => {
        breves.push({
          id: key,
          titre: value.titre,
          icons: value.icons,
          posts: value.posts,
        });
      });

      const agora: HomeAgora[] = [];
      Object.entries(res.agora).forEach(([key, value]: any) => {
        agora.push({
          id: key,
          titre: value.titre,
          posts: value.posts,
        });
      });

      const rubriques: HomeRubriques[] = [];
      Object.entries(res.rubriques).forEach(([key, value]: any) => {
        rubriques.push({
          id: key,
          titre: value.titre,
          icons: value.icons,
          posts: value.posts,
        });
      });

      dispatch({
        type: HOME_GET_DATA_SERVER_SUCCESS,
        payload: {
          menu: menu,
          slide: res.slide,
          slideHashtags: slideHashtags,
          breves: breves,
          agora: agora,
          dossier: res.dossier,
          rubriques: rubriques,
          bestof: res.bestof,
          lastUpdate: new Date().toISOString(),
        },
      });
      let newMenu: HomeMenu[] = [];
      for await (let elementsMenu of menu) {
        const resCategoryMenu = await HomeService.getPostsData(
          elementsMenu.id,
          'getPosts',
          PostsApiType.Category,
          1,
          10,
        );
        const menuSlideHashtags: HomeSlideHashtags[] = [];
        for await (let [key, value] of Object.entries(
          resCategoryMenu.slideHashtags,
        )) {
          menuSlideHashtags.push({
            id: key,
            titre: value as string,
          });
        }
        newMenu.push({
          ...elementsMenu,
          lastUpdate: new Date().toISOString(),
          slide: resCategoryMenu.slide,
          slideHashtags: menuSlideHashtags,
          posts: resCategoryMenu.articles,
        });
      }
      dispatch({
        type: CATEGORIES_GET_DATA_SERVER_SUCCESS,
        payload: newMenu,
      });
    } catch (e) {
      console.log('getHomeDataServerAction error', e);

      dispatch({
        type: HOME_GET_DATA_SERVER_FAIL,
      });
    }
  };

export const getCategoryMenuDataServerAction =
  (menu: HomeMenu[]) =>
  async (dispatch: Dispatch<HomeGetDataSeverDispatchTypes>) => {
    try {
      let newMenu: HomeMenu[] = [];
      for await (let elementsMenu of menu) {
        const resCategoryMenu = await HomeService.getPostsData(
          elementsMenu.id,
          'getPosts',
          PostsApiType.Category,
          1,
          10,
        );
        const menuSlideHashtags: HomeSlideHashtags[] = [];
        for await (let [key, value] of Object.entries(
          resCategoryMenu.slideHashtags,
        )) {
          menuSlideHashtags.push({
            id: key,
            titre: value as string,
          });
        }
        newMenu.push({
          ...elementsMenu,
          lastUpdate: new Date().toISOString(),
          slide: resCategoryMenu.slide,
          slideHashtags: menuSlideHashtags,
          posts: resCategoryMenu.articles,
        });
      }
      dispatch({
        type: CATEGORIES_GET_DATA_SERVER_SUCCESS,
        payload: newMenu,
      });
    } catch (e) {
      console.log('getHomeDataServerAction error', e);

      dispatch({
        type: HOME_GET_DATA_SERVER_FAIL,
      });
    }
  };
