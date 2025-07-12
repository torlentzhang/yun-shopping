// 存放登录相关请求
import request from '@/utils/request'
// 1.获取图形验证码
export const getPicCode = () => {
  return request.get('/captcha/image')
}
