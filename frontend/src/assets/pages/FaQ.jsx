
// npm install @mui/material @emotion/react @emotion/styled
// npm install @mui/icons-material




import React from 'react';
import { Tabs, Tab, Box, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function FaQ() {
  const [tabValue, setTabValue] = React.useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Box sx={{ p: 3 }}>
      <Tabs
        value={tabValue}
        onChange={handleTabChange}
        aria-label="faq tabs"
        sx={{
          borderBottom: 1,
          borderColor: 'divider',
          '& .MuiTabs-indicator': {
            backgroundColor: '#374151', // dark grey color
          },
        }}
      >
        <Tab
          label="About Buying"
          sx={{
            fontWeight: tabValue === 0 ? 'bold' : 'normal',
            color: tabValue === 0 ? '#374151' : 'text.primary', // dark grey color
            borderBottom: tabValue === 0 ? '2px solid #374151' : 'none', // dark grey color
            '&.Mui-selected': {
              color: '#374151', // dark grey color
              fontWeight: 'bold',
            },
          }}
        />
        <Tab
          label="About Selling"
          sx={{
            fontWeight: tabValue === 1 ? 'bold' : 'normal',
            color: tabValue === 1 ? '#374151' : 'text.primary', // dark grey color
            borderBottom: tabValue === 1 ? '2px solid #374151' : 'none', // dark grey color
            '&.Mui-selected': {
              color: '#374151', // dark grey color
              fontWeight: 'bold',
            },
          }}
        />
      </Tabs>
      <Box sx={{ p: 2 }}>
        {tabValue === 0 && (
          <Box>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Frequently Asked Questions about Buying Cars
            </Typography>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>How do I buy a car on AutoVault?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  To buy a car on AutoVault, browse our listings, select a car you're interested in, and follow the steps to contact the seller and finalize your purchase.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>What should I look for when buying a used car?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  When buying a used car, check the vehicle's history report, inspect its condition, and take it for a test drive. Also, verify if there are any outstanding recalls.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Can I get financing through AutoVault?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  AutoVault does not directly offer financing. However, we can connect you with third-party lenders who can assist with financing options.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>How can I contact the seller of a car?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  You can contact the seller through the contact form available on the car listing page. Simply fill out the form, and the seller will get in touch with you.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>What should I do if I encounter issues with a purchase?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  If you encounter issues with your purchase, please contact our support team with details of the issue. We will work to resolve the problem as quickly as possible.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Box>
        )}
        {tabValue === 1 && (
          <Box>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Frequently Asked Questions about Selling Cars
            </Typography>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>How do I list my car for sale on AutoVault?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  To list your car for sale on AutoVault, create an account, and use our listing tool to provide details about your car, upload photos, and set your price.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>What should I include in my car listing?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Include detailed information about your car's make, model, year, mileage, condition, and any special features. High-quality photos are recommended to attract buyers.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>How do I set the right price for my car?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Research similar cars in your area to determine a competitive price. Consider factors such as your car's condition, mileage, and market demand.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>What is the best way to promote my car listing?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  To promote your listing, provide a detailed description, use high-quality photos, and share your listing on social media or car-selling forums to increase visibility.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Can I edit my listing after it is published?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Yes, you can edit your listing at any time by logging into your account and updating the details of your listing.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default FaQ;
