import React from 'react';
import PropTypes from 'prop-types';

import styles from './OrderOption.module.scss';

export const OrderOptionText = ({ setOptionValue }) => (
  <input
    className={styles.input}
    onChange={(event) => setOptionValue(event.currentTarget.value)}
  ></input>
);

OrderOptionText.propTypes = {
  setOptionValue: PropTypes.func,
};
