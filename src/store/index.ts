import { createStore } from 'vuex';
import menu from '@/store/menu';

export interface State {
  count: 0;
}

export default createStore<State>({
  modules: {
    menu,
  },
});
