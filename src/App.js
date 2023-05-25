import React, { useState } from 'react';
import './index.css'
import {
  AppBar,
  Toolbar,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  TextField,
  Container,
  ThemeProvider,
  createTheme,
  Box,
  Button,
  useMediaQuery,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const drawerWidth = 240;

const currencies = [
  { code: 'USD', label: 'USD',icon:'/GoldPrice/images/usa.png' },
  { code: 'EUR', label: 'EUR',icon:'/GoldPrice/images/eu.png' },
  { code: 'GBP', label: 'GBP',icon:'/GoldPrice/images/uk.png'},
  { code: 'AUD', label: 'AUD',icon:'/GoldPrice/images/australia.png'},
  { code: 'CAD', label: 'CAD',icon:'/GoldPrice/images/canada.png'},
];

const theme = createTheme({
  typography: {
    fontFamily: 'Poppins, sans-serif', // Set the desired font family
  },
});

const styles = {
  appBar: {
    fontFamily: "'Poppins' !important",
    background: '#142241',
    boxShadow: '0px -1px 5px 2px rgba(49, 66, 75, 0.1)',
    width: '100%',
    height: '80px',
    margin: 'auto',
    display: 'flex',
    justifyContent: 'center'
   
  },
  activeButton: {
    color: '#E9B109', // Set the color of the active button
    '&:hover': {
      backgroundColor: 'transparent',
      color: '#E9B109', // Set the color of the active button on hover
    },
  },
 
  menu:{
    
    '& .MuiListItem-root': {
      borderBottom: '1px solid #fff', // Add border style to the ListItem components
    },
    menuHover: {
      content: '"Variant4"',
      animation: 'dissolve 300ms ease-out',
    },
    '&:hover': {
      // Styles to apply on hover
      content: '"Variant4"',
      animation: 'dissolve 300ms ease-out',
    },
    // Animation keyframes for dissolve
    '@keyframes dissolve': {
      from: {
        opacity: 1,
      },
      to: {
        opacity: 0,
      },
    }
  },
  formControl:{
   marginLeft:'auto',
   flexDirection:'row',
   width:'20%'
  },
  login:{

    borderRadius: '5px',
    padding: '8px 20px',
    height: '40px',
    margin: 'auto',
   
  },
  loginMob:{

    borderRadius: '5px',
    padding: '8px 20px',
    height: '33px',
    margin:'auto'
   
  },
  content: {
    padding: theme.spacing(3),
  },
  drawerLink: {
    color: 'white',
    fontFamily: 'Poppins',
    
  },
  closeIcon: {
    color: 'white',
  },
  menuContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: '10px',
 
    
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
};

const selectStyles = {
  color: 'white',
  fontFamily: 'Poppins',
  fontSize: '14px',
  fontWeight: '400',
  lineHeight: '21px',
  letterSpacing: '0em',
  textAlign: 'center',
  '&:before': {
    borderBottomColor: 'white',
  },
  '&:after': {
    borderBottomColor: 'white',
  },
  '&:hover:not(.Mui-disabled):before': {
    borderBottomColor: 'white',
  },
  '& .MuiSelect-icon': {
    color: 'white', // Set the color of the dropdown icon to white
  },
};

const  formControlMob={
  width:'100%'
}
const custom={
  left: '0px',
  background: 'transparent',
  color: '#fff',
  borderBottom: '1px solid #fff',
  borderRadius: 'unset' 
}
const selectStylesMob = {
  color: 'white',
  fontFamily: 'Poppins',
  fontSize: '16px',
  fontWeight: '400',
  lineHeight: '21px',
  letterSpacing: '0em',
  display:" flex",
  justifyContent: "space-between",
  width: "100%",
  textAlign:"start",
  borderBottom: "1px solid #fff",
  borderRadius: "unset",
  


  '&:before': {
    borderBottomColor: 'white',
  },
  '&:after': {
    borderBottomColor: 'white',
  },
  '&:hover:not(.Mui-disabled):before': {
    borderBottomColor: 'white',
  },
  '& .MuiSelect-icon': {
    color: 'white', // Set the color of the dropdown icon to white
  },
   '& .MuiPaper-root.MuiMenu-paper.MuiPopover-paper': {
    left: '0px',
    background: 'transparent',
    color: '#fff',
    borderBottom: '1px solid #fff',
    borderRadius: 'unset' // Change the background color of the menu items
  },
};

const Header = ({ currency, handleCurrencyChange }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activePage,setActivePage]=useState()
  const [isSelectOpen, setIsSelectOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };
  const handleSelectOpen = () => {
    setIsSelectOpen(true);
  };

  const handleSelectClose = () => {
    setIsSelectOpen(false);
  };
  return (
    <>
      <AppBar position="fixed" sx={styles.appBar}>
        <Toolbar sx={{ minHeight: '80px' }}>
          {isMobile && (
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          )}
         { !isMobile?<Typography variant="h6" noWrap sx={{ fontSize: '0.25rem', width:"10%"}}>
           <img src='/GoldPrice/images/logo.png' />
          </Typography>:
          <Typography variant="h6" noWrap sx={{ fontSize: '0.25rem',textAlign: 'center', display: "flex",width: '75%',
         marginLeft: 'auto'
      }}>
          <img style={{
            margin:'auto'
          }} src='/GoldPrice/images/logo.png' />
          <Button variant="contained" sx={styles.loginMob}style={{ backgroundColor: '#E9B109', color: "#142241",marginLeft:'auto' }}>
          Login
        </Button>
         </Typography>}
          <Box sx={styles.menuContainer}>
         
            {isMobile ? (
              <></>
            ) : (
              <>
              <Button
  onClick={() => setActivePage('OSRS Gold')}
  color="inherit"
  sx={{ ...(activePage === 'OSRS Gold' && styles.activeButton) }}
>
  OSRS Gold
</Button>
<Button
  onClick={() => setActivePage('RS3 Gold')}
  color="inherit"
  sx={{ ...(activePage === 'RS3 Gold' && styles.activeButton) }}
>
  RS3 Gold
</Button>
<Button
  onClick={() => setActivePage('Sell RS Gold')}
  color="inherit"
  sx={{ ...(activePage === 'Sell RS Gold' && styles.activeButton) }}
>
  Sell RS Gold
</Button>
<Button
  onClick={() => setActivePage('OSRS Items')}
  color="inherit"
  sx={{ ...(activePage === 'OSRS Items' && styles.activeButton) }}
>
  OSRS Items
</Button>
<Button
  onClick={() => setActivePage('Reward Chests')}
  color="inherit"
  sx={{ ...(activePage === 'Reward Chests' && styles.activeButton) }}
>
  Reward Chests
</Button>


         
               
              </>
            )}
            
          </Box>
          {!isMobile && <FormControl sx={styles.formControl}>

            <Select
              labelId="currency-label"
              id="currency-select"
              value={currency}
              onChange={handleCurrencyChange}
              sx={selectStyles}
              MenuProps={{
                PaperProps: {
                sx:{
                  
              backgroundColor: '#142241',
                      color: '#fff',
   
                } 
                },
              }}
            >
              {currencies.map((curr,i) => (
                <MenuItem key={curr.code} value={curr.code} >
                <Box sx={{ display: 'flex', alignItems: 'center',}}>
                <img style={{paddingRight:'7px',width:'18px', height: '18px'}} src={curr.icon}/>  <span style={{width:'60%'}}>{curr.label}</span>
                </Box>
                </MenuItem>
              ))}
            </Select>
            <Button style={{color : "#fff"}}>
            Sign Up
          </Button>
          <Button variant="contained" sx={styles.login}style={{ backgroundColor: '#E9B109', color: "#142241" }}>
          Login
        </Button>

          </FormControl>
        }

        </Toolbar>
      </AppBar>
      {isMobile && (
        <Box sx={{ width: drawerWidth }}>
        <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        sx={{
          width: drawerWidth,
          '& .MuiDrawer-paper': {
            width: '100%',
            backgroundColor: '#142241',
          },
        }}
      >
        <List sx={styles.menu}>
        <IconButton
              color="inherit"
              aria-label="close"
              onClick={handleDrawerToggle}
            >
              <CloseIcon sx={styles.closeIcon} />
            </IconButton>
            <ListItem button  onClick={() => setActivePage('OSRS Gold')}>
            <ListItemText
              primary="OSRS Gold"
              sx={
                activePage === 'OSRS Gold'
                  ? { ...styles.activeButton, ...styles.drawerLink }
                  : styles.drawerLink
              } // Apply styles to the ListItemText component
            />
          </ListItem>
          <ListItem button onClick={() => setActivePage('RS3 Gold')}>
            <ListItemText
              primary="RS3 Gold"
              sx={
                activePage === 'RS3 Gold'
                  ? { ...styles.activeButton, ...styles.drawerLink }
                  : styles.drawerLink
              }  // Apply styles to the ListItemText component
            />
          </ListItem>
          <ListItem  button  onClick={() => setActivePage('Sell RS Gold')}>
            <ListItemText
              primary="Sell RS Gold"
              sx={
                activePage === 'Sell RS Gold'
                  ? { ...styles.activeButton, ...styles.drawerLink }
                  : styles.drawerLink
              }  // Apply styles to the ListItemText component
            />
         
          </ListItem>
          <ListItem button  onClick={() => setActivePage('OSRS Items')}>
          <ListItemText
            primary="OSRS Items"
            sx={
              activePage === 'OSRS Items'
                ? { ...styles.activeButton, ...styles.drawerLink }
                : styles.drawerLink
            }   // Apply styles to the ListItemText component
          />
        
        </ListItem>
        <ListItem button button  onClick={() => setActivePage('Reward Chests')}>
        <ListItemText
          primary="Reward Chests"
          sx={
            activePage === 'Reward Chests'
              ? { ...styles.activeButton, ...styles.drawerLink }
              : styles.drawerLink
          } // Apply styles to the ListItemText component
        />
      
      </ListItem>
        
          <FormControl sx={formControlMob}>
          
          <Select
            labelId="currency-label"
            id="currency-select"
            value={currency}
            onChange={handleCurrencyChange}
            onOpen={handleSelectOpen}
            onClose={handleSelectClose}
            sx={selectStylesMob}
            MenuProps={{
              PaperProps: {
              sx:{
                  left: '0px !important',
  background: 'transparent',

  color: '#fff',
  borderBottom: '1px solid #fff',
  borderRadius: 'unset' 
              } 
              },
            }}
          >
            {currencies.map((curr) => (
              <MenuItem key={curr.code} value={curr.code}>
              <Box sx={{ display: 'flex' }}>
              <img style={{paddingRight:'7px',width:'18px', height: '18px'}}src={curr.icon}/><span>{curr.label}</span>
              </Box>
              </MenuItem>
            ))}
          </Select>
        </FormControl>
       
        <Button style={{color : "#fff",border: '1px solid #fff',
        margin: '20px 20px 0px 20px',marginTop:isSelectOpen ?'270px':'20px'}}>
        Sign Up
      </Button>
      <Button variant="contained" sx={styles.login} style={{margin: '20px 20px 0px 20px', backgroundColor: '#E9B109', color: "#142241",marginTop:isSelectOpen ?'270px':'20px' }}>
      Login
    </Button>
         
        </List>
        
       
      </Drawer>
      </Box>
    )}
  </>
);
};

const PriceCalculator = ({ currency }) => {
const [quantity, setQuantity] = useState(0);
const itemPrice = {
  USD: 1,
  EUR: 1.1,
  GBP: 1.4,
  AUD: 1.6,
  CAD:0.6
};
const princeInUsd = 10;

const handleQuantityChange = (event) => {
  const newQuantity = parseInt(event.target.value);
  setQuantity(newQuantity);
};

const calculatePrice = () => {
  const price = quantity * princeInUsd * itemPrice[currency];
  return `${currency}: ${price.toFixed(2)}`;
};

return (
  <Container maxWidth="xs">
    <div style={{ display: 'flex', gap: '10px' }}>
      <TextField
        type="number"
        label="Amount"
        value={quantity}
        onChange={handleQuantityChange}
        fullWidth
      />
      <TextField label="Price" value={calculatePrice()} disabled fullWidth />
    </div>
  </Container>
);
};

const App = () => {
const [currency, setCurrency] = useState('USD');

const handleCurrencyChange = (event) => {
  setCurrency(event.target.value);
};

return (
  <ThemeProvider theme={theme}>
    <Header currency={currency} handleCurrencyChange={handleCurrencyChange} />
    <div style={{ marginTop: 100, ...styles.content }}>
      <PriceCalculator currency={currency} />
    </div>
  </ThemeProvider>
);
};

export default App;

