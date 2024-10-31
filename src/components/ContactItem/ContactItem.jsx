import Button from 'components/Button';

import { ReactComponent as BtnIcon } from '../../icons/delete.svg';
import s from './ContactItem.module.css';

const ContactItem = ({ id, name, number, onClick }) => {
  return (
    <li className={s.listItem}>
      <div className={s.itemName}>
        <span>{name}</span>
      </div>
      <div className={s.itemNumber}>
        <span>{number}</span>
      </div>
      <Button
        btnType={'button'}
        id={id}
        onDelete={onClick}
        className={s.itemBtn}
      >
        <BtnIcon fill="red" width={16} hanging={16} />
      </Button>
    </li>
  );
};

export default ContactItem;
