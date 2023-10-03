// import Image from 'next/image'

const Home = () => {
  return (
    <div className="flex w-full flex-col gap-4 p-5">
      <div className="h-16 w-16">
        {/* <Image src={Photo} alt="" className="w-full rounded-full shadow-sm" /> */}
      </div>

      <div>
        <h1 className="mb-3 text-4xl font-bold">title</h1>
        <p className="text-md text-justifys mt-2 font-light">Description</p>
      </div>
    </div>
  )
}

export default Home
