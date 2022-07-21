import "./HowToJoin.css"
import { Link } from "react-router-dom";
import ProgressBar from "./ProgressBar";
import { useTranslation } from 'react-i18next';

const HowToJoin3 = () => {
   const { t } = useTranslation();

   return (  
      <div className="howToJoin3">
         {/* Intro section */}
         <div className="jointIntro">
            <div className="joinTitle">
               <h1 id="h1Left">{t('Join.title')}</h1>
               <h1 id="h1Right">{t('Join.subtitle')}</h1>
            </div>
         </div>

         {/* progress bar */}
         <div className="pBar">
            <ProgressBar bgcolor="#E64691"  progress='90'  height={25} />
         </div>

         {/* Instruction section */}
         <div className="instruction">
            <div className="steps">
               <h2>{t('Join.step-3-h2')}</h2>
               <div className="stepContent">
                    <p>{t('Join.step-3-p-1')}</p>
                    <p>{t('Join.step-3-p-2')}</p>
                    <p>{t('Join.step-3-p-3')} <a href="https://www.jreast.co.jp/multi/en/ticket/">JR-EAST</a>{t('Join.step-3-p-4')}</p>
               </div>
               
               <div className="stepBTN">
                  <Link to ="/HowToJoin2"><button>{t('Join.step-btn-prev')}</button></Link>
                  <Link to ="/HowToJoin4"><button>{t('Join.step-btn-next')}</button></Link>
               </div>
            </div>
         </div>
      </div>
   );
}
 
export default HowToJoin3;