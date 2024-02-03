import React from 'react'
import Link from 'next/link'

const notfound = () => {
  return (
    <div>
        <h2>Not Found</h2>
        <p> Sorry,the page you looking cannot be found </p>
        <Link href='/'>Return Home</Link>
    </div>
  )
}

export default notfound