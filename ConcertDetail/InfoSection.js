import './InfoSection.css';
import { useTranslation } from 'react-i18next';
import { AiFillCaretDown } from "react-icons/ai";

const InfoSection = () => {
   const { t } = useTranslation();

   return (  
      <div className="infoSection">
         <div className="containerInfo">
            <div className="title">
               <h2 id="liveShow">{t("MM2019.info-ci-h2-1")}</h2>
               <h3>{t("MM2019.info-ci-h3-1")}</h3>
            </div>
            {/* {t("MM2019.")} */}
            <div className="infoContent">
               <div className="containerInner">
                  <h4>{t("MM2019.info-ic-h4-1")}</h4>
                  <p>{t("MM2019.info-ic-p-1")}</p>
                  <p>{t("MM2019.info-ic-p-2")}</p>
               </div>

               <div className="containerInner">
                  <h4>{t("MM2019.info-ic-h4-2")}</h4>
                  <p>{t("MM2019.info-ic-p-3")}</p>
                  <p>{t("MM2019.info-ic-p-4")}</p>
                  <p>{t("MM2019.info-ic-p-5")}</p>
               </div>
            </div>
         </div>
         
         <AiFillCaretDown className='arrowPosition arrowStyle'/>
                  
         <div className="containerInfo">
            <div className="title">
               <h2 id="liveShow">{t("MM2019.info-ci-h2-2")}</h2>
               <h3>{t("MM2019.info-ci-h3-1")}</h3>
            </div>

            <div className="infoContent">
               <div className="containerInner">
                  <h4>{t("MM2019.info-ic-h4-1")}</h4>
                  <p>{t("MM2019.info-ic-p-6")}</p>
                  <p>{t("MM2019.info-ic-p-7")}</p>
               </div>

               <div className="containerInner">
                  <h4>{t("MM2019.info-ic-h4-2")}</h4>
                  <p>{t("MM2019.info-ic-p-3")}</p>
                  <p>{t("MM2019.info-ic-p-8")}</p>
                  <p>{t("MM2019.info-ic-p-9")}</p>
               </div>
            </div>
         </div>

         <AiFillCaretDown className='arrowPosition arrowStyle'/>

         <div className="containerInfo">
            <div className="title">
               <h2 id="liveShow">{t("MM2019.info-ci-h2-3")}</h2>
               <h3>{t("MM2019.info-ci-h3-2")}</h3>
            </div>

            <div className="infoContent">
               <div className="containerInner">
                  <h4>{t("MM2019.info-ic-h4-3")}</h4>
                  <a href="https://magicalmirai.com/2019/index_en.html">
                     <button>{t("MM2019.info-btn")}</button>
                  </a>
               </div>

               <div className="containerInner">
                  <h4>{t("MM2019.info-ic-h4-4")}</h4>
                  <a href="https://magicalmirai.com/2019/goods.html">
                     <button>{t("MM2019.info-btn")}</button>
                  </a>
               </div>
            </div>
         </div>

         <AiFillCaretDown className='arrowPosition arrowStyle'/>

         <div className="containerInfo">
            <div className="title">
               <h2 id="liveShow">{t("MM2019.info-ci-h2-4")}</h2>
               <h3>{t("MM2019.info-ci-h3-3")}</h3>
            </div>

            <div className="youtubeVideo">
               <iframe
                  src="https://www.youtube.com/embed/uhjKm5Vzx-U"
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
         <div className="artist">
            <p>{t("MM2019.info-artist")}</p>
         </div>
      </div>
   );
}
 
export default InfoSection;