import React from "react";
import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/landing1/Hero";
import Services from "../sections/landing1/Services";
import Testimonial1 from "../sections/landing1/Testimonial1";
import Content1 from "../sections/landing1/Content1";
import Fact from "../sections/landing1/Fact";
import Feature from "../sections/landing1/Feature";
import CTA1 from "../sections/landing1/CTA1";
import CaseStudies from "../sections/landing1/CaseStudies";
import Testimonial2 from "../sections/landing1/Testimonial2";
import CTA2 from "../sections/landing1/CTA2";

const IndexPage = () => {
  return (
    <>
      <PageWrapper
        footerConfig={{
          style: "style1", //style1, style2
        }}
      >
        <Hero />
        <Services />
        <Testimonial1 />
        <Content1 />
        <Fact />
        <Feature />
        <CTA1 />
        <CaseStudies />
        <Testimonial2 />
        <CTA2 />
      </PageWrapper>
    </>
  );
};
export default IndexPage;
