export default function handler(req, res) {
  res.status(200).json({
    github: 'https://github.com/achingachris/',
    linkedin: 'https://www.linkedin.com/in/chrisachinga/',
    twitter: 'https://twitter.com/achingachris',
    instagram: 'https://www.instagram.com/achingachris/',
    email: 'achinga.chris@gmail.com',
    newsletter: 'https://chrisdevcode.substack.com/',
    hashnode: 'https://chrisdevcode.hashnode.dev/',
    medium: 'https://medium.com/@chrisdevcode',
    devto: 'https://dev.to/chrisdevcode',
  })
}
