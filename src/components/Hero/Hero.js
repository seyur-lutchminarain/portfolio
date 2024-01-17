import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Developer Portfolio: <br />
        Seyur Lutchminarain
      </SectionTitle>
      <SectionText>
        I am a results-driven software engineer with a passion for creating
        efficient and user-friendly solutions. With a strong foundation in the
        FinTech industry, I specialize in transforming complex ideas into
        robust, scalable, and maintainable code. Whether it's developing
        innovative applications, optimizing performance, or solving intricate
        problems, I bring a unique blend of technical expertise and creative
        problem-solving to every project. Let's collaborate to turn your
        software ideas into reality with precision and excellence!
      </SectionText>
      <Button
        onClick={() =>
          (window.location = "https://www.linkedin.com/in/seyur-lutchminarain/")
        }
      >
        {" "}
        Learn more{" "}
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
