 import React from 'react'
 import styled from 'styled-components'
 import Carousel from "react-elastic-carousel";
import  { useState, useEffect } from "react";

 
 function Branding({ activeMenu ,menuRef}) {


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

  const menuData =  [
    {
      id: 'menu1',
      heading: 'Branding',
      subheading: ' Branding and Beyond',
      description: "A brand is all about the emotions it evokes in the market. It is not limited to a visual identity, a logo, or a design for a product or service, but rather, it's a comprehensive system that integrates all channels and points of contact. We provide an end-to-end range of services, from communications to style manuals, naming, logo creation and placing you right in the market",
      images: [
        {
          id: 'image1',
          heading: 'Image 1 ',
          subheading: 'Image 1 Subheading',
          url: 'image1.jpg',
        },
        {
          id: 'image2',
          heading: 'Image 2 is here',
          subheading: 'Image 2 Subheading',
          url: 'image2.jpg',
        },

        {
          id: 'image3',
          heading: 'Image 3 is here',
          subheading: 'Image 2 Subheading',
          url: 'image2.jpg',
        },

        {
          id: 'image4',
          heading: 'Image 4 is here',
          subheading: 'Image 2 Subheading',
          url: 'image2.jpg',
        },

        {
          id: 'image5',
          heading: 'Image 5 is here',
          subheading: 'Image 2 Subheading',
          url: 'image2.jpg',
        },
      ],
    },
    {
      id: 'menu2',
      heading: 'Marketing',
      subheading: 'Elevating Brands',
      description: "The process of planning and organising the extreme promotional campaigns which will get your business a high-level recognition & that will lead your business to generate a great revenue & towards an ultimate expansion. Our Marketing Squad at idenDT will suggest you the most vibrant strategies to implement so that your business will never have a saturation, it keeps growing and it goes on.",
      images: [
        {
          id: 'image3',
          heading: 'Image 3 ',
          subheading: 'Image 3 Subheading',
          url: 'image3.jpg',
        },
        {
          id: 'image4',
          heading: 'Image 4 Heading',
          subheading: 'Image 4 Subheading',
          url: 'image4.jpg',
        },
        {
          id: 'image3',
          heading: 'Image 3 is here',
          subheading: 'Image 2 Subheading',
          url: 'image2.jpg',
        },

        {
          id: 'image4',
          heading: 'Image 4 is here',
          subheading: 'Image 2 Subheading',
          url: 'image2.jpg',
        },

        {
          id: 'image5',
          heading: 'Image 5 is here',
          subheading: 'Image 2 Subheading',
          url: 'image2.jpg',
        },
      ],
    },

    {
      id: 'menu3',
      heading: 'Designing',
      subheading: 'Inspired Creativity',
      description: "The course of creating a Design for your Brand which will let your business get a worldwide recognition & this design will resemble your brand in the Global Market. Our Crew at idenDT will screen you with the most appropriate Design and will implement it on the finest Media Platforms where in your desired audience will be aware about who you are",
      images: [
        {
          id: 'image3',
          heading: 'Image 3 Heading',
          subheading: 'Image 3 Subheading',
          url: 'image3.jpg',
        },
        {
          id: 'image4',
          heading: 'Image 4 Heading',
          subheading: 'Image 4 Subheading',
          url: 'image4.jpg',
        },
        {
          id: 'image3',
          heading: 'Image 3 is here',
          subheading: 'Image 2 Subheading',
          url: 'image2.jpg',
        },

        {
          id: 'image4',
          heading: 'Image 4 is here',
          subheading: 'Image 2 Subheading',
          url: 'image2.jpg',
        },

        {
          id: 'image5',
          heading: 'Image 5 is here',
          subheading: 'Image 2 Subheading',
          url: 'image2.jpg',
        },
      ],
    },

    {
      id: 'menu4',
      heading: 'Web Development',
      subheading: 'Building Digital Experiences',
      description: "We know that websites speak louder for a brand. Our team of passionate developers and creative designers can help you create next-level websites by strategically blending user experience and brand storytelling. Our web designers and developers create responsive websites that feel at home on any device. Product landing pages, marketing sites, or UX/Ul for company intranet portals-you name it, and we do it all.",
      images: [
        {
          id: 'image3',
          heading: 'Image 3 Heading',
          subheading: 'Image 3 Subheading',
          url: 'image3.jpg',
        },
        {
          id: 'image4',
          heading: 'Image 4 Heading',
          subheading: 'Image 4 Subheading',
          url: 'image4.jpg',
        },
        {
          id: 'image3',
          heading: 'Image 3 is here',
          subheading: 'Image 2 Subheading',
          url: 'image2.jpg',
        },

        {
          id: 'image4',
          heading: 'Image 4 is here',
          subheading: 'Image 2 Subheading',
          url: 'image2.jpg',
        },

        {
          id: 'image5',
          heading: 'Image 5 is here',
          subheading: 'Image 2 Subheading',
          url: 'image2.jpg',
        },
      ],
    },


    {
      id: 'menu5',
      heading: 'SEO',
      subheading: 'Maximizing Visibility',
      description: "If you are ready to take your business to the next level, we are here to assist you. Using our marketing expertise, we can optimize elements on your website that affect your ranking. You cannot maintain your top position on Google only by being popular and visible. It's a fact. Therefore, we focus our off-page SEO service on building credibility for your website. To increase the authority of a website, we use social media to increase brand awareness and provide quality backlinks.",
      images: [
        {
          id: 'image3',
          heading: 'Image 3 Heading',
          subheading: 'Image 3 Subheading',
          url: 'image3.jpg',
        },
        {
          id: 'image4',
          heading: 'Image 4 Heading',
          subheading: 'Image 4 Subheading',
          url: 'image4.jpg',
        },
        {
          id: 'image3',
          heading: 'Image 3 is here',
          subheading: 'Image 2 Subheading',
          url: 'image2.jpg',
        },

        {
          id: 'image4',
          heading: 'Image 4 is here',
          subheading: 'Image 2 Subheading',
          url: 'image2.jpg',
        },

        {
          id: 'image5',
          heading: 'Image 5 is here ',
          subheading: 'Image 2 Subheading',
          url: 'image2.jpg',
        },
      ],
    },
  ];

  const activeMenuItem = menuData.find((item) => item.id === activeMenu);
  console.log('activeMenuItem: ', activeMenuItem);


   return (
  <Container>

        {activeMenuItem?(

      <WrapperMain  ref={menuRef}>
           <Header>
 
      <LeftSide>
       <HeadingMain>
        {activeMenuItem.heading}

       </HeadingMain>

   
        <HeadingSub>
        {activeMenuItem.subheading}

          </HeadingSub>

      </LeftSide>
      <RightSide>

        <RightPara>
{activeMenuItem.description}
        </RightPara>

      </RightSide>
    </Header>






    <Cards>

      <Card>
        <ImgDiv>
        <img className='images' src="services/001.png" alt="" />
        </ImgDiv>
        {/* <CardText>
        Enlightening Insights:
        </CardText>
        <Hr></Hr>
        
        <CardDesc>
        We embark on an illuminating journey of exploration, unearthing the essence of your brand, unraveling its unique narrative, and grasping its fundamental values. This phase forms the bedrock for an engaging and captivating branding experience.
      </CardDesc>  */}


      </Card>





      <Card>
        <ImgDiv>
        <img className='images' src="services/002.png" alt="" />

        </ImgDiv>
        {/* <CardText>
        Revealing Perspectives: 
        </CardText>
        <Hr></Hr>

        <CardDesc>
        Through meticulous market research, we delve into industry trends, dissect competitor landscapes, and gain profound insights into your target audience. Armed with this knowledge, we acquire a comprehensive understanding of your brand's positioning, enabling us to devise winning strategies.
        </CardDesc> */}


      </Card>






      <Card>
        <ImgDiv>
        <img className='images' src="services/003.png" alt="" />
        </ImgDiv>
        {/* <CardText>
Strategic Brilliance
        </CardText>
        <Hr></Hr>
        
        <CardDesc>
        We orchestrate a masterful brand strategy that harmonizes with your vision and objectives. This phase entails crafting a comprehensive roadmap encompassing brand positioning, messaging, and differentiation, laying the groundwork for an extraordinary brand identity.    
      </CardDesc> */}


      </Card>

      </Cards>
      <Cards>


      <Card>
        <ImgDiv>
        <img className='images' src="services/004.png" alt="" />

        </ImgDiv>
        {/* <CardText>
Identy Creation
        </CardText>
        <Hr></Hr>

        <CardDesc>
with a crystal-clear strategy in place , we venture into the reamod identy designs. our team of creative virtuosos breatheslife into your brand, fashoning a visually captivating and unforgettable brand identity that strikes a chord with your audience, leaving an indelible impression
        </CardDesc> */}


      </Card>





      <Card>
        <ImgDiv>
        <img className='images' src="services/005.png" alt="" />

        </ImgDiv>
        {/* <CardText>
Touchpoint Brilliance
        </CardText>
        <Hr></Hr>

        <CardDesc>
Every interaction with your brand counts .in this phase we meticulously craft and curate touchpoints across diverse channels , ensuring a seamless and immersive brand experience at every juncture , be it on digital platforms or within physical environments. 
        </CardDesc> */}


      </Card>

      <Card>
        <ImgDiv>
        <img className='images' src="services/006.png" alt="" />

        </ImgDiv>
        {/* <CardText>
Empowering Assets
        </CardText>
        <Hr></Hr>

        <CardDesc>
We equip  your brand with the essebtial tools for triumph.Through metculious development and refinement , we forge a suite of assets that empower your brand's presence, including logos, visual elements, brand guideliness , and more
        </CardDesc> */}


      </Card>

      </Cards>



     

      <App className="App">
      <Carousel breakPoints={breakPoints} >
          <Item>

            <Section>
              <Left>
              <img className='images' src="services/001.png" alt="" />

              </Left>
              {/* <Wrapper >
 
 <Headingone>Branding</Headingone>
 <HeadingTwo>soluta culpa nihil.</HeadingTwo>
 <Hr />


</Wrapper> */}
              
            </Section>
     
          </Item>
          <Item>

          <Section>
              <Left>
              <img className='images' src="services/002.png" alt="" />

              </Left>
              {/* <Wrapper >
 
 <Headingone>Branding</Headingone>
 <HeadingTwo>soluta culpa nihil.</HeadingTwo>
 <Hr />

</Wrapper> */}
          
             
            </Section>

             </Item>
          <Item>

          <Section>
              <Left>
              <img className='images' src="services/003.png" alt="" />

              </Left>
              {/* <Wrapper >
 
 <Headingone>Branding</Headingone>
 <HeadingTwo>soluta culpa nihil.</HeadingTwo>
 <Hr />

</Wrapper> */}
          
             
            </Section>

                   </Item>
          <Item>

          <Section>
              <Left>
              <img className='images' src="services/004.png" alt="" />

              </Left>
              {/* <Wrapper >
 
 <Headingone>Branding</Headingone>
 <HeadingTwo>soluta culpa nihil.</HeadingTwo>
 <Hr />

</Wrapper> */}
          
              
          
            </Section>
  
                   </Item>
          <Item>

          <Section>
              <Left>
              <img className='images' src="services/005.png" alt="" />

              </Left>
              {/* <Wrapper >
 
 <Headingone>Branding</Headingone>
 <HeadingTwo>soluta culpa nihil.</HeadingTwo>
 <Hr />

</Wrapper> */}
          
            
          
            </Section>
       </Item>
          <Item>

          <Section>
              <Left>
              <img className='images' src="services/006.png" alt="" />

              </Left>
              {/* <Wrapper >
 
 <Headingone>Branding</Headingone>
 <HeadingTwo>soluta culpa nihil.</HeadingTwo>
 <Hr />

</Wrapper> */}
          
          
            </Section>
       </Item>

        </Carousel>
      </App>

    
    </WrapperMain>

):""}


   
  </Container>
   ) 
 }
 
 export default Branding


 const Container = styled.div `
width: 100%;
height: 100%;
background-image: url("images/bgimg.png");
background-size: 100% 100%;
display: flex;
justify-content: center;

@media all and (max-width: 580px) {
  background-image: url("images/imgbg.jpg");


}



`
const WrapperMain= styled.div `
max-width: 95%;
display: flex;
flex-direction: column;
align-items: center;
padding-top: 200px;
height: 100%;

@media all and (max-width: 580px) {
display: flex;
flex-direction: column;
align-items:center;
gap:10px;
padding-top: 60px;


}



`

const Header= styled.div `
display: flex;
width: 89%;
padding-bottom: 150px;

@media all and (max-width: 750px) {
display: flex;
flex-direction: column;
align-items:center;
gap:30px;
padding-bottom: 0;

}

@media all and (max-width: 500px) {
  width: 100%;

}




`
const  LeftSide= styled.div `
width: 50%;
display: flex;
flex-direction: column;
gap: 50px;

@media all and (max-width: 500px) {
  width: 100%;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: flex-start;
gap: 30px;
padding-left: 38px;

}



`
const  RightSide= styled.div `

width: 50%;

padding-top: 100px;
@media all and (max-width: 500px) {
  width: 100%;
  padding-top: 50px;
  padding-left: 40px;


}



`
const  HeadingMain= styled.h1 `


`
const  HeadingSub= styled.h1 `
font-size: 80px;
font-weight: 500;
word-wrap: break-word;
max-width: 94%;

@media all and (max-width: 700px) {
  font-size: 30px;
font-weight: 500;
word-wrap: break-word;
max-width: 100%;
}


@media all and (max-width: 400px) {
  font-size: 30px;
font-weight: 900;
word-wrap: break-word;
max-width: 90%;
}




`

const  RightPara= styled.p `

font-size: 15px;
@media all and (max-width: 400px) {
  font-size: 12px;

}


`
const Card = styled.div `
width: 10%;
display: flex;
flex-direction: column;
align-items: flex-start;


`


const Cards = styled.div`
  width: 92%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 250px;

  & > ${Card} {
    width: 15%;
    height: 100%;
    margin-bottom: 80px;
  }

  @media (max-width: 900px) {
    & > ${Card} {
      width: 85%;
      gap: 10px;

    }
  }

  @media (max-width: 580px) {
    & > ${Card} {
      display: none;
    }
  }
`;




const ImgDiv = styled.div `
width: 100%;
height: 100%;

.images{
  height: 310px;
  width: 350px;
}


`
// const  CardText= styled.p `
// padding-top: 10px;
// text-align: left;


// `
// const  CardDesc= styled.p `
// padding-top: 10px;
// font-size: 10px;


// `



//Mob Slider



const App = styled.div`
  font-family: sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  position: relative;
  margin-bottom: 100px;

  @media all and (min-width: 700px) {
    display: none;

  }

  .sc-jrcTuL{
    display: none;

  }


  /* .sc-jrcTuL.cgWby.rec.rec-arrow.rec.rec-arrow-left{
    display: none;

 } 

 .sc-jrcTuL.cgWby.rec.rec-arrow.rec.rec-arrow-right  {
      display: none;
}  */
`;

const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 200px;
  background-color: transparent;
  margin: 0;
  font-size: 4em;
  width: 100%;
  height: 400px;

  .image{
    width: 100%;
    height: 80%;
  }



`;


// const Wrapper = styled.div `
// width: 100%;


// `

const Section = styled.div `

width: 90%;
height: 80%;
display: flex;
flex-direction: column;
align-items: center;
gap: 10px;

`

const Left = styled.div `
width: 100%;
height: 100%;
.images{
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