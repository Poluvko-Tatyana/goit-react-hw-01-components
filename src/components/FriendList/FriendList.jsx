import css from '../FriendList/FriendList.module.css';

export const FriendList = ({friends}) => {
    return (
        <ul className={css.friendList}>
        {friends.map(({avatar, name, isOnline }) => {
        return (<li className={css.item}>
        <span className={`${css.status} ${isOnline ? css.isOnline : ''}`}></span>
        <img className={css.avatar} src={avatar} alt={name} width="48" />
        <p className={css.name}>{name}</p>
      </li>
        );
      })}
</ul>
    )
  }
