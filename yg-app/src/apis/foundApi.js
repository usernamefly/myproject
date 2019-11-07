import { BASEURL } from '../commons/Config'
const FOUNDURL = `${BASEURL}/fou`

export default {
    /**
     * 获取店铺的信息
     */
    getFouInfoByUserId(cb){
        fetch(FOUNDURL).then(res=>{
            res.json().then(cb)
        })
    }
}
