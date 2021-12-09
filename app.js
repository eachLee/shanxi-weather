import { CloudEnvId, HeWeatherKey, } from './accountconfig';
App({
  onLaunch() {
    wx.cloud.init({
      // env: CloudEnvId,
      traceUser: true,
    })
    this.globalData.platform = typeof tt !== 'undefined' ? 'tt' : 'wx';
    wx.getSystemInfo({
      success: (res) => {
        this.globalData.StatusBar = res.statusBarHeight;
        let custom = wx.getMenuButtonBoundingClientRect();
        this.globalData.Custom = custom;
        this.globalData.CustomBar = custom.bottom + custom.top - res.statusBarHeight;

        this.globalData.systeminfo = res
        this.globalData.isIPhoneX = /iphonex/gi.test(res.model.replace(/\s+/, ''))
      },
    })
  },
  globalData: {
    // keepscreenon:false,
    systeminfo: {},
    isIPhoneX: false,
    key: HeWeatherKey,
    weatherIconUrl: 'https://cdn.heweather.com/cond_icon/',
    requestUrl: {
      weather: 'https://route.showapi.com/9-5?showapi_appid=855984&showapi_sign=78cbad2432834169a3f7831e9b2cf1bc',
      hourly: 'https://route.showapi.com/9-8?showapi_appid=855984&showapi_sign=78cbad2432834169a3f7831e9b2cf1bc'
    },
  },
})