import React, {FC} from 'react';
import {Row} from "antd";
import CalcItems from "./CalcItems";
import {useTypedSelector} from "../hooks/redux";

const Calculator: FC = () => {
    const numbers = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0', '00', '000']
    const sings = ['/', '*', '-', '+', '=']
    const secondSings = ['(', ')', 'Clear', '<-', '=']
const {result, expression} = useTypedSelector(state => state.calculator)
    return (
        <Row align={'bottom'} justify={'center'}>
            <Row className={'column'}>
                <Row style={{
                    padding: 10, backgroundColor: '#7ec1ff',
                    width: '100%', height: 51.5,
                }}>
                    <p style={{fontSize: 24}}> = {result}</p>
                </Row>
                <Row style={{
                    padding: 10, backgroundColor: '#c6c6f5',
                    width: '100%', height: 51.5,
                }}>
                    <p style={{fontSize: 24}}>{expression}</p>
                </Row>
                <Row align={'middle'} justify={'center'} className={'calculator'}>
                    {numbers.map((item: string) => <CalcItems key={item} num={item} /> )}
                </Row>
            </Row>
            <Row className={'column'}>
                {sings.map((item: string) => <CalcItems key={item} num={item} /> )}
            </Row>
            <Row className={'column'}>
                {secondSings.map((item: string) => <CalcItems key={item} num={item} /> )}
            </Row>
        </Row>
    );
};

export default Calculator;