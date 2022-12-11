import {pplType} from "./tests/homeWorkReducer.test";


export type CheckAT = {
    type:'CHECK'
    payload:number
}
export type SortAT = {
    type:'SORT'
    payload:'up'|'down'
}


export const homeWorkReducer = (state: any, action: any): any => { // need to fix any
    switch (action.type) {
        case 'sort': {
            // need to fix
            switch (action.payload){
                case  'up': {
                    let newState = [...state]
                    newState.sort((a,b)=>{
                        if (a.name>b.name) return -1
                        if (a.name<b.name) return 1
                        else return 0
                    })
                    console.log(newState)
                        return newState
                }
                case 'down': {
                    let newState = [...state]
                    newState.sort((a,b)=>{
                        if (a.name<b.name) return -1
                        if (a.name>b.name) return 1
                        else return 0
                    })
                    console.log(newState)
                    return newState
                }
                default: return state

            }

        }
        case 'check': {
            // need to fix
            return state.filter((ppl:any)=>ppl.age>action.payload)
        }
        default: return state
    }
}
