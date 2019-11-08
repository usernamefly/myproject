import { BASEURL } from '../commons/Config'
const BAIURL = `${BASEURL}/bai`

export default {
    /**
     * 获取店铺的信息
     */
    async getBaiInfoByUserId () {
        let res = await fetch(BAIURL)
        let data = await res.json()
        return data
    }
}
