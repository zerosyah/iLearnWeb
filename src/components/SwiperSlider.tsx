// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { SwiperSliderPropsData } from '../Constants/PropsInventory';

function SwiperSlider ({ data }: SwiperSliderPropsData) {
    const paginationProps = {
        dynamicBullets: true,
        clickable: true,
    }
    //console.log("Data: ", data);
    
  return (
    <div className='s-container'>
      <Swiper
      className='swiper-container'
        modules={[Pagination, Navigation, A11y, Scrollbar]}
      spaceBetween={10}
      navigation={true}
      pagination={paginationProps}
      slidesPerView={1}
        autoplay={{ delay: 3000 }}
        a11y={{ enabled: true }}
    >
      {data.map((img, index:number) => (
              <SwiperSlide key={index} className="">
                <img
                  src={img?.imgurl}
                  alt="slide_image"
                  className="slide-image"
                />
                <div className="title">
                  <h1 className="text-center font-bebasNeue text-[24px] tracking-wider text-selectiveYellow md:text-start md:text-[30px]">{img?.title}</h1>
                </div>
                <div className="content">
                  <div className="text-box font-montserrat">
                    <p className="text-[16px]">{img?.description}</p>
                  </div>
                  <div className="footer">
                    <div className="category">
                      {img?.category.map((item:string, index:number) => (
                        <span className="font-montserrat text-[16px] font-bold" key={index}>{item}</span>
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