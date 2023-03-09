// import fp from './src';
console.log("HEEEEEEEEEY")
const config = {
  video: { width: 640, height: 480, fps: 30 }
};

const videoElem = document.createElement('video')

videoElem.id = 'pose-video';
videoElem.hidden = true;
videoElem.muted = "muted";
videoElem.playsinline = true;
  // <div class="video">
  //     <div id="video-container">
  //       <video id="pose-video" class="layer" playsinline hidden></video>
  //       <canvas id="pose-canvas" class="layer"></canvas>
  //       <div id="pose-result" class="layer"></div>
  //     </div>
  //   </div>


document.body.appendChild(videoElem);

async function initCamera(width, height, fps) {

  const constraints = {
    audio: false,
    video: {
      facingMode: "user",
      width: width,
      height: height,
      frameRate: { max: fps }
    }
  };

  const video = document.querySelector("#pose-video");
  video.width = width;
  video.height = height;

  // get video stream
  const stream = await navigator.mediaDevices.getUserMedia(constraints);
  video.srcObject = stream;

  return new Promise(resolve => {
    console.log("heya")
    video.onloadedmetadata = () => { resolve(video) };
  });
}

window.addEventListener("DOMContentLoaded", () => {
  console.log("loaded")

  initCamera(
    config.video.width, config.video.height, config.video.fps
  ).then(video => {
    video.play();
    console.log('called play')
    video.addEventListener("loadeddata", event => {
      console.log("Camera is ready");
      console.log(event)
      console.log(video)
    });
  });
})

// const knownGestures = [
//   fp.Gestures.VictoryGesture,
//   fp.Gestures.ThumbsUpGesture
// ];
// const GE = new fp.GestureEstimator(knownGestures);




