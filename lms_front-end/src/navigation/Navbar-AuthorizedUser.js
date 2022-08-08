import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import {ThemeProvider} from "@mui/material";
import {PinkCFHTheme} from "../style/themes/PinkCFHTheme";
import CFHLogo from "../style/images/CFHLogo.svg"
import {Link, useNavigate} from "react-router-dom";

const pages = [['Dashboard', '/'], ['Create Course', '/create-course'], ['Register', '/register-user'], ['Login', '/login-user'], ['Courses', '/view-all-courses']];

const NavbarAuthorizedUser = () => {

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const navigate = useNavigate();

    const clearSessionUser = () => {
        sessionStorage.clear();
        navigate("/")
        window.location.reload()
    }

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <ThemeProvider theme={PinkCFHTheme}>
            <AppBar position="static">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>

                        <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
                            <img src={CFHLogo} alt={"Carolina Fintech Hub"} height={"35px"}/>
                        </Box>

                        <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon/>
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: {xs: 'block', md: 'none'},
                                }}
                            >
                                {pages.map((page) => (
                                    <MenuItem key={page[0]} onClick={handleCloseNavMenu}>
                                        <Link className="main-nav-link" to={page[1]}>{page[0]}</Link>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>

                        <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
                            <img src={CFHLogo} alt={"Carolina Fintech Hub"} height={"35px"}/>
                        </Box>

                        <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
                            {pages.map((page) => (
                                <Button
                                    key={page[0]}
                                    onClick={handleCloseNavMenu}
                                    sx={{my: 2, color: 'white', display: 'block'}}
                                >
                                    <Link className="main-nav-link" to={page[1]}>{page[0]}</Link>
                                </Button>
                            ))}
                        </Box>

                        <Box sx={{flexGrow: 0}}>
                                <IconButton onClick={handleOpenUserMenu} sx={{p: 0}}>
                                    <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg"/>
                                </IconButton>
                            <Menu
                                sx={{mt: '45px'}}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                    <MenuItem key={"logout"} onClick={handleCloseUserMenu}>
                                        <span onClick={clearSessionUser} className="main-nav-link">Logout</span>
                                    </MenuItem>
                            </Menu>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </ThemeProvider>
    );
};
export default NavbarAuthorizedUser;

