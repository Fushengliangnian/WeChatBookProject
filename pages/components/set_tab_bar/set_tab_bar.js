// pages/components/custom_tab_bar/set_tab_bar.js
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
    // current: "homepage"
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleChange: function (detail) {
      console.log(detail.detail.key)
      let key = detail.detail.key
      let url = key == "homepage" ? "/pages/index/index" : "/pages/" + key + "/" + key  
      this.setData({
        current: detail.detail.key
      })
      console.log(detail.detail.key)
      wx.switchTab({
        url: url
      })
  }},

  lifetimes: {
    // 在组件实例进入页面节点树时执行
    attached: function () {
      console.log("attached")
    },

    // 在组件实例被从页面节点树移除时执行
    detached: function () {
      console.log("detached")
    },
  }

})
