// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
//@ts-ignore
import 'swiper/css';
//@ts-ignore
import 'swiper/css/navigation';
//@ts-ignore
import 'swiper/css/pagination';
//@ts-ignore
import 'swiper/css/scrollbar';
import { SwiperSliderPropsData } from '../Constants/PropsInventory';

function SwiperSlider ({ data }: SwiperSliderPropsData) {
    const paginationProps = {
        dynamicBullets: true,
        clickable: true,
    }
    console.log("Data: ", data);
    
  return (
    <div className='s-container'>
      <Swiper
      className='swiper-container'
        modules={[Pagination, Navigation, A11y]}
      spaceBetween={10}
      navigation={true}
      pagination={paginationProps}
      slidesPerView={1}
        autoplay={{ delay: 3000 }}
        a11y={{ enabled: true }}
    >
      {data.map((img:any, index:number) => (
              <SwiperSlide key={index} className="">
                <img
                  src={img?.imgurl}
                  alt="slide_image"
                  className="slide-image"
                />
                <div className="title">
                  <h1 className=" font-bebasNeue bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent text-[18px] md:text-[30px] text-center md:text-start tracking-wider">{img?.title}</h1>
                </div>
                <div className="content">
                  <div className="text-box font-montserrat">
                    <p className="">{img?.description}</p>
                  </div>
                  <div className="footer">
                    <div className="category">
                      {img?.category.map((item:string, index:number) => (
                        <span className="font-bebasNeue text-[16px]" key={index}>{item}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
    </Swiper>
    </div>
  );
};

export default SwiperSlider;