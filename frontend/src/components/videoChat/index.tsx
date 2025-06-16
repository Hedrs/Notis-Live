import { useState } from 'react';
import styles from './index.module.scss';
import Arrow from '../../svgComponents/ArrowFolder/Arrow';

function VideoChat() {
  const [openedBlocks, setOpenedBlocks] = useState<Record<string, boolean>>({
    videoSite: false,
    video: false,
    videoMessage: false,
    visualization: false,
    webSite: false,
    mainWebSite: false,
    appsChat: false,
  });

  function toggleBlock(blockId: string) {
    setOpenedBlocks((prev) => ({
      ...prev,
      [blockId]: !prev[blockId],
    }));
  }

  return (
    <>
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
    </>
  );
}

export default VideoChat;
