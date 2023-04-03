import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem';
import css from './Friend.module.css';

export const FriendList = ({ friends }) => (
  <ul className={css.friends}>
    {friends.map(friend => (
      <FriendListItem
        key={friend.id}
        avatar={friend.avatar}
        isOnline={friend.isOnline}
        name={friend.name}
      ></FriendListItem>
    ))}
  </ul>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};