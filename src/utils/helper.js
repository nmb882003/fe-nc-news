  const formatDateAndTime = (str) => {
    return str.replace(/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}).000Z/, "$3/$2/$1 $4:$5:$6");
}
  
export { formatDateAndTime }
  