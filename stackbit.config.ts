import { ContentfulContentSource } from '@stackbit/cms-contentful'
import { StackbitConfig } from '@stackbit/types'

export default {
  stackbitVersion: '~0.6.0',
  ssgName: 'nextjs',
  nodeVersion: '18',
  contentSources: [
    new ContentfulContentSource({
      spaceId: process.env.CONTENTFUL_SPACE_ID!,
      environment: 'master',
      previewToken: process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN!,
      accessToken: process.env.CONTENTFUL_MANAGEMENT_TOKEN!,
    }),
  ],
  models: {
    album: { type: 'page', urlPath: '/posts/{slug}' },
  }
} satisfies StackbitConfig