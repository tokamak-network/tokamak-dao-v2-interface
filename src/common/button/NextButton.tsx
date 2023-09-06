import { Box, Button, Flex, Text, useColorMode } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { SetStateAction } from "react";
import NEXT_ICON from '@/assets/images/arrow-pagination-right.png'
import PREV_ICON from '@/assets/images/arrow-pagination-left.png'
import Image from "next/image";

function NextButton(props: {
  // setCurrentPage: React.Dispatch<SetStateAction<number>>;
  setCurrentPage?: any;
  currentPage: number;
  pageSize: number;
  name: string;
  type: string
}) {
  const { currentPage, setCurrentPage, pageSize, name, type } = props;
  const { colorMode } = useColorMode();
  const isDisabled = currentPage + 1 > pageSize;

  return (
    <Button
      // w={"82px"}
      h={"32px"}
      border={'solid 1px #dfe4ee'}
      borderRadius={'4px'}
      bgColor={'#fff'}
      p={'8px 15px'}
      alignItems={"center"}
      justifyContent={"center"}
      flexDir={type === 'next' ? 'row' :'row-reverse'}
      cursor={"pointer"}
      color={'#86929d'}
      _hover={isDisabled ? {} : { color: "#257eee", borderColor: "#257eee" }}
      _disabled={{
        color: colorMode === "dark" ? "#2c2c35" : "#c6cbd9",
        borderColor: colorMode === "dark" ? "#2c2c35" : "#e8edf2",
      }}
      _active={{bg:'transparent'}}
      isDisabled={isDisabled}
      onClick={() => setCurrentPage(currentPage + 1)}
    >
      <Text mr={"9px"} fontSize={12}>
        {name}
      </Text>
      <Flex w={'8px'} mr={'6px'}>
        <Image src={type === 'next' ? NEXT_ICON : PREV_ICON} alt=''/>
      </Flex>
    </Button>
  );
}

export default NextButton;
