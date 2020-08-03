import { BloggerDataType } from '../../types/data';

import photo1 from './images/1.png';
import photo2 from './images/2.png';
import photo3 from './images/3.png';
import photo4 from './images/4.png';
import photo5 from './images/5.png';

type BloggersType = BloggerDataType[];

const bloggers: BloggersType = [
  {
    id: 1,
    name: 'Милана Некрасова',
    avatar: photo1,
    QRCode: 'https://disney.ams3.cdn.digitaloceanspaces.com/mickey/bloggers/4/QRCode.png',
    createdAt: '2020-07-30T13:15:28.324Z',
    updatedAt: '2020-07-30T13:15:29.506Z',
    videos: [
      {
        id: 16,
        key: 'LATE_ACCESS_ALLOWED',
        link: 'https://disney.ams3.cdn.digitaloceanspaces.com/mickey/bloggers/4/videos/LATE_ACCESS_ALLOWED.mp4',
        bloggerId: 4,
        createdAt: '2020-07-31T15:07:15.160Z',
        updatedAt: '2020-07-31T15:07:15.160Z',
      },
      {
        id: 15,
        key: 'LATE_ACCESS_DECLINED',
        link: 'https://disney.ams3.cdn.digitaloceanspaces.com/mickey/bloggers/4/videos/LATE_ACCESS_DECLINED.mp4',
        bloggerId: 4,
        createdAt: '2020-07-31T15:06:55.938Z',
        updatedAt: '2020-07-31T15:06:55.938Z',
      },
      {
        id: 14,
        key: 'LATE_ACCESS',
        link: 'https://disney.ams3.cdn.digitaloceanspaces.com/mickey/bloggers/4/videos/LATE_ACCESS.mp4',
        bloggerId: 4,
        createdAt: '2020-07-31T15:06:43.610Z',
        updatedAt: '2020-07-31T15:06:43.610Z',
      },
      {
        id: 13,
        key: 'ENGAGE_PAUSE',
        link: 'https://disney.ams3.cdn.digitaloceanspaces.com/mickey/bloggers/4/videos/ENGAGE_PAUSE.mp4',
        bloggerId: 4,
        createdAt: '2020-07-31T15:06:30.977Z',
        updatedAt: '2020-07-31T15:06:30.977Z',
      },
      {
        id: 12,
        key: 'ENGAGE_NO_WORD',
        link: 'https://disney.ams3.cdn.digitaloceanspaces.com/mickey/bloggers/4/videos/ENGAGE_NO_WORD.mp4',
        bloggerId: 4,
        createdAt: '2020-07-31T15:06:18.113Z',
        updatedAt: '2020-07-31T15:06:18.113Z',
      },
      {
        id: 11,
        key: 'ENGAGE_OTHER_WORD',
        link: 'https://disney.ams3.cdn.digitaloceanspaces.com/mickey/bloggers/4/videos/ENGAGE_OTHER_WORD.mp4',
        bloggerId: 4,
        createdAt: '2020-07-31T15:06:03.908Z',
        updatedAt: '2020-07-31T15:06:03.908Z',
      },
      {
        id: 10,
        key: 'ENGAGE_PLUTO',
        link: 'https://disney.ams3.cdn.digitaloceanspaces.com/mickey/bloggers/4/videos/ENGAGE_PLUTO.mp4',
        bloggerId: 4,
        createdAt: '2020-07-31T15:05:53.780Z',
        updatedAt: '2020-07-31T15:05:53.780Z',
      },
      {
        id: 9,
        key: 'ENGAGE',
        link: 'https://disney.ams3.cdn.digitaloceanspaces.com/mickey/bloggers/4/videos/ENGAGE.mp4',
        bloggerId: 4,
        createdAt: '2020-07-31T15:05:42.968Z',
        updatedAt: '2020-07-31T15:05:42.968Z',
      },
      {
        id: 8,
        key: 'USE_PHONE',
        link: 'https://disney.ams3.cdn.digitaloceanspaces.com/mickey/bloggers/4/videos/USE_PHONE.mp4',
        bloggerId: 4,
        createdAt: '2020-07-31T15:05:30.707Z',
        updatedAt: '2020-07-31T15:05:30.707Z',
      },
      {
        id: 7,
        key: 'NO_ACCESS_2',
        link: 'https://disney.ams3.cdn.digitaloceanspaces.com/mickey/bloggers/4/videos/NO_ACCESS_2.mp4',
        bloggerId: 4,
        createdAt: '2020-07-31T15:05:04.790Z',
        updatedAt: '2020-07-31T15:05:04.790Z',
      },
      {
        id: 6,
        key: 'NO_ACCESS_1',
        link: 'https://disney.ams3.cdn.digitaloceanspaces.com/mickey/bloggers/4/videos/NO_ACCESS_1.mp4',
        bloggerId: 4,
        createdAt: '2020-07-31T15:04:53.874Z',
        updatedAt: '2020-07-31T15:04:53.874Z',
      },
      {
        id: 5,
        key: 'MIC_AND_CAMERA_SPEECH_AUTH_NEW',
        link: 'https://disney.ams3.cdn.digitaloceanspaces.com/mickey/bloggers/4/videos/MIC_AND_CAMERA_SPEECH_AUTH_NEW.mp4',
        bloggerId: 4,
        createdAt: '2020-07-31T14:59:36.162Z',
        updatedAt: '2020-07-31T14:59:36.162Z',
      },
      {
        id: 4,
        key: 'MIC_AND_CAMERA_SPEECH_AUTH',
        link: 'https://disney.ams3.cdn.digitaloceanspaces.com/mickey/bloggers/4/videos/MIC_AND_CAMERA_SPEECH_AUTH.mp4',
        bloggerId: 4,
        createdAt: '2020-07-31T14:56:51.582Z',
        updatedAt: '2020-07-31T14:56:51.582Z',
      },
      {
        id: 3,
        key: 'MIC_AND_CAMERA_SPEECH_NOT_AUTH',
        link: 'https://disney.ams3.cdn.digitaloceanspaces.com/mickey/bloggers/4/videos/MIC_AND_CAMERA_SPEECH_NOT_AUTH.mp4',
        bloggerId: 4,
        createdAt: '2020-07-31T14:55:15.484Z',
        updatedAt: '2020-07-31T14:55:15.484Z',
      },
      {
        id: 2,
        key: 'ZERO_SPEECH',
        link: 'https://disney.ams3.cdn.digitaloceanspaces.com/mickey/bloggers/4/videos/ZERO_SPEECH.mp4',
        bloggerId: 4,
        createdAt: '2020-07-30T13:23:11.759Z',
        updatedAt: '2020-07-30T13:23:11.759Z',
      },
    ],
    parties: [],
  },
  {
    id: 2,
    name: 'Александра Star',
    avatar: photo2,
    QRCode: 'https://disney.ams3.cdn.digitaloceanspaces.com/mickey/bloggers/4/QRCode.png',
    createdAt: '2020-07-30T13:15:28.324Z',
    updatedAt: '2020-07-30T13:15:29.506Z',
    videos: [
      {
        id: 16,
        key: 'LATE_ACCESS_ALLOWED',
        link: 'https://disney.ams3.cdn.digitaloceanspaces.com/mickey/bloggers/4/videos/LATE_ACCESS_ALLOWED.mp4',
        bloggerId: 4,
        createdAt: '2020-07-31T15:07:15.160Z',
        updatedAt: '2020-07-31T15:07:15.160Z',
      },
      {
        id: 15,
        key: 'LATE_ACCESS_DECLINED',
        link: 'https://disney.ams3.cdn.digitaloceanspaces.com/mickey/bloggers/4/videos/LATE_ACCESS_DECLINED.mp4',
        bloggerId: 4,
        createdAt: '2020-07-31T15:06:55.938Z',
        updatedAt: '2020-07-31T15:06:55.938Z',
      },
      {
        id: 14,
        key: 'LATE_ACCESS',
        link: 'https://disney.ams3.cdn.digitaloceanspaces.com/mickey/bloggers/4/videos/LATE_ACCESS.mp4',
        bloggerId: 4,
        createdAt: '2020-07-31T15:06:43.610Z',
        updatedAt: '2020-07-31T15:06:43.610Z',
      },
      {
        id: 13,
        key: 'ENGAGE_PAUSE',
        link: 'https://disney.ams3.cdn.digitaloceanspaces.com/mickey/bloggers/4/videos/ENGAGE_PAUSE.mp4',
        bloggerId: 4,
        createdAt: '2020-07-31T15:06:30.977Z',
        updatedAt: '2020-07-31T15:06:30.977Z',
      },
      {
        id: 12,
        key: 'ENGAGE_NO_WORD',
        link: 'https://disney.ams3.cdn.digitaloceanspaces.com/mickey/bloggers/4/videos/ENGAGE_NO_WORD.mp4',
        bloggerId: 4,
        createdAt: '2020-07-31T15:06:18.113Z',
        updatedAt: '2020-07-31T15:06:18.113Z',
      },
      {
        id: 11,
        key: 'ENGAGE_OTHER_WORD',
        link: 'https://disney.ams3.cdn.digitaloceanspaces.com/mickey/bloggers/4/videos/ENGAGE_OTHER_WORD.mp4',
        bloggerId: 4,
        createdAt: '2020-07-31T15:06:03.908Z',
        updatedAt: '2020-07-31T15:06:03.908Z',
      },
      {
        id: 10,
        key: 'ENGAGE_PLUTO',
        link: 'https://disney.ams3.cdn.digitaloceanspaces.com/mickey/bloggers/4/videos/ENGAGE_PLUTO.mp4',
        bloggerId: 4,
        createdAt: '2020-07-31T15:05:53.780Z',
        updatedAt: '2020-07-31T15:05:53.780Z',
      },
      {
        id: 9,
        key: 'ENGAGE',
        link: 'https://disney.ams3.cdn.digitaloceanspaces.com/mickey/bloggers/4/videos/ENGAGE.mp4',
        bloggerId: 4,
        createdAt: '2020-07-31T15:05:42.968Z',
        updatedAt: '2020-07-31T15:05:42.968Z',
      },
      {
        id: 8,
        key: 'USE_PHONE',
        link: 'https://disney.ams3.cdn.digitaloceanspaces.com/mickey/bloggers/4/videos/USE_PHONE.mp4',
        bloggerId: 4,
        createdAt: '2020-07-31T15:05:30.707Z',
        updatedAt: '2020-07-31T15:05:30.707Z',
      },
      {
        id: 7,
        key: 'NO_ACCESS_2',
        link: 'https://disney.ams3.cdn.digitaloceanspaces.com/mickey/bloggers/4/videos/NO_ACCESS_2.mp4',
        bloggerId: 4,
        createdAt: '2020-07-31T15:05:04.790Z',
        updatedAt: '2020-07-31T15:05:04.790Z',
      },
      {
        id: 6,
        key: 'NO_ACCESS_1',
        link: 'https://disney.ams3.cdn.digitaloceanspaces.com/mickey/bloggers/4/videos/NO_ACCESS_1.mp4',
        bloggerId: 4,
        createdAt: '2020-07-31T15:04:53.874Z',
        updatedAt: '2020-07-31T15:04:53.874Z',
      },
      {
        id: 5,
        key: 'MIC_AND_CAMERA_SPEECH_AUTH_NEW',
        link: 'https://disney.ams3.cdn.digitaloceanspaces.com/mickey/bloggers/4/videos/MIC_AND_CAMERA_SPEECH_AUTH_NEW.mp4',
        bloggerId: 4,
        createdAt: '2020-07-31T14:59:36.162Z',
        updatedAt: '2020-07-31T14:59:36.162Z',
      },
      {
        id: 4,
        key: 'MIC_AND_CAMERA_SPEECH_AUTH',
        link: 'https://disney.ams3.cdn.digitaloceanspaces.com/mickey/bloggers/4/videos/MIC_AND_CAMERA_SPEECH_AUTH.mp4',
        bloggerId: 4,
        createdAt: '2020-07-31T14:56:51.582Z',
        updatedAt: '2020-07-31T14:56:51.582Z',
      },
      {
        id: 3,
        key: 'MIC_AND_CAMERA_SPEECH_NOT_AUTH',
        link: 'https://disney.ams3.cdn.digitaloceanspaces.com/mickey/bloggers/4/videos/MIC_AND_CAMERA_SPEECH_NOT_AUTH.mp4',
        bloggerId: 4,
        createdAt: '2020-07-31T14:55:15.484Z',
        updatedAt: '2020-07-31T14:55:15.484Z',
      },
      {
        id: 2,
        key: 'ZERO_SPEECH',
        link: 'https://disney.ams3.cdn.digitaloceanspaces.com/mickey/bloggers/4/videos/ZERO_SPEECH.mp4',
        bloggerId: 4,
        createdAt: '2020-07-30T13:23:11.759Z',
        updatedAt: '2020-07-30T13:23:11.759Z',
      },
    ],
    parties: [],
  },
  {
    id: 3,
    name: 'Танечка Винникова',
    avatar: photo3,
    QRCode: 'https://disney.ams3.cdn.digitaloceanspaces.com/mickey/bloggers/4/QRCode.png',
    createdAt: '2020-07-30T13:15:28.324Z',
    updatedAt: '2020-07-30T13:15:29.506Z',
    videos: [
      {
        id: 16,
        key: 'LATE_ACCESS_ALLOWED',
        link: 'https://disney.ams3.cdn.digitaloceanspaces.com/mickey/bloggers/4/videos/LATE_ACCESS_ALLOWED.mp4',
        bloggerId: 4,
        createdAt: '2020-07-31T15:07:15.160Z',
        updatedAt: '2020-07-31T15:07:15.160Z',
      },
      {
        id: 15,
        key: 'LATE_ACCESS_DECLINED',
        link: 'https://disney.ams3.cdn.digitaloceanspaces.com/mickey/bloggers/4/videos/LATE_ACCESS_DECLINED.mp4',
        bloggerId: 4,
        createdAt: '2020-07-31T15:06:55.938Z',
        updatedAt: '2020-07-31T15:06:55.938Z',
      },
      {
        id: 14,
        key: 'LATE_ACCESS',
        link: 'https://disney.ams3.cdn.digitaloceanspaces.com/mickey/bloggers/4/videos/LATE_ACCESS.mp4',
        bloggerId: 4,
        createdAt: '2020-07-31T15:06:43.610Z',
        updatedAt: '2020-07-31T15:06:43.610Z',
      },
      {
        id: 13,
        key: 'ENGAGE_PAUSE',
        link: 'https://disney.ams3.cdn.digitaloceanspaces.com/mickey/bloggers/4/videos/ENGAGE_PAUSE.mp4',
        bloggerId: 4,
        createdAt: '2020-07-31T15:06:30.977Z',
        updatedAt: '2020-07-31T15:06:30.977Z',
      },
      {
        id: 12,
        key: 'ENGAGE_NO_WORD',
        link: 'https://disney.ams3.cdn.digitaloceanspaces.com/mickey/bloggers/4/videos/ENGAGE_NO_WORD.mp4',
        bloggerId: 4,
        createdAt: '2020-07-31T15:06:18.113Z',
        updatedAt: '2020-07-31T15:06:18.113Z',
      },
      {
        id: 11,
        key: 'ENGAGE_OTHER_WORD',
        link: 'https://disney.ams3.cdn.digitaloceanspaces.com/mickey/bloggers/4/videos/ENGAGE_OTHER_WORD.mp4',
        bloggerId: 4,
        createdAt: '2020-07-31T15:06:03.908Z',
        updatedAt: '2020-07-31T15:06:03.908Z',
      },
      {
        id: 10,
        key: 'ENGAGE_PLUTO',
        link: 'https://disney.ams3.cdn.digitaloceanspaces.com/mickey/bloggers/4/videos/ENGAGE_PLUTO.mp4',
        bloggerId: 4,
        createdAt: '2020-07-31T15:05:53.780Z',
        updatedAt: '2020-07-31T15:05:53.780Z',
      },
      {
        id: 9,
        key: 'ENGAGE',
        link: 'https://disney.ams3.cdn.digitaloceanspaces.com/mickey/bloggers/4/videos/ENGAGE.mp4',
        bloggerId: 4,
        createdAt: '2020-07-31T15:05:42.968Z',
        updatedAt: '2020-07-31T15:05:42.968Z',
      },
      {
        id: 8,
        key: 'USE_PHONE',
        link: 'https://disney.ams3.cdn.digitaloceanspaces.com/mickey/bloggers/4/videos/USE_PHONE.mp4',
        bloggerId: 4,
        createdAt: '2020-07-31T15:05:30.707Z',
        updatedAt: '2020-07-31T15:05:30.707Z',
      },
      {
        id: 7,
        key: 'NO_ACCESS_2',
        link: 'https://disney.ams3.cdn.digitaloceanspaces.com/mickey/bloggers/4/videos/NO_ACCESS_2.mp4',
        bloggerId: 4,
        createdAt: '2020-07-31T15:05:04.790Z',
        updatedAt: '2020-07-31T15:05:04.790Z',
      },
      {
        id: 6,
        key: 'NO_ACCESS_1',
        link: 'https://disney.ams3.cdn.digitaloceanspaces.com/mickey/bloggers/4/videos/NO_ACCESS_1.mp4',
        bloggerId: 4,
        createdAt: '2020-07-31T15:04:53.874Z',
        updatedAt: '2020-07-31T15:04:53.874Z',
      },
      {
        id: 5,
        key: 'MIC_AND_CAMERA_SPEECH_AUTH_NEW',
        link: 'https://disney.ams3.cdn.digitaloceanspaces.com/mickey/bloggers/4/videos/MIC_AND_CAMERA_SPEECH_AUTH_NEW.mp4',
        bloggerId: 4,
        createdAt: '2020-07-31T14:59:36.162Z',
        updatedAt: '2020-07-31T14:59:36.162Z',
      },
      {
        id: 4,
        key: 'MIC_AND_CAMERA_SPEECH_AUTH',
        link: 'https://disney.ams3.cdn.digitaloceanspaces.com/mickey/bloggers/4/videos/MIC_AND_CAMERA_SPEECH_AUTH.mp4',
        bloggerId: 4,
        createdAt: '2020-07-31T14:56:51.582Z',
        updatedAt: '2020-07-31T14:56:51.582Z',
      },
      {
        id: 3,
        key: 'MIC_AND_CAMERA_SPEECH_NOT_AUTH',
        link: 'https://disney.ams3.cdn.digitaloceanspaces.com/mickey/bloggers/4/videos/MIC_AND_CAMERA_SPEECH_NOT_AUTH.mp4',
        bloggerId: 4,
        createdAt: '2020-07-31T14:55:15.484Z',
        updatedAt: '2020-07-31T14:55:15.484Z',
      },
      {
        id: 2,
        key: 'ZERO_SPEECH',
        link: 'https://disney.ams3.cdn.digitaloceanspaces.com/mickey/bloggers/4/videos/ZERO_SPEECH.mp4',
        bloggerId: 4,
        createdAt: '2020-07-30T13:23:11.759Z',
        updatedAt: '2020-07-30T13:23:11.759Z',
      },
    ],
    parties: [],
  },
  {
    id: 5,
    name: 'Женя Кошевой',
    avatar: photo4,
    QRCode: 'https://disney.ams3.cdn.digitaloceanspaces.com/mickey/bloggers/4/QRCode.png',
    createdAt: '2020-07-30T13:15:28.324Z',
    updatedAt: '2020-07-30T13:15:29.506Z',
    videos: [
      {
        id: 16,
        key: 'LATE_ACCESS_ALLOWED',
        link: 'https://disney.ams3.cdn.digitaloceanspaces.com/mickey/bloggers/4/videos/LATE_ACCESS_ALLOWED.mp4',
        bloggerId: 4,
        createdAt: '2020-07-31T15:07:15.160Z',
        updatedAt: '2020-07-31T15:07:15.160Z',
      },
      {
        id: 15,
        key: 'LATE_ACCESS_DECLINED',
        link: 'https://disney.ams3.cdn.digitaloceanspaces.com/mickey/bloggers/4/videos/LATE_ACCESS_DECLINED.mp4',
        bloggerId: 4,
        createdAt: '2020-07-31T15:06:55.938Z',
        updatedAt: '2020-07-31T15:06:55.938Z',
      },
      {
        id: 14,
        key: 'LATE_ACCESS',
        link: 'https://disney.ams3.cdn.digitaloceanspaces.com/mickey/bloggers/4/videos/LATE_ACCESS.mp4',
        bloggerId: 4,
        createdAt: '2020-07-31T15:06:43.610Z',
        updatedAt: '2020-07-31T15:06:43.610Z',
      },
      {
        id: 13,
        key: 'ENGAGE_PAUSE',
        link: 'https://disney.ams3.cdn.digitaloceanspaces.com/mickey/bloggers/4/videos/ENGAGE_PAUSE.mp4',
        bloggerId: 4,
        createdAt: '2020-07-31T15:06:30.977Z',
        updatedAt: '2020-07-31T15:06:30.977Z',
      },
      {
        id: 12,
        key: 'ENGAGE_NO_WORD',
        link: 'https://disney.ams3.cdn.digitaloceanspaces.com/mickey/bloggers/4/videos/ENGAGE_NO_WORD.mp4',
        bloggerId: 4,
        createdAt: '2020-07-31T15:06:18.113Z',
        updatedAt: '2020-07-31T15:06:18.113Z',
      },
      {
        id: 11,
        key: 'ENGAGE_OTHER_WORD',
        link: 'https://disney.ams3.cdn.digitaloceanspaces.com/mickey/bloggers/4/videos/ENGAGE_OTHER_WORD.mp4',
        bloggerId: 4,
        createdAt: '2020-07-31T15:06:03.908Z',
        updatedAt: '2020-07-31T15:06:03.908Z',
      },
      {
        id: 10,
        key: 'ENGAGE_PLUTO',
        link: 'https://disney.ams3.cdn.digitaloceanspaces.com/mickey/bloggers/4/videos/ENGAGE_PLUTO.mp4',
        bloggerId: 4,
        createdAt: '2020-07-31T15:05:53.780Z',
        updatedAt: '2020-07-31T15:05:53.780Z',
      },
      {
        id: 9,
        key: 'ENGAGE',
        link: 'https://disney.ams3.cdn.digitaloceanspaces.com/mickey/bloggers/4/videos/ENGAGE.mp4',
        bloggerId: 4,
        createdAt: '2020-07-31T15:05:42.968Z',
        updatedAt: '2020-07-31T15:05:42.968Z',
      },
      {
        id: 8,
        key: 'USE_PHONE',
        link: 'https://disney.ams3.cdn.digitaloceanspaces.com/mickey/bloggers/4/videos/USE_PHONE.mp4',
        bloggerId: 4,
        createdAt: '2020-07-31T15:05:30.707Z',
        updatedAt: '2020-07-31T15:05:30.707Z',
      },
      {
        id: 7,
        key: 'NO_ACCESS_2',
        link: 'https://disney.ams3.cdn.digitaloceanspaces.com/mickey/bloggers/4/videos/NO_ACCESS_2.mp4',
        bloggerId: 4,
        createdAt: '2020-07-31T15:05:04.790Z',
        updatedAt: '2020-07-31T15:05:04.790Z',
      },
      {
        id: 6,
        key: 'NO_ACCESS_1',
        link: 'https://disney.ams3.cdn.digitaloceanspaces.com/mickey/bloggers/4/videos/NO_ACCESS_1.mp4',
        bloggerId: 4,
        createdAt: '2020-07-31T15:04:53.874Z',
        updatedAt: '2020-07-31T15:04:53.874Z',
      },
      {
        id: 5,
        key: 'MIC_AND_CAMERA_SPEECH_AUTH_NEW',
        link: 'https://disney.ams3.cdn.digitaloceanspaces.com/mickey/bloggers/4/videos/MIC_AND_CAMERA_SPEECH_AUTH_NEW.mp4',
        bloggerId: 4,
        createdAt: '2020-07-31T14:59:36.162Z',
        updatedAt: '2020-07-31T14:59:36.162Z',
      },
      {
        id: 4,
        key: 'MIC_AND_CAMERA_SPEECH_AUTH',
        link: 'https://disney.ams3.cdn.digitaloceanspaces.com/mickey/bloggers/4/videos/MIC_AND_CAMERA_SPEECH_AUTH.mp4',
        bloggerId: 4,
        createdAt: '2020-07-31T14:56:51.582Z',
        updatedAt: '2020-07-31T14:56:51.582Z',
      },
      {
        id: 3,
        key: 'MIC_AND_CAMERA_SPEECH_NOT_AUTH',
        link: 'https://disney.ams3.cdn.digitaloceanspaces.com/mickey/bloggers/4/videos/MIC_AND_CAMERA_SPEECH_NOT_AUTH.mp4',
        bloggerId: 4,
        createdAt: '2020-07-31T14:55:15.484Z',
        updatedAt: '2020-07-31T14:55:15.484Z',
      },
      {
        id: 2,
        key: 'ZERO_SPEECH',
        link: 'https://disney.ams3.cdn.digitaloceanspaces.com/mickey/bloggers/4/videos/ZERO_SPEECH.mp4',
        bloggerId: 4,
        createdAt: '2020-07-30T13:23:11.759Z',
        updatedAt: '2020-07-30T13:23:11.759Z',
      },
    ],
    parties: [],
  },
  {
    id: 6,
    name: 'Инна Приветик',
    avatar: photo5,
    QRCode: 'https://disney.ams3.cdn.digitaloceanspaces.com/mickey/bloggers/4/QRCode.png',
    createdAt: '2020-07-30T13:15:28.324Z',
    updatedAt: '2020-07-30T13:15:29.506Z',
    videos: [
      {
        id: 16,
        key: 'LATE_ACCESS_ALLOWED',
        link: 'https://disney.ams3.cdn.digitaloceanspaces.com/mickey/bloggers/4/videos/LATE_ACCESS_ALLOWED.mp4',
        bloggerId: 4,
        createdAt: '2020-07-31T15:07:15.160Z',
        updatedAt: '2020-07-31T15:07:15.160Z',
      },
      {
        id: 15,
        key: 'LATE_ACCESS_DECLINED',
        link: 'https://disney.ams3.cdn.digitaloceanspaces.com/mickey/bloggers/4/videos/LATE_ACCESS_DECLINED.mp4',
        bloggerId: 4,
        createdAt: '2020-07-31T15:06:55.938Z',
        updatedAt: '2020-07-31T15:06:55.938Z',
      },
      {
        id: 14,
        key: 'LATE_ACCESS',
        link: 'https://disney.ams3.cdn.digitaloceanspaces.com/mickey/bloggers/4/videos/LATE_ACCESS.mp4',
        bloggerId: 4,
        createdAt: '2020-07-31T15:06:43.610Z',
        updatedAt: '2020-07-31T15:06:43.610Z',
      },
      {
        id: 13,
        key: 'ENGAGE_PAUSE',
        link: 'https://disney.ams3.cdn.digitaloceanspaces.com/mickey/bloggers/4/videos/ENGAGE_PAUSE.mp4',
        bloggerId: 4,
        createdAt: '2020-07-31T15:06:30.977Z',
        updatedAt: '2020-07-31T15:06:30.977Z',
      },
      {
        id: 12,
        key: 'ENGAGE_NO_WORD',
        link: 'https://disney.ams3.cdn.digitaloceanspaces.com/mickey/bloggers/4/videos/ENGAGE_NO_WORD.mp4',
        bloggerId: 4,
        createdAt: '2020-07-31T15:06:18.113Z',
        updatedAt: '2020-07-31T15:06:18.113Z',
      },
      {
        id: 11,
        key: 'ENGAGE_OTHER_WORD',
        link: 'https://disney.ams3.cdn.digitaloceanspaces.com/mickey/bloggers/4/videos/ENGAGE_OTHER_WORD.mp4',
        bloggerId: 4,
        createdAt: '2020-07-31T15:06:03.908Z',
        updatedAt: '2020-07-31T15:06:03.908Z',
      },
      {
        id: 10,
        key: 'ENGAGE_PLUTO',
        link: 'https://disney.ams3.cdn.digitaloceanspaces.com/mickey/bloggers/4/videos/ENGAGE_PLUTO.mp4',
        bloggerId: 4,
        createdAt: '2020-07-31T15:05:53.780Z',
        updatedAt: '2020-07-31T15:05:53.780Z',
      },
      {
        id: 9,
        key: 'ENGAGE',
        link: 'https://disney.ams3.cdn.digitaloceanspaces.com/mickey/bloggers/4/videos/ENGAGE.mp4',
        bloggerId: 4,
        createdAt: '2020-07-31T15:05:42.968Z',
        updatedAt: '2020-07-31T15:05:42.968Z',
      },
      {
        id: 8,
        key: 'USE_PHONE',
        link: 'https://disney.ams3.cdn.digitaloceanspaces.com/mickey/bloggers/4/videos/USE_PHONE.mp4',
        bloggerId: 4,
        createdAt: '2020-07-31T15:05:30.707Z',
        updatedAt: '2020-07-31T15:05:30.707Z',
      },
      {
        id: 7,
        key: 'NO_ACCESS_2',
        link: 'https://disney.ams3.cdn.digitaloceanspaces.com/mickey/bloggers/4/videos/NO_ACCESS_2.mp4',
        bloggerId: 4,
        createdAt: '2020-07-31T15:05:04.790Z',
        updatedAt: '2020-07-31T15:05:04.790Z',
      },
      {
        id: 6,
        key: 'NO_ACCESS_1',
        link: 'https://disney.ams3.cdn.digitaloceanspaces.com/mickey/bloggers/4/videos/NO_ACCESS_1.mp4',
        bloggerId: 4,
        createdAt: '2020-07-31T15:04:53.874Z',
        updatedAt: '2020-07-31T15:04:53.874Z',
      },
      {
        id: 5,
        key: 'MIC_AND_CAMERA_SPEECH_AUTH_NEW',
        link: 'https://disney.ams3.cdn.digitaloceanspaces.com/mickey/bloggers/4/videos/MIC_AND_CAMERA_SPEECH_AUTH_NEW.mp4',
        bloggerId: 4,
        createdAt: '2020-07-31T14:59:36.162Z',
        updatedAt: '2020-07-31T14:59:36.162Z',
      },
      {
        id: 4,
        key: 'MIC_AND_CAMERA_SPEECH_AUTH',
        link: 'https://disney.ams3.cdn.digitaloceanspaces.com/mickey/bloggers/4/videos/MIC_AND_CAMERA_SPEECH_AUTH.mp4',
        bloggerId: 4,
        createdAt: '2020-07-31T14:56:51.582Z',
        updatedAt: '2020-07-31T14:56:51.582Z',
      },
      {
        id: 3,
        key: 'MIC_AND_CAMERA_SPEECH_NOT_AUTH',
        link: 'https://disney.ams3.cdn.digitaloceanspaces.com/mickey/bloggers/4/videos/MIC_AND_CAMERA_SPEECH_NOT_AUTH.mp4',
        bloggerId: 4,
        createdAt: '2020-07-31T14:55:15.484Z',
        updatedAt: '2020-07-31T14:55:15.484Z',
      },
      {
        id: 2,
        key: 'ZERO_SPEECH',
        link: 'https://disney.ams3.cdn.digitaloceanspaces.com/mickey/bloggers/4/videos/ZERO_SPEECH.mp4',
        bloggerId: 4,
        createdAt: '2020-07-30T13:23:11.759Z',
        updatedAt: '2020-07-30T13:23:11.759Z',
      },
    ],
    parties: [],
  },
  {
    id: 4,
    name: 'Сергей Наханович',
    avatar: 'https://disney.ams3.cdn.digitaloceanspaces.com/mickey/bloggers/4/avatar.png',
    QRCode: 'https://disney.ams3.cdn.digitaloceanspaces.com/mickey/bloggers/4/QRCode.png',
    createdAt: '2020-07-30T13:15:28.324Z',
    updatedAt: '2020-07-30T13:15:29.506Z',
    videos: [
      {
        id: 16,
        key: 'LATE_ACCESS_ALLOWED',
        link: 'https://disney.ams3.cdn.digitaloceanspaces.com/mickey/bloggers/4/videos/LATE_ACCESS_ALLOWED.mp4',
        bloggerId: 4,
        createdAt: '2020-07-31T15:07:15.160Z',
        updatedAt: '2020-07-31T15:07:15.160Z',
      },
      {
        id: 15,
        key: 'LATE_ACCESS_DECLINED',
        link: 'https://disney.ams3.cdn.digitaloceanspaces.com/mickey/bloggers/4/videos/LATE_ACCESS_DECLINED.mp4',
        bloggerId: 4,
        createdAt: '2020-07-31T15:06:55.938Z',
        updatedAt: '2020-07-31T15:06:55.938Z',
      },
      {
        id: 14,
        key: 'LATE_ACCESS',
        link: 'https://disney.ams3.cdn.digitaloceanspaces.com/mickey/bloggers/4/videos/LATE_ACCESS.mp4',
        bloggerId: 4,
        createdAt: '2020-07-31T15:06:43.610Z',
        updatedAt: '2020-07-31T15:06:43.610Z',
      },
      {
        id: 13,
        key: 'ENGAGE_PAUSE',
        link: 'https://disney.ams3.cdn.digitaloceanspaces.com/mickey/bloggers/4/videos/ENGAGE_PAUSE.mp4',
        bloggerId: 4,
        createdAt: '2020-07-31T15:06:30.977Z',
        updatedAt: '2020-07-31T15:06:30.977Z',
      },
      {
        id: 12,
        key: 'ENGAGE_NO_WORD',
        link: 'https://disney.ams3.cdn.digitaloceanspaces.com/mickey/bloggers/4/videos/ENGAGE_NO_WORD.mp4',
        bloggerId: 4,
        createdAt: '2020-07-31T15:06:18.113Z',
        updatedAt: '2020-07-31T15:06:18.113Z',
      },
      {
        id: 11,
        key: 'ENGAGE_OTHER_WORD',
        link: 'https://disney.ams3.cdn.digitaloceanspaces.com/mickey/bloggers/4/videos/ENGAGE_OTHER_WORD.mp4',
        bloggerId: 4,
        createdAt: '2020-07-31T15:06:03.908Z',
        updatedAt: '2020-07-31T15:06:03.908Z',
      },
      {
        id: 10,
        key: 'ENGAGE_PLUTO',
        link: 'https://disney.ams3.cdn.digitaloceanspaces.com/mickey/bloggers/4/videos/ENGAGE_PLUTO.mp4',
        bloggerId: 4,
        createdAt: '2020-07-31T15:05:53.780Z',
        updatedAt: '2020-07-31T15:05:53.780Z',
      },
      {
        id: 9,
        key: 'ENGAGE',
        link: 'https://disney.ams3.cdn.digitaloceanspaces.com/mickey/bloggers/4/videos/ENGAGE.mp4',
        bloggerId: 4,
        createdAt: '2020-07-31T15:05:42.968Z',
        updatedAt: '2020-07-31T15:05:42.968Z',
      },
      {
        id: 8,
        key: 'USE_PHONE',
        link: 'https://disney.ams3.cdn.digitaloceanspaces.com/mickey/bloggers/4/videos/USE_PHONE.mp4',
        bloggerId: 4,
        createdAt: '2020-07-31T15:05:30.707Z',
        updatedAt: '2020-07-31T15:05:30.707Z',
      },
      {
        id: 7,
        key: 'NO_ACCESS_2',
        link: 'https://disney.ams3.cdn.digitaloceanspaces.com/mickey/bloggers/4/videos/NO_ACCESS_2.mp4',
        bloggerId: 4,
        createdAt: '2020-07-31T15:05:04.790Z',
        updatedAt: '2020-07-31T15:05:04.790Z',
      },
      {
        id: 6,
        key: 'NO_ACCESS_1',
        link: 'https://disney.ams3.cdn.digitaloceanspaces.com/mickey/bloggers/4/videos/NO_ACCESS_1.mp4',
        bloggerId: 4,
        createdAt: '2020-07-31T15:04:53.874Z',
        updatedAt: '2020-07-31T15:04:53.874Z',
      },
      {
        id: 5,
        key: 'MIC_AND_CAMERA_SPEECH_AUTH_NEW',
        link: 'https://disney.ams3.cdn.digitaloceanspaces.com/mickey/bloggers/4/videos/MIC_AND_CAMERA_SPEECH_AUTH_NEW.mp4',
        bloggerId: 4,
        createdAt: '2020-07-31T14:59:36.162Z',
        updatedAt: '2020-07-31T14:59:36.162Z',
      },
      {
        id: 4,
        key: 'MIC_AND_CAMERA_SPEECH_AUTH',
        link: 'https://disney.ams3.cdn.digitaloceanspaces.com/mickey/bloggers/4/videos/MIC_AND_CAMERA_SPEECH_AUTH.mp4',
        bloggerId: 4,
        createdAt: '2020-07-31T14:56:51.582Z',
        updatedAt: '2020-07-31T14:56:51.582Z',
      },
      {
        id: 3,
        key: 'MIC_AND_CAMERA_SPEECH_NOT_AUTH',
        link: 'https://disney.ams3.cdn.digitaloceanspaces.com/mickey/bloggers/4/videos/MIC_AND_CAMERA_SPEECH_NOT_AUTH.mp4',
        bloggerId: 4,
        createdAt: '2020-07-31T14:55:15.484Z',
        updatedAt: '2020-07-31T14:55:15.484Z',
      },
      {
        id: 2,
        key: 'ZERO_SPEECH',
        link: 'https://disney.ams3.cdn.digitaloceanspaces.com/mickey/bloggers/4/videos/ZERO_SPEECH.mp4',
        bloggerId: 4,
        createdAt: '2020-07-30T13:23:11.759Z',
        updatedAt: '2020-07-30T13:23:11.759Z',
      },
    ],
    parties: [],
  },
];

export default bloggers;
