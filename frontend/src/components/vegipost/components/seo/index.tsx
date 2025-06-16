import { useState } from 'react';
import styles from './index.module.scss';
import Arrow from '../../../../svgComponents/ArrowFolder/Arrow';

function Seo() {
  const [openedBlocks, setOpenedBlocks] = useState<Record<string, boolean>>({
    cardView: false,
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
  );
}

export default Seo;
