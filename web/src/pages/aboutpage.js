import React from "react";
import { graphql } from "gatsby";
import {
  mapEdgesToNodes,
  filterOutDocsWithoutSlugs,
  filterOutDocsPublishedInTheFuture,
} from "../lib/helpers";
import Container from "../components/container";
import GraphQLErrorList from "../components/graphql-error-list";
import SEO from "../components/seo";
import Layout from "../containers/layout";
import { AboutSection } from "../components/aboutSection";


export const query = graphql`
  query MyQuery1 {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
      keywords
    }
    page: sanityPage(path: { eq: "/" }) {
      id
      content {
        ... on SanityAboutSection {
          _key
          _type
          headline
          experiences {
            title
            years
          }
          passions {
            title
            icon
          }
          skills {
            title
            icon
          }
          tools {
            title
            icon
          }
          schools {
            title
            years
          }
        }
        ... on SanityBlogList {
          _key
          _type
          headline
        }
        ... on SanityHero {
          _key
          _type
          ctas {
            title
            link
          }
          description
          headline
          mainImage {
            asset {
              url
              fluid {
                ...GatsbySanityImageFluid
              }
            }
          }
          topline
        }
        ... on SanityProjectList {
          _key
          _type
          headline
        }
      }
    }
  }
`;

const RenderSections = ({ sections }) =>
  sections.map((s) => {
    switch (s._type) {
      case "aboutSection":
        return <AboutSection {...s} />;
    }
  });

const aboutpage = (props) => {
  const { data, errors } = props;

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  const site = (data || {}).site;
  console.log("data", data);
  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    );
  }

  return (
    <Layout>
      <SEO title='About' />
      <Container>
        <RenderSections sections={data.page.content} />
      </Container>
    </Layout>
  );
};

export default aboutpage
