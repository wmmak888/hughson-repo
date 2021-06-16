import React from "react";
import SEO from "../components/seo";
import Layout from "../containers/layout";
import { ProjectsList } from "../components/projectsList";

const projects = () => (
  <Layout>
    <SEO title='Hughson Project' />
    <h2>Project</h2>
    <ProjectsList />; 
  </Layout>
)

export default projects
