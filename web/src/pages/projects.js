import React from "react";
import { graphql } from "gatsby";
import { mapEdgesToNodes } from "../lib/helpers";
import BlogPostPreviewGrid from "../components/blog-post-preview-grid";
import Container from "../components/container";
import GraphQLErrorList from "../components/graphql-error-list";
import SEO from "../components/seo";
import Layout from "../containers/layout";

import { responsiveTitle1 } from "../components/typography.module.css";

export const ProjectsList = ({ headline }) => {
  const projects = useStaticQuery(
    graphql`
      query ProjectsQuery1 {
        allSanityProject {
          nodes {
            description
            title
            link
            mainImage {
              asset {
                fluid {
                  ...GatsbySanityImageFluid
                }
              }
            }
          }
        }
      }
    `
  ).allSanityProject.nodes;
  return (
    <div className="container mb-5">
      <h2>{headline}</h2>
      <div className="row">
        {projects.map((p) => (
          <ItemCard title={p.title} path={p.link} description={p.description} image={p.mainImage} />
        ))}
      </div>
    </div>
  );
};

export default ArchivePage;
