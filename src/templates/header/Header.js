import React from 'react';
import { PageHeader } from 'antd';
import 'antd/dist/antd.css';

const Header = () => {
  return (
    <PageHeader
    className="site-page-header"
    onBack={() => null}
    title="My Training App"
    subTitle="Connexion"
  />
  );
}

export default Header;