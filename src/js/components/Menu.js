import React from 'react';
import {Link} from 'react-router-dom';
import HomeIcon from 'react-icons/lib/fa/home';
import AddDayIcon from 'react-icons/lib/fa/calendar-plus-o';
import ListDaysIcon from 'react-icons/lib/fa/table';
import MdAccountBox from 'react-icons/lib/md/account-box';
import MdGames from 'react-icons/lib/md/games';

const Menu = () => (
  <div>
    <Link to="/"> Home <HomeIcon /> </Link>
    <Link to="/add-day"> Add Day <AddDayIcon /> </Link>
    <Link to="/list-days"> List Days <ListDaysIcon /> </Link>
    <Link to='/users'>Users <MdAccountBox /></Link>
    <Link to='/players'>Players <MdGames /></Link>
  </div>
);

export default Menu;
