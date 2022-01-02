export const formatTime = (time) => {
  if (typeof time !== 'number' || time < 0){
    return null;
  } else {
    const seconds = (Math.floor(time % 60 ) + '').padStart(2 , '0');
    const minutes = (Math.floor((time / 60) % 60) + '').padStart(2, '0');
    const hours = (Math.floor(time / 3600 ) + '').padStart(2, '0');

    return (hours + ':' + minutes + ':' + seconds );
  }
};