import {makeAutoObservable} from 'mobx'
class HeaderStore {
    
    // 属性
    isDark = false

    constructor(){
        // 响应式
        makeAutoObservable(this)
    }

    // 方法
    changeDark = (tag)=>{
        this.isDark = tag
    }

}

export default HeaderStore