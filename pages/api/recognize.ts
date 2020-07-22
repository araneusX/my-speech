import { NextApiResponse, NextApiRequest } from 'next';

import SpeechToTextV1 from 'ibm-watson/speech-to-text/v1';
import { IamAuthenticator } from 'ibm-watson/auth';
import fs from 'fs';
import multiparty from 'multiparty';

const speechToText = new SpeechToTextV1({
  authenticator: new IamAuthenticator({
    apikey: 'dPXyasngvhe_jPmvfmoriMNfEXeVC3lOzhyXjAKTeB0A',
  }),
  url: 'https://api.au-syd.speech-to-text.watson.cloud.ibm.com/instances/e671c138-b5ee-454e-9050-a0b46fb325a2',
});

export default (req:NextApiRequest, res:NextApiResponse) => {
  const form = new multiparty.Form();

  form.parse(req, (err, fields, files) => {
    const audio = fs.createReadStream(files.voice[0].path);

    const recognizeParams = {
      audio,
      contentType: 'audio/mpeg',
      wordAlternativesThreshold: 0.9,
      keywords: ['hello'],
      keywordsThreshold: 0.5,
    };

    speechToText.recognize(recognizeParams, () => {})
      .then((speechRecognitionResults) => {
        console.log(JSON.stringify(speechRecognitionResults, null, 2));
      })
      .catch((err) => {
        console.log('error:', err);
      });
    
  });

  res.statusCode = 200;
  res.json({ name: 'John Doe' });
};

export const config = {
  api: {
    bodyParser: false,
  },
};
