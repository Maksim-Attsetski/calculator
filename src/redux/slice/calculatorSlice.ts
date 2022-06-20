import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {notification} from "antd";

interface IState {
    expression: string[],
    result: string,
}

const initialState: IState = {
    expression: [],
    result: '0'
}

const calculatorSlice = createSlice({
    name: 'calculatorSlice',
    initialState,
    reducers: {
        addToExpression: (state, action: PayloadAction<string>) => {
            if(state.expression.length >= 20) {
                alert('Слишком много чисел')
            } else {
                state.expression = [...state.expression, action.payload]
            }
        },
        count: (state, action: PayloadAction<string>) => {
            try {
                const str: string = state.expression.join('')
                // eslint-disable-next-line no-eval
                state.result = eval(str)
                state.expression = [state.result]
            } catch (e) {
                notification.error({
                    message: 'Неправильное выражение',
                })
            }
        },
        clearAll: (state) => {
            state.expression = []
            state.result = '0'
        },
        clearLast: (state) => {
            --state.expression.length
        },
    }

})

export const {addToExpression, count, clearLast, clearAll} = calculatorSlice.actions
export default calculatorSlice.reducer