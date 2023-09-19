
import React from 'react'
import styled from 'styled-components'
import Carousel from "react-elastic-carousel";
import  { useState, useEffect } from "react";


function Team() {

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
    const shouldShowTeamMembers = width > 700;

  
  return (
<Container>
    <img src="/images/teambg1.png" alt="" className='bg1' />
    <img src="/images/teambg2.png" alt="" className='bg2' />

    
<Heading>
  <Head>

Our Team
  </Head>
    </Heading>
    
  
  





    
  









    
    <img src="/images/teamMobbg1.png" alt="" className='bg3' />
    <img src="/images/teamMobbg2.png" alt="" className='bg4' />
 
   

      {shouldShowTeamMembers ? 
      <>

   
 <App className="App" id='app'>
  



  


 <Carousel breakPoints={breakPoints} >
  

<TeamMembers>
  
        <Members>
        <img src="/team/shabeeb.jpg" alt="" className='teamMember' />

        </Members>
        <Members className='bio'>
        <WrapperContent>


            <Name>
            Shabeeb P A
            </Name>
    
            <Designation>
            Founder and Managing Director
            </Designation>
            </WrapperContent>
        

</Members>
<Members>
<img src="/team/amal.jpg" alt="" className='teamMember' />


</Members>
<Members className='bio'>
<WrapperContent>


<Name>
Amal Sajan
</Name>

<Designation>
Account Coordinator
</Designation>
</WrapperContent>

        

</Members>
<Members className='bio'>
<WrapperContent>


<Name>
Afeef P Abbas

</Name>

<Designation>
Digital Analyst
</Designation>
</WrapperContent>
        

</Members>
<Members>
<img src="/team/afeef.jpg" alt="" className='teamMember' />


</Members>
<Members className='bio'>
<WrapperContent>


            <Name>
Gokul Krishna            </Name>
         
            <Designation>
Web Developer            </Designation>
            </WrapperContent>
        

</Members>
<Members>
<img src="/team/gokul.jpg" alt="" className='teamMember' />

</Members>
       <Members>
       <img src="/team/sachin.jpg" alt="" className='teamMember' />



        </Members>
        <Members className='bio'>
        <WrapperContent>


<Name>
Sachin Ajayan
</Name>

<Designation>
Visual Analyst 
</Designation>
</WrapperContent>

    
        

</Members>
        <Members>
        <img src="/team/dilju.jpg" alt="" className='teamMember' />


</Members>
<Members className='bio'>

            <WrapperContent>


<Name>
Dilju Sukumaran 
</Name>

<Designation>
 Visual Analyst

</Designation>
</WrapperContent>

        

</Members>

    {/* </TeamMembers>



    <TeamMembers style={{height:"230px"}}>
        <Members>
        <img src="/team/gokul.jpg" alt="" className='teamMember' />

        </Members>
        <Members className='bio'>
        <WrapperContent>


            <Name>
            Gokul Krishna
            </Name>
       
            <Designation>
            Web Developer
            </Designation>
            </WrapperContent>
        

</Members>
<Members style={{display:"none"}}>

</Members>
<Members className='bio' style={{display:"none"}} >
<WrapperContent>


            <Name>
                Name

            </Name>
            <Surname>
                Surname

            </Surname>
            <Designation>
                Designation

            </Designation>
            </WrapperContent>
        

</Members>

<Members className='bio' style={{display:"none"}}>
<WrapperContent>


            <Name>
                Name

            </Name>
            <Surname>
                Surname

            </Surname>
            <Designation>
                Designation

            </Designation>
            </WrapperContent>
        

</Members>
<Members style={{display:"none"}}>
hei

</Members>
<Members className='bio' style={{display:"none"}}>
<WrapperContent>


            <Name>
                Name

            </Name>
            <Surname>
                Surname

            </Surname>
            <Designation>
                Designation

            </Designation>
            </WrapperContent>
        

</Members>
<Members style={{display:"none"}}>
hei

</Members>
       <Members style={{display:"none"}}>
       hei

        </Members>
        <Members className='bio' style={{display:"none"}}>
        <WrapperContent>


            <Name>
                Name

            </Name>
            <Surname>
                Surname

            </Surname>
            <Designation>
                Designation

            </Designation>
            </WrapperContent>
        

</Members>
        <Members style={{display:"none"}}>
        hei

</Members>
<Members className='bio' style={{display:"none"}}>
<WrapperContent > 


            <Name>
                Name

            </Name>
            <Surname>
                Surname

            </Surname>
            <Designation>
                Designation

            </Designation>
            </WrapperContent>
        

</Members> */}

    </TeamMembers> 







  


</Carousel>
    </App>

    </>



    


      :

<App className="App" id='app'>



  


<Carousel breakPoints={breakPoints} >

          <Item>

            <Section>
              <Left>
              <img src="/team/shabeeb.jpg" alt="" className='teamMember' />
              </Left>
              <Wrapper >
 
 <Headingone>Shabeeb P A</Headingone>
 <HeadingTwo>            Founder and Managing Director
</HeadingTwo>
 <Hr />

</Wrapper>
              <Right>
              <img src="/team/amal.jpg" alt="" className='teamMember' />

              </Right>
              <Wrapper >
 
 <Headingone>Amal Sajan
</Headingone>
 <HeadingTwo>Account Coordinator
</HeadingTwo>
 <Hr />

</Wrapper>
          
            </Section>
     
          </Item>
          <Item>

          <Section>
              <Left>
              <img src="/team/afeef.jpg" alt="" className='teamMember' />

              </Left>
              <Wrapper >
 
 <Headingone>Afeef P Abbas
</Headingone>
 <HeadingTwo>Digital Analyst
</HeadingTwo>
 <Hr />

</Wrapper>
          
              <Right>
              <img src="/team/gokul.jpg" alt="" className='teamMember' />

              </Right>
              <Wrapper >
 
 <Headingone>Gokul Krishna   </Headingone>
 <HeadingTwo>Web Developer</HeadingTwo>
 <Hr />

</Wrapper>
            </Section>

             </Item>
          <Item>

          <Section>
              <Left>
              <img src="/team/sachin.jpg" alt="" className='teamMember' />

              </Left>
              <Wrapper >
 
 <Headingone>Sachin Ajayan
</Headingone>
 <HeadingTwo>Visual Analyst 
</HeadingTwo>
 <Hr />

</Wrapper>
          
              <Right>
              <img src="/team/dilju.jpg" alt="" className='teamMember' />

              </Right>
              <Wrapper >
 
 <Headingone>Dilju Sukumaran 
</Headingone>
 <HeadingTwo>Visual Analyst
</HeadingTwo>
 <Hr />

</Wrapper>
          
            </Section>

                   </Item>

                   {/* <Item  style={{height:"720px"}}>

          <Section>
              <Left>
              <img src="/team/sachin.jpg" alt="" className='teamMember' />

              </Left>
              <Wrapper >
 
 <Headingone>Branding</Headingone>
 <HeadingTwo>soluta culpa nihil.</HeadingTwo>
 <Hr />

</Wrapper>
          
              <Right style={{display:"none"}}>
              <img src="/team/gokul.jpg" alt="" className='teamMember' />

              </Right>
              <Wrapper  style={{display:"none"}}  >
 
 <Headingone>Branding</Headingone>
 <HeadingTwo>soluta culpa nihil.</HeadingTwo>
 <Hr />

</Wrapper>
          
            </Section>

                   </Item> */}
         
        
           





</Carousel>
</App >

}

</Container>

  )
}


const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
align-items: center;
position: relative;


.gwggkg{
  background-color: white;
  box-shadow: 0 0 1px 3px rgb(174, 174, 174);
}

.bg1{
    left: 0;
    top: 50px;
    position: absolute;
    height: 100%;
    width: 46%;
    z-index: -1;


}

.bg2{
    right: 0;
top: 115px;
position: absolute;
height: 91%;
width: 25%;


}


.bg3{
    right: 0;
    bottom: 245px;
    position: absolute;
    display: none;



}

.bg4{
    left: 0;
    top: 150px;
position: absolute;
display: none;



.sc-hBxehG{
  display: none;

  
}




}



@media all and (max-width: 700px) {


    .bg1{
        display: none;


}

.bg2{
display: none;

}
    
    
}


@media all and (min-width: 700px) {
    .bg3{
        display: none;


}

.bg4{
display: none;

}




    
}

`

// const Carousel = styled.div`

// @media all and (max-width: 700px) {
    
//     .sc-jrcTuL{
//         display: none;
    
//       }
    
//       }

//       `

const Heading=styled.div`


@media all and (max-width: 700px) {
  display: flex;
justify-content: center;
}




`
const Head = styled.h1`
font-size: 80px;
font-weight: 500;
    position: absolute;
    padding-top: 100px;
    
    left: 95px;

    @media all and (max-width: 700px) {

font-size: 30px;
position: absolute;
left: 50px;
z-index: 5;




}
`


const TeamMembers = styled.div`
width: 70%;
display: grid;
grid-template-columns: repeat(4,1fr);
grid-template-rows: repeat(4,fr);
grid-gap: 10px;
height: 120vh;

.bio{
    display: flex;
    justify-content: center;



}

/* @media all and (max-width: 700px) {
 visibility: hidden;
     
} */


@media all and (max-width: 500px) {


display: none;


}

`

const Name=styled.h1`
font-size: 24px;
font-weight: bold;

@media all and (max-width:1000px){
    font-size: 20px;
}
    
`


const Designation=styled.h3`
    @media all and (max-width:1000px){
    font-size: 15px;
}
`
const Members = styled.div`
background-color: #252828;
display: flex;
justify-content: center;
align-items: center;

.teamMember{
    height: 100%;
    width: 100%;
}




`

const WrapperContent = styled.div`
width: 70%;
height: 70%;
display: flex;
flex-direction: column;
align-items: flex-start;
gap: 10px;
padding-top: 45px;

`




//slider css 

const App = styled.div`

    font-family: sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
height: 100%;
  width: 100%;
  position: relative;
  margin-bottom: 100px;
  padding-top: 300px;

  @media all and (max-width:700px){
    padding-top: 30px;

  }

  

/* 
  @media all and (min-width: 700px) {
    display: none;
  } */


  .sc-jrcTuL{
    display: none;

  }
 /* /* .sc-jrcTuL.cgWby {
  position: absolute;
bottom: 25%;
right: 10%;
z-index: 50;
 } */
  /* .sc-jrcTuL.xRXJA  {
}  */


`;

const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 400px;
  background-color: transparent;
  margin: 0 15px;
  font-size: 4em;
  width: 100%;
  height: 1000px;
  padding-top: 100px;

  .image{
    width: 80%;
    height: 60%;
    padding-top: 10%;
  }


  
`;


const Wrapper = styled.div `
height: 20%;
width: 80%;


`

const Section = styled.div `

width: 90%;
height: 90%;
display: flex;
flex-direction: column;
align-items: center;
gap: 10px;

`

const Left = styled.div `
width: 100%;
height: 100%;
min-height: 225px;
  min-width: 225px;

img{
  height: 100%;
  width: 100%;
 


}


`
const Right = styled.div `
width: 100%;
height: 100%;
min-height: 225px;
  min-width: 225px;

img{
  height: 100%;
  width: 100%;


}

`
const  Headingone= styled.h1 `
font-size: 20px;

`
const  HeadingTwo= styled.p `
font-size: 15px;


`

const  Hr= styled.hr `
width: 100px;
border: none;
  height: 1px;
  background-color: #e7e7e7;
  margin: 10px 0;


`

export default Team
