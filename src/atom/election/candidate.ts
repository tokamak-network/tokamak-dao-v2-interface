import { atom, selector } from "recoil";
import { v1 } from 'uuid';

const candidateState = atom({
  key: `candidateState/${v1()}`,
  default: {},
});

const candidatesState = selector({
  key: `candidatesState/${v1()}`, // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const candidatesStates = get(candidateState);
    return candidatesStates;
  },
});

export { candidateState, candidatesState };
