import React, { useState } from 'react';
import { Box, Typography, List, ListItem, ListItemText, ListItemIcon, IconButton, Divider, Badge, Collapse } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import DeleteIcon from '@mui/icons-material/Delete';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { updateNotifications } from '../../../redux/userSlice';
import { useDispatch,  } from 'react-redux';


export default function Notifications() {
  const dispatch = useDispatch();
 

  // Placeholder notifications
  const [notifications, setNotifications] = useState([
    { id: 1, message: 'Welcome', time: 'Just now', details: 'Welcome to Autovault! We are thrilled to have you on board.' },
    { id: 2, message: 'Notifications will update in real-time.', time: '1 minute ago', details: ' The green notification dot will always appear when you have unread notifications' },
    { id: 3, message: 'You will receive alerts for important updates.', time: '1 hour ago', details: 'Important updates will be highlighted here.' },
    { id: 4, message: 'Check here for any new messages from support.', time: '1 day ago', details: 'Support messages will be sent here.' },
  ]);
  dispatch(updateNotifications(notifications.length));
  // State to manage which notification is expanded
  const [expanded, setExpanded] = useState(null);

  // Function to toggle notification details
  const handleExpandClick = (id) => {
    setExpanded(expanded === id ? null : id);
  };

  // Function to remove a notification
  const handleDelete = (id) => {
    // Remove the notification from the local state
    const updatedNotifications = notifications.filter(notification => notification.id !== id);
    setNotifications(updatedNotifications);

    // Dispatch the action to update the notification count in Redux
    dispatch(updateNotifications(updatedNotifications.length));
  };

  return (
    <main className='min-h-screen'>
    <Box 
      sx={{ 
        p: 3, 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
       
        bgcolor: 'background.default' 
      }}
    >
      <Box 
        sx={{ 
          p: 3, 
          maxWidth: '800px', 
          width: '100%', 
          boxShadow: 5,   // Adding shadow to the page
          borderRadius: 2, 
          bgcolor: 'background.paper' 
        }}
      >
        <Typography 
          variant="h4" 
          gutterBottom 
          sx={{ 
            mb: 4, 
            fontSize: { xs: '15px', sm: '2rem' }, 
            fontWeight: 'bold',
            textAlign: 'center'
          }}
        >
          <Badge
             className='text-red-600'
             badgeContent={notifications.length}  >
            <NotificationsIcon sx={{fontSize: { xs: '18px', sm: '24px' },}} />
          </Badge>
           <h6 className='text-[14px] lg:text-md'>Notifications</h6>
        </Typography>

        {notifications.length > 0 ? (
          <List sx={{ mx: 'auto', maxWidth: '600px' }}>
            {notifications.map((notification) => (
              <Box key={notification.id}>
                <ListItem
                  button
                  onClick={() => handleExpandClick(notification.id)}
                  secondaryAction={
                    <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(notification.id)}>
                      <DeleteIcon />
                    </IconButton>
                  }
                >
                  <ListItemIcon>
                    <NotificationsIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
  primaryTypographyProps={{
    sx: {
      display: '-webkit-box',
      WebkitBoxOrient: 'vertical',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      WebkitLineClamp: { xs: 1, sm: 'initial' },  // 2 lines for mobile, no limit for larger screens
    },
  }}
  primary={notification.message}
  secondary={notification.time}
/>

                  <ExpandMoreIcon />
                </ListItem>

                {/* Expandable div for notification details */}
                <Collapse in={expanded === notification.id} timeout="auto" unmountOnExit>
                  <Box sx={{ p: 2, bgcolor: 'grey.100', borderRadius: '4px' }}>
                    <Typography variant="body1">{notification.details}</Typography>
                  </Box>
                </Collapse>
                <Divider />
              </Box>
            ))}
          </List>
        ) : (
          <Typography variant="h6" color="textSecondary" textAlign="center">
            No notifications at the moment.
          </Typography>
        )}
      </Box>
      </Box>
      </main>
  );
}
