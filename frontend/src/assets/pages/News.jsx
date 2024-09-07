import React, { useState } from 'react';
import { Box, Typography, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Collapse, IconButton } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

const newsArticles = [
  {
    title: ' News Update',
    date: 'September 8, 2024',
    content: 'No news to show at the moment. Check back later for updates!'
  },
  
  // Add more articles as needed
];

export default function News() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleToggle = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
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
        Latest News
      </Typography>
      
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center"><Typography variant="h6">Title</Typography></TableCell>
              <TableCell align="center"><Typography variant="h6">Date</Typography></TableCell>
              <TableCell align="center"><Typography variant="h6">Details</Typography></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {newsArticles.map((article, index) => (
              <React.Fragment key={index}>
                <TableRow>
                  <TableCell align="center">{article.title}</TableCell>
                  <TableCell align="center">{article.date}</TableCell>
                  <TableCell align="center">
                    <IconButton onClick={() => handleToggle(index)}>
                      {expandedIndex === index ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                    </IconButton>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell colSpan={3} sx={{ p: 0 }}>
                    <Collapse in={expandedIndex === index}>
                      <Box sx={{ p: 2 }}>
                        <Typography variant="body1">{article.content}</Typography>
                      </Box>
                    </Collapse>
                  </TableCell>
                </TableRow>
              </React.Fragment>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
