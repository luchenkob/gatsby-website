import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Hero from "../components/Hero";
import SpecialImage from "../components/SpecialImage";

import image from "../images/elearning/png/image@3x.png";
import image2 from "../images/elearning/png/image-2@3x.png";

import BackgroundImage from "gatsby-background-image";

function ELearningPage() {
  const { mobileImage, desktopImage } = useStaticQuery(graphql`
    query {
      mobileImage: file(
        relativePath: { eq: "elearning/png/image-main@3x.png" }
      ) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      desktopImage: file(relativePath: { eq: "elearning/png/image-main.png" }) {
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

  const listItems = [
    "Live Streaming Videos",
    "Virtual Classroom",
    "Web Application/Portal",
    "User Engagement",
    "Library For Pre-recorder Session",
    "Live Session",
    "Accessibility",
    "Cost-effectiveness",
  ];

  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="E-learning"
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
                E-learning is growing. Grow with it.
              </h1>
              <p className="mt-6 lg:mt-10 lg:w-800">
                Custom E-Learning Solutions to address tomorrow’s challenges
              </p>
            </div>
          </Hero>
        </BackgroundImage>

        <section className="mt-12 mx-auto w-11/12 lg:mt-40 lg:w-916 lg:mb-270">
          <p>
            Meliorism consolidates all e-learning needs into one advanced
            platform giving companies and organizations the right tools for a
            simpler and more connected learning experience.
          </p>
        </section>

        <section className="mt-12 text-left bg-gray-100 lg:flex lg:mt-52">
          <div className="mt-10 mx-auto w-11/12 lg:w-580 lg:mt-auto lg:mb-40 lg:mr-183">
            <p>
              Our team of experts have hands-on experience in delivering
              different <strong>e-learning solutions that maximize.</strong>
            </p>
            <ul className="block mt-2 lg:mt-6 list-none space-y-4" style={{}}>
              {listItems.map((item, index) => (
                <li key={index} className="flex items-center">
                  <div className="inline-block h-1 w-1 lg:h-2 lg:w-2 rounded-full bg-purple"></div>
                  <span className="ml-2">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-6 md:w-1/2 md:-mt-110">
            <SpecialImage imgSrc={image} imgAlt="Woman working on the laptop" />
          </div>
        </section>

        <h3 className="mt-16 w-11/12 mx-auto lg:mt-40">
          Count on our expertise to build custom E-Learning solutions for your
          sector.
        </h3>

        <section className="mt-10 text-left flex flex-col lg:flex-row-reverse mx-auto lg:mt-20 lg:w-1260 lg:h-400">
          <div className="mx-auto mt-2 text-left w-11/12 lg:self-center lg:mt-0 lg:w-1/2 lg:ml-100 lg:mr-auto">
            <h5>Corporate sector</h5>
            <p className="mt-4">
              Continuous workforce training poses several challenges in the
              corporate context. Our top-notch knowledge portals, certification
              solutions, and coaching platforms help employers streamline
              onboarding and keep their team motivated.
            </p>
          </div>
          <div className="lg:w-1/2">
            <img
              className="block mt-6 w-screen lg:h-full lg:w-full object-center object-contain"
              src={image2}
              alt="People having a meeting"
            />
          </div>
        </section>
      </section>
    </Layout>
  );
}

export default ELearningPage;
