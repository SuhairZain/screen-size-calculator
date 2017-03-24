import React, { PropTypes } from 'react';

import {
    COLOR_TEXT,
} from './utils/colors';

const styles = {
    root: {
        display: 'flex',
        flexDirection: 'column',
    },
    title: {
        color: COLOR_TEXT,
        fontSize: 'x-small',
    },
    input: {
        fontSize: 'xx-large',
        fontWeight: 'bold',
    },
};

const InputField = ({ text, title, style, onChange }) => (
    <div style={{ ...styles.root, ...style }}>
        <span style={styles.title}>{title}</span>
        <input
            disabled={onChange ? false : true}
            style={styles.input}
            value={text}
            onChange={onChange ? (e) => onChange(e.target.value) : undefined} />
    </div>
);

InputField.propTypes = {
    text: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    style: PropTypes.object,
    onChange: PropTypes.func,
};

export default InputField;
