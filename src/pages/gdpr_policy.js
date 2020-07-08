import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import GoogleDrivePDF from '../components/GoogleDrivePDF';

const GDPRPolicyPage = () => {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title='GDPR Policy'
      />

      <GoogleDrivePDF 
      title='GDPR Policy'
      docId='1q3LQb_F02QnAEu7BBpxuJruyE6KPkvAd' />
    </Layout>
  );
};

export default GDPRPolicyPage;
