import { useState } from 'react';
import styles from './index.module.scss';
import Arrow from '../../../../../svgComponents/ArrowFolder/Arrow';
import Search from './search';
import Category from './category';
import Region from './region';
import History from './history';
import Favorites from './favorites';
import Message from './message';

export function Header() {
  const [openedBlocks, setOpenedBlocks] = useState<Record<string, boolean>>({
    header: false,
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
        <span className="opacity-0">------</span>
        <span className="opacity-15"> | </span>
        <span className="opacity-0">------</span>
        <span className="opacity-15"> | </span>
        <button onClick={() => toggleBlock('header')} className={styles.point}>
          <span className="flex items-center gap-1">
            <Arrow newClass={openedBlocks['header']} />
            Header: - 56,86%
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
          <Search />
          <Category />
          <Region />
          <History />
          <Favorites />
          <Message />
        </>
      ) : null}
    </>
  );
}

export default Header;
