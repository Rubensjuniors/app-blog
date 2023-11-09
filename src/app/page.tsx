import Image from 'next/image'

import { getPrismicClient } from '@/services/prismic'

async function getData() {
  const prismic = getPrismicClient()

  const responseHome = await prismic?.getByType('home', {
    fetch: ['home.photo_profile', 'home.title', 'home.description'],
    pageSize: 100,
  })
  const { results } = responseHome
  const home = {
    photoProfile:{
      url:  results[0].data.photo_profile.url,
      width:  results[0].data.photo_profile.dimensions.width,
      heigth:  results[0].data.photo_profile.dimensions.heigth
    },
    title: results[0].data.title,
    description: results[0].data.description
  }

  return {
    home
  }
}

const Home = async () => {
  const data = await getData()

  return (
    <div className="flex w-full flex-col gap-4 p-5">
      <div className="h-16 w-16">
        <Image
          src={data.home.photoProfile.url}
          width={data.home.photoProfile.width}
          height={data.home.photoProfile.width}
          alt=""
          className="w-full rounded-full shadow-sm" />
      </div>

      <div>
        <h1 className="mb-3 text-4xl font-bold">{data.home.title}</h1>
        <p className="text-md text-justifys mt-2 font-light">
          {data.home.description}
        </p>
      </div>
    </div>
  )
}

export default Home
