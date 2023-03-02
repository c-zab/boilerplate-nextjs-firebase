import { books } from '../../data/utils.js'
import Link from 'next/link'

function index() {
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
            }}
          >
            <Link
              href={`/books/${book.id}`}
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                background: 'lightblue',
                width: '70px',
                height: '30px',
                borderRadius: '5px',
                color: 'black',
              }}
            >
              Link
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}

export default index
