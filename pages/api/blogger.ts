import { NextApiRequest, NextApiResponse } from 'next';
import Cors from 'cors';
import initMiddleware from '../../helpers/initMiddlvare';
import { bloggers } from '../../mosk-data';

const cors = initMiddleware(
  Cors({
    methods: ['GET', 'POST', 'OPTIONS'],
  }),
);

export default async (req: NextApiRequest, res: NextApiResponse) => {
  await cors(req, res);
  let result: any;
  const { query: { key, id } } = req;
  switch (key) {
    case 'data': {
      const blogger = bloggers.find((item) => item.id === Number(id));

      if (!blogger) {
        res.status(404).json({ message: 'Not found' });
        return;
      }

      result = blogger;
      break;
    }
    case 'list': {
      result = bloggers;
      break;
    }
    default: {
      res.status(500).json({ message: 'Internal server error' });
      return;
    }
  }
  res.status(200).json(result);
};
