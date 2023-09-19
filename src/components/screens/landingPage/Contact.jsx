import React from 'react'
import styled from 'styled-components'
import {  AiFillYoutube } from 'react-icons/ai';
import { BsWhatsapp,BsInstagram} from 'react-icons/bs';
import { FaLinkedinIn} from 'react-icons/fa';
import { FaBehance} from 'react-icons/fa';



function Contact({contactRef}) {
  return (
    <Container ref={contactRef}>
      <LeftSection>
      <Heading>
        It's nice to <br /> meet ya

        </Heading>
        <DescParaOne>
        For general enquiries, Feel free to get in touch. Alternatively, if you know your project details - head over to our project planner for a more refined step-by-step process.

        </DescParaOne>
        <DescParaTwo>
        6C, Cyber Hills Seaport Airport Road,Kakkanad, Kochi, Kerala
        </DescParaTwo>

        <ContactSection>
  <li>+91 484 356 1391</li>
  <li>hello@idendt.com</li>
  <li>www.idendt.com</li>
</ContactSection>
        

      </LeftSection>
      <RightSection>
      <img src="images/footer_element.jpg" alt="" className='img' />
        <SocialIcons>
        <SocialIconsWrapper>
      <Icon href="https://www.instagram.com/idendt_/">
        <BsInstagram />
      </Icon>
      <Icon  href="https://api.whatsapp.com/send?phone=7353384340">

        <BsWhatsapp/>
      </Icon>
      <Icon href="https://www.linkedin.com/company/idendt/mycompany/">
        <FaLinkedinIn />
      </Icon>
      <Icon href="https://www.youtube.com/@idendt">
        < AiFillYoutube />
      </Icon>
      <Icon href="https://www.behance.net/idendtmedia?tracking_source=search_projects%7Cidendt">
      <FaBehance/>
      </Icon>

    </SocialIconsWrapper>

        </SocialIcons>
       
      </RightSection>

    </Container>
  
  )
}

export default Contact

const Container=styled.div`
display: flex;
width: 100%;
margin-bottom: 100px;

position: relative;

@media all and (max-width: 700px) {
  display: flex;
  flex-direction: column-reverse;
  align-items: center;

}


  
`
const LeftSection=styled.div`
padding: 100px 50px 100px 95px; 
width: 50%;

display: flex;
flex-direction: column;
gap: 40px;


@media all and (max-width: 700px) {
  display: flex;
  flex-direction: column;
  width: 75%;

  gap: 30px;
  padding: 100px 0;
}


  
`
const RightSection=styled.div`
width: 50%;

.img{
  width: 100%;
height: 90%;

}

@media all and (max-width: 700px) {
  
}
  
`
const SocialIcons=styled.div`
display: flex;
justify-content: center;
@media all and (max-width: 700px) {
  display: flex;
justify-content: flex-start;
  position: absolute;
  bottom: 0%;
  left: 65px;
}


`
const Heading=styled.h1`
font-size: 80px;
font-weight: 500;


  @media all and (max-width: 700px) {
font-size: 30px;
font-weight: 500;
  }
  
`
const DescParaOne=styled.p`
padding-left: 5px;
  
`
const DescParaTwo=styled.p`
padding-left: 5px;
display: none;
  
`

const ContactSection = styled.ul`
padding-left: 5px;
  list-style: none;
  margin: 0;

  li {
    margin-bottom: 10px;
  }
`;

const SocialIconsWrapper = styled.div`
  display: flex;
  justify-content:  flex-start;
  gap: 10px;
  padding-left: 15%;
  @media all and (max-width: 700px) {
    padding: 0%;
 
}

`;

const Icon = styled.a`
  color: white;
  font-size: 24px;
  margin-right: 8px;
`;
