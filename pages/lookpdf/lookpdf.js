// pages/lookpdf/lookpdf.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    
  },

  lookPdf: function(e){ //下载文件 保存在本地 打开
    console.log(e)
    let url = e.currentTarget.dataset.url;
    let type = e.currentTarget.dataset.type;
    let name = e.currentTarget.dataset.name;
    wx.downloadFile({
      // url: url,
      url: e.currentTarget.dataset.url,
      filePath: wx.env.USER_DATA_PATH + '/' + name + '.pdf', //读写文件路径
      header: {
        'Content-type': 'application/x-www-from-urlencoded'
      },
      success: function(res){
        console.log(res)
        wx.openDocument({
          filePath: res.filePath,
          success:function(res){
            console.log('打开文档成功')
          },
          fail: function(res){
            console.log(res)
          },
          complete: function(res){
            console.log(res)
          },
        })
      },
      fail: function(res){
        console.log('文件下载失败')
      },
      complete: function(res){
        console.log(res)
      },
    })
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