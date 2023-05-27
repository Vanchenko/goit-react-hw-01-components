import React from 'react';
import PropTypes from 'prop-types';
import css from './Friendlist.module.css';
import { FriendListItem } from '../FriendListItem/FriendListItem';


export const FriendList = ({ friends }) => (
  <ul className={css.friendList}>
    {friends.map(({id, avatar, name, isOnline})=> {
      return (<FriendListItem key={id} avatar={avatar} name={name} isOnline={isOnline} />)
    })}
  </ul>
);

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
}

