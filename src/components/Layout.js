import React from 'react';

import { Outlet } from "react-router-dom";


const Layout = () => {
  return (
    // this will render the children of outlet
    <Outlet />
  );
}

export default Layout;