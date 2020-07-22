/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable react/jsx-one-expression-per-line */
// @ts-ignore
import AudioRecorder from 'audio-recorder-polyfill';
// @ts-ignore
import mpegEncoder from 'audio-recorder-polyfill/mpeg-encoder';
import { useState } from 'react';
import { variables } from '../constants';

AudioRecorder.encoder = mpegEncoder;
AudioRecorder.prototype.mimeType = 'audio/mpeg';
window.MediaRecorder = AudioRecorder;

const Speech = () => {
  const [isRec, setRec] = useState(false);
  const [mp3, setMp3] = useState('');
  const handleRecord = () => {
    const audio = new Audio();
    audio.play();
    navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
      setRec(true);
      variables.recorder = new MediaRecorder(stream);
      variables.recorder.addEventListener('dataavailable', (e: BlobEvent) => {
        audio.src = URL.createObjectURL(e.data);
        variables.voice.push(e.data);
        audio.play();
        setMp3(URL.createObjectURL(e.data));
      });

      variables.recorder.addEventListener('stop', () => {
        const voiceBlob = new Blob(variables.voice, {
          type: 'audio/mpeg',
        });

        const fd = new FormData();
        fd.append('voice', voiceBlob);

        fetch('http://localhost:3000/api/recognize', { method: 'POST', body: fd });
      });

      variables.recorder.start();
    });
  };

  const handleStop = () => {
    variables.recorder?.stop();
    variables.recorder?.stream.getTracks().forEach((i: MediaStreamTrack) => i.stop());
  };

  return (
    <>
      <button type="button" onClick={handleRecord}>Record</button>
      {isRec && 'recording!'}
      <button type="button" onClick={handleStop}>Stop</button>
      {mp3.length && mp3}
    </>
  );
};

export default Speech;
