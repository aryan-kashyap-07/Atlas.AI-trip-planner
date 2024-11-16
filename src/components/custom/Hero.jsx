import React from 'react';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';

function Hero() {
  const cards = [
    { title: 'Adventure Awaits', description: 'Discover new destinations.', image: '/public/image1.jpg' },
    { title: 'Plan Your Trip', description: 'Tailored itineraries for you.', image: '/public/image2.jpg' },
    { title: 'Explore the World', description: 'Unforgettable experiences.', image: '/public/image3.jpg' },
    { title: 'Luxury Travel', description: 'Experience comfort.', image: '/public/image4.jpg' },
    { title: 'Cultural Tours', description: 'Dive into history.', image: '/public/image5.jpg' },
  ];

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Swiper Section */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        navigation
        pagination={{ clickable: true }}
        className="absolute top-0 left-0 w-full h-full"
      >
        {cards.map((card, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative rounded-lg overflow-hidden shadow-xl transform transition-transform duration-500 hover:scale-105"
              style={{
                backgroundImage: `url(${card.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '80vh',
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-75"></div>
              <div className="absolute bottom-5 left-5 text-white z-10">
                <h3 className="text-3xl font-semibold">{card.title}</h3>
                <p className="mt-2 text-sm">{card.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Hero Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-20">
        <div className="bg-black bg-opacity-20 backdrop-blur-lg p-8 rounded-lg shadow-lg">
          <h1 className="text-5xl font-extrabold mb-6">
            <span className="text-[#00aaff]">"Unleash Your Next Adventure"</span>
            <span className="text-white">: Tailored Itineraries Just for You!</span>
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            Your personal trip planner and travel curator, creating custom itineraries tailored to your interests and budget.
          </p>
          <Link to={'/create-trip'}>
            <Button className="bg-[#00aaff] hover:bg-[#008ecc] text-white px-6 py-3 rounded-full shadow-lg transition-transform transform hover:scale-110">
              Get Started, It's Free
            </Button>
          </Link>
        </div>
      </div>

      {/* Bottom Gradient for Style */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-gray-900 to-transparent z-10"></div>
    </div>
  );
}

export default Hero;
