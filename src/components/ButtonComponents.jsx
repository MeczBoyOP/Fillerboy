import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';

const ButtonComponents = ({ label, color = 'primary', size = 'md', outline = false, onClick }) => {
    return (
        <Button color={color} size={size} outline={outline} onClick={onClick}>
            {label}
        </Button>
    )
}
ButtonComponent.propTypes = {
    label: PropTypes.string.isRequired,
    color: PropTypes.string,
    size: PropTypes.oneOf(['sm', 'md', 'lg']),
    outline: PropTypes.bool,
    onClick: PropTypes.func,
};

ButtonComponent.defaultProps = {
    color: 'primary',
    size: 'md',
    outline: false,
    onClick: () => { },
};

export default ButtonComponents