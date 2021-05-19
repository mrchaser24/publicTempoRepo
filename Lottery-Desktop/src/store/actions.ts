import { ActionTree } from 'vuex';

import { login } from '@/api/user';
import { searchLottoryInfo } from '../api/lottoryInfo';

const actions: ActionTree<any, any> = {
  setToken({ commit }: any, payload: any) {
    commit('setToken', payload)
  },
  removeToken({ commit }: any) {
    commit('removeToken')
  },
  setUserInfo({ commit }: any, payload: any) {
    commit('setUserInfo', payload)
  },
  setColorSetting({ commit }: any, payload: any) {
    commit('setColorSetting', payload)
  },
  setClasshidden({ commit }: any, payload: any) {
    commit('setClasshidden', payload)
  },
  
  setNotice({ commit }: any, payload: any) {
    commit('setNotice', payload)
  },
  setHeaderSubPage({ commit }: any, payload: any) {
    commit('setHeaderSubPage', payload)
  },
  setHeaderPage({ commit }: any, payload: any) {
    commit('setHeaderPage', payload)
  },
  setLangauge({commit}, payload) {
    commit('setLangauge', payload)
  },
  async sendSearchLottoryInfo({ state, commit }, data) {
    await searchLottoryInfo()
      .then(res => {
          if(res.status == 200){
              let data = res.data
              console.log(data);
              commit('setLottoryInfo', data);
          }
      })
      .catch((e: string) => console.error(e));
  },
  
      
  // 发起登录
  // async login({ state, commit }, data) {
  //   const res: Ajax.AjaxResponse = await login(data)
  //     .then(res => res.data)
  //     .catch((e: string) => console.error(e));
  //   if (res) {
  //     commit('loginSuccess', res);
  //   }
  // },

  // // 数据同步
  // async sync({ state, commit }, data) {
  //   const res: Ajax.AjaxResponse = await sync(data)
  //     .then(res => res.data)
  //     .catch((e: string) => console.error(e));
  //   if (res) {
  //     commit('sync', 1);
  //   }
  // },
};

export default actions;
