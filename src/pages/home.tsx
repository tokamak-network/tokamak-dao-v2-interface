import { useWindowDimensions } from "@/hooks/useWindowDimensions";
import { Flex, useTheme } from '@chakra-ui/react';
import Image from "next/image";
import MAIN from '@/assets/images/main-interaction.gif'

// import DesktopHome from "./components/home/DesktopHome";
// import MobileHome from "./components/home/MobileHome";


function Home() {
  const [width] = useWindowDimensions();
  const theme = useTheme()

  return (
    <Flex
      justifyContent={'center'}
      alignItems={'center'}
      flexDir={'column'}
      fontFamily={theme.fonts}
      fontWeight={'normal'}
      fontStretch={'normal'}
      fontStyle={'normal'}
      color={'#fff'}
    >
      <Image
        // w={'840px'}
        // height={'607px'}
        src={MAIN}
        alt=''
      />
      <Flex
        w={'200px'}
        h={'38px'}
        padding={'7px 15px 7px 9px'}
        borderRadius={'25px'}
        boxShadow={'0 0 10px 0 rgba(215, 222, 227, 0.4)'}
        bgColor={'#f6f8f9'}
        position={'relative'}
        top={'-100px'}
        fontSize={'13px'}
        flexDir={'row'}
        justifyContent={'center'}
        alignItems={'center'}
        color="#354052"
      >
        <Flex
          w={'24px'}
          h={'24px'}
          mr={'12px'}
          bgColor={'#2a72e5'}
          borderRadius={'100'}
          color={'#fff'}
          fontWeight={500}
          justifyContent={'center'}
          alignItems={'center'}
        >
          1
        </Flex>
        DAO activities
      </Flex>
      <Flex
        flexDir={'column'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <Flex
          fontSize={'24px'}
          fontWeight={500}
        >
          Recent DAO Activities
        </Flex>

      </Flex>
    </Flex>
   
  );
}

export default Home;
