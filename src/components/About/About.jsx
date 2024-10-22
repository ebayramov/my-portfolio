import styled from "styled-components";
import { ContentWrapper, Heading, Paragraph, Section } from "../layout";
import { AssignedThemes } from "../../style";

export const About = () => {
  return (
    <Section
      theme={AssignedThemes.about}
      layout={"fixed-grid"}
      columnCount={"2"}
      minColumnSize={"50ch"}
      placeItems={"stretch center"}
    >
      <ContentWrapper
        layout={"manual-grid"}
        templateRows={"min-content"}
        autoRows={"min-content"}
        gap={"1rem"}
        templateColumns={"min(65ch, 100%)"}
        placeContent={"center center"}
      >
        <Heading as={"h2"}>About Me</Heading>


        {/* <Paragraph>
          Hey there, I'm Elmaddin, a front-end developer who's a little obsessed with turning ideas into interactive, user-friendly experiences. My toolbox includes React, JavaScript, and Next.js, which I use to craft fun projects like games and engaging interfaces. But don’t let the "front-end" title fool you—I’m just as comfortable diving deep into backend challenges, wrangling Node.js, PHP, and MySQL to get things working smoothly behind the scenes.
        </Paragraph>
        <Paragraph>
          You see, for me, the real thrill is in solving complex problems. Spending hours untangling technical issues is my version of a good time. That "aha" moment when it all clicks? Pure happiness. I love dissecting how things work and getting into the nitty-gritty, even when it means going down the rabbit hole of technical details.
        </Paragraph>
        <Paragraph>
          While my primary focus is on the front end, I've built full-stack applications from scratch and deployed them on cloud platforms like AWS, Heroku, and DigitalOcean. I'm always learning, always growing, and I’m ready to bring my passion for tech to a team that’s as excited about innovation as I am. I believe with the right direction, I’ll be that hidden gem every team needs.
        </Paragraph>
        <Paragraph>
          I'm currently looking for a role where I can hone my front-end skills even more while leveling up my backend game. I’m all about collaboration and enjoy working with teams to build seamless software experiences that make users' lives easier. Oh, and if you need someone to pick up a new language or tool? I’m your guy—always eager to learn whatever’s necessary to get the job done.
        </Paragraph>
        <Paragraph>
          Let's build something awesome together!
        </Paragraph> */}

        <Paragraph>
          Hey there, I'm Elmaddin, a front-end developer who loves turning ideas into interactive, user-friendly experiences. My go-to tools are React, JavaScript, and Next.js, which I use to create fun projects like games and engaging interfaces. But don’t let the "front-end" title fool you—I’m just as comfortable diving into backend tasks with Node.js, PHP, and MySQL to get things running smoothly.
        </Paragraph>
        <Paragraph>
          You see, for me, the thrill is in solving complex problems. Spending hours untangling technical issues is my kind of fun. That "aha" moment when it all clicks? Pure joy. I love understanding the details, even if it means going deep into technical rabbit holes.
        </Paragraph>
        <Paragraph>
          While my main focus is front-end, I’ve built full-stack apps from scratch and deployed them to cloud platforms like AWS, Heroku, and DigitalOcean. I’m always learning and growing, ready to bring my passion for tech to a team that’s as excited about innovation as I am.
        </Paragraph>
        <Paragraph>
          I'm looking for a role to sharpen my front-end skills while leveling up my backend knowledge. I’m all about collaboration and love creating seamless user experiences. Need someone to learn a new tool or language? I'm your guy!
        </Paragraph>
        <Paragraph>
          Let’s build something awesome together!
        </Paragraph>


      </ContentWrapper>

      <CoverImg src="AboutPhoto.jpg" alt="" />
    </Section>
  );
};

const CoverImg = styled.img`
    object-fit: cover; 
    border-radius: 20px; 
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1), 0 6px 20px rgba(0, 0, 0, 0.1); 
    border: 5px solid transparent; 
    background: linear-gradient(white, white) padding-box, 
                linear-gradient(to right, #60a5fa, #a78bfa) border-box; 
    padding: 0.5rem; 
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out; 
    
    &:hover {
        transform: scale(1.05); 
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2), 0 12px 40px rgba(0, 0, 0, 0.2); 
        filter: brightness(1.1); 
    }

    max-height: 650px; 
    align-self: center;
    display: block; 
    margin: 1rem auto; 
`;

