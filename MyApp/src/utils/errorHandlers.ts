interface IErrorHandlers {
  [key: string]: (...args: any[]) => any;
}

/**
 * 错误码针对性处理
 */
export const errorHandlers: IErrorHandlers = {
  default: (error) => {
    console.log(error);
  },
  401: (error) => {
    console.log(error);
  }
}
