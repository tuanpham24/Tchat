export const formatDate = (dateStr) => {
  const d = new Date(dateStr);
  const date = d.getDate();
  const month = d.getMonth() + 1; // Since getMonth() returns month from 0-11 not 1-12
  const year = d.getFullYear();
  const hours = d.getHours();
  const minutes = d.getMinutes();
  const now = new Date();
  if(minutes == now.getMinutes()) {
    return "Just now";
  }
  if(date == now.getDate()){
    return  "Today, " + hours + "h" + minutes + "p";
  }
  return hours + "h" + minutes + "p " + date + "/" + month + "/" + year;
};