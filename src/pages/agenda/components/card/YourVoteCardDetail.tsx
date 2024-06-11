import { Flex, useTheme } from "@chakra-ui/react";
import { StatsCardRow } from "./StatsCardRow";
import { onChainEffect } from '../../../../types/index';
import BasicButton from "@/common/button/BasicButton";
import { VoteBreakDown } from '../../../election/components/VoteBreakdown';
import { VoteModal } from '../VoteModal';
import { ModalType } from "@/types/modal";
import { useCallback } from "react";
import { modalData, modalState } from '@/atom/global/modal';
import { useRecoilState } from "recoil";

export const YourVoteCardDetail = ({
  agenda
}: any) => {
  
  const theme = useTheme()
  const CARD_STYLE = theme.CARD_STYLE;
  const modalContent = {
    agendaid: agenda?.agendaid
  }

  const [selectedModal, setSelectedModal] = useRecoilState(modalState);
  const [, setSelectedModalData] = useRecoilState(modalData);

  const modalButton = useCallback(async (modalType: ModalType, data: any) => {
    setSelectedModal(modalType);
    setSelectedModalData(data);
  }, []);
  
  return (
    <Flex
      {...CARD_STYLE.mainTheme()}
      {...CARD_STYLE.resourceCard()}
      flexDir={'column'}
      h={'150px'}
      justifyContent={'space-between'}
      fontWeight={'500'}
      fontSize={'20px'}
      mb={'30px'}
    >
      {
        agenda && agenda.onChainEffects ?
        <Flex flexDir={'column'}>
          <Flex mb={'10px'}>
            {agenda.onChainEffects[0].title} 
          </Flex>
          <BasicButton 
            type={'vote'}
            name={'Vote for this agenda'}
            w={'100%'}
            h={'45px'}
            onClick={() => modalButton('vote', modalContent)}
          />
        </Flex> : ''
      }
      <VoteModal />
    </Flex>
  )
}


