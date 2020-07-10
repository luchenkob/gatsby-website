import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import {RichText} from 'prismic-reactjs'

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Hero from "../components/Hero";
import AsSeenOn from "../components/AsSeenOn";
import ValueBox from "../components/ValueBox";
import SpecialImage from "../components/SpecialImage";
import GraySection from "../components/GraySection";

import iconInnovation from "../images/team_and_values/svg/icon-innovation.svg";
import iconPeople from "../images/team_and_values/svg/icon-people.svg";
import iconSearch from "../images/team_and_values/svg/icon-search.svg";

import BackgroundImage from "gatsby-background-image";

function TeamAndValuesPage() {
  const { prismic } = useStaticQuery(graphql`
    query {
      prismic {
        team_and_values_page(lang: "en-us", uid: "team-and-values-page") {
          heading
          text
          background_mobile
          background_mobileSharp {
            childImageSharp {
              fluid(quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          background_desktop
          background_desktopSharp {
            childImageSharp {
              fluid(quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          section_1_text
          section_1_image
          section_1_imageSharp {
            childImageSharp {
              fluid(quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          section_2_heading
          values {
            value_heading
            value_text
          }
        }
      }
    }
  `);
  const document = prismic.team_and_values_page;

  const { hero, section1, section2 } = {
    hero: {
      heading: document.heading,
      text: document.text,
    },
    section1: {
      text: document.section_1_text,
      fluidImage: document.section_1_imageSharp.childImageSharp.fluid,
      imageAlt: document.section_1_image.alt,
    },
    section2: {
      heading: document.section_2_heading,
      values: document.values
    },
  };

  const sources = [
    document.background_mobileSharp.childImageSharp.fluid,
    {
      ...document.background_desktopSharp.childImageSharp.fluid,
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
            <div className="-mt-12 flex flex-col justify-center h-full xl:justify-start xl:mt-0">
              <div className="xl:w-960 xl:mt-90">
                {RichText.render(hero.heading)}
              </div>
              <p className="mt-6 xl:mt-10 xl:w-800">
                {RichText.asText(hero.text)}
              </p>
            </div>
          </Hero>
        </BackgroundImage>

        <GraySection
          text={section1.text}
          widthOfText="580"
        >
          <SpecialImage imgSrc={section1.fluidImage} imgAlt={section1.imageAlt} />
        </GraySection>

        <section className="mt-16 mx-auto w-11/12 tracking-tight xl:mt-90">
          <div className="xl:w-1522 xl:mx-auto flex xl:justify-center">
            <AsSeenOn />
          </div>
        </section>

        <section className="mt-12 mx-auto w-11/12 tracking-tight xl:mt-165">
        <h2>{RichText.asText(section2.heading)}</h2>
          <div className="flex flex-col mt-8 border-gray-200 border divide-y divide-gray-200 w-11/12 mx-auto lg:flex-row lg:max-w-4xl xl:w-1260 xl:divide-x xl:divide-y-0 xl:mt-20 xl:max-w-none">
            <ValueBox
              heading={section2.values[0].value_heading}
              text={section2.values[0].value_text}
              svgUrl={iconInnovation}
            />
            <ValueBox
              heading={section2.values[1].value_heading}
              text={section2.values[1].value_text}
              svgUrl={iconPeople}
            />
            <ValueBox
              heading={section2.values[2].value_heading}
              text={section2.values[2].value_text}
              svgUrl={iconSearch}
            />
          </div>
        </section>
      </section>
    </Layout>
  );
}

export default TeamAndValuesPage;
