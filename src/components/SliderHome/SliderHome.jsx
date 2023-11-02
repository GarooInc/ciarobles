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
                <video className="object-cover w-full h-full" autoPlay loop muted>
                    <source src="https://cdn.shopify.com/videos/c/o/v/025985fddc8e4002b103f5df9a6ad54b.mp4" type="video/mp4" />
                </video>
            </div>
            <div className="h-screen flex items-center justify-center">
                <img src="/images/slider01.jpg" className="object-cover w-full h-full" alt="slider01" />
            </div>
            <div className="h-screen flex items-center justify-center">
                <video className="object-cover w-full h-full" autoPlay loop muted>
                    <source src="https://cdn.shopify.com/videos/c/o/v/025985fddc8e4002b103f5df9a6ad54b.mp4" type="video/mp4" />
                </video>
            </div>
            <div className="h-screen flex items-center justify-center">
                <img src="/images/slider02.jpg" className="object-cover w-full h-full" alt="slider02" />
            </div>
            <div className="h-screen flex items-center justify-center">
                <img src="/images/slider03.jpg" className="object-cover w-full h-full" alt="slider02" />
            </div>
        </Slider>
    )

}

export default SliderHome