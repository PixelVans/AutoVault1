import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Paper } from '@mui/material';

export default function Help() {
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here (e.g., send data to an API or server)
    setSubmitted(true);
  };

  return (
    <Box sx={{ p: 3, textAlign: 'center' }}>
      <Typography 
        variant="h4" 
        gutterBottom 
        sx={{ 
          mb: 4, 
          fontSize: { xs: '1.5rem', sm: '2rem' }, // Responsive font size
          fontWeight: 'bold'
        }}
      >
        Contact Support
      </Typography>

      <Paper sx={{ p: 3, mx: 'auto', maxWidth: '600px', textAlign: 'left' }}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          We’re here to help! Please provide the title of your query and your message.
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField 
            fullWidth 
            label="Title" 
            variant="outlined" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
            sx={{ 
              mb: 2, 
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#1e293b', // Default border color
                },
                '&:hover fieldset': {
                  borderColor: '#1e293b', // Border color on hover
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#1e293b', // Border color when focused
                },
              },
            }} 
            required
          />
          <TextField 
            fullWidth 
            label="Message" 
            variant="outlined" 
            multiline 
            rows={6} 
            value={message} 
            onChange={(e) => setMessage(e.target.value)} 
            sx={{ 
              mb: 2, 
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#1e293b', // Default border color
                },
                '&:hover fieldset': {
                  borderColor: '#1e293b', // Border color on hover
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#1e293b', // Border color when focused
                },
              },
            }} 
            required
          />
          <Button 
            type="submit" 
            variant="contained" 
            
            sx={{ mt: 2, backgroundColor: '#1e293b', color: '#fff', '&:hover': { backgroundColor: '#334155' } }} // Updated to dark gray
          
          >
            Send
          </Button>
        </form>

        {submitted && (
          <Typography variant="body1" color="success.main" sx={{ mt: 2 }}>
            Your message has been sent. We will get back to you shortly!
          </Typography>
        )}
      </Paper>
    </Box>
  );
}
