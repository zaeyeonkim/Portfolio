import React from 'react';
import Slider from 'react-slick';
import '../../css/Project.css';

import img2 from '../images/losangeles.png';
import img4 from '../images/nightly.png';
import img5 from '../images/visualcode.png';
import img6 from '../images/naverclova.png';
import img7 from '../images/solaseado.png'
import img8 from '../images/richmond.png'

const Project = () => {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false
  };

  const slides = [
    {
      img: img8,
      title: 'Richmond 평창',
      sub: '개인제작　/　2일',
      content: '클론코딩',
      link: 'https://richmondpc.netlify.app/'
    },
    {
      img: img7,
      title: '솔라시도',
      sub: '개인제작　/　3일',
      content: '클론코딩',
      link: 'https://solaseado.netlify.app/'
    },
    {
      img: img6,
      title: 'Naver CLOVA',
      sub: '개인제작　/　2일',
      content: '클론코딩',
      link: 'https://naverclova.netlify.app/'
    },
    {
      img: img2,
      title: '로스엔젤레스',
      sub: '팀프로젝트(35%)　/　14일',
      content: '해외사이트를 우리나라 최신 트렌드에 맞게 재탄생시킨 사이트',
      link: 'https://enjoylosangeles.netlify.app/'
    },
    {
      img: img4,
      title: '(Mobile)하룻밤',
      sub: '팀프로젝트(50%)　/　14일',
      content: '"리액트"를 활용한 디자인과 실용적인 부분을 구현한 앱',
      link: 'https://nightly-react-team.netlify.app/'
    },
    {
      img: img5,
      title: 'Visual Studio Code',
      sub: '개인제작　/　7일',
      content: '"리액트"를 활용한 개성있는 포트폴리오 사이트 제작',
      link: 'https://protfoliojy.netlify.app/'
    }
  ];

  const handleDetailButtonClick = (link) => {
    window.open(link, '_blank');
  };

  return (
    <div className='wrap'>
      <div className='project_area'>
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div key={index} className='slide'>
              <img src={slide.img} alt={slide.title} />
              <h2>{slide.title}<p>{slide.sub}</p></h2>
              <p className='cont'>{slide.content}</p>
              <button onClick={() => handleDetailButtonClick(slide.link)}>자세히 보기</button>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Project;
