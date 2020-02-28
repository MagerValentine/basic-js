module.exports = function createDreamTeam(members) {
  if (members instanceof Array) {
    let regexp = /([a-z]){1,}/i;
    members = members.map(m => {
      if (typeof m == "string") {
        return m.trim().toUpperCase();
      }
      return ' ';
    }).sort();
    return members.reduce((accum, current) => {
      if (current != ' ') return accum + current.trim().toUpperCase()[0];
      else return accum;
    }, '');
  }
  return '';
};