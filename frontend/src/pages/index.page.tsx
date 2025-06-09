import styles from './index.module.scss';
import Arrow from '../svgComponents/ArrowFolder/Arrow';
import { useEffect, useState } from 'react';
import Logo from '../svgComponents/LogoFolder/Logo';
import Table from '../svgComponents/TableFolder/Table';
import { timeSince } from '../lib/date-helper';
import { LAST_UPDATE } from '../../generated/lastUpdate';
import Vector from '../svgComponents/VectorFolder/Vector';
import Telegram from '../svgComponents/TelegramFolder/Telegram';
import Donation from '../svgComponents/DonationFolder/Donation';

function Page() {
  const [openedBlocks, setOpenedBlocks] = useState<Record<string, boolean>>({
    vegipost: false,
    main: false,
    header: false,
    search: false,
    algorithmSearch: false,
    category: false,
    region: false,
    history: false,
    favorites: false,
    notification: false,
    message: false,
    algorithmInMessage: false,
    slider: false,
    topProduct: false,
    helpChat: false,
    profile: false,
    personalData: false,
    myAds: false,
    setting: false,
    addingAds: false,
    searchPage: false,
    algorithmFilter: false,
    cardView: false,
    notis: false,
    mainNotis: false,
    armWrestling: false,
    writeAScriptStarts: false,
    layout: false,
    development: false,
    menu: false,
    videoSite: false,
    video: false,
    videoMessage: false,
    visualization: false,
    webSite: false,
    mainWebSite: false,
    vegipostSEO: false,
  });

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

  function toggleBlock(blockId: string) {
    setOpenedBlocks((prev) => ({
      ...prev,
      [blockId]: !prev[blockId],
    }));
  }

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
                      <span className="block"> - Watched lessons on web socket</span>
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
                      <span className="block"> - Watched lessons on web socket</span>
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
            <div className="flex mt-auto">
              <span className="opacity-0">---</span>
              <span className="opacity-15"> | </span>
              <span className="opacity-0">------</span>
              <span className="opacity-15"> | </span>
              <button onClick={() => toggleBlock('vegipost')} className={styles.point}>
                <span className="flex items-center gap-1">
                  <Arrow newClass={openedBlocks['vegipost']} />
                  Web site VEGIPOST on 6.94%
                </span>
              </button>
            </div>
            {openedBlocks['vegipost'] ? (
              <>
                <div className="flex">
                  <span className="opacity-0">---</span>
                  <span className="opacity-15"> | </span>
                  <span className="opacity-0">------</span>
                  <span className="opacity-15"> | </span>
                  <span className="opacity-0">------</span>
                  <span className="opacity-15"> | </span>
                  <span className="opacity-0">------</span>
                  <span className="opacity-15"> | </span>
                  <button onClick={() => toggleBlock('main')} className={styles.point}>
                    <span className="flex items-center gap-1">
                      <Arrow newClass={openedBlocks['main']} />
                      Main: - 26.27%
                    </span>
                  </button>
                </div>
                {openedBlocks['main'] ? (
                  <>
                    <div className="flex">
                      <span className="opacity-0">---</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <button onClick={() => toggleBlock('header')} className={styles.point}>
                        <span className="flex items-center gap-1">
                          <Arrow newClass={openedBlocks['header']} />
                          Header: - 47,63%
                        </span>
                      </button>
                    </div>
                    {openedBlocks['header'] ? (
                      <>
                        <div className="flex">
                          <span className="opacity-0">---</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <button className={styles.point}>
                            <span className="ml-[25px]">Logo - 100%</span>
                          </button>
                        </div>
                        <div className="flex">
                          <span className="opacity-0">---</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <button onClick={() => toggleBlock('search')} className={styles.point}>
                            <span className="flex items-center gap-1">
                              <Arrow newClass={openedBlocks['search']} />
                              Search: - 25%
                            </span>
                          </button>
                        </div>
                        {openedBlocks['search'] ? (
                          <>
                            <div className="flex">
                              <span className="opacity-0">---</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <button onClick={() => toggleBlock('algorithmSearch')} className={styles.point}>
                                <span className="flex items-center gap-1">
                                  <Arrow newClass={openedBlocks['algorithmSearch']} />
                                  Algorithm: - 0%
                                </span>
                              </button>
                            </div>
                            {openedBlocks['algorithmSearch'] ? (
                              <>
                                <div className="flex">
                                  <span className="opacity-0">---</span>
                                  <span className="opacity-15"> | </span>
                                  <span className="opacity-0">------</span>
                                  <span className="opacity-15"> | </span>
                                  <span className="opacity-0">------</span>
                                  <span className="opacity-15"> | </span>
                                  <span className="opacity-0">------</span>
                                  <span className="opacity-15"> | </span>
                                  <span className="opacity-0">------</span>
                                  <span className="opacity-15"> | </span>
                                  <span className="opacity-0">------</span>
                                  <span className="opacity-15"> | </span>
                                  <span className="opacity-0">------</span>
                                  <span className="opacity-15"> | </span>
                                  <span className="opacity-0">------</span>
                                  <span className="opacity-15"> | </span>
                                  <span className="opacity-0">------</span>
                                  <span className="opacity-15"> | </span>
                                  <span className="opacity-0">------</span>
                                  <span className="opacity-15"> | </span>
                                  <span className="opacity-0">------</span>
                                  <span className="opacity-15"> | </span>
                                  <span className="opacity-0">------</span>
                                  <span className="opacity-15"> | </span>
                                  <button className={styles.point}>
                                    <span className="ml-[25px]">Algorithm search - 0%</span>
                                  </button>
                                </div>
                                <div className="flex">
                                  <span className="opacity-0">---</span>
                                  <span className="opacity-15"> | </span>
                                  <span className="opacity-0">------</span>
                                  <span className="opacity-15"> | </span>
                                  <span className="opacity-0">------</span>
                                  <span className="opacity-15"> | </span>
                                  <span className="opacity-0">------</span>
                                  <span className="opacity-15"> | </span>
                                  <span className="opacity-0">------</span>
                                  <span className="opacity-15"> | </span>
                                  <span className="opacity-0">------</span>
                                  <span className="opacity-15"> | </span>
                                  <span className="opacity-0">------</span>
                                  <span className="opacity-15"> | </span>
                                  <span className="opacity-0">------</span>
                                  <span className="opacity-15"> | </span>
                                  <span className="opacity-0">------</span>
                                  <span className="opacity-15"> | </span>
                                  <span className="opacity-0">------</span>
                                  <span className="opacity-15"> | </span>
                                  <span className="opacity-0">------</span>
                                  <span className="opacity-15"> | </span>
                                  <span className="opacity-0">------</span>
                                  <span className="opacity-15"> | </span>
                                  <button className={styles.point}>
                                    <span className="ml-[25px]">Morphological analyzer - 0%</span>
                                  </button>
                                </div>
                                <div className="flex">
                                  <span className="opacity-0">---</span>
                                  <span className="opacity-15"> | </span>
                                  <span className="opacity-0">------</span>
                                  <span className="opacity-15"> | </span>
                                  <span className="opacity-0">------</span>
                                  <span className="opacity-15"> | </span>
                                  <span className="opacity-0">------</span>
                                  <span className="opacity-15"> | </span>
                                  <span className="opacity-0">------</span>
                                  <span className="opacity-15"> | </span>
                                  <span className="opacity-0">------</span>
                                  <span className="opacity-15"> | </span>
                                  <span className="opacity-0">------</span>
                                  <span className="opacity-15"> | </span>
                                  <span className="opacity-0">------</span>
                                  <span className="opacity-15"> | </span>
                                  <span className="opacity-0">------</span>
                                  <span className="opacity-15"> | </span>
                                  <span className="opacity-0">------</span>
                                  <span className="opacity-15"> | </span>
                                  <span className="opacity-0">------</span>
                                  <span className="opacity-15"> | </span>
                                  <span className="opacity-0">------</span>
                                  <span className="opacity-15"> | </span>
                                  <button className={styles.point}>
                                    <span className="ml-[25px]">Algorithm rankings - 0%</span>
                                  </button>
                                </div>
                                <div className="flex">
                                  <span className="opacity-0">---</span>
                                  <span className="opacity-15"> | </span>
                                  <span className="opacity-0">------</span>
                                  <span className="opacity-15"> | </span>
                                  <span className="opacity-0">------</span>
                                  <span className="opacity-15"> | </span>
                                  <span className="opacity-0">------</span>
                                  <span className="opacity-15"> | </span>
                                  <span className="opacity-0">------</span>
                                  <span className="opacity-15"> | </span>
                                  <span className="opacity-0">------</span>
                                  <span className="opacity-15"> | </span>
                                  <span className="opacity-0">------</span>
                                  <span className="opacity-15"> | </span>
                                  <span className="opacity-0">------</span>
                                  <span className="opacity-15"> | </span>
                                  <span className="opacity-0">------</span>
                                  <span className="opacity-15"> | </span>
                                  <span className="opacity-0">------</span>
                                  <span className="opacity-15"> | </span>
                                  <span className="opacity-0">------</span>
                                  <span className="opacity-15"> | </span>
                                  <span className="opacity-0">------</span>
                                  <span className="opacity-15"> | </span>
                                  <button className={styles.point}>
                                    <span className="ml-[25px]">Algorithm indexing - 0%</span>
                                  </button>
                                </div>
                              </>
                            ) : null}
                            <div className="flex">
                              <span className="opacity-0">---</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <button className={styles.point}>
                                <span className="ml-[25px]">Search page - 0%</span>
                              </button>
                            </div>
                            <div className="flex">
                              <span className="opacity-0">---</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <button className={styles.point}>
                                <span className="ml-[25px]">Style - 100%</span>
                              </button>
                            </div>
                            <div className="flex">
                              <span className="opacity-0">---</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <button className={styles.point}>
                                <span className="ml-[25px]">Tips - 0%</span>
                              </button>
                            </div>
                          </>
                        ) : null}
                        <div className="flex">
                          <span className="opacity-0">---</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <button onClick={() => toggleBlock('category')} className={styles.point}>
                            <span className="flex items-center gap-1">
                              <Arrow newClass={openedBlocks['category']} />
                              Category: - 100%
                            </span>
                          </button>
                        </div>
                        {openedBlocks['category'] ? (
                          <>
                            <div className="flex">
                              <span className="opacity-0">---</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <button className={styles.point}>
                                <span className="ml-[25px]">Modal Window (alg.) - 100%</span>
                              </button>
                            </div>
                            <div className="flex">
                              <span className="opacity-0">---</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <button className={styles.point}>
                                <span className="ml-[25px]">Modal Window (style) - 100%</span>
                              </button>
                            </div>
                            <div className="flex">
                              <span className="opacity-0">---</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <button className={styles.point}>
                                <span className="ml-[25px]">Button - 100%</span>
                              </button>
                            </div>
                            <div className="flex">
                              <span className="opacity-0">---</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <button className={styles.point}>
                                <span className="ml-[25px]">Block Category (alg.) - 100%</span>
                              </button>
                            </div>
                            <div className="flex">
                              <span className="opacity-0">---</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <button className={styles.point}>
                                <span className="ml-[25px]">Block Category (style) - 100%</span>
                              </button>
                            </div>
                          </>
                        ) : null}
                        <div className="flex">
                          <span className="opacity-0">---</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <button onClick={() => toggleBlock('region')} className={styles.point}>
                            <span className="flex items-center gap-1">
                              <Arrow newClass={openedBlocks['region']} />
                              Region: - 20%
                            </span>
                          </button>
                        </div>
                        {openedBlocks['region'] ? (
                          <>
                            <div className="flex">
                              <span className="opacity-0">---</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <button className={styles.point}>
                                <span className="ml-[25px]">Modal Window (alg.) - 0%</span>
                              </button>
                            </div>
                            <div className="flex">
                              <span className="opacity-0">---</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <button className={styles.point}>
                                <span className="ml-[25px]">Modal Window (style) - 0%</span>
                              </button>
                            </div>
                            <div className="flex">
                              <span className="opacity-0">---</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <button className={styles.point}>
                                <span className="ml-[25px]">Button - 100%</span>
                              </button>
                            </div>
                            <div className="flex">
                              <span className="opacity-0">---</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <button className={styles.point}>
                                <span className="ml-[25px]">Block Region (alg.) - 0%</span>
                              </button>
                            </div>
                            <div className="flex">
                              <span className="opacity-0">---</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <button className={styles.point}>
                                <span className="ml-[25px]">Block Region (style) - 0%</span>
                              </button>
                            </div>
                          </>
                        ) : null}
                        <div className="flex">
                          <span className="opacity-0">---</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <button onClick={() => toggleBlock('history')} className={styles.point}>
                            <span className="flex items-center gap-1">
                              <Arrow newClass={openedBlocks['history']} />
                              History: - 20%
                            </span>
                          </button>
                        </div>
                        {openedBlocks['history'] ? (
                          <>
                            <div className="flex">
                              <span className="opacity-0">---</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <button className={styles.point}>
                                <span className="ml-[25px]">Modal Window (alg.) - 0%</span>
                              </button>
                            </div>
                            <div className="flex">
                              <span className="opacity-0">---</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <button className={styles.point}>
                                <span className="ml-[25px]">Modal Window (style) - 0%</span>
                              </button>
                            </div>
                            <div className="flex">
                              <span className="opacity-0">---</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <button className={styles.point}>
                                <span className="ml-[25px]">Button - 100%</span>
                              </button>
                            </div>
                            <div className="flex">
                              <span className="opacity-0">---</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <button className={styles.point}>
                                <span className="ml-[25px]">Block History (alg.) - 0%</span>
                              </button>
                            </div>
                            <div className="flex">
                              <span className="opacity-0">---</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <button className={styles.point}>
                                <span className="ml-[25px]">Block History (style) - 0%</span>
                              </button>
                            </div>
                          </>
                        ) : null}
                        <div className="flex">
                          <span className="opacity-0">---</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <button onClick={() => toggleBlock('favorites')} className={styles.point}>
                            <span className="flex items-center gap-1">
                              <Arrow newClass={openedBlocks['favorites']} />
                              Favorites: - 50%
                            </span>
                          </button>
                        </div>
                        {openedBlocks['favorites'] ? (
                          <>
                            <div className="flex">
                              <span className="opacity-0">---</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <button className={styles.point}>
                                <span className="ml-[25px]">URL on Profile - 0%</span>
                              </button>
                            </div>
                            <div className="flex">
                              <span className="opacity-0">---</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <button className={styles.point}>
                                <span className="ml-[25px]">Algorithm - 100%</span>
                              </button>
                            </div>
                            <div className="flex">
                              <span className="opacity-0">---</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <button className={styles.point}>
                                <span className="ml-[25px]">Style - 0%</span>
                              </button>
                            </div>
                            <div className="flex">
                              <span className="opacity-0">---</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <button className={styles.point}>
                                <span className="ml-[25px]">Button - 100%</span>
                              </button>
                            </div>
                          </>
                        ) : null}
                        <div className="flex">
                          <span className="opacity-0">---</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <button onClick={() => toggleBlock('notification')} className={styles.point}>
                            <span className="flex items-center gap-1">
                              <Arrow newClass={openedBlocks['notification']} />
                              Notification: - 33%
                            </span>
                          </button>
                        </div>
                        {openedBlocks['notification'] ? (
                          <>
                            <div className="flex">
                              <span className="opacity-0">---</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <button className={styles.point}>
                                <span className="ml-[25px]">Algorithm - 0%</span>
                              </button>
                            </div>
                            <div className="flex">
                              <span className="opacity-0">---</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <button className={styles.point}>
                                <span className="ml-[25px]">Style - 0%</span>
                              </button>
                            </div>
                            <div className="flex">
                              <span className="opacity-0">---</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <button className={styles.point}>
                                <span className="ml-[25px]">Button - 100%</span>
                              </button>
                            </div>
                          </>
                        ) : null}
                        <div className="flex">
                          <span className="opacity-0">---</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <button onClick={() => toggleBlock('message')} className={styles.point}>
                            <span className="flex items-center gap-1">
                              <Arrow newClass={openedBlocks['message']} />
                              Message: - 33%
                            </span>
                          </button>
                        </div>
                        {openedBlocks['message'] ? (
                          <>
                            <div className="flex">
                              <span className="opacity-0">---</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <button onClick={() => toggleBlock('algorithmInMessage')} className={styles.point}>
                                <span className="flex items-center gap-1">
                                  <Arrow newClass={openedBlocks['algorithmInMessage']} />
                                  Algorithm - 0%
                                </span>
                              </button>
                            </div>
                            {openedBlocks['algorithmInMessage'] ? (
                              <>
                                <div className="flex">
                                  <span className="opacity-0">---</span>
                                  <span className="opacity-15"> | </span>
                                  <span className="opacity-0">------</span>
                                  <span className="opacity-15"> | </span>
                                  <span className="opacity-0">------</span>
                                  <span className="opacity-15"> | </span>
                                  <span className="opacity-0">------</span>
                                  <span className="opacity-15"> | </span>
                                  <span className="opacity-0">------</span>
                                  <span className="opacity-15"> | </span>
                                  <span className="opacity-0">------</span>
                                  <span className="opacity-15"> | </span>
                                  <span className="opacity-0">------</span>
                                  <span className="opacity-15"> | </span>
                                  <span className="opacity-0">------</span>
                                  <span className="opacity-15"> | </span>
                                  <span className="opacity-0">------</span>
                                  <span className="opacity-15"> | </span>
                                  <span className="opacity-0">------</span>
                                  <span className="opacity-15"> | </span>
                                  <span className="opacity-0">------</span>
                                  <span className="opacity-15"> | </span>
                                  <span className="opacity-0">------</span>
                                  <span className="opacity-15"> | </span>
                                  <button className={styles.point}>
                                    <span className="ml-[25px]">Web Socket - 0%</span>
                                  </button>
                                </div>
                                <div className="flex">
                                  <span className="opacity-0">---</span>
                                  <span className="opacity-15"> | </span>
                                  <span className="opacity-0">------</span>
                                  <span className="opacity-15"> | </span>
                                  <span className="opacity-0">------</span>
                                  <span className="opacity-15"> | </span>
                                  <span className="opacity-0">------</span>
                                  <span className="opacity-15"> | </span>
                                  <span className="opacity-0">------</span>
                                  <span className="opacity-15"> | </span>
                                  <span className="opacity-0">------</span>
                                  <span className="opacity-15"> | </span>
                                  <span className="opacity-0">------</span>
                                  <span className="opacity-15"> | </span>
                                  <span className="opacity-0">------</span>
                                  <span className="opacity-15"> | </span>
                                  <span className="opacity-0">------</span>
                                  <span className="opacity-15"> | </span>
                                  <span className="opacity-0">------</span>
                                  <span className="opacity-15"> | </span>
                                  <span className="opacity-0">------</span>
                                  <span className="opacity-15"> | </span>
                                  <span className="opacity-0">------</span>
                                  <span className="opacity-15"> | </span>
                                  <button className={styles.point}>
                                    <span className="ml-[25px]">Security - 0%</span>
                                  </button>
                                </div>
                                <div className="flex">
                                  <span className="opacity-0">---</span>
                                  <span className="opacity-15"> | </span>
                                  <span className="opacity-0">------</span>
                                  <span className="opacity-15"> | </span>
                                  <span className="opacity-0">------</span>
                                  <span className="opacity-15"> | </span>
                                  <span className="opacity-0">------</span>
                                  <span className="opacity-15"> | </span>
                                  <span className="opacity-0">------</span>
                                  <span className="opacity-15"> | </span>
                                  <span className="opacity-0">------</span>
                                  <span className="opacity-15"> | </span>
                                  <span className="opacity-0">------</span>
                                  <span className="opacity-15"> | </span>
                                  <span className="opacity-0">------</span>
                                  <span className="opacity-15"> | </span>
                                  <span className="opacity-0">------</span>
                                  <span className="opacity-15"> | </span>
                                  <span className="opacity-0">------</span>
                                  <span className="opacity-15"> | </span>
                                  <span className="opacity-0">------</span>
                                  <span className="opacity-15"> | </span>
                                  <span className="opacity-0">------</span>
                                  <span className="opacity-15"> | </span>
                                  <button className={styles.point}>
                                    <span className="ml-[25px]">List Users - 0%</span>
                                  </button>
                                </div>
                                <div className="flex">
                                  <span className="opacity-0">---</span>
                                  <span className="opacity-15"> | </span>
                                  <span className="opacity-0">------</span>
                                  <span className="opacity-15"> | </span>
                                  <span className="opacity-0">------</span>
                                  <span className="opacity-15"> | </span>
                                  <span className="opacity-0">------</span>
                                  <span className="opacity-15"> | </span>
                                  <span className="opacity-0">------</span>
                                  <span className="opacity-15"> | </span>
                                  <span className="opacity-0">------</span>
                                  <span className="opacity-15"> | </span>
                                  <span className="opacity-0">------</span>
                                  <span className="opacity-15"> | </span>
                                  <span className="opacity-0">------</span>
                                  <span className="opacity-15"> | </span>
                                  <span className="opacity-0">------</span>
                                  <span className="opacity-15"> | </span>
                                  <span className="opacity-0">------</span>
                                  <span className="opacity-15"> | </span>
                                  <span className="opacity-0">------</span>
                                  <span className="opacity-15"> | </span>
                                  <span className="opacity-0">------</span>
                                  <span className="opacity-15"> | </span>
                                  <button className={styles.point}>
                                    <span className="ml-[25px]">Testing - 0%</span>
                                  </button>
                                </div>
                              </>
                            ) : null}
                            <div className="flex">
                              <span className="opacity-0">---</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <button className={styles.point}>
                                <span className="ml-[25px]">Style - 0%</span>
                              </button>
                            </div>
                            <div className="flex">
                              <span className="opacity-0">---</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <button className={styles.point}>
                                <span className="ml-[25px]">Button - 100%</span>
                              </button>
                            </div>
                          </>
                        ) : null}
                      </>
                    ) : null}
                    <div className="flex">
                      <span className="opacity-0">---</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <button onClick={() => toggleBlock('slider')} className={styles.point}>
                        <span className="flex items-center gap-1">
                          <Arrow newClass={openedBlocks['slider']} />
                          Slider: - 60%
                        </span>
                      </button>
                    </div>
                    {openedBlocks['slider'] ? (
                      <>
                        <div className="flex">
                          <span className="opacity-0">---</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <button className={styles.point}>
                            <span className="ml-[25px]">Algorithm mode details - 0%</span>
                          </button>
                        </div>
                        <div className="flex">
                          <span className="opacity-0">---</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <button className={styles.point}>
                            <span className="ml-[25px]">Algorithm appending - 100%</span>
                          </button>
                        </div>
                        <div className="flex">
                          <span className="opacity-0">---</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <button className={styles.point}>
                            <span className="ml-[25px]">Style - 80%</span>
                          </button>
                        </div>
                      </>
                    ) : null}
                    <div className="flex">
                      <span className="opacity-0">---</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <button className={styles.point}>
                        <span className="ml-[25px]">Category - 0%</span>
                      </button>
                    </div>
                    <div className="flex">
                      <span className="opacity-0">---</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <button onClick={() => toggleBlock('topProduct')} className={styles.point}>
                        <span className="flex items-center gap-1">
                          <Arrow newClass={openedBlocks['topProduct']} />
                          Top Product: - 0%
                        </span>
                      </button>
                    </div>
                    {openedBlocks['topProduct'] ? (
                      <>
                        <div className="flex">
                          <span className="opacity-0">---</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <button className={styles.point}>
                            <span className="ml-[25px]">Algorithm rating - 0%</span>
                          </button>
                        </div>
                        <div className="flex">
                          <span className="opacity-0">---</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <button className={styles.point}>
                            <span className="ml-[25px]">Style - 0%</span>
                          </button>
                        </div>
                      </>
                    ) : null}
                    <div className="flex">
                      <span className="opacity-0">---</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <button className={styles.point}>
                        <span className="ml-[25px]">List Cards - 50%</span>
                      </button>
                    </div>
                    <div className="flex">
                      <span className="opacity-0">---</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <button onClick={() => toggleBlock('helpChat')} className={styles.point}>
                        <span className="flex items-center gap-1">
                          <Arrow newClass={openedBlocks['helpChat']} />
                          Help Chat: - 0%
                        </span>
                      </button>
                    </div>
                    {openedBlocks['helpChat'] ? (
                      <>
                        <div className="flex">
                          <span className="opacity-0">---</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <button className={styles.point}>
                            <span className="ml-[25px]">Algorithm message - 0%</span>
                          </button>
                        </div>
                        <div className="flex">
                          <span className="opacity-0">---</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <button className={styles.point}>
                            <span className="ml-[25px]">Style - 0%</span>
                          </button>
                        </div>
                      </>
                    ) : null}
                  </>
                ) : null}
                <div className="flex">
                  <span className="opacity-0">---</span>
                  <span className="opacity-15"> | </span>
                  <span className="opacity-0">------</span>
                  <span className="opacity-15"> | </span>
                  <span className="opacity-0">------</span>
                  <span className="opacity-15"> | </span>
                  <span className="opacity-0">------</span>
                  <span className="opacity-15"> | </span>
                  <button onClick={() => toggleBlock('profile')} className={styles.point}>
                    <span className="flex items-center gap-1">
                      <Arrow newClass={openedBlocks['profile']} />
                      Profile: - 8.4%
                    </span>
                  </button>
                </div>
                {openedBlocks['profile'] ? (
                  <>
                    <div className="flex">
                      <span className="opacity-0">---</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <button onClick={() => toggleBlock('personalData')} className={styles.point}>
                        <span className="flex items-center gap-1">
                          <Arrow newClass={openedBlocks['personalData']} />
                          Personal Data: - 33.7%
                        </span>
                      </button>
                    </div>
                    {openedBlocks['personalData'] ? (
                      <>
                        <div className="flex">
                          <span className="opacity-0">---</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <button className={styles.point}>
                            <span className="ml-[25px]">Main Style - 33%</span>
                          </button>
                        </div>
                        <div className="flex">
                          <span className="opacity-0">---</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <button className={styles.point}>
                            <span className="ml-[25px]">Algorithm image - 80%</span>
                          </button>
                        </div>
                        <div className="flex">
                          <span className="opacity-0">---</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <button className={styles.point}>
                            <span className="ml-[25px]">Algorithm verify - 0%</span>
                          </button>
                        </div>
                        <div className="flex">
                          <span className="opacity-0">---</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <button className={styles.point}>
                            <span className="ml-[25px]">Algorithm input - 33%</span>
                          </button>
                        </div>
                        <div className="flex">
                          <span className="opacity-0">---</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <button className={styles.point}>
                            <span className="ml-[25px]">Algorithm save - 50%</span>
                          </button>
                        </div>
                        <div className="flex">
                          <span className="opacity-0">---</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <button className={styles.point}>
                            <span className="ml-[25px]">Style verify - 0%</span>
                          </button>
                        </div>
                      </>
                    ) : null}
                    <div className="flex">
                      <span className="opacity-0">---</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <button onClick={() => toggleBlock('myAds')} className={styles.point}>
                        <span className="flex items-center gap-1">
                          <Arrow newClass={openedBlocks['myAds']} />
                          My Ads: - 0%
                        </span>
                      </button>
                    </div>
                    {openedBlocks['myAds'] ? (
                      <>
                        <div className="flex">
                          <span className="opacity-0">---</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <button className={styles.point}>
                            <span className="ml-[25px]">Algorithm - 0%</span>
                          </button>
                        </div>
                        <div className="flex">
                          <span className="opacity-0">---</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <button className={styles.point}>
                            <span className="ml-[25px]">Style - 0%</span>
                          </button>
                        </div>
                        <div className="flex">
                          <span className="opacity-0">---</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <button className={styles.point}>
                            <span className="ml-[25px]">Layout - 0%</span>
                          </button>
                        </div>
                      </>
                    ) : null}
                    <div className="flex">
                      <span className="opacity-0">---</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <button onClick={() => toggleBlock('setting')} className={styles.point}>
                        <span className="flex items-center gap-1">
                          <Arrow newClass={openedBlocks['setting']} />
                          Setting: - 0%
                        </span>
                      </button>
                    </div>
                    {openedBlocks['setting'] ? (
                      <>
                        <div className="flex">
                          <span className="opacity-0">---</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <button className={styles.point}>
                            <span className="ml-[25px]">Style - 0%</span>
                          </button>
                        </div>
                        <div className="flex">
                          <span className="opacity-0">---</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <button className={styles.point}>
                            <span className="ml-[25px]">Algorithm - 0%</span>
                          </button>
                        </div>
                      </>
                    ) : null}
                    <div className="flex">
                      <span className="opacity-0">---</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <button onClick={() => toggleBlock('addingAds')} className={styles.point}>
                        <span className="flex items-center gap-1">
                          <Arrow newClass={openedBlocks['addingAds']} />
                          Adding ads: - 0%
                        </span>
                      </button>
                    </div>
                    {openedBlocks['addingAds'] ? (
                      <>
                        <div className="flex">
                          <span className="opacity-0">---</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <button className={styles.point}>
                            <span className="ml-[25px]">Algorithm basic data - 0%</span>
                          </button>
                        </div>
                        <div className="flex">
                          <span className="opacity-0">---</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <button className={styles.point}>
                            <span className="ml-[25px]">Algorithm type of delivery - 0%</span>
                          </button>
                        </div>
                        <div className="flex">
                          <span className="opacity-0">---</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <button className={styles.point}>
                            <span className="ml-[25px]">Algorithm product information - 0%</span>
                          </button>
                        </div>
                        <div className="flex">
                          <span className="opacity-0">---</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <button className={styles.point}>
                            <span className="ml-[25px]">Algorithm contact information - 0%</span>
                          </button>
                        </div>
                        <div className="flex">
                          <span className="opacity-0">---</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <button className={styles.point}>
                            <span className="ml-[25px]">Style basic data - 0%</span>
                          </button>
                        </div>
                        <div className="flex">
                          <span className="opacity-0">---</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <button className={styles.point}>
                            <span className="ml-[25px]">Style type of delivery - 0%</span>
                          </button>
                        </div>
                        <div className="flex">
                          <span className="opacity-0">---</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <button className={styles.point}>
                            <span className="ml-[25px]">Style product information - 0%</span>
                          </button>
                        </div>
                        <div className="flex">
                          <span className="opacity-0">---</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <button className={styles.point}>
                            <span className="ml-[25px]">Style contact information - 0%</span>
                          </button>
                        </div>
                      </>
                    ) : null}
                  </>
                ) : null}
                <div className="flex">
                  <span className="opacity-0">---</span>
                  <span className="opacity-15"> | </span>
                  <span className="opacity-0">------</span>
                  <span className="opacity-15"> | </span>
                  <span className="opacity-0">------</span>
                  <span className="opacity-15"> | </span>
                  <span className="opacity-0">------</span>
                  <span className="opacity-15"> | </span>
                  <button onClick={() => toggleBlock('searchPage')} className={styles.point}>
                    <span className="flex items-center gap-1">
                      <Arrow newClass={openedBlocks['searchPage']} />
                      Search Page: - 0%
                    </span>
                  </button>
                </div>
                {openedBlocks['searchPage'] ? (
                  <>
                    <div className="flex">
                      <span className="opacity-0">---</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <button className={styles.point}>
                        <span className="ml-[25px]">Algorithm category - 0%</span>
                      </button>
                    </div>
                    <div className="flex">
                      <span className="opacity-0">---</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <button className={styles.point}>
                        <span className="ml-[25px]">Algorithm top card - 0%</span>
                      </button>
                    </div>
                    <div className="flex">
                      <span className="opacity-0">---</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <button onClick={() => toggleBlock('algorithmFilter')} className={styles.point}>
                        <span className="flex items-center gap-1">
                          <Arrow newClass={openedBlocks['algorithmFilter']} />
                          Algorithm filter: - 0%
                        </span>
                      </button>
                    </div>
                    {openedBlocks['algorithmFilter'] ? (
                      <>
                        <div className="flex">
                          <span className="opacity-0">---</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <button className={styles.point}>
                            <span className="ml-[25px]">Date - 0%</span>
                          </button>
                        </div>
                        <div className="flex">
                          <span className="opacity-0">---</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <button className={styles.point}>
                            <span className="ml-[25px]">Volume - 0%</span>
                          </button>
                        </div>
                        <div className="flex">
                          <span className="opacity-0">---</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <button className={styles.point}>
                            <span className="ml-[25px]">Price - 100%</span>
                          </button>
                        </div>
                        <div className="flex">
                          <span className="opacity-0">---</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <button className={styles.point}>
                            <span className="ml-[25px]">Count - 0%</span>
                          </button>
                        </div>
                        <div className="flex">
                          <span className="opacity-0">---</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <button className={styles.point}>
                            <span className="ml-[25px]">Type of purchase - 0%</span>
                          </button>
                        </div>
                        <div className="flex">
                          <span className="opacity-0">---</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <button className={styles.point}>
                            <span className="ml-[25px]">Sellers - 0%</span>
                          </button>
                        </div>
                        <div className="flex">
                          <span className="opacity-0">---</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <button className={styles.point}>
                            <span className="ml-[25px]">Rating - 0%</span>
                          </button>
                        </div>
                        <div className="flex">
                          <span className="opacity-0">---</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <button className={styles.point}>
                            <span className="ml-[25px]">Distance - 0%</span>
                          </button>
                        </div>
                      </>
                    ) : null}
                    <div className="flex">
                      <span className="opacity-0">---</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <button className={styles.point}>
                        <span className="ml-[25px]">Algorithm horizontally - 0%</span>
                      </button>
                    </div>
                    <div className="flex">
                      <span className="opacity-0">---</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <button className={styles.point}>
                        <span className="ml-[25px]">Algorithm vertical - 0%</span>
                      </button>
                    </div>
                    <div className="flex">
                      <span className="opacity-0">---</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <button className={styles.point}>
                        <span className="ml-[25px]">Algorithm map - 0%</span>
                      </button>
                    </div>
                    <div className="flex">
                      <span className="opacity-0">---</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <button className={styles.point}>
                        <span className="ml-[25px]">Algorithm count card - 0%</span>
                      </button>
                    </div>
                    <div className="flex">
                      <span className="opacity-0">---</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <button className={styles.point}>
                        <span className="ml-[25px]">Style category - 0%</span>
                      </button>
                    </div>
                    <div className="flex">
                      <span className="opacity-0">---</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <button className={styles.point}>
                        <span className="ml-[25px]">Style top card - 0%</span>
                      </button>
                    </div>
                    <div className="flex">
                      <span className="opacity-0">---</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <button className={styles.point}>
                        <span className="ml-[25px]">Style filter - 0%</span>
                      </button>
                    </div>
                    <div className="flex">
                      <span className="opacity-0">---</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <button className={styles.point}>
                        <span className="ml-[25px]">Style horizontally - 0%</span>
                      </button>
                    </div>
                    <div className="flex">
                      <span className="opacity-0">---</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <button className={styles.point}>
                        <span className="ml-[25px]">Style vertical - 0%</span>
                      </button>
                    </div>
                    <div className="flex">
                      <span className="opacity-0">---</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <button className={styles.point}>
                        <span className="ml-[25px]">Style map - 0%</span>
                      </button>
                    </div>
                    <div className="flex">
                      <span className="opacity-0">---</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <button className={styles.point}>
                        <span className="ml-[25px]">Style count card - 0%</span>
                      </button>
                    </div>
                  </>
                ) : null}
                <div className="flex">
                  <span className="opacity-0">---</span>
                  <span className="opacity-15"> | </span>
                  <span className="opacity-0">------</span>
                  <span className="opacity-15"> | </span>
                  <span className="opacity-0">------</span>
                  <span className="opacity-15"> | </span>
                  <span className="opacity-0">------</span>
                  <span className="opacity-15"> | </span>
                  <button onClick={() => toggleBlock('cardView')} className={styles.point}>
                    <span className="flex items-center gap-1">
                      <Arrow newClass={openedBlocks['cardView']} />
                      Card view: - 0%
                    </span>
                  </button>
                </div>
                {openedBlocks['cardView'] ? (
                  <>
                    <div className="flex">
                      <span className="opacity-0">---</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <button className={styles.point}>
                        <span className="ml-[25px]">Algorithm image - 0%</span>
                      </button>
                    </div>
                    <div className="flex">
                      <span className="opacity-0">---</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <button className={styles.point}>
                        <span className="ml-[25px]">Algorithm telephone - 0%</span>
                      </button>
                    </div>
                    <div className="flex">
                      <span className="opacity-0">---</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <button className={styles.point}>
                        <span className="ml-[25px]">Algorithm message - 0%</span>
                      </button>
                    </div>
                    <div className="flex">
                      <span className="opacity-0">---</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <button className={styles.point}>
                        <span className="ml-[25px]">Algorithm count product - 0%</span>
                      </button>
                    </div>
                    <div className="flex">
                      <span className="opacity-0">---</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <button className={styles.point}>
                        <span className="ml-[25px]">Algorithm like - 0%</span>
                      </button>
                    </div>
                    <div className="flex">
                      <span className="opacity-0">---</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <button className={styles.point}>
                        <span className="ml-[25px]">Algorithm feedback - 0%</span>
                      </button>
                    </div>
                    <div className="flex">
                      <span className="opacity-0">---</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <button className={styles.point}>
                        <span className="ml-[25px]">Algorithm view feedback - 0%</span>
                      </button>
                    </div>
                    <div className="flex">
                      <span className="opacity-0">---</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <button className={styles.point}>
                        <span className="ml-[25px]">Algorithm map - 0%</span>
                      </button>
                    </div>
                    <div className="flex">
                      <span className="opacity-0">---</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <button className={styles.point}>
                        <span className="ml-[25px]">Algorithm top cards - 0%</span>
                      </button>
                    </div>
                    <div className="flex">
                      <span className="opacity-0">---</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <button className={styles.point}>
                        <span className="ml-[25px]">Algorithm list cards - 0%</span>
                      </button>
                    </div>
                    <div className="flex">
                      <span className="opacity-0">---</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <button className={styles.point}>
                        <span className="ml-[25px]">Algorithm info - 0%</span>
                      </button>
                    </div>
                    <div className="flex">
                      <span className="opacity-0">---</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <button className={styles.point}>
                        <span className="ml-[25px]">Style image - 0%</span>
                      </button>
                    </div>
                    <div className="flex">
                      <span className="opacity-0">---</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <button className={styles.point}>
                        <span className="ml-[25px]">Style telephone - 0%</span>
                      </button>
                    </div>
                    <div className="flex">
                      <span className="opacity-0">---</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <button className={styles.point}>
                        <span className="ml-[25px]">Style message - 0%</span>
                      </button>
                    </div>
                    <div className="flex">
                      <span className="opacity-0">---</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <button className={styles.point}>
                        <span className="ml-[25px]">Style count product - 0%</span>
                      </button>
                    </div>
                    <div className="flex">
                      <span className="opacity-0">---</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <button className={styles.point}>
                        <span className="ml-[25px]">Style like - 0%</span>
                      </button>
                    </div>
                    <div className="flex">
                      <span className="opacity-0">---</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <button className={styles.point}>
                        <span className="ml-[25px]">Style feedback - 0%</span>
                      </button>
                    </div>
                    <div className="flex">
                      <span className="opacity-0">---</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <button className={styles.point}>
                        <span className="ml-[25px]">Style view feedback - 0%</span>
                      </button>
                    </div>
                    <div className="flex">
                      <span className="opacity-0">---</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <button className={styles.point}>
                        <span className="ml-[25px]">Style map - 0%</span>
                      </button>
                    </div>
                    <div className="flex">
                      <span className="opacity-0">---</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <button className={styles.point}>
                        <span className="ml-[25px]">Style top cards - 0%</span>
                      </button>
                    </div>
                    <div className="flex">
                      <span className="opacity-0">---</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <button className={styles.point}>
                        <span className="ml-[25px]">Style list cards - 0%</span>
                      </button>
                    </div>
                    <div className="flex">
                      <span className="opacity-0">---</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <button className={styles.point}>
                        <span className="ml-[25px]">Style info - 0%</span>
                      </button>
                    </div>
                  </>
                ) : null}
                <div className="flex">
                  <span className="opacity-0">---</span>
                  <span className="opacity-15"> | </span>
                  <span className="opacity-0">------</span>
                  <span className="opacity-15"> | </span>
                  <span className="opacity-0">------</span>
                  <span className="opacity-15"> | </span>
                  <span className="opacity-0">------</span>
                  <span className="opacity-15"> | </span>
                  <button onClick={() => toggleBlock('vegipostSEO')} className={styles.point}>
                    <span className="flex items-center gap-1">
                      <Arrow newClass={openedBlocks['vegipostSEO']} />
                      SEO: - 0%
                    </span>
                  </button>
                </div>
                {openedBlocks['vegipostSEO'] ? (
                  <>
                    <div className="flex">
                      <span className="opacity-0">---</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <button className={styles.point}>
                        <span className="ml-[25px]">Install everything you need for vike - 0%</span>
                      </button>
                    </div>
                    <div className="flex">
                      <span className="opacity-0">---</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <button className={styles.point}>
                        <span className="ml-[25px]">Fix the entire project architecture for vike - 0%</span>
                      </button>
                    </div>
                    <div className="flex">
                      <span className="opacity-0">---</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <button className={styles.point}>
                        <span className="ml-[25px]">Fix the server under vike (if necessary) - 0%</span>
                      </button>
                    </div>
                  </>
                ) : null}
              </>
            ) : null}
            <div className="flex mt-auto">
              <span className="opacity-0">---</span>
              <span className="opacity-15"> | </span>
              <span className="opacity-0">------</span>
              <span className="opacity-15"> | </span>
              <button onClick={() => toggleBlock('notis')} className={styles.point}>
                <span className="flex items-center gap-1">
                  <Arrow newClass={openedBlocks['notis']} />
                  Web site Notis on 0%
                </span>
              </button>
            </div>
            {openedBlocks['notis'] ? (
              <>
                <div className="flex">
                  <span className="opacity-0">---</span>
                  <span className="opacity-15"> | </span>
                  <span className="opacity-0">------</span>
                  <span className="opacity-15"> | </span>
                  <span className="opacity-0">------</span>
                  <span className="opacity-15"> | </span>
                  <span className="opacity-0">------</span>
                  <span className="opacity-15"> | </span>
                  <button onClick={() => toggleBlock('mainNotis')} className={styles.point}>
                    <span className="flex items-center gap-1">
                      <Arrow newClass={openedBlocks['mainNotis']} />
                      Main: - 0%
                    </span>
                  </button>
                </div>
                {openedBlocks['mainNotis'] ? (
                  <>
                    <div className="flex">
                      <span className="opacity-0">---</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <button className={styles.point}>
                        <span className="ml-[25px]">If register - 0%</span>
                      </button>
                    </div>
                  </>
                ) : null}
              </>
            ) : null}
            <div className="flex mt-auto">
              <span className="opacity-0">---</span>
              <span className="opacity-15"> | </span>
              <span className="opacity-0">------</span>
              <span className="opacity-15"> | </span>
              <button onClick={() => toggleBlock('armWrestling')} className={styles.point}>
                <span className="flex items-center gap-1">
                  <Arrow newClass={openedBlocks['armWrestling']} />
                  Arm Wrestling: - 0%
                </span>
              </button>
            </div>
            {openedBlocks['armWrestling'] ? (
              <>
                <div className="flex mt-auto">
                  <span className="opacity-0">---</span>
                  <span className="opacity-15"> | </span>
                  <span className="opacity-0">------</span>
                  <span className="opacity-15"> | </span>
                  <span className="opacity-0">------</span>
                  <span className="opacity-15"> | </span>
                  <span className="opacity-0">------</span>
                  <span className="opacity-15"> | </span>
                  <button onClick={() => toggleBlock('writeAScriptStarts')} className={styles.point}>
                    <span className="flex items-center gap-1">
                      <Arrow newClass={openedBlocks['writeAScriptStarts']} />
                      Write a script starts: - 0%
                    </span>
                  </button>
                </div>
                {openedBlocks['writeAScriptStarts'] ? (
                  <>
                    <div className="flex mt-auto">
                      <span className="opacity-0">---</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <button onClick={() => toggleBlock('layout')} className={styles.point}>
                        <span className="flex items-center gap-1">
                          <Arrow newClass={openedBlocks['layout']} />
                          Layout: - 0%
                        </span>
                      </button>
                    </div>
                    {openedBlocks['layout'] ? (
                      <>
                        <div className="flex">
                          <span className="opacity-0">---</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <button className={styles.point}>
                            <span className="ml-[25px]">Menu - 0%</span>
                          </button>
                        </div>
                      </>
                    ) : null}
                    <div className="flex mt-auto">
                      <span className="opacity-0">---</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <button onClick={() => toggleBlock('development')} className={styles.point}>
                        <span className="flex items-center gap-1">
                          <Arrow newClass={openedBlocks['development']} />
                          Development: - 0%
                        </span>
                      </button>
                    </div>
                    {openedBlocks['development'] ? (
                      <>
                        <div className="flex mt-auto">
                          <span className="opacity-0">---</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <button onClick={() => toggleBlock('menu')} className={styles.point}>
                            <span className="flex items-center gap-1">
                              <Arrow newClass={openedBlocks['menu']} />
                              Menu: - 0%
                            </span>
                          </button>
                        </div>
                        {openedBlocks['menu'] ? (
                          <>
                            <div className="flex">
                              <span className="opacity-0">---</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <span className="opacity-0">------</span>
                              <span className="opacity-15"> | </span>
                              <button className={styles.point}>
                                <span className="ml-[25px]">Animation - 0%</span>
                              </button>
                            </div>
                          </>
                        ) : null}
                      </>
                    ) : null}
                  </>
                ) : null}
              </>
            ) : null}
            <div className="flex mt-auto">
              <span className="opacity-0">---</span>
              <span className="opacity-15"> | </span>
              <span className="opacity-0">------</span>
              <span className="opacity-15"> | </span>
              <button onClick={() => toggleBlock('videoSite')} className={styles.point}>
                <span className="flex items-center gap-1">
                  <Arrow newClass={openedBlocks['videoSite']} />
                  Video-site: - 0%
                </span>
              </button>
            </div>
            {openedBlocks['videoSite'] ? (
              <>
                <div className="flex mt-auto">
                  <span className="opacity-0">---</span>
                  <span className="opacity-15"> | </span>
                  <span className="opacity-0">------</span>
                  <span className="opacity-15"> | </span>
                  <span className="opacity-0">------</span>
                  <span className="opacity-15"> | </span>
                  <span className="opacity-0">------</span>
                  <span className="opacity-15"> | </span>
                  <button onClick={() => toggleBlock('video')} className={styles.point}>
                    <span className="flex items-center gap-1">
                      <Arrow newClass={openedBlocks['video']} />
                      Video: - 0%
                    </span>
                  </button>
                </div>
                {openedBlocks['video'] ? (
                  <>
                    <div className="flex">
                      <span className="opacity-0">---</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <button className={styles.point}>
                        <span className="ml-[25px]">Voice acting High-Quality - 0%</span>
                      </button>
                    </div>
                    <div className="flex">
                      <span className="opacity-0">---</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <button className={styles.point}>
                        <span className="ml-[25px]">Visualizer - 100%</span>
                      </button>
                    </div>
                    <div className="flex mt-auto">
                      <span className="opacity-0">---</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <button onClick={() => toggleBlock('videoMessage')} className={styles.point}>
                        <span className="flex items-center gap-1">
                          <Arrow newClass={openedBlocks['videoMessage']} />
                          Video Message: - 33%
                        </span>
                      </button>
                    </div>
                    {openedBlocks['videoMessage'] ? (
                      <>
                        <div className="flex">
                          <span className="opacity-0">---</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <button className={styles.point}>
                            <span className="ml-[25px]">Location - 100%</span>
                          </button>
                        </div>
                        <div className="flex">
                          <span className="opacity-0">---</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <button className={styles.point}>
                            <span className="ml-[25px]">Text - 100%</span>
                          </button>
                        </div>
                        <div className="flex">
                          <span className="opacity-0">---</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <button className={styles.point}>
                            <span className="ml-[25px]">Requisites - 0%</span>
                          </button>
                        </div>
                      </>
                    ) : null}
                    <div className="flex mt-auto">
                      <span className="opacity-0">---</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <button onClick={() => toggleBlock('visualization')} className={styles.point}>
                        <span className="flex items-center gap-1">
                          <Arrow newClass={openedBlocks['visualization']} />
                          Visualization: - 33%
                        </span>
                      </button>
                    </div>
                    {openedBlocks['visualization'] ? (
                      <>
                        <div className="flex">
                          <span className="opacity-0">---</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <button className={styles.point}>
                            <span className="ml-[25px]">Text - 100%</span>
                          </button>
                        </div>
                        <div className="flex">
                          <span className="opacity-0">---</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <button className={styles.point}>
                            <span className="ml-[25px]">Video Script - 0%</span>
                          </button>
                        </div>
                        <div className="flex">
                          <span className="opacity-0">---</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <button className={styles.point}>
                            <span className="ml-[25px]">Realization - 0%</span>
                          </button>
                        </div>
                      </>
                    ) : null}
                  </>
                ) : null}
                <div className="flex mt-auto">
                  <span className="opacity-0">---</span>
                  <span className="opacity-15"> | </span>
                  <span className="opacity-0">------</span>
                  <span className="opacity-15"> | </span>
                  <span className="opacity-0">------</span>
                  <span className="opacity-15"> | </span>
                  <span className="opacity-0">------</span>
                  <span className="opacity-15"> | </span>
                  <button onClick={() => toggleBlock('webSite')} className={styles.point}>
                    <span className="flex items-center gap-1">
                      <Arrow newClass={openedBlocks['webSite']} />
                      Web Site: - 0%
                    </span>
                  </button>
                </div>
                {openedBlocks['webSite'] ? (
                  <>
                    <div className="flex mt-auto">
                      <span className="opacity-0">---</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <button onClick={() => toggleBlock('mainWebSite')} className={styles.point}>
                        <span className="flex items-center gap-1">
                          <Arrow newClass={openedBlocks['mainWebSite']} />
                          Main: - 0%
                        </span>
                      </button>
                    </div>
                    {openedBlocks['mainWebSite'] ? (
                      <>
                        <div className="flex">
                          <span className="opacity-0">---</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <button className={styles.point}>
                            <span className="ml-[25px]">Video - 41.5%</span>
                          </button>
                        </div>
                        <div className="flex">
                          <span className="opacity-0">---</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <button className={styles.point}>
                            <span className="ml-[25px]">Algorithm Delete - 0%</span>
                          </button>
                        </div>
                        <div className="flex">
                          <span className="opacity-0">---</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <button className={styles.point}>
                            <span className="ml-[25px]">Algorithm Sound - 0%</span>
                          </button>
                        </div>
                        <div className="flex">
                          <span className="opacity-0">---</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <button className={styles.point}>
                            <span className="ml-[25px]">Algorithm Camera - 0%</span>
                          </button>
                        </div>
                        <div className="flex">
                          <span className="opacity-0">---</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <button className={styles.point}>
                            <span className="ml-[25px]">Algorithm Download - 0%</span>
                          </button>
                        </div>
                      </>
                    ) : null}
                    <div className="flex mt-auto">
                      <span className="opacity-0">---</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <span className="opacity-0">------</span>
                      <span className="opacity-15"> | </span>
                      <button onClick={() => toggleBlock('appsChat')} className={styles.point}>
                        <span className="flex items-center gap-1">
                          <Arrow newClass={openedBlocks['appsChat']} />
                          Apps Chat: - 0%
                        </span>
                      </button>
                    </div>
                    {openedBlocks['appsChat'] ? (
                      <>
                        <div className="flex">
                          <span className="opacity-0">---</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <button className={styles.point}>
                            <span className="ml-[25px]">Algorithm Message - 0%</span>
                          </button>
                        </div>
                        <div className="flex">
                          <span className="opacity-0">---</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <span className="opacity-0">------</span>
                          <span className="opacity-15"> | </span>
                          <button className={styles.point}>
                            <span className="ml-[25px]">Style - 0%</span>
                          </button>
                        </div>
                      </>
                    ) : null}
                  </>
                ) : null}
              </>
            ) : null}
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
