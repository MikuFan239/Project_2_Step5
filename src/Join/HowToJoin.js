import "./HowToJoin.css"
import { Link } from "react-router-dom";
import ProgressBar from "./ProgressBar";
import { useTranslation } from 'react-i18next';

const HowToJoin = () => {
   const { t } = useTranslation();

   return (  
      <div className="howToJoin">
         {/* Intro section */}
         <div className="jointIntro">
            <div className="joinTitle">
               <h1 id="h1Left">{t('Join.title')}</h1>
               <h1 id="h1Right">{t('Join.subtitle')}</h1>
            </div>
         </div>

         <div className="pBar">
            <ProgressBar bgcolor="#E64691"  progress='30'  height={25} />
         </div>
         
         {/* Instruction section */}
         <div className="instruction">
            <div className="steps">
               <h2>{t('Join.step-1-h2')}</h2>
               <div className="stepContent">
                  <p>{t('Join.step-1-p-1')}<a href="https://www.toronto.ca.emb-japan.go.jp/itprtop_en/index.html">{t('Join.step-1-a')}</a>.</p>
                  <p>{t('Join.step-1-p-2')}</p>
                  <p>{t('Join.step-1-p-3')}</p>
               </div>

               <div className="stepBTN">
                  <Link to ="/HowToJoin2"><button>{t('Join.step-btn-next')}</button></Link>
               </div>
            </div>
         </div>
      </div>
   );
}
 
export default HowToJoin;