import Image from 'next/image'
import Link from 'next/link'

import { Icon, Post } from '@/components/basic'
import { getHomeData, getPosts } from '@/services/prismic'

const Home = async () => {
  const data = await getHomeData()
  const dataPost = await getPosts({ pageSize: 3 })

  return (
    <div className="flex w-full flex-col gap-4 p-5">
      <div className="h-16 w-16">
        <Image
          src={data?.home.photoProfile.url}
          width={data?.home.photoProfile.width}
          height={data?.home.photoProfile.width}
          alt=""
          className="w-full rounded-full shadow-sm" />
      </div>

      <div>
        <h1 className="mb-3 text-4xl font-bold">{data?.home.title}</h1>
        <p className="text-md text-justifys mt-2 font-light">
          {data?.home.description}
        </p>
      </div>

      <section className="mt-4 flex items-start flex-col">
        <h1 className="titlePages text-2xl md:text-3xl font-bold">{data?.home.latest_articles}</h1>

        <div>
          {dataPost?.latestPosts?.map((post) => {
            return (
              <Post
                key={post.slug}
                title={post.title}
                description={post.description}
                tags={post.tags}
                author={post.author}
                publicationDate={post.publicationDate}
                uid={post.slug ?? ''}
                type={post.typePost}
              />
            )
          })}
        </div>

        <Link
          href="/artigos"
          role="button"
          className="flex items-center gap-2 underline md:hover:text-red-300 mt-5 self-center"
        >
        Ver todos
          <Icon id="arrowSquareOut-phosphor" iconSize={18}/>
        </Link>

      </section>
    </div>
  )
}

export default Home
