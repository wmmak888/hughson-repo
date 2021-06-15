// Load variables from `.env` as soon as possible
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV || "development"}`,
});

const clientConfig = require("./client-config");

const isProd = process.env.NODE_ENV === "production";

module.exports = {
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-sanity",
      options: {
        ...clientConfig.sanity,
        token: process.env.SANITY_READ_TOKEN,
        watchMode: !isProd,
        overlayDrafts: !isProd,
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Poppins:400,600,700,900", "Mulish:400,700"],
        },
      },
    },
    // Overwrite the default behavior for src/pages
    // This changes the page-creator instance used by Gatsby
    {
      resolve: "gatsby-plugin-page-creator",
      options: {
        path: "${__dirname}/src/pages",
        ignore: ["projects.js"],
      }, 
    },  
  ],
};
