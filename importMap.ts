import type { ImportMap } from 'payload'

export const importMap: ImportMap = {
  '@payloadcms/next/views#RootPage': {
    path: '@payloadcms/next/views',
    exportName: 'RootPage',
  },
  '@payloadcms/next/views#RootLayout': {
    path: '@payloadcms/next/views',
    exportName: 'RootLayout',
  },
  '@payloadcms/next/views#AccountView': {
    path: '@payloadcms/next/views',
    exportName: 'AccountView',
  },
  '@payloadcms/next/views#DashboardView': {
    path: '@payloadcms/next/views',
    exportName: 'DashboardView',
  },
  '@/components/admin/SimpleCaptcha#SimpleCaptcha': {
    path: '/var/www/abs/components/admin/SimpleCaptcha',
    exportName: 'SimpleCaptcha',
  },
  '@/components/payload/ConditionalSubcategorySelect#ConditionalSubcategorySelect': {
    path: '/var/www/abs/src/components/payload/ConditionalSubcategorySelect',
    exportName: 'ConditionalSubcategorySelect',
  },
}
