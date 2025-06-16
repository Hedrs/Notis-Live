import { useState } from 'react';
import styles from './index.module.scss';
import Arrow from '../../svgComponents/ArrowFolder/Arrow';

function ArmWrestling() {
  const [openedBlocks, setOpenedBlocks] = useState<Record<string, boolean>>({
    armWrestling: false,
    writeAScriptStarts: false,
    layout: false,
    development: false,
    menu: false,
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
    </>
  );
}

export default ArmWrestling;
