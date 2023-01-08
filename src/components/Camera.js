import { useRef } from "react";

export const Camera = () => {
  const videoRef = useRef();

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: false,
      });
      videoRef.current.srcObject = stream;
    } catch (error) {
      console.error(error);
    }
  };

  const stopCamera = () => {
    const stream = videoRef.current.srcObject;

    const tracks = stream.getTracks();
    tracks.forEach((track) => track.stop());
    videoRef.current.srcObject = null;
    console.log("stopCamera clicked");
  };

  const captureImage = () => {
    try {
      let video = document.getElementsByTagName("video")[0];
      let canvas = document.getElementsByTagName("canvas")[0];

      let { videoWidth, videoHeight } = video;

      canvas.setAttribute("width", videoWidth.toString());
      canvas.setAttribute("height", videoHeight.toString());

      let context = canvas.getContext("2d");
      context?.drawImage(video, 0, 0, videoWidth, videoHeight);

      // let imageData = canvas.toDataURL("image/png", 1.0);

      // console.log(imageData);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <video ref={videoRef} autoPlay playsInline muted style={{ width: "100%" }} />
      <canvas />
      <button className="button" onClick={startCamera}>
        Start Camera
      </button>
      <button className="button" onClick={stopCamera}>
        Stop Camera
      </button>
      <button className="button" onClick={captureImage}>
        Capture
      </button>
    </>
  );
};

// when the start camera is clicked , there will be a popup,
// you can stop camera which will close popup and close camera window
// and you can capture  , close modal and uplaod picture
