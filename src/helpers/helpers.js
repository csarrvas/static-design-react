export function timeAgo(date) {
  const creationDate = new Date(date);
  const today = new Date();

  const subtraction = today.getTime() - creationDate.getTime();
  return Math.round(subtraction / (1000*60*60*24)) + ' days ago';
}