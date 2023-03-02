import { getBooks } from '@/utils/api-utils.js'
import Link from 'next/link'

function index({ books }) {
  return (
    <div
      style={{
        maxWidth: '20rem',
        background: 'whitesmoke',
        padding: '1rem',
        margin: 'auto',
      }}
    >
      {books.map(book => (
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
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              margin: '1rem 0',
            }}
          >
            <Link
              href={`/books/${book.id}`}
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                background: 'lightblue',
                borderRadius: '0.5rem',
                color: 'black',
                padding: '0.5rem',
              }}
            >
              Go to book
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}

export const getStaticProps = async () => {
  const books = await getBooks()

  return {
    props: {
      books,
    },
    revalidate: 10,
  }
}

export default index
