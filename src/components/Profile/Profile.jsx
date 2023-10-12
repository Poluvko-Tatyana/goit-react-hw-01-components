import css from '../Profile/Profile.module.css';


export const Profiler = ({username, tag, location, avatar, stats}) => {
    return (
      <div className={css.profile}>
    <div className={css.description}>
      <img
        src={avatar}
        alt={username}
        className={css.avatar}
      />
    <p className="name">{username}</p>
    <p className="tag">{tag}</p>
      <p className="location">{location}</p>
    </div>
  
    <ul className={css.stats}>
      <li>
        <span className={css.label}>Followers</span>
        <span className="quantity">{stats.followers}</span>
      </li>
      <li>
        <span className={css.label}>Views</span>
        <span className="quantity">{stats.views}</span>
      </li>
      <li>
        <span className={css.label}>Likes</span>
        <span className="quantity">{stats.likes}</span>
      </li>
    </ul>
  </div>
    );
  };