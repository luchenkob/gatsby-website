import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import GoogleDrivePDF from '../components/GoogleDrivePDF';

const PrivacyPolicyPage = () => {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title='Privacy Policy'
      />

      <GoogleDrivePDF 
       title='Privacy Policy'
       docId='17RcQrj9qaITYejm6dMEsd-b_pGdO-IPk' />
    </Layout>
  );
};

export default PrivacyPolicyPage;
