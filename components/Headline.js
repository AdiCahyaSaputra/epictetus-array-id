import Image from "next/image"
import Router from "next/router"

export default function Headline() {
  return (
    <div className="mt-6 grid grid-cols-12 gap-4">

      <div className="md:col-span-8
        col-span-12 w-full overflow-hidden
        rounded-md bg-gray-500 flex justify-center
        items-center hover:border-2 
        hover:border-gray-200">
        <Image
          width={1420}
          height={778}
          src="/featured-thumbnail.png"
        />
      </div>
      <div className="md:col-span-4 
        col-span-12 md:mt-4">
        <p className="text-lg text-gray-400">
          UI Design - 2 July 2022
        </p>
        <h1 className="text-xl hover:underline"
          onClick={() => Router.push("/posts/detail")}
        >
          Understanding color theory: The color wheel and finding complementary color
        </h1>
        <div className="mt-4 flex space-x-4 
          items-center">
          <div className="w-10 h-10
            bg-gray-500 overflow-hidden 
            hover:border-2 hover:border-white
            rounded-full">
            <Image
              width={100}
              height={100}
              src="/author-2.jpg"
            />
          </div>
          <div>
            <h4 className="text-gray-300 text-sm">
              Amicia De Rune
            </h4>
            <p className="text-xs text-gray-400">
              UI Designer
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
