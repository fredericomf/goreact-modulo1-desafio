import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ children }) => <h1 className="Header">{children}</h1>;

//  Caso o usuário não passe um valor entre a tag Header
Header.defaultProps = {
  children: 'RocketBook',
};

// Forçando o tipo do valor passado entre Tag
Header.propTypes = {
  children: PropTypes.string,
};

export default Header;
