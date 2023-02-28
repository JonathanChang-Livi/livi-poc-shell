/** @type {import('next').NextConfig} */

const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

const nextConfig = {
  reactStrictMode: true,
  webpack: (config, options) => { // webpack configurations
    const { isServer, dev } = options;

    //MF setup
    config.plugins.push(
      new NextFederationPlugin({
        name: 'shell',
        remotes: {
          dashboard: `dashboard@https://livi-poc-dashboard.vercel.app/_next/static/${isServer ? 'ssr' : 'chunks'}/remoteEntry.js`,
          dashboardCrash: `dashboardCrash@https://livi-poc-dashboard-crash.vercel.app/_next/static/${isServer ? 'ssr' : 'chunks'}/remoteEntry.js`,
          csm: `csm@https://livi-poc-csm.vercel.app/_next/static/${isServer ? 'ssr' : 'chunks'}/remoteEntry.js`,
        },
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          './demo': './components/layout',
          // './widgets': './component/widget.tsx',
        },
        shared: {
          'csm/useAuthState': `csm@https://livi-poc-csm.vercel.app/_next/static/${isServer ? 'ssr' : 'chunks'}/remoteEntry.js`,
        },
      })
    );

    return config;
  }
}

module.exports = nextConfig