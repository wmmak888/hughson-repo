import React from "react";
import SEO from "../components/seo";
import Layout from "../containers/layout";
import { AboutSection } from "../components/aboutSection";

const aboutpage = () => (
  <Layout>
    <SEO title='About' />
    <h2>About</h2>
    <AboutSection />;  } ;
  </Layout>
)

export default aboutpage
