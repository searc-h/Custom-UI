import React from 'react'
import './index.less'
export default function VerifyAccount() {

    
    let numbers = document.querySelectorAll('.number')

    let keyDown = (e , idx)=>{
        if(e.key >=0 && e.key<=9 && idx<numbers.length-1 ){
            e.target.value = ''
            setTimeout(()=>{
                numbers[idx+1].focus()
            },20)
        }else if(e.key == 'Backspace' && idx>0){
            setTimeout(()=>{
                if(idx==numbers.length-1 && e.target.value)
                {
                    numbers[idx].value = ''
                    numbers[idx].focus()
                }else{
                    numbers[idx-1].value = ''
                    numbers[idx-1].focus()
                }
            },20)
        }
    }

    return (
        <div className='verifyAccount'>
            <div className="container">
                <div className="title">Verify Your Account</div>
                <div className="detail">We emailed you the six digit code to cool_gut@email.com <br />
                    Enter the code below to confirm your email address
                </div>
                <div className="code">

                    {
                        [0,1,2,3,4].map((item,index) => {
                            return (
                                <div className="digit" key={item}>
                                    <input onKeyDown={(e)=>{keyDown(e , index)}} className="number" type="number" min="0" max="9" required placeholder="0" />
                                </div>
                            )
                        })
                    }
                </div>
                <div className="tips">This is design only,We didnt actually send you an email
                    <br />
                    as we dont have your email.right?
                </div>
            </div>
        </div>
    )
}
