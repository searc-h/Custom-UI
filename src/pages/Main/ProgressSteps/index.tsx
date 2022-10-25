import React  from 'react'
import styles from  './index.module.less'
import { Progress ,Description ,Card} from '../../../ui-components/index'
export default function ProgressSteps() {

    return (
        <div className={styles.progresssteps}>
            <Description tips={['这里应该传入数组',"让我们来测试一下吧"]} title='ProgressSteps 进度条' height='500px'>
                <Card width='80%' height='200px' title='说明' content={"nihao"} shadow={false}/>
            </Description>
            <Progress total={5} preText={"PRE"} nextText={"NXET"}/>
        </div>
    )
}
