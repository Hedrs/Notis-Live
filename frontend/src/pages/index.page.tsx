import styles from './index.module.scss';
import { useEffect, useState } from 'react';
import Logo from '../svgComponents/LogoFolder/Logo';
import Table from '../svgComponents/TableFolder/Table';
import { timeSince } from '../lib/date-helper';
import { LAST_UPDATE } from '../../generated/lastUpdate';
import Vector from '../svgComponents/VectorFolder/Vector';
import Telegram from '../svgComponents/TelegramFolder/Telegram';
import Donation from '../svgComponents/DonationFolder/Donation';
import Prophet from '../components/prophet/index';
import VideoChat from '../components/videoChat/index';
import ArmWrestling from '../components/armWrestling/index';
import Notis from '../components/notis';
import Vegipost from '../components/vegipost';
import BetweenWorlds from '../components/betweenWorlds';
import EvolutionNumberTwo from '../components/evolutionNumberTwo';

function Page() {
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== 'undefined') {
        setWindowWidth(window.innerWidth);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const isSmallMobile = windowWidth <= 500;
  const isMobile = windowWidth <= 720;
  const isTablet = windowWidth <= 1024;

  const resultTime = LAST_UPDATE;
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          {isMobile || isTablet || isSmallMobile ? (
            <>
              <div>
                <div className="flex justify-between items-center">
                  <Logo />
                  <div className={styles.time}>
                    <div className="flex items-center gap-2">
                      Last update: {timeSince(resultTime)}
                      <span className={styles.circle}></span>
                    </div>
                  </div>
                </div>
                <div className={styles.tableAndChanged}>
                  <Table />
                  <div className={styles.changed}>
                    <div className={styles.circleChanged}>
                      <span className={styles.circle}></span>

                      <span>Changed:</span>
                    </div>
                    <div className={styles.taskChanged}>
                      <span className="block"> Corrected the fields</span>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <Logo />
              <div className={styles.header}>
                <div className={styles.tableAndChanged}>
                  <Table />
                  <div className={styles.changed}>
                    <div className={styles.circleChanged}>
                      <span className={styles.circle}></span>

                      <span>Changed:</span>
                    </div>
                    <div className={styles.taskChanged}>
                      <span className="block"> Corrected the fields</span>
                    </div>
                  </div>
                </div>
                <div className={styles.time}>
                  <div className={isSmallMobile ? 'flex items-center gap-1' : 'flex items-center gap-2'}>
                    Last update: {timeSince(resultTime)}
                    <span className={styles.circle}></span>
                  </div>
                </div>
              </div>
            </>
          )}
          <div>
            <span className="">Project: </span>
            <Vegipost />
            <Notis />
            <ArmWrestling />
            <VideoChat />
            <Prophet />
            <BetweenWorlds />
            <EvolutionNumberTwo />
          </div>
          <div className={styles.supportBlockAndDonation}>
            <div className="flex justify-end">
              <div className="flex items-end mr-5">
                <Vector />
              </div>
              <div>
                <a
                  href="https://t.me/notis_industreis"
                  className={
                    isSmallMobile
                      ? 'flex gap-2 items-center text-[10px] outline-0'
                      : isMobile || isTablet
                        ? 'flex gap-4 items-center text-[20px] outline-0'
                        : 'flex gap-4 items-center text-2xl outline-0'
                  }
                >
                  <Telegram /> notis_industreis
                </a>
                <a
                  href="https://www.donationalerts.com/r/flip_the_time"
                  className={
                    isSmallMobile
                      ? 'flex gap-2 items-center text-[10px] mt-2 text-white outline-0'
                      : isMobile || isTablet
                        ? 'flex gap-4 items-center text-[20px] mt-5 text-white outline-0'
                        : 'flex gap-4 items-center text-2xl mt-5 text-white outline-0'
                  }
                >
                  <Donation /> Support please
                </a>
              </div>
            </div>
            <div
              className={
                isSmallMobile ? 'mt-3 text-[10px]' : isMobile || isTablet ? 'mt-3 text-[18px]' : 'mt-3 text-[21px]'
              }
            >
              <p>Mail: notisteam24supp0rt@gmail.com</p>
            </div>
            {/* <p>Viewport width: {typeof window !== 'undefined' ? window.innerWidth : 'loading...'}</p> */}
          </div>
        </div>
      </div>
    </>
  );
}

export const documentProps = {
  title: 'Notis Live',
  description:
    'Online monitoring by Notis Industries: daily updates, efficiency metrics, transparency, and business innovation growth',
};

export default { Page };
