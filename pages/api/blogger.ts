import { NextApiRequest, NextApiResponse } from 'next';
import { bloggers } from 'mosk-data';

export default (req: NextApiRequest, res: NextApiResponse) => {
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
