import './Home.css';
import mikuV2 from './Pictures/Miku_V2.png';
import mikuNT from './Pictures/Miku_NT_2.png';
import Timeline from './Timeline';
import Carousel from './Carousel/Carousel';
import { useTranslation } from 'react-i18next';

const Home = () => {
     const { t } = useTranslation();

     return (
          <div className="home">
               {/* Intro section */}
               <div className="intro">
                    <div className="intro-title">
                         <h1>{t('Home.intro-title')}</h1>
                         <p>{t('Home.intro-subtitle')}</p>
                    </div>

                    <div className="intro-carousel">
                         <div className="carousel">
                              <Carousel/>
                         </div>

                         <div className="miku">
                              <img src={mikuNT} alt="introMikuNT" />
                         </div>
                         
                         <p>{t('Home.intro-artist')}</p>
                    </div>
               </div>

               {/* Timeline section */}
               <div className="past-concert" id='timeline'>
                    <div className="title">
                         <h2>{t('Home.timeline-title')}</h2>
                    </div>

                    <div className="timeline">
                         <Timeline />
                    </div>
               </div>

               {/* About section */}
               <div className="about" id="about">
                    <div className="about-miku">
                         <img src={mikuV2} alt="aboutMikuV2" />
                         <p>{t('Home.about-artist')}</p>
                    </div>

                    <div className="about-content">
                         <h2>{t('Home.about-title')}</h2>

                         <p>{t('Home.about-content-1')}</p>

                         <p>{t('Home.about-content-2')}</p>
                    </div>
               </div>
          </div>
     );
}

export default Home;