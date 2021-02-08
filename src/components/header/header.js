import React from 'react';
import Logo from '../../images/logo.png';
import UserLogo from '../../images/user-logo.png';
import './header.scss';

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header__content">
                    <div className="header__services">
                        <img src={Logo} alt="Герб Пермского края" className="header__logo" />
                        <p className="header__source-descr">Услуги и сервисы Пермского края</p>
                    </div>
                    <div className="header__user">
                        <img src={UserLogo} alt="Логотип пользователя" className="header__user-logo" />
                        <p className="header__user-descr">Константинопольский К.К</p>
                        <p className="header__user-descr">Выйти</p>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;