// pages/api/hello.js

export default function handler(req, res) {
    if (req.method === 'GET') {
      res.status(200).json({ message: 'Hello, World!' });
    } else if (req.method === 'POST') {
      const { name } = req.body;
      res.status(200).json({ message: `Hello, ${name}!` });
    } else {
      res.status(405).json({ message: 'Method Not Allowed' });
    }
  }
  