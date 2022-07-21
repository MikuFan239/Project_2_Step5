/* Part of this code takes refernce from: https://www.w3schools.com/howto/howto_css_timeline.asp */
import './Timeline.css';
import { Link } from 'react-router-dom';
import { MdUpcoming } from "react-icons/md";
import { useTranslation } from 'react-i18next';
import MM2022 from './Pictures/2022MM.png';
import MM2021 from './Pictures/2021MM.png';
import MM2020 from './Pictures/2020MM_summer.png';
import MM2019 from './Pictures/2019MM.png';
import MM2018 from './Pictures/2018MM.png';
import MM2017 from './Pictures/2017MM.png';
import MM2016 from './Pictures/2016MM.png';
import MM2015 from './Pictures/2015MM.png';
import MM2014 from './Pictures/2014MM.png';
import MM2013 from './Pictures/2013MM.png';

const Timeline = () => {
  const { t } = useTranslation();

  return (
    <div className="timeline">
      <div className="containerTL left">
        <div className="concert">
          <div className="imgBTN">
            <a href = "https://magicalmirai.com/10th/index_en.html">
              <img src={MM2022} alt="2022MM" id="MM2022" />
              <button>{t('timeline.2022')}</button>
            </a>
          </div>
        </div>

        <div className="upcoming">
            <MdUpcoming className='comingIconStyle'/>
            <p>{t('timeline.2022-uc')}</p>
        </div>

        <h2>2022</h2>
        <p id='artists'>{t('timeline.2022-artist')}</p>
      </div>

      <div className="containerTL right">
        <div className="concert">
          <div className="imgBTN">
            <Link to = "/ConcertDetailMM2021">
              <img src={MM2021} alt="2021MM" id="MM2021" />
              <button>{t('timeline.2021')}</button>
            </Link>
          </div>
        </div>

        <h2>2021</h2>
        <p id='artists'>{t('timeline.2022-artist')}</p>
      </div>

      <div className="containerTL left">
        <div className="concert">
          <div className="imgBTN">
            <Link to = "/ConcertDetailMM2020">
              <img src={MM2020} alt="2020MM" id="MM2020"/>
              <button>{t('timeline.2020')}</button>
            </Link>
          </div>
        </div>
        
        <h2>2020</h2>
        <p id='artists'>{t('timeline.2020-artist')}</p>
      </div>

      <div className="containerTL right">
        <div className="concert">
          <div className="imgBTN">
            <Link to = "/ConcertDetailMM2019">
              <img src={MM2019} alt="2019MM" id="MM2019"/>
              <button>{t('timeline.2019')}</button>
            </Link>
          </div>
        </div>
        
        <h2>2019</h2>
        <p id='artists'>{t('timeline.2019-artist')}</p>
      </div>

      <div className="containerTL left">
        <div className="concert">
          <div className="imgBTN">
            <Link to = "/ConcertDetailMM2018">
              <img src={MM2018} alt="2018MM" id="MM2018"/>
              <button>{t('timeline.2018')}</button>
            </Link>
          </div>
        </div>
        
        <h2>2018</h2>
        <p id='artists'>{t('timeline.2018-artist')}</p>
      </div>

      <div className="containerTL right">
        <div className="concert">
          <div className="imgBTN">
            <Link to = "/ConcertDetailMM2017">
              <img src={MM2017} alt="2019MM" id="MM2017"/>
              <button>{t('timeline.2017')}</button>
            </Link>
          </div>
        </div>
        
        <h2>2017</h2>
        <p id='artists'>{t('timeline.2017-artist')}</p>
      </div>

      <div className="containerTL left">
        <div className="concert">
          <div className="imgBTN">
            <Link to = "/ConcertDetailMM2016">
              <img src={MM2016} alt="2018MM" id="MM2016"/>
              <button>{t('timeline.2016')}</button>
            </Link>
          </div>
        </div>
        
        <h2>2016</h2>
        <p id='artists'>{t('timeline.2016-artist')}</p>
      </div>

      <div className="containerTL right">
        <div className="concert">
          <div className="imgBTN">
            <Link to = "/ConcertDetailMM2015">
              <img src={MM2015} alt="2019MM" id="MM2015"/>
              <button>{t('timeline.2015')}</button>
            </Link>
          </div>
        </div>
        
        <h2>2015</h2>
        <p id='artists'>{t('timeline.2015-artist')}</p>
      </div>

      <div className="containerTL left">
        <div className="concert">
          <div className="imgBTN">
            <Link to = "/ConcertDetailMM2014">
              <img src={MM2014} alt="2018MM" id="MM2014"/>
              <button>{t('timeline.2014')}</button>
            </Link>
          </div>
        </div>
        
        <h2>2014</h2>
        <p id='artists'>{t('timeline.2014-artist')}</p>
      </div>

      <div className="containerTL right">
        <div className="concert">
          <div className="imgBTN">
            <Link to = "/ConcertDetailMM2013">
              <img src={MM2013} alt="2019MM" id="MM2013"/>
              <button>{t('timeline.2013')}</button>
            </Link>
          </div>
        </div>
        
        <h2>2013</h2>
        <p id='artists'>{t('timeline.2013-artist')}</p>
      </div>

    </div>
  );
}

export default Timeline;