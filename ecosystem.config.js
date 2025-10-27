module.exports = {
  apps: [{
    name: 'abs-app',
    script: 'node_modules/next/dist/bin/next',
    args: 'start -p 3002',
    cwd: '/var/www/abs',
    instances: 1,
    exec_mode: 'fork',
    watch: false,
    max_memory_restart: '500M',
    env_production: {
      NODE_ENV: 'production',

      // Payload CMS Configuration
      PAYLOAD_SECRET: 'GEJ2NeenkpTOByzpScvz1jIEBZnafkOSbKfHU5bIAeA=',
      DATABASE_URI: 'mongodb://localhost:27017/advancedblockchainsecurity',
      NEXT_PUBLIC_SERVER_URL: 'https://advancedblockchainsecurity.com',
    },
  }]
}
