module.exports = function getSeason(date) {
  if(date == null || date == undefined) return 'Unable to determine the time of year!';
      if(Object.entries(date).length > 1) throw new Error();
  

  if(date instanceof Date)
  {
    var month = date.getMonth() + 1;
    if(month < 3 || month == 12) return "winter";
    if(month < 6 && month > 2) return "spring";
    if(month > 5 && month < 9) return "summer";
    if(month > 8 && month < 12) return "fall";
  }
  throw new Error();
};
