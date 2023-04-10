import { Box, Button, Flex, Text, useColorMode } from "@chakra-ui/react";
import { ChevronRightIcon, ChevronLeftIcon } from "@chakra-ui/icons";
import { SetStateAction } from "react";

function NextButton(props: {
  setCurrentPage?: any;
  currentPage?: number;
  pageSize?: number;
  title: string;
}) {
  const { currentPage, setCurrentPage, pageSize, title } = props;
  // const isDisabled = currentPage + 1 > pageSize;

  return (
    <Button
      minW={"141px"}
      h={"32px"}
      border={ "1px solid #dfe4ee"}
      borderRadius={'4px'}
      backgroundColor={"#fff"}
      alignItems={"center"}
      justifyContent={"center"}
      padding={'8px 15px'}
      cursor={"pointer"}
      color={ "#86929d"}
      fontSize={'12px'}
      fontWeight={'normal'}
      ml={title === 'NEXT CANDIDATE' ? '10px' : ''}
      // _hover={isDisabled ? {} : { color: "#257eee", borderColor: "#257eee" }}
      _disabled={{
        color: "#c6cbd9",
        borderColor: "#e8edf2",
      }}
      _active={{bg:'transparent'}}
      // isDisabled={isDisabled}
      // onClick={() => setCurrentPage(currentPage + 1)}
    >
      {title === 'NEXT CANDIDATE' ? '' : <ChevronLeftIcon width={'18px'} height={'18px'} color={'#86929d'} />}
      <Text fontSize={12}>
        {title}
      </Text>
      {title === 'NEXT CANDIDATE' ? <ChevronRightIcon width={'18px'} height={'18px'} color={'#86929d'} /> : ''}
    </Button>
  );
}

export default NextButton;
