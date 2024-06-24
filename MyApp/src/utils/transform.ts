
// interface IROUTER_ENUM<T> {
//   (params: T): ({
//     [key in keyof T]: key;
//   })
// }


/**
 * router私有转换
 * 将{key: T[key]}转换为{key: key}
 * @param router 
 */
export function transformRouter<T extends Record<string, any>> (router: T): { [key in keyof T]: key }
export function transformRouter(router: Record<string, any>) {
  return Object.keys(router).reduce((pre: any, current) => {
    pre[current] = `${current}`;
    return pre;
  }, {})
}
