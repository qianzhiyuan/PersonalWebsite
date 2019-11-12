import Axios from 'axios'

Axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  if (config.headers.common.noLoading) {
    delete config.headers.common['noLoading']
  } else {
    // listenEvent.emit('showLoading')
  }
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
Axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  let {status} = response
  let responseData = response.data
  if (status === 200) {
  }
  return responseData;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});

function getBaiDuList() {
  return Axios.get('http://120.78.201.242:80/getbaidulist')
}

export {
  getBaiDuList
}
