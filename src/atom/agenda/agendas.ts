import { atom, selector } from "recoil";
import { v1 } from 'uuid';

const agendaState = atom({
  key: `agendaState/${v1()}`,
  default: [],
});

const agendasState = selector({
  key: `agendasState/${v1()}`, // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const agendasStates = get(agendaState);
    return agendasStates;
  },
});

export { agendaState, agendasState };
