import { getData, postData } from './index';

export const searchLottoryInfo = () => {
  return getData('UserService/Lottory/LottoryInfo/Search.action', {});
};

export const searchLottoryPlaying = (data:any) => {
  return getData('UserService/Lottory/LottoryPlaying/Search.action', data);
};

export const searchLottoryPlayingOdd = (data:any) => {
  return getData('UserService/Lottory/LottoryPlayingOdd/Search.action', data);
};
export const searchLottoryChangLong = (data:any) => {
  return getData('/LottroryService/Lottrory/getChangLong.action', data);
};
export const searchResultPanel = (data:any) => {
  return getData('/LottroryService/Lottrory/getResultPanel.action', data);
};

export const getLottoryResult = (data:any) => {
  return getData('/LottroryService/Lottrory/getLottoryResult.action', data);
};

export const DoBet = (data:any) =>{
  return getData('/UserService/BetControl/DoBet.action', data);
}

