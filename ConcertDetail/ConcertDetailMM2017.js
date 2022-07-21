import './ConcertDetailMM.css';
import Info from './InfoSection';
import Special from './SpecialSection';
import CommentSection from './CommentSection';
import { useTranslation } from 'react-i18next';
import { HashLink } from 'react-router-hash-link';
import MM from '../Pictures/2017MM.png';

const ConcertDetailMM20177 = () => {
   const { t } = useTranslation();

   return (  
      <div className="concertDetailMM2019">
         {/* Intro section */}
            <div className="intro">
               <div className="detailTitle">
                  <h1 id="h1Left">{t('MM2019.title')}</h1>
                  <h1 id="h1Right">{t('MM2017.subtitle')}</h1>
               </div>
            
               <div className="btnGroup">
                  <HashLink smooth to ='/ConcertDetailMM2017/#info'>
                     <button>{t('MM2019.intro-btn-1')}</button>
                  </HashLink>
                  <HashLink smooth to ='/ConcertDetailMM2017/#special'>
                     <button>{t('MM2019.intro-btn-2')}</button>
                  </HashLink>
               </div>

               <div className="continerCD">
                  <div className="continerCD inner">
                     <h2>{t('MM2019.intro-ct-h2')}</h2>
                     <div class="VLrotate"> </div>

                     <div className="textGroup">
                        <div className="costumeText">
                           <h3>iXima</h3>
                           <p>{t('MM2019.intro-ct-p')}</p>
                           <HashLink smooth to='/ConcertDetailMM2017/#costume'>{t('MM2019.intro-ct-hl')}<i class="arrowRight"/></HashLink>
                        </div>

                        <div className="themeText">
                           <p id='yearTheme'>{t('MM2019.intro-tt-p')}</p>
                           <h3 id='theme'>{t('MM2019.intro-tt-h3')}</h3>
                        </div>
                     </div>
                  </div>

                  <img src={MM} alt="2019MMDetail"/>
               </div>
            </div>

            {/* Info section */}
            <div className="info" id="info">
               <div className="infoTitle">
                  <h2>{t('MM2019.info-title')}</h2>
               </div>
               <Info />
            </div>

            {/* Special section */}
            <div className="special" id="special">
               <div className="specialTitle">
                  <h2>{t('MM2019.special-title')}</h2>
               </div>

               <div className="btnGroup">
                  <HashLink smooth to ='/ConcertDetailMM2017/#costume'>
                     <button>{t('MM2019.special-btn-1')}</button>
                  </HashLink>
                  <HashLink smooth to ='/ConcertDetailMM2017/#theme song'>
                     <button>{t('MM2019.special-btn-2')}</button>
                  </HashLink>
                  <HashLink smooth to ='/ConcertDetailMM2017/#after report'>
                     <button>{t('MM2019.special-btn-3')}</button>
                  </HashLink>
               </div>

               <Special />
            </div>

            {/* Comments section */}
            <div className="comments" id="comments">
               <div className="infoTitle">
                  <h2>{t('MM2019.comment-title')}</h2>
               </div>
               <CommentSection />
            </div>
      </div>
   );
}
 
export default ConcertDetailMM20177;