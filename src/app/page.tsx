/* eslint-disable max-len */
import CardPost from '@/components/Basic/CardPost'
import CardProfile from '@/components/Home/CardProfile'

const Home = () => {
  const post = [
    {
      title: 'Como o TypeScript ajuda você a escrever um código melhor',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio laborum omnis voluptate. Dolores, magni quia totam ipsam quas cum earum quis necessitatibus voluptatum alias suscipit modi ab ullam hic nobis?',
      tags: ['ss', 'ssda'],
      publicationDate: '12/12/12',
      uid: 'sasdasd',
      type: 'code',
      image: 'image.png'
    },
    {
      title: 'Um title',
      description: 'lorema asdkjaskldjlkajsdlk',
      tags: ['ss', 'ssda'],
      publicationDate: '12/12/12',
      uid: 'sasdasd',
      type: 'code',
      image: 'image.png'
    },
    {
      title: 'Um title',
      description: 'lorema asdkjaskldjlkajsdlk',
      tags: ['ss', 'ssda'],
      publicationDate: '12/12/12',
      uid: 'sasdasd',
      type: 'code',
      image: 'image.png'
    }
  ]

  return (
    <div className="p-5">
      <CardProfile />

      <div>
        <h1 className="title mt-6">Mais recentes</h1>
      </div>

      {post.map((p) => (
        <CardPost
          key={p.uid}
          image={p.image}
          title={p.title}
          description={p.description}
          tags={p.tags}
          publicationDate={p.publicationDate}
          uid={p.uid}
        />
      ))}
    </div>
  )
}

export default Home
