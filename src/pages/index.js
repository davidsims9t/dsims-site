import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Bio from "../components/bio"
import Work from "../components/work"
import Companies from "../components/companies"
import Testimonials from "../components/testimonials"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section className="main-intro container">
      <h1 className="main-title">Hello, I'm David</h1>
      <div className="main-description">
        <img src={require('../images/avatar.svg')} alt="David Sims" />
        <p>I'm a programmer and I specialize in front-end development.</p>
      </div>
    </section>
    <Bio />
    <Work />
    <Companies />
    <Testimonials />
  </Layout>
)

export default IndexPage
