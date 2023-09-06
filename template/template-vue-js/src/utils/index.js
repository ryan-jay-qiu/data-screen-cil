// export const initVideo = (rtsp, canvas, scale = 1280) => {
//   // 将rtsp视频流地址进行btoa处理一下
//   const JSMpegInstance = new JSMpeg.Player("ws://localhost:9999/rtsp?url=" + btoa(rtsp) +
//     '&&scale=' + 1280 + ':-1&-b:v=1k&brightness=0&saturation=1.8', {
//     canvas,
//     audio: false
//   }
//   )
//   console.log(JSMpegInstance)
//   return JSMpegInstance
// }

//   |    参数    |                                                                                                             解释说明                                                                                                              |
// | :--------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
// |     -s     |                                                        视频分辨率大小，不传即表示与源视频大小一致<br> 传值示例： 1920x1080、1280x720、640x360 <br> 降低分辨率会降低清晰度                                                         |
// |    -b:v    |                                          释义：码率，默认可以不设置，那就是使用源码率<br>传值示例：2000k、100k、1k<br>码率调小，这样其实也间接让文件变小了<br>码率调小，画质有可能会降低                                          |
// |   scale    | 缩放；间接的，也能调整视频的分辨率；<br> 默认值： -1:-1；即与视频源大小保持一致；<br>功能与 -s 参数相似；但是可以只传一个宽度或者高度，另一个参数用 -1 表示<br>如： 1280:-1、-1:360，视频将会自适应显示<br>降低分辨率会降低清晰度 |
// |   vcodec   |                                                                                 释义：视频编解码方式；<br>请确保你了解该参数的意义，默认可以不传                                                                                  |
// |  contrast  |                                                释义：对比度，亮的地方更亮，暗的地方更暗。<br>取值范围[-100.0, 100.0]，默认值为 0。建议不调整，或者在[-2.0, 2.0]范围内进行小的调整                                                 |
// | brightness |                                                                    释义：亮度，如果觉得视频有点暗，可以进行小的调整。<br>取值范围： [-1.0, 1.0]，默认值为 0。                                                                     |
// | saturation |                                                                   释义：饱和度，也就是说色彩更鲜艳，绿色更绿，蓝色更蓝...；<br>取值范围：[0, 3.0]，默认值为 1。                                                                   |
// |   gamma    |                                                          释义：关于显示器/视频的一个专业参数；<br>取值范围：0.1-10.0，默认值为 1。<br>这个参数很专业，建议不传，不修改。                                                          |

// 实例JSMpeg.Player支持以下方法和属性：

// .play()– 开始播放
// .pause()– 暂停播放
// .stop()– 停止播放并寻找开头
// .nextFrame()– 提前播放一视频帧。这不会解码音频。当数据不足时返回true成功。false
// .volume– 获取或设置音量 (0-1)
// .currentTime– 获取或设置当前播放位置（以秒为单位）
// .paused– 只读，播放是否暂停
// .destroy()– 停止播放、断开源连接并清理 WebGL 和 WebAudio 状态。此后播放器将无法使用。如果播放器创建了画布元素，则会将其从文档中删除。

// canvas– 用于视频渲染的 HTML Canvas 元素。如果没有给出，渲染器将创建自己的 Canvas 元素。
// loop– 是否循环播放视频（仅限静态文件）。默认true。
// autoplay- 是否立即开始播放（仅限静态文件）。默认false。
// audio- 是否解码音频。默认true。
// video- 是否解码视频。默认true。
// poster– 用作视频播放前显示的海报的图像的 URL。
// pauseWhenHidden– 选项卡处于非活动状态时是否暂停播放。默认true。请注意，浏览器通常会限制非活动选项卡中的 JS。
// disableGl- 是否禁用 WebGL 并始终使用 Canvas2D 渲染器。默认false。
// disableWebAssembly- 是否禁用 WebAssembly 并始终使用 JavaScript 解码器。默认false。
// preserveDrawingBuffer– WebGL 上下文是否是preserveDrawingBuffer通过“屏幕截图”创建的canvas.toDataURL()。默认false。
// progressive- 是否以块的形式加载数据（仅限静态文件）。启用后，可以在整个源完全加载之前开始播放。默认true。
// throttled- 使用时progressive，是否在不需要播放时推迟加载块。默认true。
// chunkSize- 使用时progressive，一次加载的块大小（以字节为单位）。默认1024*1024（1mb）。
// decodeFirstFrame- 是否解码并显示视频的第一帧。对于设置画布大小和使用框架作为“海报”图像很有用。autoplay这在使用或流式传输源时没有任何影响。默认true。
// maxAudioLag– 流式传输时，最大排队音频长度（以秒为单位）。
// videoBufferSize– 流式传输时，视频解码缓冲区的大小（以字节为单位）。默认 512*1024 (512kb)。对于非常高的比特率，您可能必须增加此值。
// audioBufferSize– 流式传输时，音频解码缓冲区的大小（以字节为单位）。默认 128*1024 (128kb)。对于非常高的比特率，您可能必须增加此值。
// onVideoDecode(decoder, time)– 在每个解码和渲染的视频帧之后调用的回调
// onAudioDecode(decoder, time)– 每个解码音频帧后调用的回调
// onPlay(player)– 每当播放开始时调用的回调
// onPause(player)– 每当播放暂停时调用的回调（例如，当调用 .pause() 或源已结束时）
// onEnded(player)– 当播放到达源末尾时调用的回调（仅当loopis时调用false）。
// onStalled(player)– 每当没有足够的数据可供播放时调用的回调
// onSourceEstablished(source)– 当源首次接收到数据时调用的回调
// onSourceCompleted(source)– 当源收到所有数据时调用的回调

// useTime.js
// export const initVideo = (rtsp, canvas, size = '1280x720', bv = '1024', fps = 29.7) => {
//   return new Promise((resolve, reject) => {
//     // 将rtsp视频流地址进行btoa处理一下
//     const JSMpegInstance = new JSMpeg.Player(`ws://localhost:9999?url=${rtsp}
//       &size=${'1280x720'}& bv=${bv} & fps=${fps}`, {

export const initVideo = (rtsp, canvas, scale = 1280) => {
  return new Promise((resolve, reject) => {
    console.log(scale)
    // 将rtsp视频流地址进行btoa处理一下
    const JSMpegInstance = new JSMpeg.Player("ws://localhost:9999/rtsp?url=" + btoa(rtsp) +
      '&&scale=' + 1280 + ':-1&-b:v=1k&brightness=0&saturation=1.8', {
      // export const initVideo = (rtsp, canvas, size = '1280x720', bv = '20', fps = 29.7) => {
      //   return new Promise((resolve, reject) => {
      //     // 将rtsp视频流地址进行btoa处理一下
      //     const JSMpegInstance = new JSMpeg.Player(`ws://localhost:9999?url=${rtsp}
      //             &size=${'1280x720'}& bv=${bv} & fps=${fps}`, {
      canvas,
      disableGl: true,
      audio: false,
      decodeFirstFrame: false,
      onPlay: () => {
        console.log("onPlay");
        setTimeout(() => {
          resolve(JSMpegInstance);
        }, 600)
      },
      onPause: () => {
        console.log("onPause");
        reject(JSMpegInstance);
      },
    });
  })


  // // 在 JSMpeg 实例初始化完成后，调用 resolve 将结果传递给调用者
  // JSMpegInstance.onPlay = () => {
  //   console.log("JSMpegInstance initialized successfully.");
  //   resolve(JSMpegInstance);
  // };

  // // 在发生错误时，调用 reject 将错误传递给调用者
  // JSMpegInstance.on('onStalled', (error) => {

  // });
};


export const windDirections = {
  0: '北风',
  1: '东北风',
  2: '东风',
  3: '东南风',
  4: '南风',
  5: '西南风',
  6: '西风',
  7: '西北风',
};

export async function canCallApi(api, key, interval = 24 * 60 * 60 * 1000) {
  const timeKey = key + "Time";
  const dataKey = key + "Data";
  const lastCallTime = localStorage.getItem(timeKey);
  const currentTime = Date.now();
    // const callBack =  () => {
    //   api().then((res) => {
    //     localStorage.setItem(timeKey, currentTime)
    //     localStorage.setItem(dataKey, JSON.stringify(res))
    //     console.log("success", res)
    //     return resolve(res)
    //   }, (res) => {
    //     localStorage.removeItem(timeKey)
    //     localStorage.removeItem(dataKey)
    //     console.log("success2", res)
    //     return reject(res)
    //   })
    // }
    if (!lastCallTime) {
      // 第一次调用接口，允许调用
      try{
              const data = await api();
      localStorage.setItem(timeKey, currentTime)
      localStorage.setItem(dataKey, JSON.stringify(data))
      console.log("success", data)
      return Promise.resolve(data)
      } catch(e){
        console.log(e)
        return Promise.reject()
      }
    }
    if (currentTime - Number(lastCallTime) >= interval) {
      try{
        const data = await api();
        localStorage.setItem(timeKey, currentTime)
        localStorage.setItem(dataKey, JSON.stringify(data))
        console.log("success", data)
        return Promise.resolve(data)
      } catch(e){
        console.log(e)
        return Promise.reject()
      }
    }
    const cacheData = JSON.parse(localStorage.getItem(dataKey));
    if(cacheData){
      return Promise.resolve(cacheData);
    } else{
      return Promise.reject(cacheData);
    }
    // 在时间间隔内，不允许调用

}
// export  function canCallApi(api, key, interval = 24 * 60 * 60 * 1000) {
//   const timeKey = key + "Time";
//   const dataKey = key + "Data";
//   const lastCallTime = localStorage.getItem(timeKey);
//   const currentTime = Date.now();

//   // 判断是否已经在调用接口
//   if (localStorage.getItem("isCallingApi")) {
//     console.log("接口正在调用中，稍后再试！");
//     return Promise.reject("接口正在调用中，稍后再试！");
//   }

//   if (!lastCallTime || currentTime - Number(lastCallTime) >= interval) {
//     // 第一次调用接口或超过时间间隔，允许调用
//     localStorage.setItem("isCallingApi", "true");
//     try {
//       const res = await api();
//       localStorage.setItem(timeKey, currentTime);
//       localStorage.setItem(dataKey, JSON.stringify(res));
//       console.log("success", res);
//       return res;
//     } catch (error) {
//       localStorage.removeItem(timeKey);
//       localStorage.removeItem(dataKey);
//       console.log("error", error);
//       return Promise.reject(error);
//     } finally {
//       localStorage.removeItem("isCallingApi");
//     }
//   } else {
//     // 在时间间隔内，不允许调用
//     console.log("接口已经调用过了，一天只能调用一次");
//     return Promise.reject("接口已经调用过了，一天只能调用一次");
//   }
// }
