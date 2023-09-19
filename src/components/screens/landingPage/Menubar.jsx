import React from 'react'
import styled from 'styled-components';

function Menubar({ activeMenu, onMenuClick ,setScroll }) {
  const handleMenuClick = (menu) => {
    onMenuClick(menu);
  };
  return (
    <div>

<List>
<Items>
  <ListItem>
    <span active={activeMenu === 'menu1'} onClick={() => {handleMenuClick('menu1');setScroll('menu');}}>
      Branding
    </span>
  </ListItem>
  <ListItem>
    <span active={activeMenu === 'menu2'} onClick={() => {handleMenuClick('menu2');setScroll('menu');}}>
      Marketing
    </span>
  </ListItem>
  <ListItem>
    <span active={activeMenu === 'menu3'} onClick={() => {handleMenuClick('menu3');setScroll('menu');}}>
      Designing
    </span>
  </ListItem>
  <ListItem>
  <span
  active={activeMenu === 'menu4'}
  onClick={() => {handleMenuClick('menu4');setScroll('menu');}}>
  Web Development
</span>

  </ListItem>
  <ListItem>
    <span active={activeMenu === 'menu5'} onClick={() => {handleMenuClick('menu5');setScroll('menu');}}>
      SEO
    </span>
  </ListItem>
  </Items>

</List>

      
    </div>
  )
}

export default Menubar


const List = styled.ul`

  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;




  @media all and (max-width:500px){

    display: flex;
    flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  font-size: 20px;
  gap: 10px;


  }
`;



const Items = styled.ul`

  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  width: 84%;
  border-block: 1px solid white;
  padding-block: 30px;
  







  @media all and (max-width:500px){

    display: flex;
    flex-direction: column;
  justify-content: flex-start;
  flex-wrap: wrap;
  align-items: flex-start;
  font-size: 20px;
  gap: 10px;
  width: 78%;



  }
`;

const ListItem = styled.li`
  margin-bottom: 10px;
  a{
    list-style: none;
    color: white;
  }


   &:hover {
    color: rgb(166, 26, 129); 
    cursor: pointer;

      text-transform: uppercase; /* Example text transform style */
      font-size: 1.1em; /* Increase the font size */



  }
`;
