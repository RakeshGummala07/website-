import Hero from "../sections/Hero";
import Capabilities from "../sections/Capabilities";
import ServicesPreview from "../sections/ServicesPreview";
import WhyUs from "../sections/WhyUs";
import CtaBand from "../sections/CtaBand";
import ExploreMore from "../sections/ExploreMore";
import SEO from "../components/SEO";

export default function Home() {
  return (
    <>
      <SEO
        title="Jayanth Technologies — IT Services & Software Engineering, Hyderabad"
        description="Jayanth Technologies is a Hyderabad-based technology partner offering full stack development, cyber security, software testing, DevOps and cloud solutions."
      />
      <Hero />
      <Capabilities />
      <ServicesPreview />
      <WhyUs />
      <ExploreMore />
      <CtaBand />
    </>
  );
}
