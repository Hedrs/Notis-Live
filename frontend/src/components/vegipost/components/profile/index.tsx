import { useState } from 'react';
import styles from './index.module.scss';
import Arrow from '../../../../svgComponents/ArrowFolder/Arrow';

function Profile() {
  const [openedBlocks, setOpenedBlocks] = useState<Record<string, boolean>>({
    profile: false,
    personalData: false,
    myAds: false,
    setting: false,
    addingAds: false,
  });

  function toggleBlock(blockId: string) {
    setOpenedBlocks((prev) => ({
      ...prev,
      [blockId]: !prev[blockId],
    }));
  }

  return (
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
    </>
  );
}

export default Profile;
