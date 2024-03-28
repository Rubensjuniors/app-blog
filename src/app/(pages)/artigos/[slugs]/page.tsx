import Image from 'next/image'
import Link from 'next/link'

import { Icon } from '@/components/basic'
import { ContentPrismic } from '@/components/Prismic'
import { getPost } from '@/services/prismic'

const ArticlesPost = async ({ params }: { params: { slugs: string }}) => {
  const post = await getPost(params.slugs)

  return (
    <>
      <Link href="/">Voltar </Link>

      <section>
        {
          post.contentBody.photoPost.url && (
            <figure>
              <Image
                className="object-cover object-center"
                src={post.contentBody.photoPost.url}
                alt={post.contentBody.photoPost.alt}
                width={post.contentBody.photoPost.dimensions.width}
                height={post.contentBody.photoPost.dimensions.height}/>
            </figure>
          )
        }

        <div className="p-4 pb-0">
          <div>
            <h1 className="mb-3 text-2xl md:text-4xl font-bold">{post.contentBody.title} </h1>
            <p className="mb-3 text-gray-300 text-lg leading-6 tracking-wide break-all text-justify">{post.contentBody.description}</p>
          </div>

          <ul className="flex items-center gap-4">
            <li className="flex items-center gap-2">
              <Icon id="calendarBlank-phosphor" />
              <span>{post.first_publication_date}</span>
            </li>
            <li className="flex items-center gap-2">
              <Icon id="user-phosphor" />
              <span>{post.contentBody.author}</span>
            </li>
          </ul>
        </div>

        <article>
          {
            post.contentBody.content.map((content: any) => {
              return (
                <div key={content.heading}>
                  <h2 className="text-2xl ml-4 font-bold mt-5">{content.heading}</h2>
                  <ContentPrismic data={content.body} />
                </div>
              )
            })
          }
        </article>
      </section>
    </>
  )
}

export default ArticlesPost
