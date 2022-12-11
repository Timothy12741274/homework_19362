import React from 'react'
import {homeWorkReducer} from '../homeWorkReducer'

let initialState: any[] // need to fix any

beforeEach(() => {
    initialState = [
        {_id: 0, name: 'Кот', age: 3},
        {_id: 1, name: 'Александр', age: 66},
        {_id: 2, name: 'Коля', age: 16},
        {_id: 3, name: 'Виктор', age: 44},
        {_id: 4, name: 'Дмитрий', age: 40},
        {_id: 5, name: 'Ирина', age: 55},
    ]
})
export type pplType = {
    _id: number
    name: string
    age: number
}

test('sort name up', () => {
    const newState = homeWorkReducer(initialState, {type: 'sort', payload: 'up'})

    console.log(newState)
     expect(newState[0].name[0]).toBe('К')
    expect(newState[5].name[0]).toBe('А')
})
test('sort name down', () => {
    const newState = homeWorkReducer(initialState, {type: 'sort', payload: 'down'})

    expect(newState[0].name[0]).toBe('А')
    expect(newState[5].name[0]).toBe('К')


})
test('check age 18', () => {
    const newState = homeWorkReducer(initialState, {type: 'check', payload: 18})

    expect(newState.find((ppl:pplType)=>ppl._id ===0)).toBeUndefined()
    expect(newState.find((ppl:pplType)=>ppl._id ===2)).toBeUndefined()
})
