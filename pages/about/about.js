let utils = require('../../utils/utils')
Page({
  data: {
    projectAddress: 'https://github.com/eachLee/shanxi-weather',
    github: 'https://github.com/eachLee',
    email: '1318245851@qq.com',
    qq: '1318245851',
    swiperHeight: 'auto',
    bannerImgList: [
      {
        src: 'https://636c-cloud1-2gjb0qbja55f57b5-1305532240.tcb.qcloud.la/mpcode.jpg',
        title: '善兮天气',
      },
    ],
  },
  onLoad() {
    this.initSwiper()
  },
  previewImages(e) {
    let index = e.currentTarget.dataset.index || 0
    let urls = this.data.bannerImgList
    let arr = []
    urls.forEach(item => {
      arr.push(item.src)
    })
    wx.previewImage({
      current: arr[index],
      urls: arr,
      success: function (res) { },
      fail: function (res) {
        console.error('previewImage fail: ', res)
      }
    })
  },
  initSwiper() {
    let systeminfo = getApp().globalData.systeminfo
    if (utils.isEmptyObject(systeminfo)) {
      wx.getSystemInfo({
        success: (res) => {
          this.setSwiperHeight(res)
        },
      })
    } else {
      this.setSwiperHeight(systeminfo)
    }
  },
  setSwiperHeight(res) {
    this.setData({
      swiperHeight: `${(res.windowWidth || res.screenWidth) / 375 * 200}px`
    })
  },
  copy(e) {
    let dataset = (e.currentTarget || {}).dataset || {}
    let title = dataset.title || ''
    let content = dataset.content || ''
    wx.setClipboardData({
      data: content,
      success() {
        wx.showToast({
          title: `已复制${title}`,
          duration: 2000,
        })
      },
    })
  },
})