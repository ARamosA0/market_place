import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import "./Navbar.css" 

export default function Navbar() {
  return (
      <header>
          <navbar className="navbar">
              <div>
                  <h2>Cocheras.com</h2>
              </div>
              <div>
                <form>
                    <input type="text" id="busqueda" name="busqueda" className="input-busqueda"/>
                    <IconButton color="inherit" className="input-serch-button">
                        <SearchIcon/>
                    </IconButton>
                </form>
              </div>
              <IconButton color="inherit" className="nav-user-button">
                <MenuIcon />
                <PersonIcon />
              </IconButton>
          </navbar>
      </header>
  );
};
