import { Flex, Select, Menu, MenuButton, MenuList,Text } from "@chakra-ui/react"
import Image from "next/image"
import arrow from "assets/images/select-1-arrow-inactive.svg";
import { useState, useEffect } from "react";

type AgendaFilterProps = {
  placeholder: string
  options: any[]
  width: string
  selectOptions: any
}

export const AgendaFilter = (args: AgendaFilterProps) => {
  const {
    placeholder,
    options,
    width,
    selectOptions
  } = args
  const [menuState, setMenuState] = useState(false);
  const handleMenuButtonhover = (event: any) => {
    event.preventDefault();
    setMenuState(true);
  };
  useEffect(() => {
    setMenuState(false);
  }, [placeholder])

  const handleMenuButtonClick = (event: any) => {
    event.preventDefault();

    !menuState && setMenuState(!menuState);
  };
  return (
    <Menu>
      <MenuButton 
        h={'32px'}
        p={'7px 13px 7px 15px'}
        boxShadow={'0 2px 4px 0 rgba(96, 97, 112, 0.14)'}
        bgColor={'#fff'}
        color={'#86929d'}
        fontSize={'13px'}
        borderRadius={'4px'}
        placeholder={placeholder}
        // onClick={handleMenuButtonClick}
        w={width}
        mr={'15px'}
      >
        <Flex alignItems={'center'} justifyContent={'space-between'}>
          <Text>{placeholder}</Text>
          <Flex
            marginLeft={"4px"}
            height={"24px"}
            transform={menuState === true ? "rotate(180deg)" : ""}
          >
            <Image src={arrow} alt="icon_arrow" />
          </Flex>
        </Flex>
      </MenuButton>
      <MenuList
        onClick={() => setMenuState(false)}
        color={'#86929d'}
        boxShadow={'0 2px 4px 0 rgba(96, 97, 112, 0.14)'}
        fontSize={'13px'}
        p={'7px 13px 7px 15px'}
        minWidth={width}
        maxWidth={width}
      >
        {options.map((option: any) => {
          return (
            <Flex
              mb={'6px'}
              mt={'4px'}
              w={width}
              cursor={'pointer'}
              onClick={() => selectOptions(option)}
            >
              {option}
            </Flex>
          )
        })}
      </MenuList>
    </Menu>
  )
}