import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps} from 'react'
import {FormControlLabel, Radio, RadioGroup} from "@mui/material";

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
}

const SuperRadio: React.FC<SuperRadioPropsType> = (
    {
        type, name,
        options, value,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        // onChange, onChangeOption
        if (onChange) onChange(e)
        if (onChangeOption) onChangeOption(e.currentTarget.value)
    }


    const mappedOptions: any[] = options ? options.map((o, i) => (

                <FormControlLabel value={o} control={<Radio />} label={o} />

        /*<label key={name + '-' + i}>

            <input
                type={'radio'}
                // name, checked, value, onChange
                name={name}
                checked={restProps.checked}
                value={value}
                onChange={onChange}
            />
            {o}
        </label>*/
    )) : []

    return (
        <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue={mappedOptions[0].value}
            name="radio-buttons-group"
        >
            {mappedOptions}
        </RadioGroup>
    )
}

export default SuperRadio
