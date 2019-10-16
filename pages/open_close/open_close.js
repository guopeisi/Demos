//获取应用实例
const app = getApp()

Page({
  data: {
    items: [{
        id: 0,
        text: '1.Navigating Personal Space in Today’s Virtual Environment Virtual personal space requires good boundaries — heres how to set and respect them Vy Luu in Better Humans,Navigating Personal Space in Today’s Virtual Environment Virtual personal space requires good boundaries — heres how to set and respect them Vy Luu in Better Humans'
      },
      {
        id: 1,
        text: '2.Navigating Personal Space in Today’s Virtual Environment Virtual personal space requires good boundaries — heres how to set and respect them Vy Luu in Better Humans,Navigating Personal Space in Today’s Virtual Environment Virtual personal space requires good boundaries — heres how to set and respect them Vy Luu in Better Humans'
      }
    ]
  },
  onLoad: function() {
    let items = this.data.items
    items = items.map((item, index) => {
      return {
        ...item,
        folded: true
      }
    })
    this.setData({
      items
    })
  },
  handleFold(e) {
    let id = e.target.dataset.id
    let items = this.data.items
    items = items.map((item, index) => {
      return {
        ...item,
        folded: item.id === id ? !item.folded : item.folded
      }
    })
    this.setData({
      items
    })
  }
})