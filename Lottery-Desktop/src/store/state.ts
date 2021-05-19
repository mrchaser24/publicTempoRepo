export interface UserState {
  // username: string | undefined;
  // id: number | null;
  // createdTime: string | undefined;
  // url: string;
  // isLogin: number;
  // isSync: number;
}

export interface State {
  _token: string;
  userInfo: any;
  showNotice: Boolean;
  lottoryInfo: any;
  colorSetting:string;
  Classhidden:Boolean;
  headerPage:any;
  headerSubPage:any;
  locale:any;
}

// 初始状态
const state: State = {
  _token: "",
  userInfo: { item: localStorage.getItem('UserInfo') ? JSON.parse(localStorage.getItem('UserInfo') as any) : {} },
  showNotice: true,
  lottoryInfo: {},
  colorSetting:"blue",
  headerPage:null,
  headerSubPage:null,
  Classhidden:false,
  locale: localStorage.getItem('locale') ? localStorage.getItem('locale') : 'zh', // current language color `zh`
};

export default state;
