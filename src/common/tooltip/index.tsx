import {
  Tooltip,
  useColorMode,
  PlacementWithLogical,
  Text,
  Flex,
  Link
} from "@chakra-ui/react";
import { QuestionOutlineIcon } from "@chakra-ui/icons";
import { useEffect, useRef, useState } from "react";

type tooltipProps = {
  label: string | undefined;
  placement?: PlacementWithLogical;
  label2?: string | undefined
  types?: string | undefined
};

const BasicTooltip: React.FC<tooltipProps> = (props) => {
  const { colorMode } = useColorMode();
  const { label, label2, placement, types } = props;
  // const dropMenuRef = useRef<HTMLDivElement | null>();
  const [isLabelOpen, setIsLabelOpen] = useState(false)

  const tooltipControl = () => {
    !isLabelOpen ? setIsLabelOpen(true) : setIsLabelOpen(false)
  }

  const members = () => {
    return (
      <Text>
        DAO candidates with the most staked TON are eligible to serve as DAO committee members and vote on DAO agendas. Currently, there are three members.
      </Text>
    )
  }

  const others = () => {
    return (
      <Text>
        An operator registered as a DAO candidate who has staked a minimum of 1,000.1 TON (non-withdrawable).
      </Text>
    )
  }
  
  return (
    <Tooltip
      display={label?.length === 0 ? "none" : "flex"}
      placement={placement ?? "top"}
      pointerEvents={"all"}
      label={
        label === 'member'
          ? members()
          : label === 'propose'
          ? label2
          : others() 
      }
      borderRadius={"3px"}
      color={'#fff'}
      fontSize="12px"
      maxW={label === 'propose' ? '400px' : '230px'}
      px={'10px'}
      py={'6px'}
      bgColor={'#353c48'}
      boxShadow={'0px 4px 4px 0px rgba(0, 0, 0, 0.25)'}
      hasArrow
      whiteSpace={'pre-wrap'}
      isOpen={isLabelOpen}
      border={'0px'}
      
    >
      <QuestionOutlineIcon
        display={label?.length === 0 ? "none" : ""}
        ml={'3px'}
        h={"12px"}
        w={"12px"}
        color={label === 'propose' ? '#86929d' : '#333'}
        onMouseLeave={() => setIsLabelOpen(false)}
        onMouseEnter={() =>  setIsLabelOpen(true)}
        // onClick={() => tooltipControl()}
      />
    </Tooltip>
  );
};

export default BasicTooltip;
