import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Hero from "../components/Hero";
import SpecialImage from "../components/SpecialImage";

import image from "../images/travel/png/image@3x.png";
import image2 from "../images/travel/png/image-2@3x.png";

import BackgroundImage from "gatsby-background-image";

function TravelPage() {
  const { mobileImage, desktopImage } = useStaticQuery(graphql`
    query {
      mobileImage: file(relativePath: { eq: "travel/png/image-main@3x.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      desktopImage: file(relativePath: { eq: "travel/png/image-main.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  const sources = [
    mobileImage.childImageSharp.fluid,
    {
      ...desktopImage.childImageSharp.fluid,
      media: `(min-width: 768px)`,
    },
  ];

  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Travel"
      />

      <section className="text-center">
        <BackgroundImage
          Tag={`section`}
          id={`media-test`}
          fluid={sources}
          style={{
            backgroundPosition: "top",
          }}
        >
          <Hero>
            <div className="-mt-12 flex flex-col justify-center h-full lg:justify-start lg:mt-0">
              <h1 className="lg:w-916 lg:mt-168">
                Web & App-Based Travel and Hospitality Solutions
              </h1>
              <p className="mt-6 lg:mt-10 lg:w-800">
                for corporate travel and employee privileges
              </p>
            </div>
          </Hero>
        </BackgroundImage>

        <section className="mt-12 mx-auto w-11/12 lg:mt-40 lg:w-1260">
          <h2>
            We built travel platforms
            <br />
            that allow companies to reduce cost
          </h2>
          <p className="mt-6  mx-auto lg:mt-10">
            Our travel platform is used by companies looking to lower their
            bottom line as well as reward their employees. By accessing our
            system for corporate travel or providing employees with memberships,
            you can reduce your costs and increase employee retention.
          </p>
        </section>

        <section className="mx-auto  mt-10 text-left flex flex-col lg:flex-row lg:mt-104 lg:w-1260 lg:h-400">
          <div className="mx-auto mt-2 text-left w-11/12 lg:w-1/2 lg:self-center lg:mr-100">
            <h5>Supply fulfillment for travel clubs</h5>
            <p className="mt-4">
              We provide travel clubs around the world with an unparalleled
              technology and fulfillment service. Members have access to
              incredible online travel savings and a team of professionally
              trained Travel Concierges.
            </p>
          </div>
          <div className="lg:w-1/2">
            <img
              className="block mt-6 w-screen lg:full lg:h-full"
              src={image}
              alt="Woman on a boat standing with her arms open towards the sea"
            />
          </div>
        </section>

        <section className="mt-12 text-left mx-auto lg:flex lg:flex-row-reverse lg:mt-104 lg:w-1260 lg:h-400">
          <div className="mt-10 mx-auto w-11/12 lg:w-1/2 lg:self-center lg:ml-100">
            <h5>Loyalty rewards programs</h5>
            <p className="mt-4">
              With our dynamic Loyalty Rewards Program your members will see
              immediate benefits from using your product. By being directly
              rewarded for every purchase made, your members will develop
              loyalty to your program and stay with you year after year.
            </p>
          </div>
          <div className="mt-6 md:w-1/2 md:mt-0">
            <SpecialImage
              imgSrc={image2}
              imgAlt="Woman on the beach in a hammock smiling at her phone"
              bubbleSide="right"
              bubbleSize="64px"
            />
          </div>
        </section>
      </section>
    </Layout>
  );
}

export default TravelPage;
