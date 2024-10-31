import Input from 'components/Input';

const Filter = ({ onChange }) => {
  return (
    <div>
      <Input
        title={'Find contacts by name'}
        type="text"
        name="filter"
        placeholder={'Enter name...'}
        method={onChange}
      />
    </div>
  );
};

export default Filter;
