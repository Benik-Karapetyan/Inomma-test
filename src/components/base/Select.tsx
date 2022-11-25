import type {FC, SyntheticEvent} from 'react';

export type SelectItem = {
  text: string;
  value: string | number;
};

interface Props {
  value: string | number;
  items: SelectItem[];
  onChange: (val: string | number) => void;
}

const Select: FC<Props> = ({value, items, onChange}) => {
  const handleChange = (e: SyntheticEvent<HTMLSelectElement>) => {
    onChange(e.currentTarget.value);
  };

  return (
    <select value={value} onChange={handleChange}>
      {items.map((item) => (
        <option key={item.text} value={item.value}>
          {item.text}
        </option>
      ))}
    </select>
  );
};

export default Select;
