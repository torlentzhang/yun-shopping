// 存放登录相关请求
import request from '@/utils/request'
// 1.获取图形验证码
export const getPicCode = () => {
  return request.get('/captcha/image')
}
// 2.获取短信验证码
export const getPhoneCode = (captchaCode, captchaKey, mobile) => {
  return request.post('/captcha/sendSmsCaptcha', {
    form: {
        captchaCode,
        captchaKey,
        mobile
    }
  })
}
