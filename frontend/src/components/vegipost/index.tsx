import { useState } from 'react';
import styles from './index.module.scss';
import Arrow from '../../svgComponents/ArrowFolder/Arrow';
import Main from './components/main';
import Profile from './components/profile';
import SearchPage from './components/searchPage';
import CardView from './components/cardView';
import Seo from './components/seo';

function Vegipost() {
  const [openedBlocks, setOpenedBlocks] = useState<Record<string, boolean>>({
    vegipost: false,
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
        <button onClick={() => toggleBlock('vegipost')} className={styles.point}>
          <span className="flex items-center gap-1">
            <Arrow newClass={openedBlocks['vegipost']} />
            Web site VEGIPOST on 7.24%
          </span>
        </button>
      </div>
      {openedBlocks['vegipost'] ? (
        <>
          <Main />
          <Profile />
          <SearchPage />
          <CardView />
          <Seo />
        </>
      ) : null}
    </>
  );
}
export default Vegipost;
