import { InputGroup, useColorMode, NumberInput, Text, NumberInputField, Button, Flex, useTheme, Input, Textarea } from '@chakra-ui/react';
import { inputState } from '@/atom/global/input';
import React from 'react';
import { useRecoilState } from 'recoil';
import { floatParser } from '@/components/number';
import useProposeInput from '../../hooks/propose/useProposeInput';

type InputProp = {
  placeHolder?: string;
  w?: number | string;
  h?: number | string;
  // isDisabled?: boolean;
  value?: string | number;
  isError?: boolean;
  maxValue?: any;
  type?: string;
  index: number | 'description'
  atomKey: string;
  
};

const addComma = (inputVal: any) => {
  const _val = inputVal;
  const checkInputVal = () => {
    if (_val) {
      const floatLen = _val.split('.')[1]?.length;
      if (floatLen) {
        return floatLen > 18 ? _val.slice(0, -1) : _val;
      }
      if (_val.split('.').length > 2) {
        return;
      }
      if (_val.split('.')[0]?.length > 1 && _val.split('.')[0]?.substring(0, 1) === '0') {
        return _val.split('.')[0].substring(1);
      }
      if (_val === '.') {
        return _val;
      } else {
        return _val.replace(/[^0-9a-zA-Z.]/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      }
    }
    return '';
  };

  return checkInputVal();
};

function TextInput(props: InputProp) {
  const { placeHolder, h, isError, index, type, w, atomKey } = props;
  // const [value, setValue] = useRecoilState(inputState);
  const {inputValue, value, setValue} = useProposeInput(index)
  const theme = useTheme()
  const {INPUT_STYLE} = theme

  const onChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { target } = event;
    const { value } = target;
    return setValue(value);
  }
  
  return (
    <>
    {
      type === 'description' ?
      <Textarea 
        isInvalid={isError}
        w={'736px'}
        h={'139px'}
        placeholder={placeHolder}
        _placeholder={{
          color: '#86929d',
          fontSize: '13px'
        }}
        border={'1px solid #dfe4ee'}
        borderRadius={'4px'}
        value={value}
        onChange={onChange}
      /> :
      <Input
        isInvalid={isError}
        w={'736px'}
        h={'32px'}
        // focusBorderColor={'#fff'}
        placeholder={placeHolder}
        _placeholder={{
          color: '#86929d',
          fontSize: '13px'
        }}
        border={type === 'description' ? 'none' : '1px solid #dfe4ee'}
        borderRadius={'4px'}
        value={value}
        onChange={onChange}
      />
    }
    </>
  )
}

function BalanceInput(props: InputProp) {
  const { placeHolder, h, isError, maxValue, type, w } = props;
  const { colorMode } = useColorMode();
  const [value, setValue] = useRecoilState(inputState);
  const theme = useTheme()
  const {INPUT_STYLE} = theme
  
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    const { value: inputValue } = target;
    setValue(addComma(inputValue));
  };
  
  return (
    <InputGroup >
      <NumberInput
        isInvalid={isError}
        w={w}
        h={h || 45}
        focusBorderColor={'#fff'}
        border={type === 'staking' ? 'none' : '1px solid #dfe4ee'}
        borderRadius={'4px'}
        value={addComma(value)}
        ml={type==='staking' ? '65px' : ''}
      >
        <Flex flexDir={type === 'staking' ? 'column' : 'row'} alignItems={'center'}>
          <NumberInputField
            {...(type === 'staking' ? {...INPUT_STYLE.inputStaking()}: {...INPUT_STYLE.inputCalc()})}
            placeholder={placeHolder}
            onChange={onChange}
          /> 
          {type === 'staking' ? 
            <Flex 
              w={5} 
              h={2} 
              borderBottom={value==='' ? 'solid 2px #2a72e5' : ''}
              animation={'blink'}
            />
            : 
            <Text
              fontSize={'13px'}
              fontWeight={'normal'}
              mr={'10px'}
              ml={'7px'}
              mt={'1px'}
            >
              TON
            </Text>
          }
        </Flex>
      </NumberInput>
      <Button
        zIndex={100}
        {...(type === 'staking' ? {...INPUT_STYLE.maxStaking()}: {...INPUT_STYLE.maxCalc()})}
        onClick={() => {
          setValue(String(maxValue));
        }}>
        Max
      </Button>
    </InputGroup>
  );
}

export { BalanceInput, TextInput }
