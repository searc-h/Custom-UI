import React from "react";
import HeaderStore from "./header.Store";

import {configure} from 'mobx'
configure({
    enforceActions:'never'
})

class RootStore {
    constructor() {
       this.headerStore = new HeaderStore() 
    }
}

// 实例化根仓库
const rootStore = new RootStore()

// 用useContext的方法使用该仓库
const context = React.createContext(rootStore)
// 这个useStore就可以暴露出去，让全局都能访问,并且数据是响应式的
const useStore = ()=> React.useContext(context)
export {useStore}