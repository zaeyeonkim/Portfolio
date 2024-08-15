import React, { useState } from 'react';
import '../../css/Skill.css';

const Skill = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const skills = [
        { 
            src: require('../images/about.png'), 
            alt: 'html', 
            descriptions: [
                '<h1> HTML 5 </h1>',
                '<h2> ■ ■ ■ ■ □ </h2>',
                '　',
                '<p> 깔끔하고 편리하게 모든 사람이 볼 수 있게 구조를 설계할 수 있습니다. </p>'
        ]
        },
        { 
            src: require('../images/skill.png'), 
            alt: 'css', 
            descriptions: [
                '<h1> CSS 3 </h1>',
                '<h2> ■ ■ ■ ■ □ </h2>',
                '　',
                '<p> 최신 트렌드에 맞게 디자인을 구성할 수 있으며, 심플하고 트렌디한 디자인을 선호합니다. </p>'
        ]
        },
        { 
            src: require('../images/project.png'), 
            alt: 'js', 
            descriptions: [
                '<h1> JavaScript </h1>',
                '<h2> ■ ■ ■ □ □ </h2>',
                '　',
                '<p> 슬라이드, 탭 등 다양한 애니메이션 효과를 적절하게 사용할 수 있습니다. </p>'
        ]
        },
        { 
            src: require('../images/jquery.png'), 
            alt: 'jQuery', 
            descriptions: [
                '<h1> jQuery </h1>',
                '<h2> ■ ■ ■ □ □ </h2>',
                '　',
                '<p> 상황에 맞는 jQuery를 생각하여 창의적으로 사용할 수 있습니다. </p>'
            ]
        },
        { 
            src: require('../images/home.png'), 
            alt: 'React', 
            descriptions: [
                '<h1> React </h1>',
                '<h2> ■ ■ ■ □ □ </h2>',
                '　',
                '<p> 구조나 틀을 만드는게 아직 미숙하지만 스폰지같은 흡수력으로 흡수할 수 있습니다. </p>'
        ]
        },
        { 
            src: require('../images/Photoshop.png'), 
            alt: 'Photoshop', 
            descriptions: [
                '<h1> Photoshop </h1>',
                '<h2> ■ ■ ■ ■ □ </h2>',
                '　',
                '<p> 배너, 이미지, 이벤트 등 다양한 포토샵 연출을 할 수 있습니다. </p>'
        ]
        },
        { 
            src: require('../images/Illustrator.png'), 
            alt: 'Illustrator', 
            descriptions: [
                '<h1> Illustrator </h1>',
                '<h2> ■ ■ ■ □ □ </h2>',
                '　',
                '<p> 벡터를 이해하여 더 창의적이고 더 간단한 일러스트를 만들 수 있습니다. </p>'
        ]
        },
        { 
            src: require('../images/figma.png'), 
            alt: 'Figma', 
            descriptions: [
                '<h1> Figma </h1>',
                '<h2> ■ ■ ■ ■ □ </h2>',
                '　',
                '<p> 프로토타입, 와이어프레임 등 다양한 웹 기획구조를 능숙하게 제작할 수 있습니다. </p>'
        ]
        },
        { 
            src: require('../images/git.png'), 
            alt: 'git', 
            descriptions: [
                '<h1> git HUB </h1>',
                '<h2> ■ ■ ■ ■ □ </h2>',
                '　',
                '<p> gitHub 프로젝트를 진행하며 관리할 수 있습니다. </p>'
        ]
        }
  ];

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className='wrap'>
      <div className='skill_area'>
        <div className='skill_info'>Click !</div>
        <div className='skill_photo'>
          {skills.map((skill, index) => (
            <div className='data' key={index}>
              <button
                className={index === activeIndex ? 'active' : ''}
                onClick={() => handleClick(index)}
              >
                <img src={skill.src} alt={skill.alt} />
              </button>
            </div>
          ))}
        </div>
        {activeIndex !== null && (
          <div className='description'>
            {skills[activeIndex].descriptions.map((description, index) => (
              <p key={index}>{description}</p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Skill;
