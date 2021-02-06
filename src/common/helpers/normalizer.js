export function getDBFormatDate(date) {
  const [y, m, d] = date.split('-');
  return new Date(y, m - 1, d, 0, 0, 1);
}
