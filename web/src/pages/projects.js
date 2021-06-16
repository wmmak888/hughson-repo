import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import ItemCard from "./components/itemCard";

export const ProjectsList = ({ headline }) => {
  const projects = useStaticQuery(
    graphql`
      query ProjectsQuery {
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
