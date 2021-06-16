import React from "react";
import SEO from "../components/seo";
import Layout from "../containers/layout";
import { ProjectsList } from "../components/projectsList";

const projects = () => (
  <Layout>
    <SEO title='Hughson Project' />
    <ProjectsList />; 
  </Layout>
)

export default projects
