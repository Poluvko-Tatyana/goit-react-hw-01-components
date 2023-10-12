import { FriendListItem } from '../FriendList/FriendListItem';

export const FriendList = ({friends}) => {
    return (
        <ul>
        {friends.map(({ id, avatar, name, isOnline }) => {
        return (
          <FriendListItem
            key={id}
            avatar={avatar}
            name={name}
            isOnline={isOnline}
          />
        );
      })}
</ul>
    );
  };
