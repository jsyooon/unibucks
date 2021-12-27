import { Module } from 'vuex';
import { State } from '@/store';

interface MenuState {
  beverageType: string;
}

const module: Module<MenuState, State> = {
  state: () => ({
    beverageType: '',
  }),
};

export default module;
