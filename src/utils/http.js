const baseUrl = 'http://localhost:8199/'
export const request = (url, header = {}, data = {}, method = 'GET') => {
  let sendUrl = url.includes('www') ? url : baseUrl + url
  return new Promise((resolve, reject) => {
    wx.request({
      method,
      url: sendUrl,
      header,
      data,
      success(res) {
        // 请求成功
        if (res.statusCode === 200) {
          resolve(res)
        }
        // 请求成功无响应体
        else if (res.statusCode === 204) {
          /*
          可做一些成功提示，
          如调用wx.showToast()、wx.showModal()或自定义弹出层等
          */
          resolve(res)
        } // 未认证
        else if (res.statusCode === 401) {
          /* 可做一些错误提示，或者直接跳转至登录页面等 */
          reject(res)
        } else if (res.statusCode == 400) {
          /* 可做一些错误提示*/
          reject(res)
        } else if (res.statusCode === 403) {
          /* 无权限错误提示*/
          reject(res)
        }
      },
      fail(err) {
        reject(err)
      },
    })
  })
}
