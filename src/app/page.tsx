import Link from 'next/link'

import { allPosts } from 'contentlayer/generated'

import { Icon } from '@/components/Basic'
import CardPost from '@/components/Basic/CardPost'
import CardProfile from '@/components/Home/CardProfile'

const Home = () => {
  const posts = allPosts.map((post) => post)

  return (
    <section className="flex flex-col p-5">
      <CardProfile />

      <h1 className="title mt-6">Mais Recentes</h1>

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

      <Link
        href="/artigos"
        role="button"
        className="mt-5 flex items-center gap-2 self-center underline md:hover:text-red-300"
      >
        Ver todos
        <Icon id="arrowSquareOut-phosphor" iconSize={18} />
      </Link>
    </section>
  )
}

export default Home
