import { PostService } from '@/services/postServices'

import CardPost from '../CardPost'
import * as S from './styles'

const RecommendedPosts = () => {
  const { posts } = PostService.getAll()
  const postsRecommended = posts.slice(0, 2)

  return (
    <S.Container>
      {postsRecommended.map((p) => (
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
    </S.Container>
  )
}

export default RecommendedPosts