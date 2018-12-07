import React from "react"

import Layout from "../components/layout";

import PhotoStrip from "../components/photo-strip";

import '../../scss/homepage.scss';

export default ({ data }) => (
  <Layout>
    <PhotoStrip moments={data.allMomentsJson} />
  </Layout>
);

export const query = graphql`
  query HomepageQuery {
    allMomentsJson(sort: {fields: datestamp, order: DESC}) {
      edges {
        node {
          filestem
          label
          datestamp
          streetname
        }
      }
    }
  }
`;
