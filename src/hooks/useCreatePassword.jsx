function getLower(){
    return String.fromCharCode(Math.floor(Math.random()*26)+97)
}

function getUpper(){
    return String.fromCharCode(Math.floor(Math.random()*26)+65)
}
function gerNumber(){
    return String.fromCharCode(Math.floor(Math.random()*10)+48)
}

function getRandomSymbol(){
    const symbols = '~!@#$%^&*()_+-{}|:"<>?[];,./'
    return symbols[Math.floor(Math.random() * symbols.length)]
}
const createChar = {
    isLower:getLower,
    isUpper:getUpper,
    isNumber:gerNumber,
    isSymbol:getRandomSymbol
}

let createPassowrd = (Arr, length)=>{
    let password = ''
    // 以Arr.length为步长，以length为外层循环长度
    for(let i=0; i<length; i=i+Arr.length){
        // 因为这里需要执行Arr.length次
        Arr.forEach((item)=>{
            let key = Object.keys(item)[0]
            password += createChar[key]()
        })
    }
    return password.slice(0,length)
}

function useCreatePassword(props) {
    let {isUpper , isLower , isNumber , isSymbol,numLength} = props
    
    const conditionArr = [
        {
            isUpper
        },
        {
            isLower
        },
        {
            isNumber
        },
        {
            isSymbol
        }
    ]
    // 筛选后的数组
    let newArr = conditionArr.filter((item)=>{
        return (Object.values(item)[0])
    })

    if(newArr.length===0){
        return '! ! Please Select at least one option ! !'
    }else{
        return createPassowrd(newArr , numLength)
    }
}
export default useCreatePassword
