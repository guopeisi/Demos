// pages/chooseImg/chooseImg.js
//获取应用实例
var app = getApp()
const image_status = true; //图片状态
const src_array = []; //上传图片路径数组
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // tempFilePaths: '',
    // imgs: [],

    pics: [],

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },



  // 上传单张图片并显示
  chooseimage: function() {
    var _this = this;
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function(res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        _this.setData({
          tempFilePaths: res.tempFilePaths
        })
      }
    })
  },








  // 上传图片并显示并预览
  chooseImg() {
    var _this = this;
    wx.chooseImage({
      count: 3, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function(res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        _this.setData({
          imgs: res.tempFilePaths
        })
      }
    })
  },
  // 预览图片
  previewImg(e) {
    console.log(e)
    var current = e.target.dataset.src;
    wx.previewImage({
      urls: this.data.imgs,
      current: current,
      success: (res) => {
        console.log(res)
        console.log('预览成功')
      }
    })
  },







  // 多张图片并显示
  ci() {
    var _this = this;
    wx.chooseImage({
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function(res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        _this.setData({
          pics: res.tempFilePaths
        })
      }
    })
  },
  change() {
    let _pics = this.data.pics;
    let string = _pics.join(",");
    _pics.forEach(function(item, index){
      let base64 = wx.getFileSystemManager().readFileSync(_pics[index], "base64");
      let arrOne = base64.split(",");
      console.log(arrOne)
    })



    // let base1 = wx.getFileSystemManager().readFileSync(_pics[0], "base64");
    // let base2 = wx.getFileSystemManager().readFileSync(_pics[1], "base64");
    // let baseall = base1 + base2;
    // console.log(baseall) 
    // let base64 = wx.getFileSystemManager().readFileSync(string, "base64");
    // console.log(base64)
    // let arr = base64.split(",");
    // console.log(arr)
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