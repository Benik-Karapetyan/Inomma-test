import NavLink from './components/NavLink';
import Icon from '../base/Icon';

import logo from '../../assets/logo.png';
import {mdiMagnify, mdiCartOutline} from '@mdi/js';

const links = [
  {name: 'Home', to: '/'},
  {name: 'Shop', to: '/shop'},
  {name: 'Blog', to: '/blog'},
  {name: 'Pages', to: '/pages'},
  {name: 'Contact', to: '/contact'},
];

const AppHeader = () => {
  return (
    <div className="py-6">
      <div className="w-8/12 flex justify-between items-center mx-auto">
        <img src={logo} alt="app logo" />

        <div className="w-5/12 flex justify-between">
          {links.map((link) => (
            <NavLink key={link.name} name={link.name} to={link.to} />
          ))}
        </div>

        <div className="flex w-1/12 justify-around">
          <Icon name={mdiMagnify} />
          <Icon name={mdiCartOutline} />
        </div>

        <button className="hover:bg-sky-500 text-sky-500 hover:text-white rounded-3xl py-2 px-8 border-2 font-semibold border-sky-500">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default AppHeader;
