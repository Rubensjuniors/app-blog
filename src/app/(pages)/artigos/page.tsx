import { PostService } from '@/services/postServices'

import { CardPost } from '@/components/Basic'

import Search from './components/Search'

const Articles = () => {
  const { posts } = PostService.getAll()

  return (
    <section className="p-4">
      <Search />

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
    </section>
  )
}

export default Articles
