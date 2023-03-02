import { getBooks, fetchBooksFromId } from '@/utils/api-utils.js'

function BookDetail({ book }) {
  return (
    <div
      style={{
        maxWidth: '20rem',
        background: 'whitesmoke',
        padding: '1rem',
        margin: 'auto',
      }}
    >
      <div
        key={book.id}
        style={{
          padding: '1rem 0',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <h1>{book.name}</h1>
        <p>{book.description}</p>
      </div>
    </div>
  )
}

export const getStaticProps = async ({ params }) => {
  const book = await fetchBooksFromId(params.id)

  return {
    props: { book },
  }
}

// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes
export const getStaticPaths = async () => {
  const books = await getBooks()
  const paths = books.map(book => ({ params: { id: book.id } }))

  return {
    paths,
    fallback: false,
  }
}

export default BookDetail
