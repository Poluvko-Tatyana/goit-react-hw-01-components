import css from '../FriendListItem/FriendListItem.module.css';

export const FriendListItem = ({avatar, name, isOnline}) => {
    return (
        <li className={css.item}>
        <span className={css.status} isOnline={isOnline}></span>
        <img className={css.avatar} src={avatar} alt={name} width="48" />
        <p className={css.name}>{name}</p>
      </li>
    );
  };