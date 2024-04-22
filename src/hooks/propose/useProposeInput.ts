import { propose_description_input, propose_description_state, propose_param1_input, propose_param1_state, propose_param2_input, propose_param2_state, propose_param3_input, propose_param3_state } from "@/atom/propose/input";
import { useEffect } from "react";
import { Resetter, SetterOrUpdater, useRecoilState, useRecoilValue, useResetRecoilState } from "recoil";
import { PageKey } from "types";
import { InputKey } from "types/atom";
// import useModal from "./useModal";

function useProposeInput<T>(
  key: PageKey,
): {
  inputValue: T | any;
  value: any | any;
  setValue: SetterOrUpdater<any> | any;
  setResetValue: Resetter | any;
} {

  const propose_praram1_inputValues = useRecoilValue(propose_param1_state);
  const [param1Value, setParam1Value] = useRecoilState(
    propose_param1_input
  );
  const resetProposeParam1Value = useResetRecoilState(propose_param1_input);

  const propose_praram2_inputValues = useRecoilValue(propose_param2_state);
  const [param2Value, setParam2Value] = useRecoilState(
    propose_param2_input
  );
  const resetProposeParam2Value = useResetRecoilState(propose_param2_input);

  const propose_praram3_inputValues = useRecoilValue(propose_param3_state);
  const [param3Value, setParam3Value] = useRecoilState(
    propose_param3_input
  );
  const resetProposeParam3Value = useResetRecoilState(propose_param3_input);

  const propose_description_inputValues = useRecoilValue(propose_description_state);
  const [descriptionValue, setDescriptionValue] = useRecoilState(
    propose_description_input
  );
  const resetDescriptionValue = useResetRecoilState(propose_description_input);

  switch (key) {
    case 0:
      return {
        inputValue: propose_praram1_inputValues,
        value: param1Value,
        setValue: setParam1Value,
        setResetValue: resetProposeParam1Value,
      };
    case 1:
      return {
        inputValue: propose_praram2_inputValues,
        value: param2Value,
        setValue: setParam2Value,
        setResetValue: resetProposeParam2Value,
      };
    case 2:
      return {
        inputValue: propose_praram3_inputValues,
        value: param3Value,
        setValue: setParam3Value,
        setResetValue: resetProposeParam3Value,
      };
    case 'description':
      return {
        inputValue: propose_description_inputValues,
        value: descriptionValue,
        setValue: setDescriptionValue,
        setResetValue: resetDescriptionValue,
      };
    default:
      return {
        inputValue: undefined,
        value: undefined,
        setValue: undefined,
        setResetValue: undefined,
      };
  }
}

export default useProposeInput;
