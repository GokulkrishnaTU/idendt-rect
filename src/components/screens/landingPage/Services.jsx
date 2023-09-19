import React, { useRef } from 'react'
import styled from 'styled-components';


function Services({serviceRef}) {
  return (
      <Container ref={serviceRef} >
        <MainContainer>

        <img src="images/Twisted_Abstract_5.png" alt="" className='img1' />
        <LeftContainer>
          <Wrapper>

          <Header>
          Our idenDT
          </Header>
          <Heading>

"
YOUR BUSINESS IS
OUR BUSINESS. "          </Heading>

          <ParaOne>
          At idenDT, we help businesses grow and develop by combining insightful strategic thinking with imaginative design to create impact and desire. Our magic recipe blends innovative strategy, creative design, and cutting-edge technology to make beautiful, brilliant brand experiences, expanding the business's future vision.          </ParaOne>

          <ParaTwo>
          Our family consists of a group of individuals who are passionate about collaborating, sharing ideas, and working as a team with the primary goal of advancing accountability and quality. We know that helping helps, and that is why our procedures are productive and economical. To make the process run more smoothly, we adjust costs to your needs without sacrificing the quality of our services.              </ParaTwo>

              <Button>
                Read More
              </Button>


          </Wrapper>
        </LeftContainer>
        <RightContainer>
          <img src="/images/bg-one.png" alt="" className='bgOne' />
          <ImgDiv>
          <img src="/images/blog-image.jpg" alt="" className='blog' />


          </ImgDiv>

          
        </RightContainer>

        </MainContainer>
      </Container>
      
  )
}

export default Services

const Container = styled.div`

height: 100%;
overflow: hidden;
padding-bottom: 200px;

.img1{
  position: absolute;
  height: 55%;
  top: 390px;
  display: none;

}

@media all and (max-width: 700px) {
  padding-bottom: 10px;

}
  

`
const MainContainer = styled.div`
width: 1200px;
display: flex;
width: 100%;
position: relative;


@media all and (max-width: 800px) {



display: flex;
flex-direction: column;


.img1{
  position: absolute;
  height: 33%;
  top: 730px;
  width: 21%;



}
    
}

  
  
`

const LeftContainer = styled.div`
width: 60%;
display: flex;
justify-content:center ;

@media all and (max-width: 800px) {

  width: 100%;

}

@media all and (max-width: 480px) {
  width: 100%;



}
  
  
`
const Wrapper = styled.div`
width: 74%;
display: flex;
flex-direction: column;
align-items:flex-start;
gap: 50px;
  
  
`

const RightContainer = styled.div`
width: 40%;
display: flex;
justify-content:end ;
padding: 50px;
/* height: 100%; */
position: relative;
padding-top: 100px;

.bgOne{
  display: none;
  height: 100%;
width: 100%;
position: absolute;
left: -129px;
top: 130px;
z-index: -1;


}

@media all and (max-width: 780px) {
  display: flex;
  justify-content: center;
  height: 100%;

  width: 100%;

.bgOne{

display: none;


}




}


  
  
`
const Header = styled.h1`
font-weight: 600;
  
  `

const Heading = styled.h1`
font-size: 40px;
font-weight: 600;




@media all and (max-width: 800px) {

  font-size: 30px;
font-weight: 600;


}

@media all and (max-width: 400px) {

  font-size: 20px;

}


  
  
`
const ParaOne = styled.p`
/* padding-left: 15%; */


@media all and (max-width: 780px) {
  padding: 0;
}

@media all and (max-width: 580px) {
  padding: 0;
  font-size: 15px;
}
  
  
  
`

const ParaTwo = styled.p`
/* padding-left: 15%; */
@media all and (max-width: 780px) {
  padding: 0;
}

@media all and (max-width: 580px) {
  padding: 0;
  font-size: 15px;
}
  

  
  
`

const Button = styled.button`
    cursor: pointer;
    border: 1px solid white;
    border-radius: 50px;
    color: white;
    height: 32px;
    width: 100px;
    border-radius: 50px;
    display: none;
    
/* margin-left: 15%; */

@media all and (max-width: 780px) {
  margin: 0;
}

  
`
const ImgDiv = styled.div`
display: none;

  width: 100%;
  height: 100%;
  .blog{
    height: 100%;
    width: 100%;
  }



  
@media all and (max-width: 780px) {
height:350px;
width: 80%;
}

  
`


