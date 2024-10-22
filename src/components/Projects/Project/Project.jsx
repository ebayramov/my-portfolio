import styled from "styled-components"
import { FrontCard } from "./FrontCard"
import { BackCard } from "./BackCard"

export const Project = ({project}) => {
    const {projectName, banner, links, stack, overview, pages }  = {...project}

    return (
        <RotatingCardWrapper>
            <FrontCard projectName={projectName} banner={banner}/>
            <BackCard links={links} projectName={projectName} stack={stack} overview={overview} pages={pages}/>
        </RotatingCardWrapper>
    )
  }

const RotatingCardWrapper = styled.div`
position: relative;

background-color: transparent;
transform-style: preserve-3d;
perspective: 2000px;

width: min(30rem, 100%);
height: 35rem;

& > div {
    inset: 0;
    position: absolute;
    transform-style: preserve-3d;
    backface-visibility: hidden;
    transition: transform 0.7s ease-in-out;

    padding: max(4%, 1.2rem) max(5%, 0.7rem) 2.9rem;

    & > * {
        transform: translateZ(100px);
        overflow: hidden;
    }
}

& > :last-child{
    transform: rotateY(-180deg) ;
}

&:hover {
    & > :first-child{
        transform: rotateY(180deg) ;
    }
    
    & > :last-child{
        transform: rotateY(0deg) ;
    } 
}
`
