import { atom, selector } from "recoil";
import { v1 } from 'uuid';

const candidateState = atom({
  key: `candidateState/${v1()}`,
  default: [],
});

const candidatesState = selector({
  key: `candidatesState/${v1()}`, // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const candidatesStates = get(candidateState);
    return candidatesStates;
  },
});

const memberState = atom({
  key: `memberState/${v1()}`,
  default: [],
});

const membersState = selector({
  key: `membersState/${v1()}`, // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const membersStates = get(memberState);
    return membersStates;
  },
});

const nonMemberState = atom({
  key: `nonMemberState/${v1()}`,
  default: [],
});

const nonMembersState = selector({
  key: `nonMembersState/${v1()}`, // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const nonMembersStates = get(nonMemberState);
    return nonMembersStates;
  },
});

export { candidateState, candidatesState, memberState, membersState, nonMemberState, nonMembersState };
