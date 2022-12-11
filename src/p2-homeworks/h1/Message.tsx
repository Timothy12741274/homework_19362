import React from 'react'
import s from'./Message.module.css';

type PropsMessageType={
    avatar: string,
    name: string,
    message: string,
    time: string,
}

function Message(props:PropsMessageType) {
    return (
        <div>
    <span className={s.avatar}>
      <img src={props.avatar} alt={''}/>
    </span>
            <span className={s.triangle}>
            </span>
            <span className={s.locationOfMessageCloud}>
        <span className={s.dimensionsOfMessageCloud}>
            <span className={s.name}>
                {props.name}
            </span>
        <span className={s.message}>
          {props.message}
        </span>
        <span className={s.time}>
          {props.time}
        </span>
        </span>
      </span>
        </div>
    )
}

export default Message
