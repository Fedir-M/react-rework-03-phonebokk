// import { clsx } from 'clsx';
import s from './Button.module.css';

const Button = ({ children, btnType, id, onDelete }) => {
  return btnType === 'button' ? (
    <button className={s.button} type={btnType} onClick={() => onDelete(id)}>
      {children}
    </button>
  ) : (
    <button className={s.button} type={btnType}>
      {children}
    </button>
  );
};

export default Button;
