export const paginationPages = (
  currentPage = 1,
  pageRoute = '/artigos?page'
) => {
  const prevPage = `${pageRoute}=${currentPage - 1}`
  const nextPage = `${pageRoute}=${currentPage + 1}`

  return {
    prevPage,
    nextPage
  }
}
