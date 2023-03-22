import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'

function HW11() {
    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState(100)
    const [range, setRange] = useState([0, 100])

    type ValuesType = {
        min: number
        max: number
    }
    const onCgeRgeHnd = (values:ValuesType) => {
      if (values.min !== value1) setValue1(values.min)
      if (values.max !== value2) setValue2(values.max)
    }
    return (
        <div>
            <hr/>
            homeworks 11

            {/*should work (должно работать)*/}
            <div>
                <span>{value1}</span>
                <SuperRange
                    value={value1}
                    onChange={(e)=>setValue1(Number(e.currentTarget.value))}
                    style={{width: "100px"}}
                    // сделать так чтоб value1 изменялось
                />
            </div>

            <div>
                <span>{value1}</span>
                <SuperDoubleRange
                    min={value1}
                    max={value2}
                    onChange={(x)=>console.log(x)}
                    marks={[]}
                    // сделать так чтоб value1 и value2 изменялось
                />
                <span>{value2}</span>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}

export default HW11
