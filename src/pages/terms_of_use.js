import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import GoogleDrivePDF from '../components/GoogleDrivePDF';

const TermsOfUsePage = () => {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title='Terms of Use'
      />

      <GoogleDrivePDF 
      title='Terms of Use'
      docId='1KLzKdMMFqEqMlaMmUCQsTjEkuBN7Qict' />
    </Layout>
  );
};

export default TermsOfUsePage;
