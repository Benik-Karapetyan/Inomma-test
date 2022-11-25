import type {FC} from 'react';

import {useState} from 'react';

import Select from '../base/Select';

const perPageOptions = [
  {
    text: '2',
    value: 2,
  },
  {
    text: '3',
    value: 3,
  },
  {
    text: '5',
    value: 5,
  },
];

interface Props {
  onClick: (perPage: number) => void;
}

const Toolbar: FC<Props> = ({onClick}) => {
  const [perPage, setPerPage] = useState(5);

  const handleChange = (val: string | number) => {
    setPerPage(+val);
  };

  return (
    <div className="flex justify-between items-center py-4 px-6 bg-slate-100 rounded-lg mb-10">
      <div>
        <span className="mr-3">Items Per Page:</span>

        <Select
          value={perPage}
          items={perPageOptions}
          onChange={handleChange}
        />
      </div>

      <button
        className="bg-sky-500 text-white py-2 px-8 rounded-3xl"
        onClick={() => onClick(perPage)}
      >
        Request Products
      </button>
    </div>
  );
};

export default Toolbar;
