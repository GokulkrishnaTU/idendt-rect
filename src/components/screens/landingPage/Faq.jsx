import React, { useState } from 'react';
import styled from 'styled-components';
import { FaPlus, FaMinus } from 'react-icons/fa';

const Faq = () => {
  const Accordion = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
      setIsOpen(!isOpen);
    };

    return (
      <Container>

        
        <AccordionWrapper>
            
          <AccordionHeader onClick={toggleAccordion}>
            {isOpen ? <FaPlus />:<FaMinus />  } {title}
          </AccordionHeader>
          <AccordionContent isOpen={isOpen}>{children}</AccordionContent>
        </AccordionWrapper>
      </Container>
    );
  };

  return (

<div>



<MainContainer>
<img src="images/faqMob2.png" alt="" className='img2' />
<img src="images/faqMob1.png" alt="" className='img1' />



    <Header>
    <HeaderOne>
        Clarifying Your<br/> Concerns and Doubts
    </HeaderOne>
    <HeaderTwo>
        FAQ's
    </HeaderTwo>
 

</Header>
<Wrapper>

<Hr/>


      <Accordion title="DO I REALLY NEED A WEBSITE?">
        <p>Having a website makes you look professional and increases trust. Most people don't trust a business without a good website. A clean, modern page that is regularly updated and pops up in search engines is an instant credibility boost.</p>
      </Accordion>
      <Accordion title="WHAT IS SEARCH ENGINE OPTIMIZATION?">
      <p>Search engine optimization (SEO) is the art and science of getting pages to rank higher in search engines such as Google. Because search is one of the main ways in which people discover content online, ranking higher in search engines can lead to an increase in traffic to a website.</p>
      </Accordion>
      <Accordion title="WHAT MAKES FOR A GOOD WEB DESIGN?">
      <p>Several factors such as consistency, colours, typography, imagery, simplicity, and functionality contribute to good website design. When designing a website there are many key factors that will contribute to how it is perceived. A well-designed website can help build trust and guide visitors to take action.</p>
      </Accordion>
   

</Wrapper>
</MainContainer>
</div>
  );
};

export default Faq;

const MainContainer = styled.div`
width: 100%;
height: 100%;
margin-bottom: 100px;
position: relative;

@media all and (min-width: 700px) {
  img{
    display: none;
  }
}



@media all and (max-width: 700px) {
  display: block;
.img2{
  position: absolute;
  left: 0;
  top: 0;
  display: none;
}

.img1{
  position: absolute;
  right: 0;
  bottom: 0;
}
}
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 84%;

  @media all and (max-width: 700px) {

    width: 76%;
  }

`;

const AccordionWrapper = styled.div`
  margin-bottom: 10px;
  width: 100%;
  border-bottom: 1px solid #ccc;
`;

const AccordionHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  padding: 20px;
  cursor: pointer;
  font-weight: 600;
`;

const AccordionContent = styled.div`
  padding: 10px;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
`;

const Hr= styled.hr`
border-top: 1px solid white; 
width: 84%;

@media all and (max-width: 700px) {

width: 76%;
}
`;

const Wrapper=styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 100%;
`

const Header=styled.div`
height: 300px;
display: flex;
flex-direction: column;
align-items: flex-start;
gap: 30px;
padding-left: 95px;

@media all and (max-width: 700px) {
  height: 250px;
  padding-left: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  justify-content: flex-start;
  width: 100%;
  padding-left: 50px;



}





`


const HeaderOne=styled.h3`
line-height: 30px;
padding-left: 5px;


`

const HeaderTwo=styled.h1`
font-size: 80px;
font-weight: 500;
padding-left: 0;

`
