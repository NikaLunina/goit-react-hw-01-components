import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({ title, stats }) => {
  return (
    <section className={css.section}>
      <h2 className={css.title}>{title}</h2>

      <ul className={css.list}>
        {stats.map(elem => (
          <li
            style={{
              backgroundColor: getRandomHexColor(),
            }}
            key={elem.id}
            className={css.item}
          >
            <span className={css.label}>{elem.label}</span>
            <span className={css.percentage}>{elem.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
function getRandomHexColor() {
  let bgColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  return bgColor;
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};