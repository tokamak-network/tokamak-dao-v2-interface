import { vote_description_input, vote_description_state, vote_param1_input, vote_param1_state } from "@/atom/agenda/input";
import { useEffect } from "react";
import { Resetter, SetterOrUpdater, useRecoilState, useRecoilValue, useResetRecoilState } from "recoil";
import { PageKey } from "types";

function useVoteInput<T>(
  key: PageKey,
): {
  inputValue: T | any;
  value: any | any;
  setValue: SetterOrUpdater<any> | any;
  setResetValue: Resetter | any;
} {

  const vote_praram1_inputValues = useRecoilValue(vote_param1_state);
  const [param1Value, setParam1Value] = useRecoilState(
    vote_param1_input
  );
  const resetVoteParam1Value = useResetRecoilState(vote_param1_input);


  const vote_description_inputValues = useRecoilValue(vote_description_state);
  const [descriptionValue, setDescriptionValue] = useRecoilState(
    vote_description_input
  );
  const resetDescriptionValue = useResetRecoilState(vote_description_input);

  switch (key) {
    case 0:
      return {
        inputValue: vote_praram1_inputValues,
        value: param1Value,
        setValue: setParam1Value,
        setResetValue: resetVoteParam1Value,
      };
    case 'description':
      return {
        inputValue: vote_description_inputValues,
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

export default useVoteInput;
