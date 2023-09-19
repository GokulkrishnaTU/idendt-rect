import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components'
import Header from '../general/Header';
import About from './landingPage/About';
import Contact from './landingPage/Contact';
import HeroSection from './landingPage/HeroSection';
import Branding from  './landingPage/Branding'
import Services from './landingPage/Services';
import Menubar from './landingPage/Menubar';
import Team from './landingPage/Team';
import Faq from './landingPage/Faq';
// import Form from './landingPage/Form';

function HomePage() {
    const [scroll, setScroll] = useState("")
    const aboutRef = useRef()
    const serviceRef = useRef()
    const teamRef = useRef()
    const contactRef = useRef()
    const menuRef = useRef()
    const handleScroll = ()=>{
        if (scroll === "about"){
            aboutRef.current?.scrollIntoView({
                behavior: 'smooth',
                block : 'start'
            })
        }
        else if(scroll === "service"){
            serviceRef.current?.scrollIntoView({
                behavior: 'smooth',
                block : 'start'
            })
        }
        else if(scroll === "from"){
            teamRef.current?.scrollIntoView({
                behavior: 'smooth',
                block : 'start'
            })
        }
        else if(scroll === "contact"){
            contactRef.current?.scrollIntoView({
                behavior: 'smooth',
                block : 'start'
            })
        }

        else if(scroll === "menu"){
            menuRef.current?.scrollIntoView({
                behavior: 'smooth',
                block : 'start'
            })
        }
    }
    useEffect(()=>{
        handleScroll()
    },[scroll])





    const [activeMenu, setActiveMenu] = useState('menu1');

    const handleMenuClick = (menu) => {
      setActiveMenu(menu);
    };
    return (
        <MainContainer>
            <Header setScroll={setScroll}/>
            <HeroSection />
            <Menubar activeMenu={activeMenu} onMenuClick={handleMenuClick} setScroll={setScroll}/>
            <Branding  activeMenu={activeMenu} menuRef={menuRef}/>
            <About  aboutRef={aboutRef} />


            <Services serviceRef={serviceRef} />
            <Faq/>
            <Team/>
            <Contact contactRef={contactRef} />
        </MainContainer>
    )
}

export default HomePage;

const MainContainer = styled.div `
    /* height: 100vh; */
`;