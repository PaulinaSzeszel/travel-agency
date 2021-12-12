import React from 'react';
import PropTypes from 'prop-types';
import styles from './HappyHourAd.scss';
import { formatTime } from '../../../utils/formatTime.js';

class HappyHourAd extends React.Component {
  constructor() {
    super();
    /* run this.forceUpdate() every second */
    setInterval(() => {
      this.forceUpdate();
    }, 1000);
  }

  static propTypes = {
    title: PropTypes.string,
    promoDescription: PropTypes.string,
  };

  static defaultProps = {
    title: 'Happy Hour',
    promoDescription: 'time until:',
  };

  render() {
    const { title, promoDescription } = this.props;
    const countdownTime = this.getCountdownTime();

    return (
      <div className={styles.component}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.promoDescription}>{promoDescription}</div>
        <div className={styles.descr}>
          {countdownTime > 23 * 60 * 60
            ? this.props.promoDescription
            : formatTime(countdownTime)}
        </div>
      </div>
    );
  }

  getCountdownTime() {
    const currentTime = new Date();
    const nextNoon = new Date(Date.UTC(currentTime.getUTCFullYear(), currentTime.getUTCMonth(), currentTime.getUTCDate(), 12, 0, 0, 0));

    if (currentTime.getUTCHours() >= 12) {
      nextNoon.setUTCDate(currentTime.getUTCDate() + 1);
    }

    return Math.round((nextNoon.getTime() - currentTime.getTime()) / 1000);
  }
}

export default HappyHourAd;
