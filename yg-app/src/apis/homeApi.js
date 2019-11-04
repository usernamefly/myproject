import { BASEURL } from '../commons/Config'
const CARTURL = `${BASEURL}/api/homeinfo`

export default {
    /**
     * 获取店铺的信息
     */
    async getHomeInfoByUserId () {
        let res = await fetch(CARTURL)
        let data = await res.json()
        return data
    }
}
