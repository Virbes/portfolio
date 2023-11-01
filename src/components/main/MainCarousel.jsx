import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import '../../styles/components/_carousel.scss';

export const MainCarousel = () => {

    const techs = [
        'laravel',
        'django',
        'js',
        'php',
        'react',
        'flask',
    ];

    return (
        <div className='container-carousel'>
            <Swiper
                slidesPerView={4}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {
                    techs.map(tech => <SwiperSlide><img src={`public/icons/${tech}.png`} /></SwiperSlide>)
                }

            </Swiper>
        </div>
    );
}
