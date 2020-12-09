import React from 'react';
import { string } from 'prop-types';
import classNames from 'classnames';
import './Button.scss';

const propTypes = {
    text: string.isRequired,
    className: string,
};

const defaultProps = {
    element: 'button',
    type: 'button',
};

const Button = ({ text, className }) => {
    const componentClassNames = classNames('rs-btn', className);

    return <button className={componentClassNames}>{text}</button>;
};

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
