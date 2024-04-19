import { Flex, useTheme, Text } from '@chakra-ui/react';
import { MemberCardHeader } from './MemberCardHeader';
import { trimAddress } from '@/components/trimAddress';
import { convertNumber } from '../../../utils/number';
import { timeConverter, fromNow } from '@/components/getDate';
import Image from 'next/image';
import CLOCK from '@/assets/images/poll-time-active-icon.svg'
import BasicButton from '@/common/button/BasicButton';
import { useRouter } from 'next/router';
import { useState, useEffect, useCallback } from 'react';
import { useWeb3React } from '@web3-react/core';
import Candidate from "services/abi/Candidate.json"
import { getContract } from '@/components/getContract';
import { useRecoilState } from 'recoil';
import { txState } from '@/atom/global/transaction';
import { BigNumber } from 'ethers'
import { ZERO_ADDRESS } from '@/constants';

type Member = {
  data: any;
  isCandidate: boolean
  myCandidate: any
  index: number;
}

export const MemberCard = (args: Member) => {
  const { data, index, isCandidate, myCandidate } = args
  // console.log(data)
  const { candidate, elected, name, candidateContract, stakedAmount, asCommit, slot } = data;
  const { CARD_STYLE } = useTheme()
  const router = useRouter()
  const { account, library } = useWeb3React();
  const [canRetire, setCanRetire] = useState<boolean>()
  const [ canChallenge, setCanChallenge] = useState<boolean>()
  const [, setTx] = useState();
  const [txPending, setTxPending] = useRecoilState(txState);
  // console.log(data)
  
  useEffect(() => {
    if (account) {
      const isMember = candidate ? candidate.toLowerCase() === account.toLowerCase() : false
      setCanRetire(isMember)
    } else {
      setCanRetire(false)
    }
  }, [account, myCandidate, txPending])

  useEffect(() => {
    if (account && myCandidate && data ) {
      const challengeable = data.stakedAmount ? BigNumber.from(myCandidate.stakedAmount).gt(BigNumber.from(data.stakedAmount)) : true
      setCanChallenge(challengeable)
    } else {
      setCanChallenge(false)
    }
  }, [account, myCandidate, canChallenge, data, txPending])

  const retire = useCallback(async () => {
    if (account && library ) {
      try {
        const Candidate_CONTRACT = getContract(candidateContract, Candidate.abi, library, account)
        const tx = await Candidate_CONTRACT.retireMember()
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

  const challenge = useCallback(async () => {
    if (account && library && myCandidate) {
      try {
        const Candidate_CONTRACT = getContract(myCandidate.candidateContract, Candidate.abi, library, account)
        const tx = await Candidate_CONTRACT.changeMember(slot)
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

  const voted = convertNumber({
    amount: stakedAmount,
    type: 'ray'
  })

  return (
    <Flex
      {...CARD_STYLE.mainTheme()}
      {...CARD_STYLE.memberCard()}
      flexDir={'column'}
      mb={'20px'}
    >
      <MemberCardHeader 
        elected={candidateContract}
        voted={voted}
        index={index}
      />
      <Text
        fontSize={'20px'}
        mt={'5px'}
        mb={'5px'}
      >
        {data === 'Empty' || candidateContract === ZERO_ADDRESS ? '-' : `${name}`}  
      </Text>
      <Text
        color={'#86929d'}
        fontSize={'14px'}
      >
        {data === 'Empty' || candidateContract === ZERO_ADDRESS ? '-' : 
        `${trimAddress({
          address: candidateContract,
          firstChar: 6,
          lastChar: 4,
          dots: '...'
        })} is elected to Committee member since ${timeConverter(elected)}`}
      </Text>
      <Flex
        flexDir={'row'}
        my={'25px'}
        h={'13px'}
      >
        <Image src={CLOCK} alt='' />
        <Text
          fontSize={'10px'}
          color={'#86929d'}
          ml={'7px'}
        >
          {(data === 'Empty' || candidateContract === ZERO_ADDRESS) ? '-' : asCommit[0] ? `Staking reward last updated ${fromNow(asCommit[0].timestamp)}` : 'No Staking reward update history'}
        </Text>
      </Flex>
      <Flex
        flexDir={'row'}
        justifyContent={'space-between'}
      >
        <Flex>
          
            <BasicButton 
              type={'a'}
              name={'View Details'}
              isDisabled={data === 'Empty' || candidateContract === ZERO_ADDRESS ? true : false}
              onClick={() => {
                router.push({
                  pathname: '/election/[l2address]',
                  query: { 
                    l2address: candidateContract,
                  }
                })
              }}
            />
          
        </Flex>
        <Flex>
          {
            account && (canChallenge || canRetire) ?
            <BasicButton 
              type={isCandidate && canRetire ? 'a' : 'a'}
              name={canRetire ? 'Retire' : 'Challenge'}
              isDisabled={canChallenge || canRetire ? false : true }
              onClick={() => canRetire ? retire() : challenge()}
            /> : ''

          }
        </Flex>
      </Flex>
    </Flex>
  )
}