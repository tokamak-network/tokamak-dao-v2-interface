import { useEffect, useState } from 'react';
import { useWeb3React } from "@web3-react/core";
import useCallContract from '../useCallContract';
import { convertNumber } from '../../utils/number';

export function useActivityReward () {
  const {
    DAOCommitteeProxy_Contract
  } = useCallContract()
  const { account } = useWeb3React();
  const [activityReward, setActivityReward] = useState<string|undefined>(undefined)

  useEffect(() => {
    async function fetch () {
      if (DAOCommitteeProxy_Contract && account) {
        const activityReward = await DAOCommitteeProxy_Contract.getClaimableActivityReward(account)
        // console.log(activityReward.toString())
        const converted = convertNumber({
          amount: activityReward.toString(),
          type: 'wei',
          localeString: true
        })
        setActivityReward(converted || "-")
      }
    }
    fetch()
  }, [account])

  return {
    activityReward
  }
}