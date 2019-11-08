import { BASEURL } from '../commons/Config'
const CARTURL = `${BASEURL}/cart`

export default {
    /**
     * 获取店铺的信息
     */
    async getCartInfoByUserId () {
        let res = await fetch(CARTURL)
        let data = await res.json()
        return data
    }
}
