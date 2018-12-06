import React from "react"

import Layout from "../components/layout";

import '../../scss/homepage.scss';

export default ({ data }) => (
  <Layout>
    <div className="photo-band">
      <div className="photo-strip">
        {data.allMomentsJson.edges.map(({ node }) => (
          <div className="photo">
            <img
              src={`/images/photos/${node.filestem}-small.jpg`}
              alt={`Doorway on ${node.streetname}`} />
          </div>
        ))}
      </div>
    </div>
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
