import { defineDocumentType } from 'contentlayer/source-files'

export const Profile = defineDocumentType(() => ({
  name: 'Profile',
  filePathPattern: '**/*.{md,mdx}',
  contentType: 'mdx',
  fields: {
    name: { type: 'string', required: true },
    work: { type: 'string', required: true },
    description: { type: 'string', required: true },
    bio: { type: 'string', required: true },
    profile: { type: 'string', required: true },
    profileTwo: { type: 'string', required: true },
    banner: { type: 'string', required: true }
  }
}))
