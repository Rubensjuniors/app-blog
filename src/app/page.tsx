import { allPosts } from 'contentlayer/generated'

import CardPost from '@/components/Basic/CardPost'
import CardProfile from '@/components/Home/CardProfile'

const Home = () => {
  const posts = allPosts.map((post) => post)

  return (
    <div className="p-5">
      <CardProfile />

      <div>
        <h1 className="title mt-6">Mais recentes</h1>
      </div>

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
  )
}

export default Home
