import { useRouter } from 'next/router'
import { fetchBooksFromId } from '../../data/utils.js'

function BookDetail() {
  const { query } = useRouter()
  const bookId = query.id
  const book = fetchBooksFromId(bookId)

  if (!book) {
    return <p>Loading...</p>
  }

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

export default BookDetail
