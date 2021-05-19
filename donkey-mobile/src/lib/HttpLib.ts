import axios, { Method } from 'axios'
axios.defaults.withCredentials = true;
export class HttpLib {
	public AppID = ''
	public AppKey = ''
	public Service = ''

	public constructor(AppID: string, AppKey: string, Service: string) {
		this.AppID = AppID
		this.AppKey = AppKey
		this.Service = Service
	}

	public async GetContent(
		url: string,
		data: {}={},
		method: Method = 'get'
	): Promise<any> {
		let Content = ''
		await axios({
			headers: {
				'Content-Type':'application/x-www-form-urlencoded',
			},
			method: method,
			withCredentials:true,
			url: this.Service + url,
			params: data,
			data: data,
		}).then((r: any) => {
			Content = r.data
		})
		return Content
	}
}
