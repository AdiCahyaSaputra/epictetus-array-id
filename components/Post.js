import Image from "next/image"
import Router from "next/router"

export default function Post({img, category, date, title, avatar, author, job}) {

  function splitTitle(title) {
    title = title.split(' ')
    title.splice(9, title.length, '...')

    return title.join(' ')
  }

  return (
    <div className="col-span-12 md:col-span-4">
      <div className="aspect-video overflow-hidden
        rounded-md bg-gray-500 flex justify-center
        items-center hover:border-2 hover:border-white">
        <Image
          width={640}
          height={426}
          src={img}
        />
      </div>
      <div className="mt-4">
        <p className="text-sm text-gray-400">
          {category} - {date}
        </p>
        <h1 className="text-xl hover:underline"
          onClick={() => Router.push("/posts/detail")}
        >{splitTitle(title)}</h1>
      </div>
      <div className="selft-end flex 
        items-center space-x-4 mt-4">
        <div className="w-10 h-10 overflow-hidden
          rounded-full bg-gray-500
          hover:border-2 hover:border-white">
          <Image
            width={100}
            height={100}
            src={avatar}
          />
        </div>
        <div>
          <h4 className="text-sm text-gray-200">
            {author}
          </h4>
          <p className="text-xs text-gray-400">
            {job}
          </p>
        </div>
      </div>
    </div>
  )
}
