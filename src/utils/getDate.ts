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

export function date1 (timestamp: number) {
  return moment.utc(timestamp * 1000).local().format('MMM D, YYYY');
}

export function date2 (timestamp: number) {
  return moment.utc(timestamp * 1000).local().format('MMM D, YYYY, HH:mm');
  /*
  const _timeUtc = new Date(timestamp * 1000).toUTCString()
  let _time =new Date(timestamp * 1000).toString();
  //const _time = new Date(timestamp * 1000).toLocaleString() ;
  //if(_time && _time.indexOf('(')) _time = _time.substring(0, _time.indexOf('('));
  return _time; */
}

export function date3 (timestamp: number) {
  if (!timestamp) return '';
  return moment.utc(timestamp * 1000).local().format('YYYY / MM / DD / HH:mm');
}

export function date4 (timestamp: number) {
  if (!timestamp) return '';
  return moment.utc(timestamp * 1000).local().format('MMM, DD');
}