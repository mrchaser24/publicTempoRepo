import { GetterTree } from 'vuex';

const getters: GetterTree<any, any> = {
  syncData(state) {
    const { _token, userInfo, showNotice,lottoryInfo,colorSetting,Classhidden,headerPage,headerSubPage } = state;
    return {
      _token,
      userInfo,
      showNotice,
      lottoryInfo,
      colorSetting,
      Classhidden,
      headerPage,
      headerSubPage,
    };
  },
};

export default getters;
