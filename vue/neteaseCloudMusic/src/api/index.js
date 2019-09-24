import Vue from 'vue'
import axios from 'axios'

const vue = new Vue()

// axios 的配置
axios.defaults.timeout = 10000
axios.defaults.baseUrl = 'http://localhost:3000'

// 返回状态判断(响应拦截器)
axios.interceptors.response.use(res => {
  if (res.data.code !== 200) {
    alert('网络异常')
    return Promise.reject()
  }
},err => {
  alert('网络异常')
  return Promise.reject(err)
})

export function fetchGet (url, params) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params
    })
    .then(resolve,reject)
    .catch(reject)
  })
}

export default {
  //用户登录
  Login (params) {
    return fetchGet('/login', params)
  },
  // 歌单
  DiscLists (params) {
    return fetchGet('/top/playlist', params)
  },
  //歌曲详情
  SongList (params) {
    return fetchGet('.playlist/detail', params)
  },
  // 歌曲搜素
  MusicSearch (param) {
    return fetchGet('search', params)
  },
  //热搜
  HotSearchKey () {
    return fetchGet('/search/hot')
  },
  //歌词
  MusicLyric (id) {
    return fetchGet('/lyric', {id})
  },
  // 歌曲资源
  MusicUrl (id) {
    return fetchGet('/song/url', {id})
  }
}