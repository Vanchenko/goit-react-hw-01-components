import { Status } from './Friendlist.styled.js'
import css from './Friendlistitem.module.css';

export const FriendListItem = ({ avatar, name, isOnline }) => (
  <>
    <li className={css.item}>
      <Status stat={isOnline} />
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  </>
);