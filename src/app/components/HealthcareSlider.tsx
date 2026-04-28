import { useRef, useMemo, memo } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Import local slide images
import slide1 from '../../imports/slide1.png';
import slide2 from '../../imports/slide2.png';
import slide3 from '../../imports/slide3.png';
import slide4 from '../../imports/slide4.png';

const noticeImages = [
  { url: slide1, alt: 'Slide 1' },
  { url: slide2, alt: 'Slide 2' },
  { url: slide3, alt: 'Slide 3' },
  { url: slide4, alt: 'Slide 4' },
];

export const HealthcareSlider = memo(function HealthcareSlider() {
  const sliderRef = useRef<Slider>(null);

  const settings = useMemo(() => ({
    dots: true,
    infinite: true,
    speed: 1200,
    fade: true,
    cssEase: 'ease-in-out',
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000,
    arrows: false,
    pauseOnHover: true,
  }), []);

  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col">
      <div className="w-full pb-8 relative">
        <Slider ref={sliderRef} {...settings} className="notice-slider w-full">
          {noticeImages.map((notice, index) => (
            <div key={index} className="outline-none px-2">
              <img
                src={notice.url}
                alt={notice.alt}
                loading={index === 0 ? 'eager' : 'lazy'}
                decoding="async"
                className="w-full h-auto max-h-[45vh] sm:max-h-[50vh] lg:max-h-[60vh] object-contain mx-auto rounded-lg sm:rounded-xl"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
});
