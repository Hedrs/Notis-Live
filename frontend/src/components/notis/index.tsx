import { useState } from 'react';
import styles from './index.module.scss';
import Arrow from '../../svgComponents/ArrowFolder/Arrow';

function Notis() {
  const [openedBlocks, setOpenedBlocks] = useState<Record<string, boolean>>({
    notis: false,
    mainNotis: false,
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
    </>
  );
}

export default Notis;
