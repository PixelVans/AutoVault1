import React, { useEffect } from 'react';
import { Box, Typography, Paper, Container } from '@mui/material';

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container 
      sx={{ 
        minHeight: '100vh', 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        p: 3 
      }}
    >
      <Paper 
        sx={{ 
          p: 4, 
          maxWidth: '800px', 
          boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.2)', 
          backgroundColor: '#fff',
          mb: 4
        }}
      >
        <Typography 
          variant="h4" 
          gutterBottom 
          sx={{ 
            mb: 3, 
            color: '#1e293b', 
            fontWeight: 'bold',
            fontSize: { xs: '1.5rem', sm: '2rem' } // Responsive font size
          }}
        >
          About AutoVault
        </Typography>
        
        

        <Typography 
          variant="body1" 
          sx={{ 
            mb: 2, 
            color: '#555' 
          }}
        >
          AutoVault is a leading platform for buying and selling cars. Whether you're looking to purchase your next vehicle or you want to list your car for sale, AutoVault offers a seamless and efficient experience.
        </Typography>

        <Typography 
          variant="body1" 
          sx={{ 
            mb: 2, 
            color: '#555' 
          }}
        >
          Founded by PixelVans, our mission is to provide a reliable and user-friendly service to help you navigate the car buying and selling process with ease. Our platform features a wide range of vehicles, detailed listings, and user-friendly tools to make your experience as smooth as possible.
        </Typography>

        <Typography 
          variant="body1" 
          sx={{ 
            mb: 2, 
            color: '#555' 
          }}
        >
          At AutoVault, we prioritize customer satisfaction and are dedicated to offering exceptional support. If you have any questions or need assistance, our support team is here to help.
        </Typography>

        <Typography 
          variant="body1" 
          sx={{ 
            color: '#555' 
          }}
        >
          Thank you for choosing AutoVault. We look forward to serving you!
        </Typography>
      </Paper>

      <Box 
        sx={{ 
          width: '100%', 
          maxWidth: '800px' 
        }}
      >
        <Typography 
          variant="h6" 
          sx={{ 
            mb: 2, 
            textAlign: 'center', 
            color: '#334155' 
          }}
        >
         Welcome Onboard!
        </Typography>

        <video 
          width="100%" 
          height="auto" 
          controls 
          src="/videos/vid1.mp4" // Path relative to the public directory
        >
          Your browser does not support the video tag.
        </video>
      </Box>
    </Container>
  );
}
