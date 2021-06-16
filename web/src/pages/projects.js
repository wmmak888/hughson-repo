import React from "react";
import { graphql } from "gatsby";
import {
  mapEdgesToNodes,
  filterOutDocsWithoutSlugs,
  filterOutDocsPublishedInTheFuture,
} from "../lib/helpers";
import BlogPostPreviewList from "../components/blog-post-preview-list";
import Container from "../components/container";
import GraphQLErrorList from "../components/graphql-error-list";
import SEO from "../components/seo";
import Layout from "../containers/layout";

import { ProjectsList } from "../components/projectsList";

import Layout from '../components/layout'
import SEO from '../components/seo'

const projects = () => (
  <Layout>
    <SEO title='Hughson Project' />
    <h1>Project</h1>
    <ProjectsList />;  } ;
  </Layout>
)

export default projects












