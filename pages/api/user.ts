import { NextApiRequest, NextApiResponse } from 'next';
import { users } from '../../mosk-data';

export default (req: NextApiRequest, res: NextApiResponse) => {
  const result = {} as any;
  if (req.method === 'POST') {
    const { query: { key } } = req;
    const {
      name, id, token,
    } = req.body;
    switch (key) {
      case 'login': {
        const user = users.find((item) => item.name === name);

        if (!user) {
          res.status(404).json({ message: 'Not found' });
          return;
        }

        result.id = user.id;
        result.token = user.token;
        break;
      }
      case 'progress': {
        const user = users.find((item) => item.id === id);

        if (!user) {
          res.status(404).json({ message: 'Not found' });
          return;
        }
        if (!token) {
          res.status(401).json({ message: 'Unauthorized' });
          return;
        }
        if (user.token !== token) {
          res.status(403).json({ message: 'Invalid token' });
        }

        result.name = user.name;
        result.id = user.id;
        result.progress = user.progress;
        break;
      }
      default: {
        res.status(500).json({ message: 'Internal server error' });
        return;
      }
    }
  }
  res.status(200).json(result);
};
