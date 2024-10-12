import Link from 'next/link'

import { PostService } from '@/services/postServices'

import { Icon } from '@/components/Basic'
import CardPost from '@/components/Basic/CardPost'
import CardProfile from '@/components/CardProfile'

const Home = () => {
  const { posts } = PostService.getAll()

  return (
    <section className="flex flex-col p-5">
      <CardProfile />

      <h1 className="title mt-6">Mais Recentes</h1>

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
