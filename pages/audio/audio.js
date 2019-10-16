const innerAudioContext = wx.createInnerAudioContext();
Page({
  data: {
    src: 'http://other.web.nf01.sycdn.kuwo.cn/resource/n1/38/55/692241919.mp3',
    audioTime: '00′00″',
    duration: '11.88', // 音乐总时间
  },
  onReady() {
    innerAudioContext.src = this.data.src;
    console.log(innerAudioContext.duration);
  },
  audioPlay() {
    let that = this;
    innerAudioContext.play();
    console.log(innerAudioContext.duration)
    that.updateTime(that);
  },
  audioPause() {
    innerAudioContext.pause();
  },
  audioEnd() {
    innerAudioContext.stop();
  },
  updateTime(that) {
    let duration = this.data.duration;
    innerAudioContext.onTimeUpdate(function(res) {
      let nowTime = innerAudioContext.currentTime;
      let newTime = duration - nowTime;
      let min = parseInt(newTime / 60);
      let sec = parseInt(newTime % 60);
      if (min.toString().length == 1) {
        min = `0${min}`;
      };
      if (sec.toString().length == 1) {
        sec = `0${sec}`;
      };
      console.log(min, sec);
      that.setData({
        audioTime: `${min}′${sec}″`
      })
    });
    innerAudioContext.onEnded(function() {
      innerAudioContext.stop();
      that.setData({
        audioTime: `00′00″`
      })
    });
  },
})