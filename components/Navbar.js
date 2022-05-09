import {useState} from "react"
import Image from "next/image"
import NavLink from "./NavLink"

export default function Navbar({category}) {
  const [active, setActive] = useState(false)
  const [search, setSearch] = useState(false)

  return (
    <div className="flex justify-between 
      items-center space-x-2">


      <div className="w-4/12 md:w-2/12 order-2 
        text-lg font-light flex items-center
        md:order-1">
        <div className="w-8 h-8 flex 
          bg-gray-700 justify-center items-center
          rounded-sm font-bold 
          mr-2">
          E
        </div>
        pictetus
      </div>



      <div className="relative order-1 
        md:order-2 md:w-6/12 w-4/12">
        <div className="space-y-1 md:hidden"
          onClick={() => active ?
            setActive(false) : setActive(true)}>
          <div className={`w-8 h-1 ${active ?
            'bg-gray-500' : 'bg-white'}`}></div>
          <div className={`w-8 h-1 ${active ?
            'bg-gray-500' : 'bg-white'}`}></div>
          <div className={`w-8 h-1 ${active ?
            'bg-gray-500' : 'bg-white'}`}></div>
        </div>
        <ul className={
          `md:flex md:items-center
          md:bg-transparent 
          md:space-y-0 md:space-x-6 absolute z-20 
          ${active ? 'left-0' : '-left-full'} 
          top-10 p-4 space-y-2
          bg-gray-700 shadow-md md:shadow-none
          rounded-md md:static`
        }>
          <NavLink
            navLink="/posts"
            navTitle="4u"
            category={category}
          />
          <NavLink
            navLink="/posts/design"
            navTitle="Design"
            category={category}
          />
          <NavLink
            navLink="/posts/technology"
            navTitle="Technology"
            category={category}
          />
          <NavLink
            navLink="/posts/bio"
            navTitle="Bio"
            category={category}
          />
          <NavLink
            navLink="/posts/social"
            navTitle="Social"
            category={category}
          />
          <li><a href="#"
            className="hover:underline">
            More...
          </a></li>
        </ul>
      </div>

      <div className="w-4/12 flex 
        justify-end order-last">

        <div className="md:hidden bg-white
          w-10 h-10 flex justify-center 
          items-center rounded-full focus:bg-gray-400"
          onClick={() => setSearch(true)}>
          <Image
            src="/search.svg"
            width={15}
            height={15}
          />
        </div>

        {search && (
          <div className="absolute inset-0 z-30
            bg-gray-900/80 min-h-screen"
          ></div>
        )}

        <form className={
          `absolute z-40 
          -translate-x-1/2 left-1/2 
          ${search ? 'top-10' : '-top-full'}
          md:static md:translate-x-0`
        }>
          <div className="bg-white 
            rounded-full pl-2 
            w-max flex items-center">
            <input type="text"
              className="peer outline-none order-2 text-gray-700
              py-2 px-4 bg-transparent tracking-wide"
              autoComplete="off"
              placeholder="Search..."
            />
            <div className="w-10 h-10 flex order-1
              justify-center items-center p-2 opacity-40
              peer-focus:opacity-100">
              <Image
                src="/search.svg"
                width={20}
                height={20}
              />
            </div>
            {search && (
              <div className="w-10 h-10 
                text-gray-700 flex justify-center
                items-center text-xl p-2 opacity-40
                hover:opacity-100 order-last
                rounded-full select-none"
                onClick={() => setSearch(false)}>
                <Image
                  width={24}
                  height={24}
                  src="/x.svg"
                />
              </div>

            )}
          </div>
        </form>
      </div>

    </div>
  )
}
