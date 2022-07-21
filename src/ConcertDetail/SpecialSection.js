import './SpecialSection.css';
import Accordion from './Accordion';
import SetList from './SetList';
import { useTranslation } from 'react-i18next';
import { AiFillCaretDown } from "react-icons/ai";
import MikuCostume from '../Pictures/Information/2019_Costume_1.png';
import OthersCostume from '../Pictures/Information/2019_Costume_2.png';
import PhotoGallery from '../Pictures/Information/2019_Photo_Gallery.png';

const SpecialSection = () => {
   const { t } = useTranslation();

   return (  
      <div className="specialSection">
         <div className="containerInfo" id="costume">
            <div className="title">
               <h2 id="liveShow">{t("MM2019.special-btn-1")}</h2>
            </div>

            <h3>{t("MM2019.special-ci-h3-1")}</h3>
            <div className="infoContent">
               <img src={ MikuCostume } alt="mikuCostume" />
            </div>
            
            <h3>{t("MM2019.special-ci-h3-2")}</h3>
            <div className="infoContent">
               <img src={ OthersCostume } alt="otherscostume" />
            </div>
         </div>

         <AiFillCaretDown className='arrowPosition arrowStyle'/>
                  
         <div className="containerInfo" id="theme song">
            <div className="title">
               <h2 id="liveShow">{t("MM2019.special-ci-h2-2")}</h2>
            </div>

            <h3> {t("MM2019.special-ci-h3-3")} </h3>
            <div className="youtubeVideo">
               <iframe
                     src="https://www.youtube.com/embed/a-Nf3QUFkOU"
                     width="560"
                     height="315"
                     frameborder="0"
                     allow="autoplay; encrypted-media"
                     allowfullscreen
                     title="MM2019Video"
                  />{" "}
            </div>
         </div>

         {/* background picture artist */}
         <div className="artist1">
            <p>{t("MM2019.special-artist")}</p>
         </div>

         <AiFillCaretDown className='arrowPosition arrowStyle'/>

         <div className="containerInfo" id="after report">
            <div className="title">
               <h2 id="liveShow">{t("MM2019.special-btn-3")}</h2>
            </div>

            <h3>{t("MM2019.special-ci-h3-4")}</h3>
            <div className="infoContent">
               <img src={ PhotoGallery } alt="photoGallery" />
            </div>

            <h3>{t("MM2019.special-ci-h3-5")}</h3>
            <div className="youtubeVideo">
               <iframe
                     src="https://www.youtube.com/embed/7EEUU-yIN5c"
                     width="560"
                     height="315"
                     frameborder="0"
                     allow="autoplay; encrypted-media"
                     allowfullscreen
                     title="MM2019Video"
                  />{" "}
            </div>

            <h3>{t("MM2019.special-ci-h3-6")}</h3>
            <div className="setList">
               <Accordion 
                  title={<h4>{t("MM2019.info-ic-h4-1")}</h4>} content={<SetList />}/>
               <Accordion 
                  title={<h4>{t("MM2019.info-ic-h4-2")}</h4>} content={<SetList />}/>
            </div>
         </div>

         {/* background picture artist */}
         <div className="artist2">
            <p>{t("MM2019.special-artist")}</p>
         </div>
      </div>
   );
}
 
export default SpecialSection;