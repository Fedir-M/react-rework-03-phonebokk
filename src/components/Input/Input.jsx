import s from './Input.module.css';

const Input = ({ title, type, name, placeholder, method, pattern }) => {
  return (
    <label>
      <p>{title}</p>
      {method ? (
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          className={s.inputs}
          pattern={pattern}
          required
          onChange={method}
        />
      ) : (
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          className={s.inputs}
          pattern={pattern}
          required
        />
      )}
    </label>
  );
};

export default Input;
