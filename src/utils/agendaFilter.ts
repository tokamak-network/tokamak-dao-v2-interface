export function votingTime (agenda: any) {
  if (!agenda.tNoticeEndTime) return '';
  if (agenda.tNoticeEndTime * 1000 > new Date().getTime() || agenda.tVotingEndTime === 0) {
    return 'VOTING IS NOT STARTED';
  } else {
    const dDay = new Date(agenda.tVotingEndTime);
    const now = new Date();
    const gap = dDay.getTime() * 1000 - now.getTime();
    if (gap < 0) {
      return 'POLL ENDED';
    } else {
      return 'VOTING IS STARTED';
      // const days = Math.floor(gap / (1000 * 60 * 60 * 24));
      // const hours = Math.floor((gap - days * 86400000) / 3600000);

      // return days + 'D ' + hours + 'H REMAINING';
    }
  }
}

export function agendaStatus (status: number) {
  switch (status) {
  case 0:
    return 'NONE';
  case 1:
    return 'NOTICE';
  case 2:
    return 'VOTING';
  case 3:
    return 'WAITING_EXEC';
  case 4:
    return 'EXECUTED';
  case 5:
    return 'ENDED';
  default:
    console.log('bug', 'no agenda status'); // eslint-disable-line
    return '';
  }
}

export function agendaStatusNumber (status: string) {
  switch (status) {
  case 'NONE':
    return 1;
  case 'NOTICE':
    return 2;
  case 'VOTING':
    return 3;
  case 'WAITING_EXEC':
    return 4;
  case 'EXECUTED':
    return 5;
  case 'ENDED':
    return 6;
  default:
    console.log('bug', 'no agenda status'); // eslint-disable-line
    return '';
  }
}

export function agendaResult (result: number) {
  switch (result) {
  case 0:
    return 'PENDING';
  case 1:
    return 'ACCEPT';
  case 2:
    return 'REJECT';
  case 3:
    return 'DISMISS';
  default:
    console.log('bug', 'no agenda status'); // eslint-disable-line
    return '';
  }
}

export function agendaResultNumber (result: string) {
  switch (result) {
  case 'PENDING':
    return 0;
  case 'ACCEPT':
    return 1;
  case 'REJECT':
    return 3;
  case 'DISMISS':
    return 4;
  default:
    console.log('bug', 'no agenda status'); // eslint-disable-line
    return '';
  }
}