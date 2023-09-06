import moment from 'moment';

export function timeConverter(UNIX_timestamp: number, type?: string){
  var a = new Date(UNIX_timestamp * 1000);
  var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var hour = a.getHours();
  var min = a.getMinutes();
  // var sec = a.getSeconds();
  var time = type === 'time' ? `${month} ${date}, ${year}, ${hour}:${min}` : `${month} ${date}, ${year}`
  return time;
}

export function fromNow (timestamp: number, suffix=false) {
  return moment.unix(timestamp).fromNow(suffix)
}