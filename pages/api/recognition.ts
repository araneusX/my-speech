import { NextApiResponse, NextApiRequest } from 'next';

import SpeechToTextV1 from 'ibm-watson/speech-to-text/v1';
import { IamAuthenticator } from 'ibm-watson/auth';
import fs from 'fs';
import multiparty from 'multiparty';

const form = new multiparty.Form();

const promisifyUpload = (
  req:NextApiRequest,
): Promise<{ fields: any, files: any }> => new Promise((resolve, reject) => {
  form.parse(req, (err, fields, files) => {
    if (err) return reject(err);

    return resolve({ fields, files });
  });
});

const speechToText = new SpeechToTextV1({
  authenticator: new IamAuthenticator({
    apikey: 'dPXyasngvhe_jPmvfmoriMNfEXeVC3lOzhyXjAKTeB0A',
  }),
  url: 'https://api.au-syd.speech-to-text.watson.cloud.ibm.com/instances/e671c138-b5ee-454e-9050-a0b46fb325a2',
});

export default async (req:NextApiRequest, res:NextApiResponse) => {
  const { files, fields } = await promisifyUpload(req);
  const audio = fs.createReadStream(files.voice[0].path);
  const keyWords = JSON.parse(fields.keyWords[0]);

  const recognizeParams = {
    audio,
    contentType: 'audio/wav',
    wordAlternativesThreshold: 1,
    keywords: keyWords,
    keywordsThreshold: 0.1,
  };

  try {
    const speechRecognitionResults = await speechToText.recognize(recognizeParams, () => {});
    res.statusCode = 200;
    const { result } = speechRecognitionResults;
    if (result && result.results && result.results[0] && result.results[0].keywords_result) {
      res.json(Object.keys(result.results[0].keywords_result).length > 0);
    } else {
      res.json(false);
    }
  } catch (error) {
    res.statusCode = 500;
    res.json(error);
  }
};

export const config = {
  api: {
    bodyParser: false,
  },
};
