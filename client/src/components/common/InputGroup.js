import React from 'react';
import PropTypes from 'prop-types';

const InputGourp = ({
    name,
    placeholder,
    value,
    error,
    icon,
    type,
    onChange,
}) => {
    return (
        <div className="input-group mb-3">
            <div className="input-group-prepend">
                <span className="input-group-text">
                    <i className={icon}></i>
                </span>
            </div>
            <input
                className={`form-control form-control-lg ${error && 'is-invalid'}`}
                placeholder={placeholder}
                name={name}
                value={value}
                onChange={onChange}
            />
            {error && (<div className="invalid-feedback">{error}</div>)}
        </div>
    )
}

InputGourp.propTypes = {
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string.isRequired,
    error: PropTypes.string,
    icon: PropTypes.string,
    type: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
}

InputGourp.defaultProps = {
    type: 'text'
}

export default InputGourp;