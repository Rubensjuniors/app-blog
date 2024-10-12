'use client'

import useArticles from '@/hooks/useArticles'

import { CardPost, Pagination } from '@/components/Basic'

// import Search from './components/Search'

const Articles = () => {
  const { currentPage, prevPage, nextPage, posts, numbPages } = useArticles()

  return (
    <section className="p-4">
      {/* <Search /> */}
      <h1 className="title mt-6 mb-6">Todos os Artigos</h1>

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
