import React from 'react';
import styles from './Hero.module.scss';
import PropTypes from 'prop-types';
import HappyHourAd from '../../features/HappyHourAd/HappyHourAd';

const Hero = ({variant = '', titleText, imageSrc, ...otherProps}) => (
  <div {...otherProps} className={styles.component + variant.split(' ').map(name => ' ' + (styles[name] || name)).join('')}>
    <h2 className={styles.title}>{titleText}</h2>
    <img className={styles.image} alt="" src={imageSrc} />
    <div className={styles.happyHour}><HappyHourAd title="Happy Hour" titleOff= "Happy Hours starts in" promoDescription="Promo is active until 13:00 CET!" /></div>
  </div>
);

Hero.propTypes = {
  variant: PropTypes.string,
  titleText: PropTypes.node.isRequired,
  imageSrc: PropTypes.string.isRequired,
};

export default Hero;
