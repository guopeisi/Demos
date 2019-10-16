// pages/radio/radio.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    problems: [
      {
        title: "1.以下哪一种比较接近你？",
        options: [
          {
            name: "对自己和他人都不严格",
            value: "对自己和他人都不严格"
          },
          {
            name: "对自己宽松，对他人严格",
            value: "对自己宽松，对他人严格"
          },
          {
            name: "对他人和自己都严格",
            value: "对他人和自己都严格"
          }
        ]
      },
      {
        title: "2.考试前，常常清理房间或看小说？",
        options: [
          {
            name: "是",
            value: "是"
          },
          {
            name: "否",
            value: "否"
          }
        ]
      },
      {
        title: "3.若可以回到过去，想回到什么时候？",
        options: [
          {
            name: "10年前",
            value: "10年前"
          },
          {
            name: "5年前",
            value: "5年前"
          }
        ]
      }
    ],
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },



  radioChange(e){
    // console.log('radio发生change事件，携带的value值为：', e.detail.value)
    let value = e.detail.value;
    console.log(value)
  },











  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    wx.setNavigationBarTitle({
      title: '选择',
      success: function(res) {
        console.log('success')
      }
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})