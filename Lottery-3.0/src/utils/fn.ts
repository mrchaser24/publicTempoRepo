import CryptoJS from "crypto-js";

export const myFn = {
  /*
    * @Author: keanu 
    * @LastAuthor: null
    * @Param: null
    * @Return: null
    * @Date: 2021-04-16 16:39:45
    * @Description: format number converts into decimal
  */
  formatDecimal(num: any, dec = 2) {
    return (Math.round(Number(num) * 100) / 100).toFixed(dec);
  },
  /*
    * @Author: keanu 
    * @LastAuthor: keanu
    * @Param: [userID: any, username: any, password: any,expDate: any]
    * @Return: null
    * @Date: 2021-04-16 16:22:12
    * @Description: set cookies
  */
  setCookie(userID: any, userName: any, password: any, expDate: any) {
    var exdate: any = new Date();
    exdate.setTime(exdate.getTime() + 24 * 60 * 60 * 1000 * expDate);
    var encPassword = CryptoJS.AES.encrypt(password, "secretkey");
    window.document.cookie =
      "userID" + "=" + userID + ";path=/;expires=" + exdate.toGMTString();
    window.document.cookie =
      "userName" + "=" + userName + ";path=/;expires=" + exdate.toGMTString();
    window.document.cookie =
      "password" + "=" + encPassword + ";path=/;expires=" + exdate.toGMTString();
  },
  /*
    * @Author: keanu 
    * @LastAuthor: keanu
    * @Param: null
    * @Return: null
    * @Date: 2021-04-16 16:39:45
    * @Description: clear cookies
  */
  clearCookie() {
    myFn.setCookie("", "", "", -1);
  },
  /*
    * @Author: keanu 
    * @LastAuthor: keanu
    * @Param: null
    * @Return: null
    * @Date: 2021-04-16 16:39:45
    * @Description: get cookies
  */
  getCookie() {
    if (document.cookie.length > 0) {
      var arr = document.cookie.split("; ");
      var userid = arr[0].split("=")[1];
      var username = arr[1].split("=")[1];
      var password = arr[2].split("=")[1];
      var bytes = CryptoJS.AES.decrypt(password.toString(), "secretkey");
      var passwordPlaintext = bytes.toString(CryptoJS.enc.Utf8);
      return {
        userid: userid,
        username: username,
        password: passwordPlaintext,
      };
    }
  }
};