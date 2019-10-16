//获取屏幕高度

　　
var screenHeight = wx.getSystemInfo({
  success: function(res) {
    screenHeight = res.windowHeight
  }　　
})
Page({

  /**
   * 页面的初始数据
   */
  data: {
    toView: '',
    height: "",
    carModel: [
      [{
        id: "0",
        name: "A"
      }, ],
      [{
        id: "0",
        name: "B"
      }, ],
      [{
        id: "0",
        name: "C"
      }, ],
      [{
        id: "0",
        name: "D"
      }, ],
      [{
        id: "0",
        name: "E"
      }, ],
      [{
        id: "0",
        name: "F"
      }, ],
      [{
        id: "0",
        name: "G"
      }, ],
      [{
        id: "0",
        name: "H"
      }, ],
      [{
        id: "0",
        name: "I"
      }, ],
      [{
        id: "0",
        name: "J"
      }, ],
      [{
        id: "0",
        name: "K"
      }, ],
      [{
        id: "0",
        name: "L"
      }, ],
      [{
        id: "0",
        name: "M"
      }, ],
      [{
        id: "0",
        name: "N"
      }, ],
      [{
        id: "0",
        name: "O"
      }, ],
      [{
        id: "0",
        name: "P"
      }, ],
      [{
        id: "0",
        name: "Q"
      }, ],
      [{
        id: "0",
        name: "R"
      }, ],
      [{
        id: "0",
        name: "S"
      }, ],
      [{
        id: "0",
        name: "T"
      }, ],
      [{
        id: "0",
        name: "U"
      }, ],
      [{
        id: "0",
        name: "V"
      }, ],
      [{
        id: "0",
        name: "W"
      }, ],
      [{
        id: "0",
        name: "X"
      }, ],
      [{
        id: "0",
        name: "Y"
      }, ],
      [{
        id: "0",
        name: "Z"
      }, ],
    ],
    letter: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
  },
  jump: function(num) {
    var text = this.data.letter[num.target.id];
    this.setData({
      toView: text,
    })
    console.log(text);

  },
  onLoad: function(options) {

    var that = this
    // 获取系统信息
    wx.getSystemInfo({
      success: function(res) {
        // 计算主体部分高度,单位为px
        that.setData({
          height: res.windowHeight
        })
      }
    })
  },

})