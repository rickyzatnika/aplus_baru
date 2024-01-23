/** @type {import('next').NextConfig} */
const nextConfig = {
  images:{
    remotePatterns:[
      {
        protocol: 'https',
        hostname: "ticket-server.webqodes.com",
      },
      {
        protocol: 'https',
        hostname: "res.cloudinary.com",
      },
      {
        protocol: 'https',
        hostname: "images.pexels.com",
      },
      {
        protocol: 'https',
        hostname:  "lh3.googleusercontent.com",
      },
      {
        protocol: 'https',
        hostname: "images.unsplash.com"
      },
    ]
  }
}

module.exports = nextConfig
