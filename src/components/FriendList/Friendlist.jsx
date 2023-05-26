import React from 'react';
import PropTypes from 'prop-types';
import css from './Friendlist.module.css';
import { Status } from './Friendlist.styled.js'

export const FriendList = ({ friends }) => (
    <ul className={css.friendList}>
        {friends.map(elem => (<li key={elem.id} className={css.item}>
            <FriendListItem avatar={elem.avatar} name={ elem.name } isOnline={elem.isOnline} />
    </li>)) }
  </ul>
);

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
}

const FriendListItem = ({ avatar, name, isOnline }) => (
    <>
        <Status stat={isOnline} />
        <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
        <p className={css.name}>{name}</p>
    </>
);