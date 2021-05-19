import { State } from './state';

export default {
  setToken(state: State, status: string) {
    state._token = status;
  },
  removeToken(state: State) {
    state._token = '';
  },
  setUserInfo(state: State, status: any) {
    state.userInfo = status;
  },
  setColorSetting(state: State, status: any) {
    state.colorSetting = status;
  },
  setClasshidden(state: State, status: any) {
    state.Classhidden = status;
  },
  
  setNotice(state: State, status: boolean) {
    state.showNotice = status;
  },
  setLottoryInfo(state: State, status: boolean) {
    state.lottoryInfo = status;
  },
  setHeaderPage(state: State, status: any) {
    state.headerPage = status;
  },
  setHeaderSubPage(state: State, status: any) {
    state.headerSubPage = status;
  },
  setLangauge(state: State, status: any) {
    state.locale = status
    localStorage.setItem('locale', status);
  },
};
