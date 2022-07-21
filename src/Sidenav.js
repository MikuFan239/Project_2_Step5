import './Sidenav.css';
import ToTopButton from './ToTopButton';
import Quiz from './Quiz/Quiz';
import logo from './Pictures/Hatsune_miku_logo_v3.png';
import i18next from 'i18next';
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';
import { BsTwitter } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import React, {useState, useEffect} from 'react';
import { useTranslation } from 'react-i18next';

const Sidenav = () => {
     const [toggleMenu, setToggleMenu] = useState(false);
     const [screenWidth, setScreenWidth] = useState(window.innerWidth);
     const { t } = useTranslation();
     
     // menu
     function handleClick(lang) {
          setToggleMenu(false);
          i18next.changeLanguage(lang);
     }

     const collapseMenu = () => {
          setToggleMenu(!toggleMenu);
     }

     const afterClick = () => {
          setToggleMenu(false);
     }

     useEffect(() => {
          const changeWidth = () => {
               setScreenWidth(window.innerWidth);
          }

          window.addEventListener('resize', changeWidth)

          return () => {
               window.removeEventListener('resize', changeWidth);
          }
     }, [])

     // quiz
     const quizBtn = document.querySelector(".quizbtn")
     const quizModal = document.querySelector(".quizModal")
     const closeBtn = document.querySelector(".closeBtn")

     document.addEventListener("DOMContentLoaded",() => {
          quizBtn.addEventListener("click", quizClick)
     })

     function quizClick(event) {
          quizModal.style.display = "block";
          closeBtn.addEventListener("click", () => {
               quizModal.style.display = "none"
          })
     }

     return (  
          <nav className="sidenav">
               {/* Web symbole */}
               <Link to ="/"> 
                    <img src={logo} onClick={afterClick} alt="logo"/>
               </Link>
               
               {/* Responsive nav items */}
               {(toggleMenu || screenWidth > 839) && (
                    <div className="responsive">
                         {/* navigation links */}
                         <ul className="links">
                              <li className="items">
                                   <HashLink smooth to='/#timeline' id ="time" onClick={afterClick}>{t('SideNav.timeline')}</HashLink> 
                              </li>
                              <li className="items">
                                   <Link to ="/HowToJoin" id ="join" onClick={afterClick}>{t('SideNav.join')}</Link>
                              </li>
                              <li>
                                   <Quiz/>
                              </li>
                              <li className="items">
                                   <HashLink smooth to='/#about' onClick={afterClick}>{t('SideNav.about')}</HashLink>
                              </li>
                         </ul>

                         {/* languages selector */}
                         <div className="language-selector">
                              <button onClick={()=>handleClick('EN')} id="enBTN">
                                   English
                              </button>

                              <button onClick={()=>handleClick('ZH')}  id="zhBTN">
                                   简体中文
                              </button>
                         </div>

                         {/* icons for other websites */}
                         <ul className="icons">
                              <li className="iteams">
                                   <a href="https://twitter.com/cfm_miku">
                                   <BsTwitter className='iconStyle' />
                              </a>
                              </li>
                              <li className="iteams">
                                   <a href="https://www.youtube.com/channel/UCJwGWV914kBlV4dKRn7AEFA">
                                   <BsYoutube className='iconStyle' />
                              </a>
                              </li>
                              <li className="iteams">
                                   <a href="https://www.facebook.com/HatsuneMikuOfficialPage/">
                                   <FaFacebookF className='iconStyle' />
                              </a>
                              </li>
                         </ul>
                    </div>
               )}

               {/* Nav menu button */}
               <AiOutlineMenuUnfold onClick={collapseMenu} className='menuIconStyle' />

               <ToTopButton />

               {/* Quiz pop up */}
               <div class="quizModal" id="quizModal">
                    <div class="modal_content">
                         <span class="closeBtn" id="closeBtn">&times;</span>
                         <p>I'm A Pop Up!!!</p>
                    </div>
               </div>
          </nav>
     );
}
 
export default Sidenav;