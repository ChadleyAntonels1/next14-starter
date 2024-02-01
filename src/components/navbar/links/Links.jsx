import React from 'react'
import Link from 'next/link'

const Links = () => {
    [
        {
            title : "Homepage",
            path : "/",
        },
        {
            title : "About",
            path : "/about",
        },
        {
            title : "Contact",
            path : "/contact",
        },
        {
            title : "Blog",
            path : "/blog",
        },
    ]

  return (
    <div>
        {Links.map((link=>(
            <Link href={link.path} key={link.title}>{link.title}</Link>
        )))}
    </div>
  )
}

export default Links