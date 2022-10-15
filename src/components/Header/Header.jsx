import React from 'react';
import Button from "../Button/Button";

const Header = () => {
    return (
        <div className={'header'}>
            <Button>Закруть</Button>
            <span className={'username'}></span>
        </div>
    );
};

export default Header;