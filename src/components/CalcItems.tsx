import React, {FC, ReactElement, ReactNode} from 'react';
import {Row} from "antd";
import {useTypedDispatch} from "../hooks/redux";
import {addToExpression, clearAll, clearLast, count} from "../redux/slice/calculatorSlice";

interface IProps {
    num: string
}

const CalcItems: FC<IProps> = ({num}) => {
    const dispatch = useTypedDispatch()

    const addToExpressionHandle = (): void => {
        if (num === '=') {
            dispatch(count(num))
        } else if (num === 'Clear') {
            dispatch(clearAll())
        } else if (num === '<-') {
            dispatch(clearLast())
        } else {
            dispatch(addToExpression(num))
        }
    }

    return (
        <Row align={'middle'} justify={'center'} className={'calc__item'}
             onClick={addToExpressionHandle}>
            {num}
        </Row>
    );
};

export default CalcItems;