import Hero from "../sections/Hero";
import Capabilities from "../sections/Capabilities";
import ServicesPreview from "../sections/ServicesPreview";
import TechStack from "../sections/TechStack";
import WhyUs from "../sections/WhyUs";
import Process from "../sections/Process";
import Projects from "../sections/Projects";
import Industries from "../sections/Industries";
import CtaBand from "../sections/CtaBand";
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
      <TechStack />
      <WhyUs />
      <Process />
      <Projects />
      <Industries />
      <CtaBand />
    </>
  );
}
