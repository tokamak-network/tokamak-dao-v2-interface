import { atom, selector } from "recoil";
import { v1 } from 'uuid';

const propose_param1_input = atom({
  key: `propose_param1_input/${v1()}`,
  default: '',
});

const propose_param1_state = selector({
  key: `propose_param1_state/${v1()}`, // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const propose_param1_state = get(propose_param1_input);
    return propose_param1_state;
  },
});

const propose_param2_input = atom({
  key: `propose_param2_input/${v1()}`,
  default: '',
});

const propose_param2_state = selector({
  key: `propose_param2_state/${v1()}`, // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const propose_param2_state = get(propose_param2_input);
    return propose_param2_state;
  },
});

const propose_param3_input = atom({
  key: `propose_param3_input/${v1()}`,
  default: '',
});

const propose_param3_state = selector({
  key: `propose_param3_state/${v1()}`, // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const propose_param3_state = get(propose_param3_input);
    return propose_param3_state;
  },
});

const propose_description_input = atom({
  key: `propose_description_input/${v1()}`,
  default: '',
});

const propose_description_state = selector({
  key: `propose_description_state/${v1()}`, // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const propose_description_state = get(propose_description_input);
    return propose_description_state;
  },
});

export {
  propose_param1_input,
  propose_param1_state,
  propose_param2_input,
  propose_param2_state,
  propose_param3_input,
  propose_param3_state,
  propose_description_input,
  propose_description_state
};
