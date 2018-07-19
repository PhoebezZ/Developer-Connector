import React from 'react';
import './index.css';

export default () => {
    return (
        <footer className="footer text-white mt-5 p-4 text-center">
            Copyright &copy; {new Date().getFullYear()} DevConnector
        </footer>
    )
}
