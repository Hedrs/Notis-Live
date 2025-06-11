import { useState } from 'react';
import Arrow from '../../svgComponents/ArrowFolder/Arrow';
import styles from './index.module.scss';

function Prophet() {
  const [openedBlocks, setOpenedBlocks] = useState<Record<string, boolean>>({
    prophet: false,
    splash: false,
    homeScreen: false,
    buttonStyles: false,
    dice: false,
    roulette: false,
    mapScreen: false,
    theBetting: false,
    customScreen: false,
    screenInstruction: false,
    stylesPage1: false,
    theExclamation: false,
    formula: false,
    stylesPage2: false,
    theExclamation2: false,
    theAlgorithm: false,
    donation: false,
    question: false,
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
        <button onClick={() => toggleBlock('prophet')} className={styles.point}>
          <span className="flex items-center gap-1">
            <Arrow newClass={openedBlocks['prophet']} />
            Prophet - 0%
          </span>
        </button>
      </div>
      {openedBlocks['prophet'] ? (
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
            <button onClick={() => toggleBlock('splash')} className={styles.point}>
              <span className="flex items-center gap-1">
                <Arrow newClass={openedBlocks['splash']} />
                Splash screen - 0%
              </span>
            </button>
          </div>
          {openedBlocks['splash'] ? (
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
                  <span className="ml-[25px]">Styles - 0%</span>
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
                  <span className="ml-[25px]">Flicker animation - 0%</span>
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
                  <span className="ml-[25px]">The algorithm for switching to the main screen is - 0%</span>
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
            <button onClick={() => toggleBlock('homeScreen')} className={styles.point}>
              <span className="flex items-center gap-1">
                <Arrow newClass={openedBlocks['homeScreen']} />
                Home screen - 0%
              </span>
            </button>
          </div>
          {openedBlocks['homeScreen'] ? (
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
                <button onClick={() => toggleBlock('buttonStyles')} className={styles.point}>
                  <span className="flex items-center gap-1">
                    <Arrow newClass={openedBlocks['buttonStyles']} />
                    Button Styles - 0%
                  </span>
                </button>
              </div>
              {openedBlocks['buttonStyles'] ? (
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
                      <span className="ml-[25px]">Help Button - 0%</span>
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
                      <span className="ml-[25px]">Donation Button - 0%</span>
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
                      <span className="ml-[25px]">Cube Button - 0%</span>
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
                      <span className="ml-[25px]">Cassino Button - 0%</span>
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
                      <span className="ml-[25px]">Card Button - 0%</span>
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
                      <span className="ml-[25px]">The bet button is - 0%</span>
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
                      <span className="ml-[25px]">Help Button - 0%</span>
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
                  <span className="ml-[25px]">The algorithm for switching to a new screen for each button is - 0%</span>
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
            <button onClick={() => toggleBlock('dice')} className={styles.point}>
              <span className="flex items-center gap-1">
                <Arrow newClass={openedBlocks['dice']} />
                Dice screen - 0%
              </span>
            </button>
          </div>
          {openedBlocks['dice'] ? (
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
                  <span className="ml-[25px]">Input (alg) - 0%</span>
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
                  <span className="ml-[25px]">Input (styles) - 0%</span>
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
                  <span className="ml-[25px]">Input (alg) - 0%</span>
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
                  <span className="ml-[25px]">Statistics (alg) - 0%</span>
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
                  <span className="ml-[25px]">Statistics (styles) - 0%</span>
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
                  <span className="ml-[25px]">Output of the result (alg) - 0%</span>
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
                  <span className="ml-[25px]">Output of the result (styles) - 0%</span>
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
                  <span className="ml-[25px]">Output of the result (anim) - 0%</span>
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
                  <span className="ml-[25px]">Restart (alg) - 0%</span>
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
                  <span className="ml-[25px]">Back button (alg + styles) - 0%</span>
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
            <button onClick={() => toggleBlock('roulette')} className={styles.point}>
              <span className="flex items-center gap-1">
                <Arrow newClass={openedBlocks['roulette']} />
                Roulette screen - 0%
              </span>
            </button>
          </div>
          {openedBlocks['roulette'] ? (
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
                  <span className="ml-[25px]">Input (alg) - 0%</span>
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
                  <span className="ml-[25px]">Input (styles) - 0%</span>
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
                  <span className="ml-[25px]">Input (alg) - 0%</span>
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
                  <span className="ml-[25px]">Statistics (alg) - 0%</span>
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
                  <span className="ml-[25px]">Statistics (styles) - 0%</span>
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
                  <span className="ml-[25px]">Output of the result (alg) - 0%</span>
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
                  <span className="ml-[25px]">Output of the result (styles) - 0%</span>
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
                  <span className="ml-[25px]">Output of the result (anim) - 0%</span>
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
                  <span className="ml-[25px]">Restart (alg) - 0%</span>
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
                  <span className="ml-[25px]">Back button (alg + styles) - 0%</span>
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
            <button onClick={() => toggleBlock('mapScreen')} className={styles.point}>
              <span className="flex items-center gap-1">
                <Arrow newClass={openedBlocks['mapScreen']} />
                Map screen - 0%
              </span>
            </button>
          </div>
          {openedBlocks['mapScreen'] ? (
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
                  <span className="ml-[25px]">Input (alg) - 0%</span>
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
                  <span className="ml-[25px]">Input (styles) - 0%</span>
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
                  <span className="ml-[25px]">Input (alg) - 0%</span>
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
                  <span className="ml-[25px]">Statistics (alg) - 0%</span>
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
                  <span className="ml-[25px]">Statistics (styles) - 0%</span>
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
                  <span className="ml-[25px]">Output of the result (alg) - 0%</span>
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
                  <span className="ml-[25px]">Output of the result (styles) - 0%</span>
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
                  <span className="ml-[25px]">Output of the result (anim) - 0%</span>
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
                  <span className="ml-[25px]">Restart (alg) - 0%</span>
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
                  <span className="ml-[25px]">Back button (alg + styles) - 0%</span>
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
            <button onClick={() => toggleBlock('theBetting')} className={styles.point}>
              <span className="flex items-center gap-1">
                <Arrow newClass={openedBlocks['theBetting']} />
                The Betting screen - 0%
              </span>
            </button>
          </div>
          {openedBlocks['theBetting'] ? (
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
                  <span className="ml-[25px]">Input (alg) - 0%</span>
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
                  <span className="ml-[25px]">Input (styles) - 0%</span>
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
                  <span className="ml-[25px]">Input (alg) - 0%</span>
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
                  <span className="ml-[25px]">Statistics (alg) - 0%</span>
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
                  <span className="ml-[25px]">Statistics (styles) - 0%</span>
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
                  <span className="ml-[25px]">Output of the result (alg) - 0%</span>
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
                  <span className="ml-[25px]">Output of the result (styles) - 0%</span>
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
                  <span className="ml-[25px]">Output of the result (anim) - 0%</span>
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
                  <span className="ml-[25px]">Restart (alg) - 0%</span>
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
                  <span className="ml-[25px]">Back button (alg + styles) - 0%</span>
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
            <button onClick={() => toggleBlock('customScreen')} className={styles.point}>
              <span className="flex items-center gap-1">
                <Arrow newClass={openedBlocks['customScreen']} />
                Custom screen - 0%
              </span>
            </button>
          </div>
          {openedBlocks['customScreen'] ? (
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
                  <span className="ml-[25px]">Input (alg) - 0%</span>
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
                  <span className="ml-[25px]">Input (styles) - 0%</span>
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
                  <span className="ml-[25px]">Input (alg) - 0%</span>
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
                  <span className="ml-[25px]">Statistics (alg) - 0%</span>
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
                  <span className="ml-[25px]">Statistics (styles) - 0%</span>
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
                  <span className="ml-[25px]">Output of the result (alg) - 0%</span>
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
                  <span className="ml-[25px]">Output of the result (styles) - 0%</span>
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
                  <span className="ml-[25px]">Output of the result (anim) - 0%</span>
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
                  <span className="ml-[25px]">Restart (alg) - 0%</span>
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
                  <span className="ml-[25px]">Back button (alg + styles) - 0%</span>
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
            <button onClick={() => toggleBlock('screenInstruction')} className={styles.point}>
              <span className="flex items-center gap-1">
                <Arrow newClass={openedBlocks['screenInstruction']} />
                Screen Instruction - 0%
              </span>
            </button>
          </div>
          {openedBlocks['screenInstruction'] ? (
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
                <button onClick={() => toggleBlock('stylesPage1')} className={styles.point}>
                  <span className="flex items-center gap-1">
                    <Arrow newClass={openedBlocks['stylesPage1']} />
                    Styles Page 1 - 0%
                  </span>
                </button>
              </div>
              {openedBlocks['stylesPage1'] ? (
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
                      <span className="ml-[25px]">Styles of the main table 1 - 0%</span>
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
                    <button onClick={() => toggleBlock('theExclamation')} className={styles.point}>
                      <span className="flex items-center gap-1">
                        <Arrow newClass={openedBlocks['theExclamation']} />
                        The exclamation mark button is - 0%
                      </span>
                    </button>
                  </div>
                  {openedBlocks['theExclamation'] ? (
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
                          <span className="ml-[25px]">The appearance of a window with a note(alg) - 0%</span>
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
                          <span className="ml-[25px]">Window with a note(styles) - 0%</span>
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
                    <button className={styles.point}>
                      <span className="ml-[25px]">The algorithm for switching to another page is - 0%</span>
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
                    <button onClick={() => toggleBlock('formula')} className={styles.point}>
                      <span className="flex items-center gap-1">
                        <Arrow newClass={openedBlocks['formula']} />
                        Formula - 0%
                      </span>
                    </button>
                  </div>
                  {openedBlocks['formula'] ? (
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
                          <span className="ml-[25px]">Formula Styles(English) - 0%</span>
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
                          <span className="ml-[25px]">Formula Styles(rus) - 0%</span>
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
                          <span className="ml-[25px]">Switching to formulas(alg) - 0%</span>
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
                <button onClick={() => toggleBlock('stylesPage2')} className={styles.point}>
                  <span className="flex items-center gap-1">
                    <Arrow newClass={openedBlocks['stylesPage2']} />
                    Styles Page 2 - 0%
                  </span>
                </button>
              </div>
              {openedBlocks['stylesPage2'] ? (
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
                      <span className="ml-[25px]">Styles of the main table 2 - 0%</span>
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
                    <button onClick={() => toggleBlock('theExclamation')} className={styles.point}>
                      <span className="flex items-center gap-1">
                        <Arrow newClass={openedBlocks['theExclamation']} />
                        The exclamation mark button is - 0%
                      </span>
                    </button>
                  </div>
                  {openedBlocks['theExclamation'] ? (
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
                          <span className="ml-[25px]">The appearance of a window with a note(alg) - 0%</span>
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
                          <span className="ml-[25px]">Window with a note(styles) - 0%</span>
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
                    <button className={styles.point}>
                      <span className="ml-[25px]">The algorithm for switching to another page is - 0%</span>
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
            <button onClick={() => toggleBlock('donation')} className={styles.point}>
              <span className="flex items-center gap-1">
                <Arrow newClass={openedBlocks['donation']} />
                Donation - 0%
              </span>
            </button>
          </div>
          {openedBlocks['donation'] ? (
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
                  <span className="ml-[25px]">Link to the donation - 0%</span>
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
            <button onClick={() => toggleBlock('question')} className={styles.point}>
              <span className="flex items-center gap-1">
                <Arrow newClass={openedBlocks['question']} />
                Question - 0%
              </span>
            </button>
          </div>
          {openedBlocks['question'] ? (
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
                  <span className="ml-[25px]">Opening the instructions screen - 0%</span>
                </button>
              </div>
            </>
          ) : null}
        </>
      ) : null}
    </>
  );
}

export default Prophet;
