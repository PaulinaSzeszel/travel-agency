import React from 'react';
import PropTypes from 'prop-types';
import styles from './HappyHourAd.module.scss';
import { formatTime } from '../../../utils/formatTime.js';

class HappyHourAd extends React.Component {

  constructor(){
    super();

    setInterval(()=> this.forceUpdate(), 1000);
  }

  getCountdownTime() {
    const currentTime = new Date();
    const nextNoon = new Date(Date.UTC(currentTime.getUTCFullYear(), currentTime.getUTCMonth(), currentTime.getUTCDate(), 12, 0, 0, 0));

    if (currentTime.getUTCHours() >= 12) {
      nextNoon.setUTCDate(currentTime.getUTCDate() + 1);
    }

    return Math.round((nextNoon.getTime() - currentTime.getTime()) / 1000);
  }

  render() {
    let { title, promoDescription /* titleOff */} = this.props;
    let countdownTime = this.getCountdownTime();
    return (
      <div className={styles.component}>
        <h3 className={styles.title}>{title}</h3>
        {/* <h3 className={styles.title}>{countdownTime > 23*60*60 ? title:(titleOff)}</h3> */}
        <div className={styles.promoDescription}>{countdownTime > 23*60*60 ? promoDescription:(formatTime(countdownTime))}</div>
      </div>
    );
  }
}

HappyHourAd.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  promoDescription: PropTypes.string,
  // titleOff: PropTypes.string,
};

export default HappyHourAd;
