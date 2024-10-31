// import Button from 'components/Button';
import Filter from 'components/Filter';
import ContactItem from 'components/ContactItem';

import s from './ContactsList.module.css';

const ContactsList = ({ contactsArr, onClick, onChange }) => {
  return (
    <div>
      <h2>Contacts</h2>

      <Filter onChange={onChange} />

      <ul className={s.listWrapper}>
        {contactsArr.map(el => (
          <ContactItem
            key={el.id}
            id={el.id}
            name={el.name}
            number={el.number}
            onClick={onClick}
          />
        ))}
      </ul>
    </div>
  );
};

export default ContactsList;
