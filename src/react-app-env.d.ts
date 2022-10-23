
// less文件是 { [key:string] : string }类型的只读类对象
declare module '*.module.less' {
    const classes: {
      readonly [key: string]: string
    }
    export default classes
    
}

// JPG文件是 src的字符串类型变量
declare module '*.jpg' {
  const src: string;
  export default src;
}

// 同理
declare module '*.jpeg' {
  const src: string;
  export default src;
}

declare module '*.png' {
  const src: string;
  export default src;
}

declare module '*.less'
