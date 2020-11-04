/*
 * @Description:
 * @Author: zhangHeTeng
 * @Date: 2020-11-04 14:23:39
 * @LastEditTime: 2020-11-04 14:52:02
 * @LastEditors: zhangHeTeng
 */
import { post } from "./http";
const loginUrl = "/api/login";
let api = {
  login(data) {
    return post(loginUrl, data);
  }
};
export default api;
