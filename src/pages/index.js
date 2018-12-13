import React from "react"

import HomepageLayout from "../components/homepage-layout";

import PhotoStrip from "../components/photo-strip";

import '../../scss/homepage.scss';

export default ({ data }) => (
  <HomepageLayout>
    <PhotoStrip moments={data.allMomentsJson} />
  </HomepageLayout>
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
