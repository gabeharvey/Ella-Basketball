import { useState } from 'react';
import { Box, VStack, Heading, Input, Textarea, Button, Grid, FormControl, FormLabel } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const MotionBox = motion(Box);

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .send(
        'service_u6gwwl8',
        'template_r05zarg',
        formData,
        'J4zzaGYdzjhfHEOLI'
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          setStatusMessage('Message sent successfully!');
          setIsSubmitting(false);
          setFormData({ name: '', email: '', message: '' });
        },
        (error) => {
          console.error('FAILED...', error);
          setStatusMessage('Failed to send message. Please try again.');
          setIsSubmitting(false);
        }
      );
  };

  return (
    <VStack
      spacing={8}
      align="center"
      justify="center"
      p={10}
      bgImage="url('/basketball.png')"
      bgSize="contain"
      bgPosition="center"
      bgRepeat="no-repeat"
      mb={16}
    >
      <Heading fontSize="4xl" fontWeight="medium" color="#D2042D" fontFamily="'Teko', sans-serif">
        Contact Ella
      </Heading>

      <MotionBox
        w={{ base: '90%', md: '600px' }}
        bgColor="#4B4B4B"
        borderRadius="12px"
        borderColor="#D2042D"
        borderWidth="4px"
        boxShadow="0 0 15px rgba(0, 0, 0, 0.7)"
        p={6}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <form onSubmit={sendEmail}>
          <Grid gap={4}>
            <FormControl id="name">
              <FormLabel color="#F8F8F8" fontFamily="'Teko', sans-serif">
                Name
              </FormLabel>
              <Input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                bgColor="#F8F8F8"
                color="#38383d"
                borderRadius="8px"
                _placeholder={{ color: 'gray.500' }}
              />
            </FormControl>

            <FormControl id="email">
              <FormLabel color="#F8F8F8" fontFamily="'Teko', sans-serif">
                Email
              </FormLabel>
              <Input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                bgColor="#F8F8F8"
                color="#38393d"
                borderRadius="8px"
                _placeholder={{ color: 'gray.500' }}
              />
            </FormControl>

            <FormControl id="message">
              <FormLabel color="#F8F8F8" fontFamily="'Teko', sans-serif">
                Message
              </FormLabel>
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                bgColor="#F8F8F8"
                color="#38393d"
                borderRadius="8px"
                _placeholder={{ color: 'gray.500' }}
                rows={4}
              />
            </FormControl>

            <Button
              mt={4}
              type="submit"
              isLoading={isSubmitting}
              bgColor="#D2042D"
              color="#F8F8F8"
              minW="100%"
              maxW="45%"
              alignSelf="center"
              fontFamily="'Teko', sans-serif"
              fontWeight="medium"
              fontSize="xl"
              borderRadius="8px"
              borderColor="#D2042D"
              borderWidth="3px"
              _hover={{ borderColor: '#F8F8F8' }}
            >
              Submit
            </Button>

            {statusMessage && (
              <Box color={statusMessage.includes('success') ? 'green.300' : 'red.300'} fontFamily="'Teko', sans-serif">
                {statusMessage}
              </Box>
            )}
          </Grid>
        </form>
      </MotionBox>
    </VStack>
  );
}

export default Contact;
