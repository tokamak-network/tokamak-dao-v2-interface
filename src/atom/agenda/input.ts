import { atom, selector } from "recoil";
import { v1 } from 'uuid';

const vote_param1_input = atom({
  key: `vote_param1_input/${v1()}`,
  default: '',
});

const vote_param1_state = selector({
  key: `vote_param1_state/${v1()}`, // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const vote_param1_state = get(vote_param1_input);
    return vote_param1_state;
  },
});

const vote_description_input = atom({
  key: `vote_description_input/${v1()}`,
  default: '',
});

const vote_description_state = selector({
  key: `vote_description_state/${v1()}`, // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const vote_description_state = get(vote_description_input);
    return vote_description_state;
  },
});

export {
  vote_param1_input,
  vote_param1_state,
  vote_description_input,
  vote_description_state
};
