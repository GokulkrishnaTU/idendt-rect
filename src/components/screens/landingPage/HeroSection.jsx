import React from 'react'
import styled from 'styled-components'


function HeroSection() {

 
  return (
    <div>
        <Mainsection>

          <LeftSection>
            
            {/* <img src="images/heroimg1.png" alt="" className='img1' /> */}
            <ButtonDiv>

            <Header>
              Branding <br /> and Beyond
            </Header>

            <ProjectButton>
              <a className='calllink' href="tel:+917353384340">
              Get Identified

              </a>

                    </ProjectButton>
            </ButtonDiv>
            
          </LeftSection>



          <RightSection>
     
          <img src="images/heroimg1.png" alt="" className='img1' />


            
          </RightSection>


      
                  </Mainsection>
      
    </div>
  )
}

export default HeroSection

const Mainsection = styled.div `
height: 110vh;
width: 100%;
position: relative;
display: flex;





@media all and (max-width: 480px) {
  height: 100%;
  display: flex;
  flex-direction: column;


}


`

const LeftSection = styled.div `
width: 50%;
height: 100%;
padding-left: 100px;
padding-top: 163px;


@media all and (max-width: 480px) {

  width: 100%;
height: 100%;
padding: 0;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: flex-start;
padding-bottom: 100px;
padding-left: 50px;
padding-top: 50px;



}
`




const ButtonDiv = styled.div `
width: 80%;

@media all and (max-width: 480px) {

  width: 78%;



}



`

const RightSection = styled.div `
width: 50%;
position: relative;
height: 100%;

.img1{
  position: absolute;
  right: 0;
  top: 0;

  width: 100%;
height: 100%;
min-width: 300px;
min-height: 300px;
  transform: rotate(180deg);

}


@media all and (max-width: 480px) {
  height: 400px;

  width: 100%;

  .img1{

  width: 100%;
  position: absolute;
right: 0px;
/* transform: rotate(0); */

}

}
`

const Header = styled.h1 `
font-size: 80px;
font-weight: 500;


@media all and (max-width: 500px) {


  font-size: 40px;
font-weight: 500;
margin-top: 10px;


}
`

   const ProjectButton = styled.button `


    visibility: visible;
    cursor: pointer;
    border: 1px solid white;
    border-radius: 50px;
    color: white;
    height: 42px;
    width: 145px;
    border-radius: 50px;
    margin-top: 60px;

    &:hover {
    background-color: white;
    color: black;
    transition: background-color 1s ease;
    border: none;

    
  }





    .calllink{
    text-decoration:none;
    color: white;
    border: none;


    &:hover {
    color: black;
    transition: background-color 1s ease;
    text-decoration: none;
    border: none;

    
  }
  }
  


      
   `