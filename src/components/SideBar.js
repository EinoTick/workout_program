import React, {useState} from 'react';
import {Menu, MenuItem, ProSidebar, SidebarContent, SidebarFooter, SidebarHeader, SubMenu} from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import navIcon from '../assets/icons/nav_icon.svg'
import { ReactComponent as Home } from '../assets/icons/home.svg';
import { ReactComponent as Workout } from '../assets/icons/workout.svg';
import { ReactComponent as Demo } from '../assets/icons/demot.svg';
import {useHistory} from "react-router-dom";

const SideBar = () => {
  const [isCollapsed, SetIsCollapsed] = useState(true);

  const history = useHistory();

  const redirectToHome = () => {
    history.push('');
  }

  return (
      <ProSidebar collapsed={isCollapsed}>
        <div className="sidebar-img" onClick={() => SetIsCollapsed(!isCollapsed)}/>
        <SidebarHeader onClick={() => SetIsCollapsed(!isCollapsed)}>
          <div className="sidebar-header__container">
            <img src={navIcon} alt="sidebar background"/>

            {!isCollapsed &&
            <h1 className="sidebar-header__text">
              Paremmat Treenit
            </h1>
            }
          </div>
        </SidebarHeader>
        <SidebarContent>
          <Menu iconShape="circle">
            <MenuItem icon={<Home/>} onClick={() => redirectToHome()}>Home</MenuItem>
          </Menu>
          <Menu iconShape="circle">
            <MenuItem icon={<Workout/>}>Valmiit Treeniohjelmat</MenuItem>
          </Menu>
          <Menu iconShape="circle">
            <SubMenu title="Liike Demot" icon={<Demo/>}>
              <MenuItem>Jalat</MenuItem>
              <MenuItem>Kädet</MenuItem>
              <MenuItem>Rinta</MenuItem>
              <MenuItem>Olkapäät</MenuItem>
              <MenuItem>Yläselkä</MenuItem>
              <MenuItem>Alaselkä</MenuItem>
              <MenuItem>Tukilihakset</MenuItem>
              <MenuItem>Aerobinen</MenuItem>
            </SubMenu>
          </Menu>
        </SidebarContent>
        <SidebarFooter onClick={() => SetIsCollapsed(!isCollapsed)}>
          <div className="sidebar-footer__disclaimer">Alpha Version 0.0.1</div>
        </SidebarFooter>
      </ProSidebar>
  );
};

export default SideBar;