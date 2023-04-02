import PropTypes from 'prop-types';
import {
  ContainerProfile,
  UserNameInfo,
  Name,
  ListInfo,
  ListItem,
} from './Profile.styled';

export const Profile = ({ avatar, username, tag, location, stats }) => (
  <ContainerProfile>
    <UserNameInfo>
      <img src={avatar} alt="User avatar" />
      <Name>{username}</Name>
      <p>@{tag}</p>
      <p>{location}</p>
    </UserNameInfo>

    <ListInfo>
      <ListItem>
        <span>Followers</span>
        <span>{stats.followers}</span>
      </ListItem>
      <ListItem>
        <span>Views</span>
        <span>{stats.views}</span>
      </ListItem>
      <ListItem>
        <span>Likes</span>
        <span>{stats.likes}</span>
      </ListItem>
    </ListInfo>
  </ContainerProfile>
);

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};