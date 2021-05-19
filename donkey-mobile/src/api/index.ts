import Vue from 'vue';
import Application from "@/lib/Application"
import axios, { Method } from 'axios'
export default class Apis {
    private _token: string = ''
    constructor(vue: typeof Vue) {
        this._token = localStorage.getItem('_token') || ''
        if (this._token == 'undefined') {
            this._token = ''
        }
        axios.interceptors.request.use();
        // http response 拦截器
        axios.interceptors.response.use(
            response => {
                // console.log(response)
                return response;
            },
            error => {
                return Promise.reject(error.response.data)
            }
        );
    }
    //=========================================

    private Login(params: any, method: Method = 'get') {
        return this.doRequest('UserService/User/User/UserLogin.action', params, method)
    }

    public MemberInfo(params: any, method: Method = 'get') {
        return this.doRequest('UserService/User/User/getMember.action', params, method)
    }

    public UpdateMemberInfo(params: any, method: Method = 'get') {
        return this.doRequest('UserService/User/member_info/Update.action', params, method)
    }

    private appCategory(params: any, method: Method = 'get') {
        return this.doRequest('UserService/App/app_category/Search.action', params, method)
    }

    //专辑
    public GetTheme(params: any, method: Method = 'get') {
        return this.doRequest('UserService/App/app_theme/Search.action', params, method)
    }
    //视频分类
    public Category(params: any, method: Method = 'get') {
        return this.doRequest('UserService/App/app_category/Search.action', params, method)
    }
    //广告
    public AppAdv(params: any, method: Method = 'get') {
        return this.doRequest('UserService/App/app_adv/Search.action', params, method)
    }
    //视频获取
    public AppMovie(params: any, method: Method = 'get') {
        return this.doRequest('UserService/App/app_movie/Search.action', params, method)
    }
    //是否点赞
    public IsLike(params: any, method: Method = 'get') {
        return this.doRequest('UserService/User/member_like/Search.action', params, method)
    }
    //赞踩
    public MemberLikeDown(params: any, method: Method = 'get') {
        return this.doRequest('UserService/User/member_movie_up_down/Insert.action', params, method)
    }

    //视频标签
    public VideoTag(params: any, method: Method = 'get') {
        return this.doRequest('UserService/App/app_tag/Search.action', params, method)
    }
    //视频页
    public VideoPlay(params: any, method: Method = 'get') {
        return this.doRequest('UserService/Movie/play.action', params, method)
    }
    //缓存
    public MemberCache(params: any, method: Method = 'get') {
        return this.doRequest('UserService/User/member_cache/Insert.action', params, method)
    }

    //点赞
    public AddLike(params: any, method: Method = 'get') {
        return this.doRequest('UserService/User/member_like/Insert.action', params, method)
    }
    // 获取评论
    public GetComment(params: any, method: Method = 'get') {
        return this.doRequest('UserService/Movie/comment.action', params, method)
    }
    //发送评论
    public AddComment(params: any, method: Method = 'get') {
        return this.doRequest('UserService/User/member_comment/Insert.action', params, method)
    }
    public MovieList(params: any, method: Method = 'get') {
        return this.doRequest('UserService/Movie/search.action', params, method)
    }
    public GetPromo(params: any, method: Method = 'get') {
        return this.doRequest('UserService/User/get_promo.action', params, method)
    }

    public GurssLike(params: any, method: Method = 'get') {
        return this.doRequest('UserService/Movie/guess_like.action', params, method)
    }

    private appMovie(params: any, method: Method = 'get') {
        return this.doRequest('UserService/App/app_movie/Search.action', params, method)
    }

    private userLoginOut(params: any, method: Method = 'get') {
        return this.doRequest('UserService/User/User/UserLoginOut.action', params, method)
    }

    private userRegister(params: any, method: Method = 'get') {
        return this.doRequest('UserService/User/User/UserRegister.action', params, method)
    }

    private userLogin(params: any, method: Method = 'get') {
        return this.doRequest('UserService/User/User/UserLogin.action', params, method)
    }

    private historyData(params: any, method: Method = 'get') {
        return this.doRequest('UserService/User/member_history/Search.action', params, method)
    }

    private FavoritesData(params: any, method: Method = 'get') {
        return this.doRequest('UserService/User/member_like/Search.action', params, method)
    }
    
    private Feedback(params: any, method: Method = 'get') {
        return this.doRequest('UserService/User/member_feedback/Insert.action', params, method)
    }
    
    //修改密码
    private changePassword(params: any, method: Method = 'get') {
        return this.doRequest('UserService/User/UserInfo/UpdatePass.action', params, method)
    }

    //=========================================
    private deleteToken() {
        this._token = ''
        localStorage.removeItem('_token')
    }

    private async changeToken() {

        if (this._token != "") {
            return;
        }
        let data = await Application.Service.GetContent('token', {})
        if (data.state == 0) {
            this._token = data.client
            localStorage.setItem('_token', data.client)
        }
    }

    private doRequest(url: string, params: any, method: Method = 'get') {
        params._token = this._token
        return Application.Service.GetContent(url, params, method)
    }


    private format(shijianchuo: string) {
        let num = parseInt(shijianchuo) *1000
        function add0(m: any) { return m < 10 ? '0' + m : m }
        //shijianchuo是整数，否则要parseInt转换
        var time = new Date(num);
        var y = time.getFullYear();
        var m = time.getMonth() + 1;
        var d = time.getDate();
        var h = time.getHours();
        var mm = time.getMinutes();
        var s = time.getSeconds();
        return y + '-' + add0(m) + '-' + add0(d) + ' ' + add0(h) + ':' + add0(mm) + ':' + add0(s);
    }
}