import React from 'react'
import styled from 'styled-components'
import Carousel from "react-elastic-carousel";
import  { useState, useEffect } from "react";
import  { useRef } from 'react'


function About({aboutRef}) {
  const [width, setWidth] = useState(window.innerWidth);
  const [itemsToShow, setItemsToShow] = useState(2);
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (width < 700) {
      setItemsToShow(1);
    } else if(width<1000){
      setItemsToShow(1);

    } else {
      setItemsToShow(1);
    }
  }, [width]);

  const breakPoints = [{ maxWidth: 800, itemsToShow }];



  return (
      <App className="App">
      <Carousel breakPoints={breakPoints} pagination={true} >
          <Item  ref={aboutRef}>

            <Section>
              <Left>
   <img className='images' src="clients/wahda01.jpg" alt="" />
              </Left>
              <Right>
              <img className='images' src="clients/wahda02.jpg" alt="" />

              </Right>
            </Section>
            <Wrapper >
 
                <Headingone>Branding</Headingone>
                <Hr />
                <HeadingTwo>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam, qui. Voluptates rem soluta culpa nihil.</HeadingTwo>

      </Wrapper>
          </Item>
          <Item>

          <Section>
              <Left>
              <img className='images' src="clients/ediva01.jpg" alt="" />

              </Left>
              <Right>
              <img className='images' src="clients/ediva02.jpg" alt="" />

              </Right>
            </Section>
            <Wrapper >
 
                <Headingone>Branding</Headingone>
                <Hr />
                <HeadingTwo>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam, qui. Voluptates rem soluta culpa nihil.</HeadingTwo>

      </Wrapper>          </Item>
          <Item>

          <Section>
              <Left>
              <img className='images' src="clients/aeronautica01.jpg" alt="" />

              </Left>
              <Right>
              <img className='images' src="clients/aeronautica02.jpg" alt="" />

              </Right>
            </Section>
            <Wrapper >
 
                <Headingone>Branding</Headingone>
                <Hr />
                <HeadingTwo>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam, qui. Voluptates rem soluta culpa nihil.</HeadingTwo>

      </Wrapper>          </Item>
          <Item>

          <Section>
              <Left>
              <img className='images' src="clients/avera01.jpg" alt="" />

              </Left>
              <Right>
              <img className='images' src="clients/avera02.jpg" alt="" />

              </Right>
            </Section>
            <Wrapper >
 
                <Headingone>Branding</Headingone>
                <Hr />
                <HeadingTwo>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam, qui. Voluptates rem soluta culpa nihil.</HeadingTwo>

      </Wrapper>          </Item>
          <Item>

          <Section>
              <Left>
              <img className='images' src="clients/beeline01.jpg" alt="" />

              </Left>
              <Right>
              <img className='images' src="clients/beeline02.jpg" alt="" />

              </Right>
            </Section>
            <Wrapper >
 
                <Headingone>Branding</Headingone>
                <Hr />
                <HeadingTwo>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam, qui. Voluptates rem soluta culpa nihil.</HeadingTwo>

      </Wrapper>          </Item>
          <Item>

          <Section>
              <Left>
              <img className='images' src="clients/salalah01.jpg" alt="" />

              </Left>
              <Right>
              <img className='images' src="clients/salalah02.jpg" alt="" />

              </Right>
            </Section>
            <Wrapper >
 
                <Headingone>Branding</Headingone>
                <Hr />
                <HeadingTwo>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam, qui. Voluptates rem soluta culpa nihil.</HeadingTwo>

      </Wrapper>          </Item>
          <Item>

          <Section>
              <Left>

              <img className='images' src="clients/truestone01.jpg" alt="" />

              </Left>
              <Right>
              <img className='images' src="clients/truestone02.jpg" alt="" />

              </Right>
            </Section>
            <Wrapper >
                <Headingone>Branding</Headingone>
                <Hr />
                <HeadingTwo>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam, qui. Voluptates rem soluta culpa nihil.</HeadingTwo>

      </Wrapper>          </Item>
              <Item>

          <Section>
              <Left>

              <img className='images' src="clients/Alqamar01.jpg
" alt="" />

              </Left>
              <Right>
              <img className='images' src="clients/Alqamar02.jpg
" alt="" />
              </Right>
            </Section>
            <Wrapper >
                <Headingone>Branding</Headingone>
                <Hr />
                <HeadingTwo>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam, qui. Voluptates rem soluta culpa nihil.</HeadingTwo>

      </Wrapper>          </Item>
        </Carousel>
      </App>)


 








  
}

export default About



const App = styled.div`
  font-family: sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 900px;
  width: 100%;
  position: relative;
  margin-bottom: 100px;
padding: 0% 28px;
margin-top: 30px;

.gwggkg{
  background-color: white;
  box-shadow: 0 0 1px 3px rgb(174, 174, 174);}


@media all and (max-width: 700px) {
  height: 100%;

  .sc-jrcTuL{
    display: none;
  }

}



 /* .sc-jrcTuL.cgWby {
  position: absolute;
bottom: 25%;
right: 10%;
z-index: 50;
 } */

  /* .sc-jrcTuL.xRXJA  {
    position: absolute;
bottom: 25%;
left: 50%;
z-index: 50; }   */


`;

const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  background-color: transparent;
  margin: 0 15px;
  font-size: 4em;
  width: 100%;
  padding-top: 10px;
  height: 900px;

  .image{
    width: 80%;
    height: 60%;
    padding-top: 10%;
  }

  @media all and (max-width: 700px) {
height: 100%;
margin-bottom: 30px;

  }

`;

// const ItemDiv=styled.div`
//   width: 100%;
//   height: 200px;
//   padding: 10%;
// `

// `
const Wrapper = styled.div `
height: 200px;
width: 100%;
padding-block: 50px;
display: none;




`

const Section = styled.div `

width: 100%;
height: 65%;
display: flex;
gap: 20px;

.images{
  height: 100%;
  width: 100%;
}

@media all and (max-width: 700px) {
  width: 100%;
height: 35%;
display: flex;
flex-direction: column;
align-items: center;
gap: 10px;


}

`

const Left = styled.div `
width: 50%;
height: 100%;
background-color: #495050;

@media all and (max-width: 700px) {
  width: 100%;
}


`
const Right = styled.div `
width: 50%;
height: 100%;
background-color: #464e4e;
@media all and (max-width: 700px) {
  width: 100%;
}


`
const  Headingone= styled.h1 `
font-size: 20px;

`
const  HeadingTwo= styled.p `
font-size: 15px;
padding-top: 20px;


`

const  Hr= styled.hr `
width: 100px;
border: none;
  height: 1px;
  background-color: #e7e7e7;
  margin: 10px 0;


`