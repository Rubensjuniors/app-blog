import { Post } from '@/components/basic'
import Search from '@/components/Search'
import { getArticlesData, getTagsData, getPosts } from '@/services/prismic'

const Articles = async () => {
  const dataPost = await getPosts({ pageSize: 5 })
  const articlesData = await getArticlesData()
  const tagsData = await getTagsData()

  return (
    <div className="flex flex-col items-center w-full p-5 gap-10 mb-12">
      <Search />

      <div className="self-start flex flex-col items-start gap-3">
        <h1 className="text-xl md:text-2xl font-bold">{articlesData?.search_tags}</h1>
        <ul className="flex items-center flex-wrap gap-4 w-full">
          {
            tagsData?.map(tag => {
              return (
                <li key={tag}>
                  <button className="bg-gray-750 p-1 px-5 rounded-full text-sm hover:text-red-300 transition-all">{tag}</button>
                </li>
              )
            })
          }
        </ul>
      </div>

      <div className="self-start">
        <h1 className="titlePages text-2xl md:text-3xl font-bold">{articlesData?.title_my_articles}</h1>
        {dataPost?.posts?.map((post) => {
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

        {/* <Pagination
          totalCountOfRegisters={20}
          currentPage={1}
          onPageChange={() => void 0}
        /> */}

      </div>
    </div>
  )
}

export default Articles
