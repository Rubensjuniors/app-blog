import Image from 'next/image'

import { getHomeData } from './requests'

const Home = async () => {
  const data = await getHomeData()

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
