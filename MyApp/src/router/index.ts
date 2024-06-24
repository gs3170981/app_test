import { transformRouter } from "@/utils";

/**
 * 路由集合(打平）
 * 该路由需要传递一个叫做 id 的数字类型参数
 * ComponentName: { id: number };
 */
export const Router = {
  Home: void 0,
  Welcome: void 0,
}

/**
 * Router Enum类型
 */
export const ROUTER_ENUM = transformRouter(Router);

/**
 * App根路由
 */
export const ROUTER_APP_ENUM = {
  [ROUTER_ENUM.Home]: Router.Home,
  [ROUTER_ENUM.Welcome]: Router.Welcome,
}
