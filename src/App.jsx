import React, { Component } from 'react'

import {
    COLOR_BG,
    COLOR_TEXT
} from './utils/colors.js'

import InputField from './InputField.jsx';

const styles = {
    root: {
        alignItems: 'center',
        backgroundColor: COLOR_BG,
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        padding: 24,
    },
    screen: {
        backgroundColor: 'white',
    },
    fields: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        width: '50%',
    },
    inputField: {
        marginBottom: 24,
        width: '40%',
    },
};

const square = (num) => num * num;

class App extends Component {
    constructor() {
        super();
        this.state = {
            diagonalInches: '9.7',
            heightPixels: '1024',
            widthPixels: '768',
        };
    }

    setValue = (type, value) => {
        this.setState({
            ...this.state,
            [type]: value,
        });
    }

    render() {
        const { heightPixels, widthPixels, diagonalInches } = this.state;

        const hp = parseInt(heightPixels);
        const wp = parseInt(widthPixels);
        const dI = parseFloat(diagonalInches);
        const diagonalPixels = Math.sqrt(square(hp) + square(wp));
        const denstity = dI / diagonalPixels;

        const heightInches = denstity * heightPixels;
        const widthInches = denstity * widthPixels;

        return (
            <div style={styles.root}>
                <div style={{
                    ...styles.screen,
                    height: `${heightInches}in`,
                    width: `${widthInches}in`,
                }} />
                <div style={styles.fields}>
                    <InputField
                        style={styles.inputField}
                        title="Width (Pixels)"
                        text={widthPixels}
                        onChange={(val) => this.setValue('widthPixels', val)} />
                    <InputField
                        style={styles.inputField}
                        title="Height (Pixels)"
                        text={heightPixels}
                        onChange={(val) => this.setValue('heightPixels', val)} />
                    <InputField
                        style={styles.inputField}
                        title="Width (Inches)"
                        text={widthInches.toString()} />
                    <InputField
                        style={styles.inputField}
                        title="Height (Inches)"
                        text={heightInches.toString()} />
                    <InputField
                        style={styles.inputField}
                        title="Diagonal (Inches)"
                        text={diagonalInches}
                        onChange={(val) => this.setValue('diagonalInches', val)} />
                </div>
            </div>
        );
    }
}

export default App;
