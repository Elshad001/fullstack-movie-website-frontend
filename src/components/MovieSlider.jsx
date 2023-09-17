import React from "react";
import Slider from "react-slick";
import { AiOutlineHeart } from "react-icons/ai";

function MovieSlider({ contents }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    //   nextArrow: <SampleNextArrow />,
    //   prevArrow: <SamplePrevArrow />
  };





  return (
    <div className="w-5/6 mx-auto my-12 ">
      <Slider {...settings}>
        {
          contents.map((content, index) => {
            return (
              <div key={content.id} className="w-full h-[450px]  bg-slate-200 py-8 px-12">
                <div key={content.id} className='w-52 h-96 bg-slate-300 rounded'>
                <img className='w-52 h-72 rounded-tl rounded-tr' src={content.image} alt='' />
                <div className='flex justify-between px-2 my-2'>
                  <p className='font-sans font-semibold text-xl'>{content.name}</p>
                </div>
                <div className='flex justify-between px-2'>
                  <p className='font-sans font-semibold text-xl text-yellow-700'>{content.year}</p>
                  <p className='font-sans font-semibold text-xl text-yellow-700'>{content.raiting}</p>
                </div>
              </div>
              </div>
              
            );
          })
        }
      </Slider>

    </div>
  );
}

export default MovieSlider;