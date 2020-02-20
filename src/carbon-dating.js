const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (sampleActivity === undefined || typeof sampleActivity !== 'string') return false;
  var sample = parseFloat(sampleActivity);
  return sample <=0 || sample > MODERN_ACTIVITY || isNaN(sample) ?
   false : Math.floor(Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity)) / ( 0.693 / HALF_LIFE_PERIOD)) + 1;
};
