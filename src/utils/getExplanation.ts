import {hexSlicer, truncate, fromRay2, date4} from '@/utils/trimAddress';


type EventProp = {
  blockNumber: number,
  blockTimestamp: number,
  chainId: number,
  contract: string,
  data: any,
  eventName: EventName,
  from?: string,
  layer2?: string,
  transactionHash: string,
  txInfo: any,
  value?: number,
}
type EventName = 'AgendaCreated' | 
                 'AgendaExecuted' |
                 'AgendaVoteCasted' |
                 'CandidateContractCreated' |
                 'ChangedMember' |
                 'ChangedSlotMaximum' |
                 'ClaimedActivityReward' |
                 'Layer2Registered' |
                 'AgendaStatusChanged' |
                 'AgendaResultChanged' |
                 'Deposited' |
                 'WithdrawalRequested' |
                 'WithdrawalProcessed' |
                 'Comitted' |
                 'RoundStart' 

export function getEventExplanation (event: EventProp, candidateList: any) {
  const eventName: EventName = event.eventName;
  const explanation = {
    AgendaCreated : `Agenda #${event.data.id} Created`,
    AgendaExecuted: `Agenda #${event.data.id} Executed`,
    AgendaVoteCasted: `Agenda #${event.data.id} is Voted ${parsingVoted(event.data.voting)}`,
    CandidateContractCreated: 'New Committee Candidate Created',
    ChangedMember: 'Committee Member Changed',
    ChangedSlotMaximum: `Committee Member Slot Maximum adjusted to ${event.data.slotMax}`,
    ClaimedActivityReward: `Activity Reward is Given to ${candidateName(event.data.candidate, candidateList) ? candidateName(event.data.candidate, candidateList) : '-'}`,
    Layer2Registered: `Candidate ${candidateName(event.data.candidateContract, candidateList) ? candidateName(event.data.candidateContract, candidateList) : '-'} Registered`,
    AgendaStatusChanged: `Agenda #${event.data.agendaID} Status Changed to ${parsingAgendaStatus(event.data.newStatus)}`,
    AgendaResultChanged: `Agenda #${event.data.agendaID} Result Changed to ${parsingAgendaResult(event.data.result)}`,
    Deposited: `${hexSlicer(event.data.depositor)} voted ${truncate(fromRay2(event.data.amount), 2)} TON to ${candidateName(event.data.layer2, candidateList) ? candidateName(event.data.layer2, candidateList) : '-'}`,
    WithdrawalRequested: `${hexSlicer(event.data.depositor)} unvoted ${truncate(fromRay2(event.data.amount), 2)} TON to ${candidateName(event.data.layer2, candidateList) ? candidateName(event.data.layer2, candidateList) : '-'}`,
    WithdrawalProcessed: `${truncate(fromRay2(event.data.amount), 2)} TON is withdrawn by ${hexSlicer(event.data.depositor)} from ${candidateName(event.data.layer2, candidateList) ? candidateName(event.data.layer2, candidateList) : '-'}`,
    Comitted: `${candidateName(event.data.layer2, candidateList) ? candidateName(event.data.layer2, candidateList) : '-'}'s rewards are updated by ${hexSlicer(event.txInfo.from)}`,
    RoundStart: `PowerTON round ${event.data.round} started ${date4(event.data.startTime)} (ends ${date4(event.data.endTime)})`,
  }
  return explanation[eventName]
} 

function candidateName (contract: string, candidateList: any) {
  if (contract) {
    const found = candidateList.find((candidate: any) => 
      candidate.candidate.toLowerCase() === contract.toLowerCase() ||
      candidate.candidateContract.toLowerCase() === contract.toLowerCase()
    );
    return found ? found.name : ''
  }
}

function parsingVoted (voted: string) {
  const parsed = parseInt(voted)
  const vote = ['"ABSTAIN"', '"YES"', '"NO"']
  return vote[parsed] ? vote[parsed] : '""'
}

function parsingAgendaResult (result: string) {
  const parsed = parseInt(result)
  const results = ['"PENDING"', '"ACCEPT"', '"REJECT"', '"DISMISS"']
  return results[parsed] ? results[parsed] : '""'
}

function parsingAgendaStatus (status: string) {
  const parsed = parseInt(status)
  const stats = ['"NONE"', '"NOTICE"', '"VOTING"', '"WAITING"', '"EXECUTED"', '"ENDED"']
  return stats[parsed] ? stats[parsed] : '""'
}

