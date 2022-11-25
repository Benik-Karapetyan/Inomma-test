import type {FC} from 'react';

interface Props {
  name: string;
}

const Icon: FC<Props> = ({name}) => {
  return (
    <span className="cursor-pointer hover:text-sky-500">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        role="img"
        aria-hidden="true"
        className="fill-current h-6 w-6 inline-block"
      >
        <path d={name}></path>
      </svg>
    </span>
  );
};

export default Icon;
