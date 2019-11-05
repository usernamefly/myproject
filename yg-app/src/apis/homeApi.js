import { BASEURL } from '../commons/Config'
const HOMEURL = `${BASEURL}/home`

export default {
    /**
     * 获取店铺的信息
     */
    getHomeInfoByUserId(cb){
        fetch(HOMEURL).then(res=>{
            res.json().then(cb)
        })
    }
}
