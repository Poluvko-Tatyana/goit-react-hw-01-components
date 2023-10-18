import css from '../FriendList/FriendListItem.module.css';

export const FriendListItem = ({ friend }) => {
  return (
    <li className={css.item} key={friend.id}>
      <span
        className={`${css.status} ${friend.isOnline ? css.isOnline : ''}`}
      ></span>
      <img
        className={css.avatar}
        src={friend.avatar}
        alt={friend.name}
        width="48"
      />
      <p className={css.name}>{friend.name}</p>
    </li>
  );
};
