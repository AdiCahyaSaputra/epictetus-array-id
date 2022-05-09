import Link from "next/link"
import {useState} from "react"


export default function NavLink({navLink, navTitle, category}) {
  const [nav, setNav] = useState('4u')

  if (category !== nav) {
    setNav(category)
  }

  return (
    <li>
      <Link href={navLink}>
        <a
          className={
            `hover:underline ${nav ===
              navTitle.toLowerCase() ?
              'text-white' : 'text-gray-400'}`
          }>
          {navTitle}
        </a>
      </Link>
    </li>
  )
}
