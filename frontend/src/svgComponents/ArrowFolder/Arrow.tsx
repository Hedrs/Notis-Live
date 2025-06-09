import cn from 'classnames';
import styles from './index.module.scss';

export default function Arrow({ newClass }: { newClass: boolean }) {
  return (
    <svg
      className={cn({ [styles.rest]: true, [styles.active]: newClass })}
      width="7"
      height="14"
      viewBox="0 0 11 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 2L8.8186 8.8186C9.19894 9.19894 9.21029 9.812 8.84428 10.2062L3 16.5"
        stroke={newClass ? '#fff' : '#D08770'}
        strokeWidth="3"
      />
    </svg>
  );
}
