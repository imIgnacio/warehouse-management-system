import React from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Tooltip,
} from '@mui/material';
import { useNavigate } from 'react-router';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

const sidebarItems = [
  {
    path: '/',
    tooltip: 'Dashboard',
    icon: HomeIcon,
  },
  {
    path: '/products',
    tooltip: 'See Products',
    icon: SearchIcon,
  },
  {
    path: '/addProducts',
    tooltip: 'Create Products',
    icon: AddIcon,
  },
  {
    path: '/editProducts',
    tooltip: 'Edit Products',
    icon: EditIcon,
  },
  {
    path: '/deleteProducts',
    tooltip: 'Delete Products',
    icon: DeleteIcon,
  },
  {
    path: '/newSale',
    tooltip: 'New Sale',
    icon: AttachMoneyIcon,
  },
  {
    path: '/financeTable',
    tooltip: 'Finance Table',
    icon: AnalyticsIcon,
  },
];

function Sidebar() {
  const drawerWidth = 80;
  const navigate = useNavigate();
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'baseline',
          justifyContent: 'center',
        },
      }}
      variant='permanent'
      anchor='left'
    >
      <List>
        {sidebarItems.map((element, index) => (
          <ListItem key={index} disablePadding>
            <Tooltip placement='right' arrow title={element.tooltip}>
              <ListItemButton
                sx={{ paddingRight: 1 }}
                selected={selectedIndex === index}
                onClick={() => {
                  handleListItemClick(event, index);
                  navigate(`${element.path}`);
                }}
              >
                <ListItemIcon
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                  {React.createElement(element.icon)}
                </ListItemIcon>
              </ListItemButton>
            </Tooltip>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}

export default Sidebar;
