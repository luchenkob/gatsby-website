import React from 'react';
import PropTypes from 'prop-types'
import { graphql } from 'gatsby';
import { RichText } from 'prismic-reactjs';

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import GoogleDrivePDF from '../components/GoogleDrivePDF'

export const query = graphql`
  query PolicyQuery($uid: String) {
    prismic {
      allPolicys(uid: $uid) {
        edges {
          node {
            policy_name
            document_id
          }
        }
      }
    }
  }
`;

export default function Policy({ data }) {
  const doc = data.prismic.allPolicys.edges.slice(0, 1).pop();
  if (!doc) return null;

  return (
    <Layout>
      <SEO keywords={[`gatsby`, `react`]} title={RichText.asText(doc.node.policy_name)} />

      <GoogleDrivePDF
        title={RichText.asText(doc.node.policy_name)}
        docId={doc.node.document_id}
      />
    </Layout>
  );
}

Policy.propTypes = {
    data: PropTypes.object.isRequired
}