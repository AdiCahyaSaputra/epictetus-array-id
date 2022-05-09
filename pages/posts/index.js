import Navbar from "components/Navbar";
import Headline from "components/Headline";
import Post from "components/Post";
import Layout from "../../components/Layout";

export default function LandingPages() {
  return (
    <Layout>
      <Navbar category="4u" />
      <Headline />
      <div className="mt-6 grid grid-cols-12 
          gap-4 p-2 md:p-0">
        <Post
          img="/thumbnail-2.png"
          title="Experiment: How to hide a kid in basement without any risk"
          category="Social"
          date="7 April 2022"
          avatar="/author-4.png"
          author="Thomas Jacob"
          job="Kidnapper"
        />
        <Post
          img="/thumbnail-3.png"
          title="Umbrella Corporation: How to make a bio weapon from scratch"
          category="Bio"
          date="18 September 2022"
          avatar="/author-3.png"
          author="Albert Wesker"
          job="Scientist"
        />
        <Post
          img="/thumbnail-4.png"
          title="Learn fullstack NextJS on one week: Get ready for a new job"
          category="Technology"
          date="12 February 2022"
          avatar="/author-5.jpg"
          author="Jill Valentine"
          job="Fullstack Developer"
        />
        <Post
          img="/thumbnail-5.png"
          title="Keep healthy: Wake up at 4am a day to improve productivity"
          category="Social"
          date="3 August 2022"
          avatar="/author-2.jpg"
          author="Amicia De Rune"
          job="UI Designer"
        />
        <Post
          img="/thumbnail-6.png"
          title="Coding environment at Big Tech company F.A.N.G"
          category="Technology"
          date="1 December 2022"
          avatar="/author-5.jpg"
          author="Jill Valentine"
          job="Fullstack Developer"
        />
        <Post
          img="/thumbnail-7.png"
          title="Top 3 popular framework to safe your time while developing a software"
          category="Technology"
          date="6 June 2022"
          avatar="/author-3.png"
          author="Adam Wathan"
          job="Tailwindcss Founder"
        />
      </div>

      <footer className="text-center text-gray-400 mt-24 mb-12 text-sm">
        Copyright © Design by Nauval ( ArrayId )
      </footer>

    </Layout>
  )
}
