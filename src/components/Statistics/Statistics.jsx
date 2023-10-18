import css from '../Statistics/Statistics.module.css';

export const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
     { title ? <h2>{title}</h2> : null}
      <ul className={css.stat_list}>
        {stats.map(stat => {
          return (
            <li className={css.item} key={stat.id}>
              <span className={css.label}>{stat.label}</span>
              <span className={css.percentage}>{stat.percentage}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
