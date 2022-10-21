import React  from 'react'
import styles from  './index.module.less'
import { Progress } from '../../../ui-components/index'
export default function ProgressSteps() {

    return (
        <div className={styles.progresssteps}>
            <Progress total={5} preText={"PRE"} nextText={"NXET"}/>
        </div>
    )
}
