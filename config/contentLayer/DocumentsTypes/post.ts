import { defineDocumentType } from 'contentlayer/source-files'

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: '**/*.{md,mdx}',
  contentType: 'mdx',
  fields: {
    uid: { type: 'string', required: true },
    title: { type: 'string', required: true },
    description: { type: 'string', required: true },
    date: { type: 'date', required: true },
    tags: { type: 'list', of: { type: 'string' } },
    image: { type: 'string', required: true }
  }
}))
