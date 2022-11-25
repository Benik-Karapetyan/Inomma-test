import type {FC} from 'react';

import {NavLink as Link} from 'react-router-dom';

interface Props {
  name: string;
  to: string;
}

const NavLink: FC<Props> = ({name, to}) => {
  return (
    <Link
      to={to}
      className={({isActive}) =>
        isActive ? 'text-sky-500 text-lg' : 'hover:text-sky-500 text-lg'
      }
    >
      {name}
    </Link>
  );
};

export default NavLink;
