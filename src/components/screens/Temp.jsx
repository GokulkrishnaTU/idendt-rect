import React from 'react'
import styled from 'styled-components';
import {  AiFillYoutube } from 'react-icons/ai';
import { BsWhatsapp,BsInstagram} from 'react-icons/bs';
import { FaLinkedinIn} from 'react-icons/fa';
import { FaBehance} from 'react-icons/fa';

function Temp() {
  return (
    <div >
    <Container>

      <Wrapper>


        <Hero>
            <HeroTitle>
            In the Workshop...
            </HeroTitle>
            <HeroPara>
            Our digital domain is taking a moment to refresh itself through a quick tune-up. Fear not, for we shall return  in a flinch. We greatly appreciate your patience.            </HeroPara>
            <Button>
                <a className='calllink' href="tel:+917353384340">
                    Get in Touch</a>
            </Button>

        </Hero>






<Footer>
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
</Footer>

        
</Wrapper>
    </Container>
        
      
    </div>
  )
}

export default Temp



const Container = styled.div`
width: 100%;
height: 120vh;
display: flex;
justify-content: center;
background-image: url("temp/Frame 5.png");
background-size: cover;

@media all and (max-width:500px){

  background-image: url("temp/Frame 2.png");
  justify-content: center;
  height: 800px;

}

`;

const Wrapper = styled.div`
width: 88%;
display: flex;
flex-direction: column;
justify-content: center;
gap: 70px;
position: relative;

@media all and (max-width:500px){

  width: 83%;
padding-top: 10px;
display: flex;
flex-direction: column;
justify-content: flex-start;
gap: 230px;

}

`;


const Hero = styled.div`
width: 80%;
display: flex;
flex-direction: column;
gap: 30px;

@media all and (max-width:500px){

  padding-top: 80px;
  width: 100%;

}

`;


const HeroTitle = styled.h1`
width: 30%;
font-size:60px;
font-family: 'Inter', sans-serif;
  font-weight: 900;

@media all and (max-width:500px){
  width: 50%;
font-size:50px;
font-weight: bolder;


}

`;

const HeroPara = styled.p`
width: 65%;
font-size:25px;

@media all and (max-width:500px){
  width: 100%;
font-size:13px;
width: 100%;

}

`;

const Button = styled.button `

visibility: visible;
cursor: pointer;
border: 1px solid white;
border-radius: 50px;
color: white;
height: 42px;
width: 145px;
border-radius: 50px;


&:hover {
background-color: white;
color: black;
transition: background-color 1s ease;


}

.calllink{
text-decoration:none;
color: white;

&:hover {
color: black;
transition: background-color 1s ease;


}
}


@media only screen and (max-width: 480px) {



}
  
`

const Footer = styled.div`
width: 100%;




@media all and (max-width:500px){

}

`;

const SocialIcons=styled.div`
display: flex;
justify-content: left;
@media all and (max-width: 700px) {
  position: absolute;
  bottom: 50px;
  left: 0;

}



`;

const SocialIconsWrapper = styled.div`
  display: flex;
  justify-content:  flex-start;
  gap: 10px;
  @media all and (max-width: 700px) {
    padding: 0%;
 
}

`;

const Icon = styled.a`
  color: white;
  font-size: 24px;
  margin-right: 8px;
`;
