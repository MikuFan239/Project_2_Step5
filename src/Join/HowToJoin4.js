import "./HowToJoin.css"
import { Link } from "react-router-dom";
import ProgressBar from "./ProgressBar";
import { useTranslation } from 'react-i18next';

const HowToJoin4 = () => {
   const { t } = useTranslation();

   return (  
      <div className="howToJoin4">
         {/* Intro section */}
         <div className="jointIntro">
         <div className="joinTitle">
               <h1 id="h1Left">{t('Join.title')}</h1>
               <h1 id="h1Right">{t('Join.subtitle')}</h1>
            </div>
         </div>

         {/* progress bar */}
         <div className="pBar">
            <ProgressBar bgcolor="#E64691"  progress='100'  height={25} />
         </div>

         {/* Instruction section */}
         <div className="instruction">
            <div className="steps">
               <h2>{t('Join.step-4-title')}</h2>
               
               <div className="stepBTN">
                  <Link to ="/HowToJoin3"><button>{t('Join.step-btn-prev')}</button></Link>
                  <Link to ="/"><button>{t('Join.step-btn-home')}</button></Link>
               </div>
            </div>
         </div>
      </div>
   );
}
 
export default HowToJoin4;