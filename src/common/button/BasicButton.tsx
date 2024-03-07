import { Box, Button, Tooltip, useColorMode, useTheme } from "@chakra-ui/react";
// import Image from "next/image";
// import { useCallback, useMemo } from "react";
// import QuestionIcon from "assets/icons/question.svg";
// import BasicTooltip from "common/tooltip/index";

// type ButtonIconNames = "Question" | undefined;
type BasicButtonProp = {
  name: string;
  w?: number | string | string[];
  maxW?: number | string | number[] | string[];
  minW?: number | string | number[] | string[];
  h?: number | string;
  isDisabled?: boolean;
  style?: any;
  onClick?: () => void;
  tooltip?: string;
  isLoading?: boolean;
  type: 'a' | 'b' | 'normal' | 'inactive' | 'vote';
  fontSize?: string
};

const BasicButton: React.FC<BasicButtonProp> = (props) => {
  const {
    name,
    w,
    maxW,
    minW,
    h,
    isDisabled,
    style,
    onClick,
    tooltip,
    isLoading,
    type,
    fontSize
  } = props;
  
  return (
    <Button
      w={w || 110}
      maxW={maxW || w}
      minW={minW || w}
      h={h || '32px'}
      isDisabled={isDisabled}
      borderRadius={'4px'}
      _hover={isDisabled ? {} : 
         type === 'normal'
        ? '#2a72e5'
        : type === 'inactive'
        ? '#3e495c' : '#ccc'
      }
      _focus={{ backgroundColor: "transparent" }}
      // _disabled={{
      //   border: "1px solid #c6cbd9",
      //   color:  "#c6cbd9",
      //   cursor: "not-allowed",
      // }}
      // _active={{ backgroundColor: "transparent" }}
      fontSize={fontSize ? fontSize : 13}
      fontWeight={'normal'}
      isLoading={isLoading}
      // {...theme.BUTTON_STYLE.basicButtonStyle(colorMode)}
      boxShadow={
        type === 'a' 
        ? '0 3px 8px 0 rgba(49, 127, 203, 0.25)'
        : type === 'b' 
        ? '0 3px 8px 0 rgba(247, 152, 28, 0.15)'
        : ''
      }
      color={
        type === 'inactive' 
        ? '#86929d' 
        : type === 'vote'
        ? '#2a72e5'
        : "#fff"
      }
      border={
        type === 'vote'
        ? 'solid 1px #2a72e5'
        : type === 'inactive'
        ? 'solid 1px #dfe4ee'
        : ''
      }
      borderColor={
        type === 'inactive' 
        ? '#dfe4ee' 
        : type === 'vote'
        ? '#2a72e5'
        : 'none'
      }
      background={
        type === 'a' 
        ? 'linear-gradient(to bottom, #1f8efa, #2a72e5)'
        : type === 'b' 
        ? 'linear-gradient(to bottom, #f7981c, #ff7800)'
        : type === 'normal'
        ? '#257eee'
        : type === 'inactive'
        ? '#fff'
        : type === 'vote'
        ? '#fff'
        : ''
      }
      {...style}
      //   background={"white.100"}
      onClick={onClick ? () => onClick() : null}
      zIndex={10}
    >
      <Box mx={"6px"}>{name}</Box>
    </Button>
  );
};

export default BasicButton;
