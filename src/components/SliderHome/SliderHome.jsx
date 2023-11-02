import React from "react"
import Slider from "react-slick"
import "./SliderHome.css"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const SliderHome = () => {
    const settings = {
        dots: true,  // Si deseas mostrar puntos de navegación debajo del slider
        infinite: true,  // Para un desplazamiento infinito
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,  // Para cambiar automáticamente las diapositivas
        autoplaySpeed: 9000,  // El tiempo en milisegundos entre cada cambio de diapositiva
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }

    return (
        <Slider {...settings} className="h-screen min-w-full">
            <div className="h-screen flex items-center justify-center">
                <video className="object-cover w-full h-full" 
                loop 
                autoPlay 
                muted
                playsInline
                >
                    <source src="https://cdn.shopify.com/videos/c/o/v/f88092542afb4c339c40aae9778d2a23.mp4" type="video/mp4" />
                </video>
            </div>
            <div className="h-screen flex items-center justify-center">
                <video className="object-cover w-full h-full" 
                loop 
                autoPlay 
                muted
                playsInline
                >
                    <source src="https://cdn.shopify.com/videos/c/o/v/cc1157b5df8c4676a37f1fc369ca012c.mov" type="video/mp4" />
                </video>
            </div>
            <div className="h-screen flex items-center justify-center">
                <video className="object-cover w-full h-full" 
                loop 
                autoPlay 
                muted
                playsInline
                >
                    <source src="https://cdn.shopify.com/videos/c/o/v/fefb7f17c3614377b61f99f19c1326ac.mp4" type="video/mp4" />
                </video>
            </div>
            
        </Slider>
    )

}

export default SliderHome