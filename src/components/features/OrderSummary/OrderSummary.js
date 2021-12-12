import React from 'react';
import styles from './OrderSummary.module.scss';
import PropTypes from 'prop-types';
import {calculateTotal} from '../../../utils/calculateTotal';
import {formatPrice} from '../../../utils/formatPrice';

const OrderSummary = ({tripCost, tripOptions}) => (
  <h2 className={styles.component}>
        Total: <strong>{formatPrice(calculateTotal(tripCost, tripOptions))}</strong>   {/* remember about JSX!!!*/}
  </h2>
);

OrderSummary.propTypes = {
  tripCost: PropTypes.string,
  tripOptions: PropTypes.object,
};


export default OrderSummary;
