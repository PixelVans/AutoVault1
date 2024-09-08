// import React, { useState } from 'react';
// import { Box, Typography, TextField, Button, Paper } from '@mui/material';

// export default function Help() {
//   const [title, setTitle] = useState('');
//   const [message, setMessage] = useState('');
//   const [submitted, setSubmitted] = useState(false);

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Handle form submission here (e.g., send data to an API or server)
//     setSubmitted(true);
//   };

//   return (
//     <Box sx={{ p: 3, textAlign: 'center' }}>
//       <Typography 
//         variant="h4" 
//         gutterBottom 
//         sx={{ 
//           mb: 4, 
//           fontSize: { xs: '1.5rem', sm: '2rem' }, // Responsive font size
//           fontWeight: 'bold'
//         }}
//       >
//         Contact Support
//       </Typography>

//       <Paper sx={{ p: 3, mx: 'auto', maxWidth: '600px', textAlign: 'left' }}>
//         <Typography variant="h6" sx={{ mb: 2 }}>
//           We’re here to help! Please provide the title of your query and your message.
//         </Typography>

//         <form onSubmit={handleSubmit}>
//           <TextField 
//             fullWidth 
//             label="Title" 
//             variant="outlined" 
//             value={title} 
//             onChange={(e) => setTitle(e.target.value)} 
//             sx={{ 
//               mb: 2, 
//               '& .MuiOutlinedInput-root': {
//                 '& fieldset': {
//                   borderColor: '#1e293b', // Default border color
//                 },
//                 '&:hover fieldset': {
//                   borderColor: '#1e293b', // Border color on hover
//                 },
//                 '&.Mui-focused fieldset': {
//                   borderColor: '#1e293b', // Border color when focused
//                 },
//               },
//             }} 
//             required
//           />
//           <TextField 
//             fullWidth 
//             label="Message" 
//             variant="outlined" 
//             multiline 
//             rows={6} 
//             value={message} 
//             onChange={(e) => setMessage(e.target.value)} 
//             sx={{ 
//               mb: 2, 
//               '& .MuiOutlinedInput-root': {
//                 '& fieldset': {
//                   borderColor: '#1e293b', // Default border color
//                 },
//                 '&:hover fieldset': {
//                   borderColor: '#1e293b', // Border color on hover
//                 },
//                 '&.Mui-focused fieldset': {
//                   borderColor: '#1e293b', // Border color when focused
//                 },
//               },
//             }} 
//             required
//           />
//           <Button 
//             type="submit" 
//             variant="contained" 
            
//             sx={{ mt: 2, backgroundColor: '#1e293b', color: '#fff', '&:hover': { backgroundColor: '#334155' } }} // Updated to dark gray
          
//           >
//             Send
//           </Button>
//         </form>

//         {submitted && (
//           <Typography variant="body1" color="success.main" sx={{ mt: 2 }}>
//             Your message has been sent. We will get back to you shortly!
//           </Typography>
//         )}
//       </Paper>
//     </Box>
//   );
// }
import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Paper } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';

export default function Help() {
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [chatOpen, setChatOpen] = useState(false); // Toggle chat window
  const [chatInput, setChatInput] = useState(''); // Chat input
  const [chatMessages, setChatMessages] = useState([
    { sender: 'bot', message: 'Hello! How can I assist you with AutoVault today?' }
  ]); // Chat messages

  // Updated chatbot responses
  const handleChatSubmit = (event) => {
    event.preventDefault();
    if (!chatInput.trim()) return;

    const userMessage = { sender: 'user', message: chatInput };
    const newMessages = [...chatMessages, userMessage];

    // Expanded chatbot responses for more questions
    let botResponse = '';
    const lowerCaseInput = chatInput.toLowerCase();

    if (lowerCaseInput.includes('buy')) {
      botResponse = 'To buy a car on AutoVault, browse listings, choose your car, and contact the seller. We ensure all sellers are verified for a safe experience.';
    } else if (lowerCaseInput.includes('sell')) {
      botResponse = 'To sell a car, register your account, list your vehicle, and provide detailed information. We ll help you reach thousands of buyers!';
    } 
    else if (lowerCaseInput.includes('who') || lowerCaseInput.includes('are')  || lowerCaseInput.includes('you')) {
      botResponse = 'I am your AI assistant, what would you want me to help you with today';
    } else if (lowerCaseInput.includes('account')) {
      botResponse = 'To manage your account, go to the “My Account” section where you can update your personal details, track listings, and manage settings.';
    } else if (lowerCaseInput.includes('hello') || lowerCaseInput.includes('hi')) {
      botResponse = 'Hello! How can I assist you today?'
    } else if (lowerCaseInput.includes('help') || lowerCaseInput.includes('returns')) {
      botResponse = 'what kind of help do you seek';
    } else if (lowerCaseInput.includes('autovault') || lowerCaseInput.includes('owns')) {
      botResponse = 'all information about autovault can be found in the about page';
    } else {
      botResponse =  "I'm not sure about that. Please check the FAQ or contact support for further assistance. However, I can help you with account management, or with buying or selling cars. I'll soon be upgraded to assist you even better with these topics 😊. Nice time!"







;
    }

    setChatMessages([...newMessages, { sender: 'bot', message: botResponse }]);
    setChatInput('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <Box sx={{ p: 3, textAlign: 'center' }}>
      <Typography 
        variant="h4" 
        gutterBottom 
        sx={{ mb: 4, fontSize: { xs: '1.5rem', sm: '2rem' }, fontWeight: 'bold' }}
      >
        Contact Support
      </Typography>

      <Paper sx={{ p: 3, mx: 'auto', maxWidth: '600px', textAlign: 'left' }}>
      <Typography 
    variant="h6" 
    sx={{ 
      mb: 2, 
      fontSize: { xs: '0.875rem', sm: '1rem', md: '1.25rem' } // Adjust font size for mobile (xs) and larger (sm, md) screens
    }}
  >
    We are here to help! Please provide the title of your query and your message.
  </Typography>

        <form onSubmit={handleSubmit}>
          <TextField 
            fullWidth 
            label="Title" 
            variant="outlined" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
            sx={{ mb: 2, '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: '#1e293b' } } }} 
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
            sx={{ mb: 2, '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: '#1e293b' } } }} 
            required
          />
          <Button 
            type="submit" 
            variant="contained" 
            sx={{ mt: 2, backgroundColor: '#1e293b', color: '#fff', '&:hover': { backgroundColor: '#334155' } }}
          >
            Send
          </Button>
        </form>

        {submitted && (
          <Typography variant="body1" color="success.main" sx={{ mt: 2 }}>
            Your message has been sent. We will get back to you shortly!
          </Typography>
        )}

        {/* Live Chat Button */}
        <Button 
          variant="contained" 
          startIcon={<ChatIcon />} 
          sx={{
            mt: 4, backgroundColor: 'blue', fontSize: { xs: '0.75rem', sm: '0.875rem' },
            padding: { xs: '6px 12px', sm: '8px 16px' }, '&:hover': { backgroundColor: 'green' }
          }} // Smaller button for mobile, gray color
          onClick={() => setChatOpen(!chatOpen)}
        >
          {chatOpen ? 'Close Live Chat' : 'Open Live Chat'}
        </Button>

        {/* Live Chat Window */}
        {chatOpen && (
          <Box sx={{ mt: 2, p: 2, border: '1px solid #ccc', borderRadius: '8px', maxHeight: '300px', overflowY: 'auto', backgroundColor: '#f9f9f9' }}>
            <Typography variant="h6" sx={{ mb: 1 , fontSize: { xs: '15px', sm: '1rem', md: '1.25rem' } }}>
              Live Chat
            </Typography>
            {chatMessages.map((msg, index) => (
              <Typography
                key={index}
                sx={{
                  fontSize: { xs: '0.875rem', sm: '1rem', md: '1.25rem' } ,
                  textAlign: msg.sender === 'user' ? 'right' : 'left', mb: 1, color: msg.sender === 'user' ? 'blue' : 'black'
                }}
              >
      
                {msg.message}
              </Typography>
            ))}

            <form onSubmit={handleChatSubmit}>
              <TextField
                fullWidth
                variant="outlined"
                label="Type your message..."
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                sx={{ mt: 2 }}
              />
              <Button type="submit" variant="contained" sx={{ mt: 1, backgroundColor: '#1e293b', '&:hover': { backgroundColor: 'black' } }}>
                Send
              </Button>
            </form>
          </Box>
        )}
      </Paper>
    </Box>
  );
}
