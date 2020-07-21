// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiResponse, NextApiRequest } from 'next';

import SpeechToTextV1 from 'ibm-watson/speech-to-text/v1';
import { IamAuthenticator } from 'ibm-watson/auth';
import fs from 'fs';

const speechToText = new SpeechToTextV1({
  authenticator: new IamAuthenticator({
    apikey: 'dPXyasngvhe_jPmvfmoriMNfEXeVC3lOzhyXjAKTeB0A',
  }),
  url: 'https://api.au-syd.speech-to-text.watson.cloud.ibm.com/instances/e671c138-b5ee-454e-9050-a0b46fb325a2',
});

const recognizeParams = {
  audio: fs.createReadStream('audio-file2.flac'),
  contentType: 'audio/flac',
  wordAlternativesThreshold: 0.9,
  keywords: ['colorado', 'tornado', 'tornadoes'],
  keywordsThreshold: 0.5,
};

speechToText.recognize(recognizeParams, () => {})
  .then((speechRecognitionResults) => {
    console.log(JSON.stringify(speechRecognitionResults, null, 2));
  })
  .catch((err) => {
    console.log('error:', err);
  });

export default (req:NextApiRequest, res:NextApiResponse) => {
  res.statusCode = 200;
  res.json({ name: 'John Doe' });
};
