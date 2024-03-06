import type { AppProps } from 'next/app';
import { Box, ChakraProvider, ColorModeScript, Flex, useTheme } from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react';
import { Web3ReactProvider } from '@web3-react/core';
import getLibrary from 'utils/getLibrary';
import theme from 'theme';
import Footer from 'pages/components/layout/Footer';
import { RecoilRoot } from 'recoil';
import Header from 'pages/components/layout/Header';
import Entry from './entry';
import HeadMeta from './Header';
import { useWindowDimensions } from "@/hooks/useWindowDimensions";
import { useRouter } from 'next/router';
import { ApolloProvider } from "@apollo/client";
import { apolloClient } from '../apollo';

function MyApp({ Component, pageProps }: AppProps) {
  const { onOpen, isOpen: isModalOpen, onClose } = useDisclosure();
  const [width] = useWindowDimensions();
  const router = useRouter();
  const { pathname } = router;
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <ApolloProvider client={apolloClient}>
        <ColorModeScript initialColorMode={theme.initialColorMode} />
        <ChakraProvider resetCSS theme={theme}>
          <RecoilRoot>
            <HeadMeta />
            {/* <Flex
              flexDir={'column'}
              justifyContent={'center'}
              alignItems={'center'}
              w={'100%'}
            >
              <Header />
              <Entry Component={Component} {...pageProps} />
              <Footer />
            </Flex> */}
            
            <Box minH={'100vh'} w={'100%'}>
              <Box
                flexDir={"column"}
                w={"100%"}
                alignItems={"center"}
                justifyContent={"space-between"}
                bgColor={pathname === '/home' ? '#0062c2' : '#fafbfc'}
                fontFamily={'roboto'}
                fontStyle={'normal'}
              >
                <Header />
                <Box
                  justifyContent="center"
                  w={"100%"}
                  alignItems="center"
                  px={["12px", "24px", "0px"]}
                >
                  <Box
                    maxW={["100%", "100%", "100%"]}
                    flexDir={"column"}
                    justifyContent="space-between"
                    w={"100%"}
                    minH={"100vh"}
                  >
                    <Entry Component={Component} {...pageProps} />
                    <Footer />
                  </Box>
                </Box>
              </Box>
            </Box>
          </RecoilRoot>
        </ChakraProvider>
      </ApolloProvider>
    </Web3ReactProvider>
  );
}

export default MyApp;
