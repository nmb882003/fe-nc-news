const formatDateAndTime = (str) => {
  const regex = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):00.000Z$/;

  return str.replace(regex, "$3/$2/$1 $4:$5");
}
  
export { formatDateAndTime }