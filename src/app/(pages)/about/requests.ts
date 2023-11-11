/* eslint-disable no-console */
import { getPrismicClient } from '@/services/prismic'

import { AboutData } from './types'

export async function getAboutMeData() {
  try {

    const prismic = getPrismicClient()

    const responseAboutMe = await prismic?.getByType('about_me', {
      fetch: [
        'about_me.banner',
        'about_me.photo_profile',
        'about_me.name',
        'about_me.bio',
        'about_me.sociais',
        'about_me.content',
      ],
      pageSize: 100,
    })
    const { results } = responseAboutMe
    const aboutMe: AboutData = {
      photoProfile:{
        url:  results[0].data.photo_profile.url,
        width:  results[0].data.photo_profile.dimensions.width,
        heigth:  results[0].data.photo_profile.dimensions.heigth
      },
      banner:{
        url:  results[0].data.banner.url,
        width:  results[0].data.banner.dimensions.width,
        heigth:  results[0].data.banner.dimensions.heigth
      },
      name: results[0].data.name,
      bio: results[0].data.bio,
      sociais: {
        instagram: results[0].data.sociais.instagram,
        github: results[0].data.sociais.github,
        linkedin: results[0].data.sociais.linkedin,
      },
      content: results[0].data.content.map((content:{ title: string; body: string[] }) => {
        return {
          title: content.title,
          body: [...content.body],
        }
      })

    }

    return aboutMe
  } catch (err) {
    console.error('Ocorreu um erro:', err)
  } finally {
    console.log('Success')
  }
}
