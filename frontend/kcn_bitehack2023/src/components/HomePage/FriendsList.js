import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import StarIcon from '@mui/icons-material/Star';
import ListSubheader from '@mui/material/ListSubheader';
import Card from 'react-bootstrap/Card';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Stack from 'react-bootstrap/Stack';
import Typography from '@mui/material/Typography';
// import LocationOn from '@mui/material/LocationOn';
import IconButton from '@mui/material/IconButton';
// import Edit from '@mui/material/Edit';
// import { Edit } from 'react-admin';
// import * as React from 'react';
// import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import LocationOn from '@mui/icons-material/LocationOn';


export default function FriendsList() {
  return (
    <div className='Friends-list'>
    <List
      style={{backgroundColor:'#b1d9fc'}}
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      aria-label="contacts"
      subheader={
        <ListSubheader style={{backgroundColor:'#fff757'}} component="div" id="nested-list-subheader">
          Your friends
        </ListSubheader>
      }
    >
    <ListItem disablePadding>
        <Box sx={{ p: 2, display: 'flex' }}>
            <Avatar variant="rounded" src={require('./avatars/avatar1.jpg')} sx={{ width: 50, height: 50 }}/>
            <Stack spacing={0.5}>
            <Typography fontWeight={700} paddingLeft={1}>Emilie Vincent</Typography>
            <Typography variant="body2" color="text.secondary">
            <LocationOn /> Chicago, USA
            </Typography>
            </Stack>
            <IconButton>
            {/* <Edit sx={{ fontSize: 14 }} /> */}
            </IconButton>
        </Box>
    </ListItem>
    <ListItem disablePadding>
        <Box sx={{ p: 2, display: 'flex' }}>
            <Avatar variant="rounded" src={require('./avatars/avatar2.jpg')} sx={{ width: 50, height: 50 }}/>
            <Stack spacing={0.5}>
            <Typography fontWeight={700} paddingLeft={1}>Rahul Bishop</Typography>
            <Typography variant="body2" color="text.secondary">
            <LocationOn /> Warsaw, PL
            </Typography>
            </Stack>
            <IconButton>
            {/* <Edit sx={{ fontSize: 14 }} /> */}
            </IconButton>
        </Box>
        </ListItem>
    <ListItem disablePadding>
        <Box sx={{ p: 2, display: 'flex' }}>
            <Avatar variant="rounded" src={require('./avatars/avatar3.jpg')} sx={{ width: 50, height: 50 }}/>
            <Stack spacing={0.5}>
            <Typography fontWeight={700} paddingLeft={1}>Susie Fields</Typography>
            <Typography variant="body2" color="text.secondary">
            <LocationOn /> Barcelona, ESP
            </Typography>
            </Stack>
            <IconButton>
            {/* <Edit sx={{ fontSize: 14 }} /> */}
            </IconButton>
        </Box>
      </ListItem>

    </List>
    </div>
  );
}