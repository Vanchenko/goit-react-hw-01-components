import React from 'react';
import PropTypes from "prop-types";
import  css  from './Statistics.module.css'

export const Statistics = ({ title, data }) => (
  <section className={css.statistics}>
       {title && (<h2 className={css.title}>{ title }</h2> )} 
        <ul className={css.statList}>
{data.map(elem => (<li key={elem.id} className={css.item} style={{backgroundColor : getRandomHexColor() }}>
  <span className={css.label}>{ elem.label }</span>
  <span className={css.percentage}>{ elem.percentage}%</span>
    </li>)) }
  </ul>
</section>
);

Statistics.propTypes = {
  title: PropTypes.string,
  data: PropTypes.array.isRequired,
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
