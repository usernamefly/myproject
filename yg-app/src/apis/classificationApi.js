import { BASEURL } from '../commons/Config'
const CLURL = `${BASEURL}/cla`

export default {
    /**
     * 获取店铺的信息
     */
        getclaInfoByUserId(cb){
        fetch(CLURL).then(res=>{
            res.json().then(cb)
        })
    }
}
