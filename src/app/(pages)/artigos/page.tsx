import { allPosts } from 'contentlayer/generated'

import { CardPost } from '@/components/Basic'

import Search from './components/Search'

const Articles = () => {
  const posts = allPosts.map((post) => post)

  return (
    <section className="p-4">
      <Search />

      <div>
        {posts.map((p) => (
          <CardPost
            key={p.uid}
            image={p.image}
            title={p.title}
            description={p.description}
            tags={p.tags ?? ['']}
            publicationDate={p.date}
            uid={p.uid}
          />
        ))}
      </div>
    </section>
  )
}

export default Articles
