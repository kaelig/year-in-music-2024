import { ContentfulContentSource } from '@stackbit/cms-contentful';
import { defineStackbitConfig } from '@stackbit/types';

export default defineStackbitConfig({
    stackbitVersion: '~0.6.0',
    ssgName: 'nextjs',
    nodeVersion: '18',
    buildCommand: 'npm run build',
    publishDir: 'out',
    presetReferenceBehavior: 'copyReference',
    contentSources: [
        new ContentfulContentSource({
            spaceId: process.env.CONTENTFUL_SPACE_ID!,
            environment: 'master',
            previewToken: process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN!,
            accessToken: process.env.CONTENTFUL_MANAGEMENT_TOKEN!,
            useWebhookForContentUpdates: true
        })
    ],
    modelExtensions: [{ name: 'album', type: 'page', urlPath: '/posts/{slug}' }],

});