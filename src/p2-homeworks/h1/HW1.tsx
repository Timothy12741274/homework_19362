import React from 'react'
import Message from "./Message";

const messageData = {
    avatar: 'https://yt3.ggpht.com/a/AGF-l7_iP5-_I-1ts-WZMGgcXbEGEMSpCBKFcrFkJg=s900-c-k-c0xffffffff-no-rj-mo',
    name: 'Artem',
    message: 'npm start нажимал?',
    time: '22:00',
}

function HW1() {
    return (
        <div>
            <hr/>
            homeworks 1

            {/*should work (должно работать)*/}

            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}
            <hr/>
        </div>
    )
}

export default HW1
