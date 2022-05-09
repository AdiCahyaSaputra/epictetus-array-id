import Navbar from "components/Navbar";
import Layout from "components/Layout";

export async function getServerSideProps(ctx) {
  const {category} = ctx.query

  return {
    props: {
      category
    }
  }
}

export default function PostCategory({category}) {
  return (
    <Layout>
      <Navbar category={category} />
    </Layout>
  )
}
