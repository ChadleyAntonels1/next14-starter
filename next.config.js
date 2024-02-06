/** @type {import('next').NextConfig} */
const nextConfig = {
   
    images:{
        remotePatterns:[
            // to add external images
            {
                protocol: 'https',
                hostname: '',
            }
        ]
    }
}

module.exports = nextConfig
