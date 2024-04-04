'use client'
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import {deepPurple} from "@mui/material/colors";
import InputBase from '@mui/material/InputBase';
import {styled, alpha} from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import TextField from "@mui/material/TextField";
import DialogActions from "@mui/material/DialogActions";
import Dialog from "@mui/material/Dialog";
import axios from 'axios';
import Alert from "@mui/material/Alert";
import cookie from 'react-cookies'
import Snackbar from "@mui/material/Snackbar";
import {useEffect} from "react";

const Search = styled('div')(({theme}) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));
const SearchIconWrapper = styled('div')(({theme}) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));
const StyledInputBase = styled(InputBase)(({theme}) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

function ResponsiveAppBar() {
    const [isLoggedIn, setIsLoggedIn] = React.useState(null);
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const [loginOpen, setLoginOpen] = React.useState(false);
    const [snackbarOpen, setSnackbarOpen] = React.useState(false);
    const pages = [
        {key: '/index', value: '首页'},
        {key: '/UniversityList', value: '院校列表'},
        {key: '/book', value: '考研图书'},
        {key: '/news', value: '考研资讯'},
        {key: '/contact', value: '联系我们'}
    ]
    const loggedSettings = [
        {
            item: '修改信息',
            handler: () => {
                setAnchorElUser(null);
            }
        },
        {
            item: '收藏夹',
            handler: () => {
                setAnchorElUser(null);
                window.location.href = '/Fav';
            }
        },
        {
            item: '退出登录',
            handler: () => {
                setAnchorElUser(null);
                cookie.remove('userId', {path: '/'});
                cookie.remove('userType', {path: '/'});
                cookie.remove('username', {path: '/'});
                window.location.href = '/';
            }
        },
    ]
    const alertSeverity = React.useRef(null);
    const message = React.useRef(null);
    const snackbarDuration = React.useRef(1000);

    useEffect(() => {
        setIsLoggedIn(Boolean(cookie.load('userId')));
    }, []);



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
    const handleLoginOpen = () => {
        handleCloseUserMenu();
        setLoginOpen(true);
    };

    const handleLoginClose = () => {
        setLoginOpen(false);
    };

    const handleSnackbarOpen = (severity, text, duration) => {
        alertSeverity.current = severity;
        message.current = text;
        snackbarDuration.current = duration;
        setSnackbarOpen(true);
    }
    const handlePageOpen=(url)=>{
        if(cookie.load('userId')||['/index','/contact'].includes(url))
            window.location.href=url;
        else handleSnackbarOpen('warning','访问服务前请先登录',2500);
    }

    const handleSnackbarClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setSnackbarOpen(false);
    }

    return (
        <AppBar position="sticky">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <AdbIcon sx={{display: {xs: 'none', md: 'flex'}, mr: 1}}/>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        sx={{
                            mr: 2,
                            display: {xs: 'none', md: 'flex'},
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        LOGO
                    </Typography>

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
                        </Menu>
                    </Box>
                    <AdbIcon sx={{display: {xs: 'flex', md: 'none'}, mr: 1}}/>
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            display: {xs: 'flex', md: 'none'},
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        LOGO
                    </Typography>
                    <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
                        {pages.map((page) => (
                            <Button
                                key={page.key}
                                onClick={e=>handlePageOpen(page.key)}
                                sx={{my: 2, color: 'white', display: 'block'}}
                            >
                                {page.value}
                            </Button>
                        ))}

                    </Box>

                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon/>
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="搜索…"
                            inputProps={{'aria-label': 'search'}}
                        />
                    </Search>

                    <Box sx={{flexGrow: 0}}>
                        <Tooltip title="打开账号设置">
                            <IconButton onClick={handleOpenUserMenu} sx={{p: 0}}>
                                {isLoggedIn ? <Avatar sx={{bgcolor: deepPurple[500]}}>{cookie.load('username')}</Avatar> :
                                    <Avatar/>}

                            </IconButton>
                        </Tooltip>
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
                            {isLoggedIn ? loggedSettings.map((setting) => (
                                    <MenuItem key={setting.item} onClick={setting.handler}>
                                        <Typography>{setting.item}</Typography>
                                    </MenuItem>
                                )) :
                                <MenuItem key='login' onClick={handleLoginOpen}>
                                    <Typography>登录</Typography>
                                </MenuItem>
                            }
                        </Menu>
                    </Box>
                    <Dialog
                        open={loginOpen}
                        onClose={handleLoginClose}
                        PaperProps={{
                            component: 'form',
                            onSubmit: (event) => {
                                event.preventDefault();
                                const formData = new FormData(event.currentTarget);
                                let objData = {};
                                for (const entry of formData.entries()) {
                                    objData[entry[0]] = entry[1];
                                }
                                axios.post('/api/user/auth', objData)
                                    .then(function (response) {
                                        if (response.data.length) {
                                            handleSnackbarOpen('success', '登录成功', 1000);
                                            setIsLoggedIn(true);
                                            cookie.save('userId', response.data[0].id, {path: '/'});
                                            cookie.save('userType', response.data[0].type, {path: '/'});
                                            cookie.save('username', response.data[0].username, {path: '/'});
                                        } else {
                                            handleSnackbarOpen('error', '登录失败，请检查用户名或密码是否正确', 3000);
                                        }
                                    })
                                    .catch(function (error) {
                                        console.log(error)
                                    })
                                handleLoginClose();
                            },
                        }}
                    >
                        <DialogTitle>登录</DialogTitle>
                        <DialogContent>
                            <TextField
                                autoFocus
                                margin="dense"
                                id="name"
                                name="username"
                                label="用户名"
                                fullWidth
                            />
                            <TextField
                                margin="dense"
                                id="pwd"
                                name="password"
                                label="密码"
                                type='password'
                                fullWidth
                            />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleLoginClose}>取消</Button>
                            <Button type="submit">确认</Button>
                        </DialogActions>
                    </Dialog>
                    <Snackbar open={snackbarOpen} autoHideDuration={snackbarDuration.current}
                              onClose={handleSnackbarClose}>
                        <Alert

                            onClose={handleSnackbarClose}
                            severity={alertSeverity.current}
                        >
                            {message.current}
                        </Alert>
                    </Snackbar>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default ResponsiveAppBar;