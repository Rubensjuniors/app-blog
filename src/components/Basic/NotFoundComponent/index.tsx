import { BackButton } from '@/components/Basic/BackButton'

import { RecommendedPosts, Empty } from '@/components/Basic'

export default function NotFoundComponent() {
  return (
    <Empty>
      <BackButton hasImage={false} />
      <h1 className="text-center text-4xl font-extrabold">
        Oops. Essa página não foi encontrada.
      </h1>

      <p className="mt-4 text-center text-xl text-gray-400">
        Posts recomendados para você:
      </p>

      <RecommendedPosts />
    </Empty>
  )
}
