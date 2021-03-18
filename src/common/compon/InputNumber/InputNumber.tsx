import { Input, Tooltip } from 'antd';
import React, { ChangeEvent } from "react";
import styles from "./InputNumber.module.css"

function formatNumber(value: string) {
    value += '';
    const list = value.split('.');
    const prefix = list[0].charAt(0) === '-' ? '-' : '';
    let num = prefix ? list[0].slice(1) : list[0];
    let result = '';
    while (num.length > 3) {
        result = `,${num.slice(-3)}${result}`;
        num = num.slice(0, num.length - 3);
    }
    if (num) {
        result = num + result;
    }
    return `${prefix}${result}${list[1] ? `.${list[1]}` : ''}`;
}

export class NumericInput extends React.Component<any> {
    onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        const reg = /^-?\d*(\.\d*)?$/;
        if ((!isNaN(parseInt(value)) && reg.test(value)) || value === '' || value === '-') {
            this.props.onChange(value);
        }
    };

    // '.' at the end or only '-' in the input box.
    onBlur = () => {
        const { value, onBlur, onChange } = this.props;
        let valueTemp = value;
        if (value.charAt(value.length - 1) === '.' || value === '-') {
            valueTemp = value.slice(0, -1);
        }
        onChange(valueTemp.replace(/0*(\d+)/, '$1'));
        if (onBlur) {
            onBlur();
        }
    };

    render() {
        const { value } = this.props;
        const title = value ? (
            <span className="numeric-input-title">{value !== '-' ? formatNumber(value) : '-'}</span>
        ) : (
            'Input a number'
        );
        return (
            <Tooltip
                trigger={['focus']}
                title={title}
                placement="topLeft"
                overlayClassName="numeric-input"
            >
                <Input
                    {...this.props}
                    onChange={this.onChange}
                    onBlur={this.onBlur}
                    placeholder="Input a number"
                    maxLength={25}
                    className={styles.input}
                />
            </Tooltip>
        );
    }
}
interface NumberProps {

}
class NumericInputDemo extends React.Component<NumberProps, { value: string }> {
    constructor(props: NumberProps) {
        super(props);
        this.state = { value: '' };
    }

    onChange = (value: string) => {
        this.setState({ value });
    };

    render() {
        return (
            <NumericInput  value={this.state.value} onChange={this.onChange} />
        );
    }
}