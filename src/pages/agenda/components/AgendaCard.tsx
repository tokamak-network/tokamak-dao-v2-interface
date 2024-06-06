import { Flex, useTheme, Text } from '@chakra-ui/react';
import { trimAddress } from '@/components/trimAddress';
import { convertNumber } from '../../../utils/number';
import { timeConverter, fromNow, agendaResult } from '@/components/getDate';
import CLOCKA from '@/assets/images/poll-time-active-icon.svg'
import INACTIVE_CLOCK from '@/assets/images/poll-time-inactive-icon.svg';
import CLOCKB from '@/assets/images/poll-time-active-icon-typeB.svg'
import BasicButton from '@/common/button/BasicButton';
import Image from 'next/image';
import { AgendaCardHeader } from './AgendaCardHeader';
import { useEffect, useState, useCallback } from 'react';
import { useRouter } from 'next/router';
import { votingTime, agendaStatus } from '../../../utils/getDate';
import { useWeb3React } from '@web3-react/core';
import { useRecoilState } from 'recoil';
import { txState } from '@/atom/global/transaction';;
import useCallContract from '@/hooks/useCallContract';
import { useVotingResult } from '@/hooks/agenda/useVotingResult';
import { VoteModal } from './VoteModal';
import { ModalType } from '@/types/modal';
import { modalData, modalState } from '@/atom/global/modal';

type AgendaCardProp = {
  data: any;
  index: number;
  member: any;
  blockTime: number;
}

export const AgendaCard = (args: AgendaCardProp) => {
  const { data, index, member, blockTime } = args
  const { 
    blockNumber,
    agendaid, 
    countAbstainVotes, 
    countNoVotes, 
    countYesVotes,
    creator,
    executed,
    noticePeriodSeconds,
    tNoticeEndTime,
    tVotingEndTime,
    tExecutableLimitTimestamp,
    result,
    status,
    tCreationDate,
    voters,
    tx,
    type,
    onChainEffects
  } = data;
  console.log(data)
  
  const { CARD_STYLE } = useTheme()
  const numChainEffects = onChainEffects.length
  const router = useRouter()
  const { account, library } = useWeb3React();
  const [, setTx] = useState();
  const [txPending, setTxPending] = useRecoilState(txState);
  const { DAOCommitteeProxy_Contract } = useCallContract();

  const [isActive, setIsActive] = useState<boolean>()
  const [voteAction, setVoteAction] = useState<string>('')
  const [voted, setVoted] = useState()
  const [selectedModal, setSelectedModal] = useRecoilState(modalState);
  const [, setSelectedModalData] = useRecoilState(modalData);

  const voteResult = useVotingResult(agendaid, voters)

  useEffect(() => {
    const active = votingTime(data) != 'POLL ENDED'
    setIsActive(active)
  }, [])

  useEffect(() => {
    async function fetch () {
      if (agendaStatus(status) === 'NOTICE' && blockTime >= tNoticeEndTime) {
        setVoteAction(member ? 'VOTE' : '');
      } else if (agendaStatus(status) === 'VOTING' && blockTime <= tVotingEndTime) {
        setVoteAction(member ? 'VOTE' : '');
      } else if (
        agendaStatus(status) === 'WAITING_EXEC' &&
        agendaResult(result) === 'ACCEPT' &&
        blockTime >= tVotingEndTime &&
        blockTime <= tExecutableLimitTimestamp &&
        !executed
      ) {
        setVoteAction('EXECUTE');
      } else if (
        agendaStatus(status) === 'VOTING' &&
        blockTime >= tVotingEndTime
      ) {
        setVoteAction('END AGENDA');
      } else {
        setVoteAction('');
      }
    }
    fetch()
  }, [tx, txPending, status])
  

  useEffect(() => {
    if (member) {
      const voted = voters.find((voter: string) => voter.toLowerCase() === member.member)
      setVoted(voted)
    }
  }, [tx, txPending])

  const act = useCallback(async () => {
    if (account && library && DAOCommitteeProxy_Contract) {
      try {
        const tx = voteAction === 'EXECUTE' ? await DAOCommitteeProxy_Contract.executeAgenda(agendaid) : await DAOCommitteeProxy_Contract.endAgendaVoting(agendaid)
        setTx(tx);
        setTxPending(true);

        if (tx) {
          await tx.wait().then((receipt: any) => {
            if (receipt.status) {
              setTxPending(false);
              setTx(undefined);
            }
          });
        }
      } catch (e) {
        setTxPending(false);
        setTx(undefined);
      }
    }
  }, [])

  const modalContent = {
    agendaid: agendaid
  }

  const modalButton = useCallback(async (modalType: ModalType, data: any) => {
    setSelectedModal(modalType);
    setSelectedModalData(data);
  }, []);


  return (
    <Flex
      {...CARD_STYLE.mainTheme()}
      {...CARD_STYLE.agendaCard()}
      flexDir={'column'}
      mb={'20px'}
    >
      <AgendaCardHeader 
        index={`#${agendaid}`}
        type={type}
      />
      <Text
        fontSize={'20px'}
        mt={'5px'}
        mb={'5px'}
      >
        {onChainEffects[0].title}  
      </Text>
      <Text
        color={'#86929d'}
        fontSize={'14px'}
      >
        {`This agenda was made by ${trimAddress({
          address: creator,
          firstChar: 6,
          lastChar: 4,
          dots: '...'
        })} on ${timeConverter(tCreationDate)}`}
      </Text>
      <Flex
        flexDir={'row'}
        my={'25px'}
        h={'13px'}
      >
        <Image src={!isActive ? INACTIVE_CLOCK : type === 'A' ? CLOCKA : CLOCKB} alt='' />
        <Text
          fontSize={'10px'}
          color={'#86929d'}
          ml={'7px'}
        >
          {data === 'Empty' ? '-' : votingTime(data)}
        </Text>
      </Flex>
      <Flex
        flexDir={'row'}
        justifyContent={'space-between'}
      >
        <Flex justifyContent={'space-between'} w={'100%'}>
          {data === 'Empty' ? '' :
            <Flex>
              <BasicButton 
                type={type.toLowerCase()}
                name={'View Details'}
                onClick={() => {
                  router.push({
                    pathname: '/agenda/[agendaid]',
                    query: { 
                      agendaid: agendaid,
                    }
                  })
                }}
              />
              <Flex
                fontSize={'12px'}
                fontWeight={'normal'}
                alignItems={'center'}
                ml={'20px'}
              >
                {
                  voted ? 
                  <Flex
                    color={type === 'A' ? '#2a72e5' : '#ff7800'}
                  >
                    {`You have voted ${voteResult === '1' ? '"Yes"' : '"No"'}`}
                  </Flex> : 
                  <Flex
                    color={'#c9d1d8'}
                  >
                    You have not voted
                  </Flex>
                }
              </Flex>
            </Flex> 
          }
          { 
            member && voteAction ? 
            <BasicButton 
              type={voteAction === 'END AGENDA' ? 'normal' : 'vote'}
              name={voteAction}
              isDisabled={voteAction === 'VOTE' ? voted ? true : false : false}
              onClick={() => voteAction === 'VOTE' ? modalButton('vote', modalContent) : act()}
            /> : ''
          }
        </Flex>
      </Flex>
      <VoteModal />
    </Flex>
  )
}

function setSelectedModal(modalType: ModalType) {
  throw new Error('Function not implemented.');
}
