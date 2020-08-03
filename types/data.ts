export type VideoDataType = {
  id: number,
  key: string,
  link: string,
  bloggerId: number,
  createdAt: string,
  updatedAt: string,
};

export type BloggerDataType = {
  id: number,
  name: string,
  avatar: string,
  QRCode: string,
  createdAt: string,
  updatedAt: string,
  videos: VideoDataType[],
  parties: any,
};

// Тестовые

export type UserLoginResponseType = {
  ok: boolean,
  id: string,
  token: string,
};

export type UserProgressResponseType = {
  ok: boolean,
  name: string,
  id: string,
  progress: number,
};

export type BloggerDataResponseType = {
  ok: boolean,
  data?: BloggerDataType,
};

export type BloggerListResponseType = {
  ok: boolean,
  list: BloggerDataType[],
};
