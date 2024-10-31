import Input from 'components/Input';
import Button from 'components/Button';
import s from './ContactForm.module.css';

const ContactForm = ({ onSubmit }) => {
  return (
    <form className={s.formWrapper} onSubmit={onSubmit}>
      <Input
        title={'Name'}
        type={'text'}
        name={'name'}
        placeholder={'Enter name...'}
      />
      <Input
        title={'Number'}
        type={'tel'}
        name={'number'}
        placeholder={'Number XXX-XXX-XXXX'}
        pattern={'[0-9]{3}-[0-9]{3}-[0-9]{4}'}
      />
      <Button btnType={'submit'}>
        <span className={s.btnName}>Add contact</span>
      </Button>
    </form>
  );
};

export default ContactForm;
