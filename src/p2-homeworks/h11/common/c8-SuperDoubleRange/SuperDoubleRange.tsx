import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';



function valuetext(value: number) {
    return `${value}`;
}

type PropsType = {
    //maxV: number
    min:number
    max:number
    onChange:(e:any, nv:any)=>void
    marks: Array<any>
}

const SliderM = ({onChange, marks, min, max}:PropsType) => {
    return (
        <Slider
            onChangeCommitted={onChange}
            sx={{width:220}}
            track="inverted"
            aria-labelledby=""
            getAriaValueText={valuetext}
            defaultValue={[min, max]}
            marks={marks}
        />
    );
}

export default SliderM