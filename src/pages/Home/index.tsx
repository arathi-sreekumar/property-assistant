import { Layout } from "../../components/Page/Layout"
import { PAGE_TYPE } from "../../common/constants"
import { Hero } from "./components/Hero"
import { Intro } from "./components/Intro"
import { Explore } from "./components/Explore"

export const Home = () => {
  return (
    <Layout
      pageType={PAGE_TYPE.HOME}
    >
      <Hero />
      <Intro />
      <Explore />
    </Layout>
  )
}
