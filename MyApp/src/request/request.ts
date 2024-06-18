import { errorHandlers } from "@/utils";

/**
 * 请求返回拦截处理
 * @param response 
 * @returns 
 */
const interceptorsResponse = (response: any) => {
  
  return response;
}

/**
 * 请求返回拦截错误处理
 * @param error 
 * @returns 
 */
const interceptorsResponseError = (error: any) => {
  console.log(errorHandlers);

  // 可以再弹个窗
  throw error;
}

/**
 * 请求库
 * @param options {
 *    url: ''
 *    body: {}
 *    params: {}
 * }
 * @returns Promise
 */
export const request = (url: string, options: any) => {
  const searchParams = new URLSearchParams(options.params);

  return (
    fetch(`${url}${options.params ? `?${searchParams}` : ''}`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      ...options,
      body: JSON.stringify(options.body),
    })
    .then((response) => response.json())
    .then(response => {
      return interceptorsResponse(response);
    })
    .catch((error) => {
      interceptorsResponseError(error);
    })
  )
}