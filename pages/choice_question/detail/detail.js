// pages/choice_question/detail/detail.js
let postData = require("../../../data/post-data.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: "",
    details: postData.postList,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      id: parseInt(options.id)
    })
    console.log('options:', options)
    console.log('详情', this.data.details)
  },

  nextQuestion() {
    let that = this;
    console.log(that.data.id)
    console.log(postData.postList.length)
    if (that.data.id < postData.postList.length - 1) {
      this.setData({
        id: that.data.id - 1
      })
    }
  },

  lastQuestion() {
    let that = this;
    if (that.data.id > 0) {
      this.setData({
        id: that.data.id - 1
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

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