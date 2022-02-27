import { createMachine, assign } from 'xstate';

export interface ToggleContext {
  count: number;
}

export const toggleMachine = createMachine<ToggleContext>({
  id: 'toggle',
  initial: 'inactive',
  context: {
    count: 0
  },
  states: {
    inactive: {
      entry: assign({ count: (ctx) => ctx.count - 0 }),
      on: { TOGGLE: 'active' }
    },
    active: {
      entry: assign({ count: (ctx) => ctx.count + 1 }),
      on: { TOGGLE: 'inactive' }
    }
  }
});
