// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;


/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,  // Disable image optimization for static export
  },
    output: 'export',  // Enable static export
    // // Aap yahaan apni project-specific settings add kar sakte hain
    // // Agar aapko kuch specific configuration ki zarurat hai
  }
  
  export default nextConfig;
  