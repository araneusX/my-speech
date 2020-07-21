/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable react/jsx-one-expression-per-line */
// @ts-ignore
import AudioRecorder from 'audio-recorder-polyfill';
// @ts-ignore
import mpegEncoder from 'audio-recorder-polyfill/mpeg-encoder';
import { variables } from '../constants';

// AudioRecorder.encoder = mpegEncoder;
// AudioRecorder.prototype.mimeType = 'audio/mpeg';
window.MediaRecorder = AudioRecorder;

const Speech = () => {
  const handleRecord = () => {
    navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
      variables.recorder = new MediaRecorder(stream);
      variables.recorder.addEventListener('dataavailable', (e: BlobEvent) => {
        const audio = new Audio(URL.createObjectURL(e.data));
        audio.play();
      });

      variables.recorder.start();
    });
  };

  const handleStop = () => {
    variables.recorder.stop();
    variables.recorder.stream.getTracks().forEach((i: MediaStreamTrack) => i.stop());
  };

  return (
    <>
      <button type="button" onClick={handleRecord}>Record</button>
      <button type="button" onClick={handleStop}>Stop</button>
    </>
  );
};

export default Speech;
