import React, {useState} from 'react'
import SuperSelect from './common/c5-SuperSelect/SuperSelect'
import SuperRadio from './common/c6-SuperRadio/SuperRadio'

const options = ['x', 'y', 'z']

function HW7() {
    const [selectValue, changeSelectValue] = useState(options[1])
    const [ratioValue, changeRatioValue] = useState(options[1])

    return (
        <div>
            <hr/>
            homeworks 7

            {/*should work (должно работать)*/}
            <div>
                <SuperSelect
                    options={options}
                    value={selectValue}
                    onChangeOption={changeSelectValue}
                />
            </div>
            <div>
                <SuperRadio

                    name={'radio'}
                    options={options}
                    value={ratioValue}
                    onChangeOption={changeRatioValue}
                />
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperSelect/>*/}
            {/*<AlternativeSuperRadio/>*/}
            <hr/>
        </div>
    )
}

export default HW7
