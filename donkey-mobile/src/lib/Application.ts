import { HttpLib } from '@/lib/HttpLib'

const win:any = window

export default class Application {
	public static Service = new HttpLib('', '', win.json.httpUrl)
}