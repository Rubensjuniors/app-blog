'use client'

import { useSearchParams } from 'next/navigation'

import { PostService } from '@/services/postServices'

import { CardPost, Pagination } from '@/components/Basic'

import { paginationPages } from '@/utils/functions/pagination-page'

const Articles = () => {
  const searchParams = useSearchParams()
  const page = Number(searchParams.get('page'))
  const currentPage = page === 0 ? 1 : page
  const { posts, numbPages } = PostService.getAll({
    currentPage
  })
  const { prevPage, nextPage } = paginationPages(currentPage)

  return (
      <section className="p-4">
        <h1 className="title mb-6 mt-6">Todos os Artigos</h1>

        <div>
          {posts.map((p) => (
            <CardPost
              key={p.uid}
              image={p.frontmatter.image}
              title={p.frontmatter.title}
              description={p.frontmatter.description}
              tags={p.frontmatter.tags ?? ['']}
              publicationDate={p.frontmatter.date}
              uid={p.uid}
              readingTime={p.readingTime}
            />
          ))}
        </div>

        <Pagination
          currentPage={currentPage}
          numbPages={numbPages}
          prevPage={prevPage}
          nextPage={nextPage}
        />
      </section>
  )
}

export default Articles
