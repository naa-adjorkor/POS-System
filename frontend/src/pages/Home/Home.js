import React from 'react';
import { Header } from '../../components/Header';
import {Sidebar} from '../../components/Sidebar';

export const Home = () => {
  

  return (
    <div className="home">
      <Header />
      <div className="layout">
        <Sidebar/>
      </div>
    </div>
  );
};
