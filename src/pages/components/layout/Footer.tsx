import { Flex, Text, Image } from '@chakra-ui/react';
import { useWindowDimensions } from '@/hooks/useWindowDimensions';
import MEDIUM_ICON from '@/assets/images/community/medium.png';
import TWITTER_ICON from '@/assets/images/community/twitter.png';
import GITHUB_ICON from '@/assets/images/community/github.png';
import TELEGRAM_ICON from '@/assets/images/community/telegram.png';
import DISCORD_ICON from '@/assets/images/community/discord.png';
import FACEBOOK_ICON from '@/assets/images/community/facebook.png';
// import INSTAGRAM_ICON from '@/assets/images/community/instagram.png';
import YOUTUBE_ICON from '@/assets/images/community/youtube.png';
import LINKEDIN_ICON from '@/assets/images/community/linkedin.png';
import MEDIUM_ICON_WHITE from '@/assets/images/community/medium-m-icon.png';
import TWITTER_ICON_WHITE from '@/assets/images/community/twitter-m-icon.png';
import GITHUB_ICON_WHITE from '@/assets/images/community/github-m-icon.png';
import TELEGRAM_ICON_WHITE from '@/assets/images/community/telegram-m-icon.png';
import DISCORD_ICON_WHITE from '@/assets/images/community/discord-m-icon.png';
import FACEBOOK_ICON_WHITE from '@/assets/images/community/facebook-m-icon.png';
import YOUTUBE_ICON_WHITE from '@/assets/images/community/youtube-m-icon.png';
import LINKEDIN_ICON_WHITE from '@/assets/images/community/linkedin-m-icon.png';
import { useRouter } from 'next/router';


function Footer() {
  const [width] = useWindowDimensions();
  const mobile = width < 1040;
  const router = useRouter();
  const { pathname } = router;
  const iconList = [
    {
      icon: pathname ==='/home' ? TELEGRAM_ICON_WHITE : TELEGRAM_ICON,
      url: 'https://t.me/tokamak_network/',
    },
    {
      icon: pathname ==='/home' ? DISCORD_ICON_WHITE : DISCORD_ICON,
      url: 'https://discord.gg/8wSpJKz',
    },
    {
      icon: pathname ==='/home' ? GITHUB_ICON_WHITE : GITHUB_ICON,
      url: 'https://github.com/tokamak-network/',
    },
    // {
    //   icon: pathname ==='/home' ? FACEBOOK_ICON_WHITE : FACEBOOK_ICON,
    //   url: 'https://www.facebook.com/OntherInc/',
    // },
    // {
    //   icon: INSTAGRAM_ICON,
    //   url: '',
    // },
    // {
    //   icon: pathname ==='/home' ? YOUTUBE_ICON_WHITE : YOUTUBE_ICON,
    //   url: 'https://www.youtube.com/channel/UCF6vtIKF_0QQVRG983czVEQ/',
    // },
    {
      icon: pathname ==='/home' ? TWITTER_ICON_WHITE : TWITTER_ICON,
      url: 'https://twitter.com/tokamak_network/',
    },
    {
      icon: pathname ==='/home' ? LINKEDIN_ICON_WHITE : LINKEDIN_ICON,
      url: 'https://www.linkedin.com/company/tokamaknetwork/',
    },
    {
      icon: pathname ==='/home' ? MEDIUM_ICON_WHITE : MEDIUM_ICON,
      url: 'https://medium.com/onther-tech/',
    },
  ];
  return (
    <Flex w={'100%'} px={'50px'} flexDir="column" h={'76px'} justifyContent={'center'}>
      <Flex
        fontSize={12}
        color={pathname ==='/home' ? '#fff' : 'gray.700'}
        flexDir={mobile ? 'column-reverse' : 'row'}
        justifyContent={'space-between'}
        pb={'25px'}
        rowGap={mobile ? '15px' : 0}
        bgColor={pathname ==='/home' ? '#0062c2' : ''}
      >
        <Flex h={'17px'} justifyContent={'space-between'}>
          <Text color={pathname ==='/home' ? '#fff' : 'black.100'} fontWeight={'bold'} mr={'25px'}>
            TOKAMAK NETWORK PTE.LTD
          </Text>
          <Text mr={'25px'}>111 SOMERSET ROAD #06-07O 111 SOMERSET SINGAPORE 238164</Text>
          <Flex>
            <Text>hello@tokamak.network</Text>
          </Flex>
        </Flex>

        <Flex h={'17px'} justifyContent={mobile ? 'center' : 'flex-end'}>
          {iconList.map((item, index) => {
            return (
              <Flex
                w={'20px'}
                h={'20px'}
                alignItems="center"
                justifyContent={'center'}
                borderRadius={10}
                _hover={{ backgroundColor: 'gray.900' }}
                key={`link-container-${index}`}
                mb={'10px'}
                mr={'15px'}
                cursor={'pointer'}
              >
                <Image src={item.icon.src} alt={'icon'}></Image>
              </Flex>
            );
          })}
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Footer;
