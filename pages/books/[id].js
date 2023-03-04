import { getBooks, getBookFromId } from '@/utils/api-utils.js'
import Link from 'next/link'

function BookDetail({ book }) {
  return (
    <>
      <div>
        <h1>Book Detail</h1>
        <Link href="/books">Books Page</Link>
      </div>
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
    </>
  )
}

// SSR (Server Side Rendering)
// export const getServerSideProps = async ({ params }) => {
//   const book = await getBookFromId(params.id)

//   return {
//     props: { book },
//   }
// }

// SSG (Static Site Generation)
export const getStaticProps = async ({ params }) => {
  const book = await getBookFromId(params.id)

  return {
    props: { book },
  }
}

export const getStaticPaths = async () => {
  const books = await getBooks()
  const paths = books.map(book => ({ params: { id: book.id } }))

  return {
    paths,
    fallback: false,
  }
}

export default BookDetail
