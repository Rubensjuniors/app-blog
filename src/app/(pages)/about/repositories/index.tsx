'use client'
import { Icon } from '@/components/basic'
import useRepositories from '@/hooks/useRepositories'

const Repositories = () => {
  const { repos: repositories, isLoading } = useRepositories(1)

  const getColorsLanguages = (type = 'default') => {
    const colorsLangues = {
      typescript: 'bg-blue-800',
      css: 'bg-blue-400',
      javascript: 'bg-yellow-400',
      default: 'bg-blue-800'
    }

    return colorsLangues[type.toLocaleLowerCase() as keyof typeof colorsLangues]
  }

  if(isLoading) {
    return <h1>Loading.....</h1>
  }

  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col w-full gap-4">
        {repositories?.map((repo) => {
          const isPublic = repo.visibility === 'public' ? 'bg-green-600' : 'bg-red-600'
          return(
            <div
              key={repo.id}
              className="flex gap-1 flex-col flex-1 bg-gray-600 p-4 rounded-md border-gray-600 shadow-md"
            >
              <div className="flex items-center justify-between">
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-3 text-xl underline text-red-400 tracking-wider font-bold"
                >
                  {repo.name}
                  <Icon id="linkSimples-phosphor" iconSize={18} />
                </a>
                <span
                  className={`${isPublic} flex items-center text-gray-100 p-1 px-3 text-sm rounded-2xl`}
                >{repo.visibility}</span>
              </div>
              <p className="mb-3 text-sm">{repo.description}</p>
              <ul className="flex items-center gap-4 ">
                {
                  repo.language && (
                    <li className="flex items-center gap-1">
                      <div className={`w-[10px] h-[10px] ${getColorsLanguages(repo.language)} rounded-full`} ></div>
                      {repo.language}
                    </li>
                  )
                }
                <li className="flex items-center gap-1">
                  <Icon id="star-phosphor" iconSize={14} />
                  {repo.stargazers_count}
                </li>
              </ul>
            </div>
          )
        })}
      </div>
      <a
        href="https://github.com/Rubensjuniors?tab=repositories"
        role="button"
        className="flex items-center gap-2 underline md:hover:text-red-300 mt-5 self-center"
      >
        Ver todos
        <Icon id="arrowSquareOut-phosphor" iconSize={18}/>
      </a>
    </div>
  )
}

export default Repositories
