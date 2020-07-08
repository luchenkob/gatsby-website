import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Hero from "../components/Hero";
import AsSeenOn from "../components/AsSeenOn";
import ValueBox from "../components/ValueBox";
import SpecialImage from "../components/SpecialImage";
import GraySection from "../components/GraySection";

import image from "../images/team_and_values/png/image@3x.png";

import iconInnovation from "../images/team_and_values/svg/icon-innovation.svg";
import iconPeople from "../images/team_and_values/svg/icon-people.svg";
import iconSearch from "../images/team_and_values/svg/icon-search.svg";

import BackgroundImage from "gatsby-background-image";

function TeamAndValuesPage() {
  const { mobileImage, desktopImage } = useStaticQuery(graphql`
    query {
      mobileImage: file(
        relativePath: { eq: "team_and_values/png/image-main@3x.png" }
      ) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      desktopImage: file(
        relativePath: { eq: "team_and_values/png/image-main.png" }
      ) {
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
        title="Team and Values"
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
              <h1 className="lg:w-960 lg:mt-90">
                Leaders, Innovators, Creators, and Storytellers. All Under One
                Roof.
              </h1>
              <p className="lg:mt-10 lg:w-800">
                We&apos;re a team of creators, innovators, and storytellers,
                based in the city of the future, Dubai, UAE. We come from all
                different backgrounds and have a wide variety of interests but
                are all driven by our love for technology.
              </p>
            </div>
          </Hero>
        </BackgroundImage>

        <GraySection
          text="Today, we have over 150 dedicated, passionate, and professional
            people employed in our numerous offices across Dubai and beyond. Our
            dynamic in-house team is composed of departments that drive
            exceptional experiences for our customers--from Marketing to Tech,
            Finance, Legal, and Support."
          widthOfText="580"
        >
          <SpecialImage imgSrc={image} imgAlt="Women looking at phone" />
        </GraySection>

        <section className="mt-16 mx-auto w-11/12 tracking-tight md:mt-90">
          <div className="lg:w-1522 lg:mx-auto flex lg:justify-center">
            <AsSeenOn />
          </div>
        </section>

        <section className="mt-12 mx-auto w-11/12 tracking-tight md:mt-165">
          <h2>Our Values</h2>
          <div className="flex flex-col mt-8 border-gray-200 border divide-y divide-gray-200 w-11/12 mx-auto lg:flex-row lg:w-1260 lg:divide-x lg:divide-y-0 lg:mt-20">
            <ValueBox
              heading="Innovation is our constant"
              text="Doing things better is a challenge, and demands constant evaluation and experimentation. We don’t standstill."
              svgUrl={iconInnovation}
            />
            <ValueBox
              heading="People are our engine"
              text="Technological innovation is driven by people. We each take pride in what we deliver and we are inspired by the contributions of others."
              svgUrl={iconPeople}
            />
            <ValueBox
              heading="Insight is out guide"
              text="Understanding the needs of others is critical to doing great work. We make an impact when we invest in knowing our clients and our team.."
              svgUrl={iconSearch}
            />
          </div>
        </section>
      </section>
    </Layout>
  );
}

export default TeamAndValuesPage;
