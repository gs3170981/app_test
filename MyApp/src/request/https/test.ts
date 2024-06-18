import { API_URL } from '@/constants';
import { request } from '../request';

/**
 * 这是一个测试请求案例
 * @param params 
 * @returns 
 */
export const httpTest = (params: any) => {
  return request(`${API_URL}/react-native/movies.json`, {
    method: 'POST',
    body: params,
  });
}