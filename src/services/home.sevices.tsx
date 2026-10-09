import axios from 'axios';
import {BASE_API, BASE_API_PASSWORD} from '../config/api';
import {PostsApiType} from '../types/api.type';

const client = axios.create({
  baseURL: `${BASE_API}`,
});

const HomeService = {
  getHomeData: async (): Promise<any> => {
    const res = await client.post('', {
      password: BASE_API_PASSWORD,
      action: 'getHome',
    });
    return res.data;
  },
  getPostsData: async (
    id: string,
    action: string,
    taxonomy: PostsApiType,
    page: number,
    perPage: number,
  ): Promise<any> => {
    const res = await client.post('', {
      password: BASE_API_PASSWORD,
      action: action,
      paged: page,
      taxonomy: taxonomy,
      term_id: id,
      posts_per_page: perPage,
    });
    return res.data;
  },
  getSinglePostData: async (id: string): Promise<any> => {
    const res = await client.post('', {
      password: BASE_API_PASSWORD,
      action: 'getPost',
      id_article: id,
    });
    return res.data;
  },
};

export default HomeService;
