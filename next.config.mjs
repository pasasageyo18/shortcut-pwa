import withPWAInit from "@ducanh2912/next-pwa";

/** @type {import('next').NextConfig} */
const nextConfig = {};

// Configuration object tells the next-pwa plugin 
const withPWA = withPWAInit({
    dest: "public", // Destination directory for the PWA files
    cacheOnFrontEndNav: true,
    register: true, // Register the PWA service worker
    skipWaiting: true, // Skip waiting for service worker activation
    reloadOnOnline: true,
    disable: false,
    workboxOptions: {
        disableDevLogs: true
    }
});

export default withPWA(nextConfig);
