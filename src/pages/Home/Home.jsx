import React, { useState } from 'react'
import NavBar from '../../components/NavBar/NavBar';

const Home = () => {

    return (
        <div className='principalPage'>
            <NavBar/>
            <section id='/' className="bg-je-blue w-full pt-12 md:pt-20 rounded-b-6xl flex items-center justify-center">
                <div className="w-full max-w-screen-xl mx-4 md:mx-auto flex flex-col md:flex-row md:gap-8 rounded-6xl p-4 md:p-8">
                    
                </div>
            </section>
            <section id='/podcast' className="bg-je-blue w-full pt-12 md:pt-20 rounded-6xl flex flex-col justify-start items-center">
                
            </section>
            <section id='/recursos' className="w-full">
                
            </section>
            <section id='/analisis' className="bg-je-red w-full pt-12 md:pt-20 roundedt-6xl flex flex-col justify-start items-center">
            </section>
            <section id='/contacto' className="bg-je-red w-full  bg-je-blue w-full pt-20 ">
            </section>
            <section id='footer' className="flex-shrink-0 bg-je-black h-100">
                
            </section>
        </div>
        
    );
}

export default Home;