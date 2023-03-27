import { FC } from 'react';
import styles from './styles.module.scss';
import cn from 'classnames/bind';

const cx = cn.bind(styles);

export const App: FC = () => {
  return <h1 className={cx("h1")}>Hello React!!</h1>;
};
