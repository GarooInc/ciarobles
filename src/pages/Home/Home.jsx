import React, { useState } from 'react'
import NavBar from '../../components/NavBar/NavBar'
import SliderHome from '../../components/SliderHome/SliderHome'
import GridProyects from '../../components/GridProyects/GridProyects'
import Footer from '../../components/Footer/Footer'
import './Home.css'

const Home = () => {

    return (
        <div className='principalPage'>
            <NavBar/>
            <section id='/' className="w-full mt-0 h-screen flex items-center justify-center">
                <SliderHome/>
            </section>
            <section id='/workFeature' className='w-full pt-8 lg:pt-10 xl:py-20 pb-25 min-h-[calc(100vh-400px)] sm:min-h-[calc(100vh-435px)]'>
                <GridProyects/>
            </section>
            <Footer/>
        </div>
        
    );
}

export default Home;