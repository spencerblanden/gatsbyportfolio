import * as React from "react"


import Layout from "../components/layout"
import Seo from "../components/seo"
import Carousel from "../components/carousel"
import Intro from "../components/intro"
import Header from "../components/header"

const IndexPage = () => (
  <Layout>
    <Header></Header>
    <Intro></Intro>
    <Carousel/>
  </Layout>
)


export const Head = () => <Seo title="Home" />

export default IndexPage
