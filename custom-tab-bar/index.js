// custom-tab-bar/index.js
const app = getApp()
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    current: null
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleChange: function (detail) {
      let key = detail.detail.key
      let url = key == "homepage" ? "/pages/index/index" : "/pages/" + key + "/" + key
      app.globalData.current = key
      console.log(this)
      console.log(11111, key)
      this.setData({
        current: app.globalData.current
      })
      console.log(11111, this.data.current)
      wx.switchTab({
        url: url
      })
    }
  },

  // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
  lifetimes: {
    attached: function () {
      console.log("lifetimes - attached")
      console.log(this.data.current)

      this.setData({
        current: app.globalData.current
      })
      console.log(this.data.current)
    },
    moved: function () { 
      console.log("lifetimes - moved")

    },
    detached: function () { 
      console.log("lifetimes - detached")

    },
  },

  // 组件所在页面的生命周期函数
  pageLifetimes: {
    show: function () { 
      console.log("pageLifetimes - show")
    },
    hide: function () { 
      console.log("pageLifetimes - hide")
    },
    resize: function () { 
      console.log("pageLifetimes - resize")
    },
  },
})
