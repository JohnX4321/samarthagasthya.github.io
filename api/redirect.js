export default function handler(req, res) {
  const userAgent = req.headers['user-agent'] || '';
  const isMobile = /iPhone|iPad|iPod|Android|webOS|BlackBerry|Windows Phone/i.test(userAgent);
  
  if (isMobile) {
    const mobileUrl = 'https://m.samarthagasthya.dev' + req.url;
    res.setHeader('Location', mobileUrl);
    res.status(307).end();
  } else {
    res.status(200).json({ message: 'Desktop version' });
  }
}
