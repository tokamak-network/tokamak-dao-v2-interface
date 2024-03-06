import { API } from '@/constants';
import axios from 'axios';
import { CHAINID } from '../constants/index';

function createInstance () {
  return axios.create({
    baseURL: API
    // baseURL: 'https://api-dev.tokamak.network/v1',
  });
}
const instance = createInstance();
const chainId = CHAINID;

export async function getRecentEvents () {
  const events = [
    'AgendaCreated',
    'AgendaExecuted',
    'AgendaVoteCasted',
    'CandidateContractCreated',
    'ChangedMember',
    'ChangedSlotMaximum',
    'ClaimedActivityReward',
    'Layer2Registered',
    'AgendaStatusChanged',
    'AgendaResultChanged',
    'Deposited',
    'WithdrawalRequested',
    'WithdrawalProcessed',
    'Comitted',
    'RoundStart',
  ];
  const eventsString = events.join(',');
  const res = await instance.get('/events', {
    params: {
      chainId,
      page: 1,
      pagesize: 10,
      eventNames: eventsString,
    },
  });

  return res.data.datas;
}

export async function getEvent (event: string) {
  const events = [
    'ChangedMember',
    'ChangedSlotMaximum',
  ];
  const eventsString = events.join(',');
  const res = await instance.get('/events', {
    params: {
      chainId,
      page: 1,
      pagesize: 1000,
      eventNames: eventsString,
    },
  });
  return res.data.datas;
}

export async function getCandidates () {
  const res = await instance.get('/layer2s/dao_candidates', {
    params: {
      chainId,
    },
  });
  return res.data.datas;
}

export async function getMembers () {
  const res = await instance.get('/layer2s/dao_members', {
    params: {
      chainId,
    },
  });
  return res.data.datas;
}

export async function getAgendaVotes () {
  const res = await instance.get('/agendavotes', {
    params: {
      chainId,
    },
  });
  return res.data.datas;
}

export async function getAgendas () {
  const res = await instance.get('/agendas', {
    params: {
      chainId,
    },
  });
  /*
  const now = parseInt(Date.now()/1000);
  const datas = [];
  if( res.data.datas != null && res.data.datas.length > 0 ){
    res.data.datas.forEach( element => {
      const data = element;
      //enum AgendaStatus { NONE, NOTICE, VOTING, WAITING_EXEC, EXECUTED, ENDED }
      //enum AgendaResult { PENDING, ACCEPT, REJECT, DISMISS }
      if( element && data.status!=null && data.status === 2  && data.tVotingEndTime > 0 && data.tVotingEndTime < now ) {
        data.status = 5;
      }
      datas.push(data);
    });
  }
  return datas;
  */
  return res.data.datas;
}

export async function getVotersByCandidate (layer2: string) {
  const res = await instance.get(`/balances/stakeof?layer2=${layer2}`, {
    params: {
      chainId,
    },
  });
  if (!res || res.data.datas.length === 0) {
    return [];
  }
  return res.data.datas;
}

export async function getCandidateVoteRank () {
  const res = await instance.get('/layer2coinages/dao_latest', {
    params: {
      chainId,
    },
  });
  return res.data.datas;
}

export async function createAgenda (from: string, txHash: string, type: string, contents: string) {
  if (!contents) {
    contents = '-';
  }
  await instance.post('/agendacontents', {
    account: from,
    tx: txHash,
    contents: contents,
    type: type,
  });
}

export async function getAgendaContents (agendaId: number) {
  const res = await instance.get('/agendacontents', {
    params: {
      chainId,
      agendaid: agendaId,
    },
  });
  return res.data.datas[0];
}


export async function getAgendasCanVote (voter: string) {
  const res = await instance.get('/agendas/canVoteAgendas', {
    params: {
      chainId,
      voter: voter,
    },
  });
  return res.data.datas;
}

export async function getAgendaVotesByVoter (voter: string) {
  const res = await instance.get('/agendavotes', {
    params: {
      chainId,
      voter: voter,
    },
  });
  return res.data.datas;
}

export async function updateAgendaContents (from: string, txHash: string, contents: string, sig: string, type: string) {
  if (!contents) {
    contents = '-';
  }
  const res = await instance.put('/agendacontents', {
    tx: txHash,
    contents: contents,
    account: from,
    sig: sig,
    type: type,
  });
  return res.data;
}

export async function updateCandidate (layer2: string, operator: string, sig: string, name: string, description: string) {
  const res = await instance.put('/layer2s/operators', {
    chainId,
    layer2: layer2,
    operator: operator,
    sig: sig,
    name: name,
    description: description,
    website: '',
  });
  return res.data;
}

export async function getRandomKey (from: string) {
  const res = await instance.post('/randomkey', {
    account: from,
  });
  return res.data.data.randomvalue;
}
