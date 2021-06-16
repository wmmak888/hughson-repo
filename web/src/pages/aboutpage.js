import React from "react";
import {
  mapEdgesToNodes,
  filterOutDocsWithoutSlugs,
  filterOutDocsPublishedInTheFuture,
} from "../lib/helpers";
import Container from "../components/container";
import SEO from "../components/seo";
import Layout from "../containers/layout";
import { AboutSection } from "../components/aboutSection";

const aboutpage = () => (
  <Layout>
    <SEO title='About' />
    <AboutSection />; 
  </Layout>
)

export default aboutpage
