import { Box, VStack, Heading, Flex } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

function AskElla() {
  return (
    <VStack spacing={10} p={6} mt={12} align="center"> 
      <Heading fontSize="4xl" fontWeight="medium" color="#D2042D" fontFamily="'Teko', sans-serif" mb="5" textAlign="center">
        Ask Ella
      </Heading>
      <Flex direction="column" alignItems="center" width="100%">
        <MotionBox
          w={{ base: '90%', md: '500px' }}
          h="300px"
          m="5"
          bgColor="#D2042D"
          borderRadius="12px"
          borderWidth="4px"
          borderColor="#D2042D"
          boxShadow="0 0 15px rgba(0, 0, 0, 0.7)"
          p={0} 
          display="flex"
          alignItems="center"
          justifyContent="center"
          overflow="hidden" 
          initial={{ scale: 0.9, opacity: 0.5 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, ease: 'easeOut' }}
        >
          <video width="100%" height="100%" style={{ objectFit: "cover" }} controls>
            <source src="ask-ella-final.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </MotionBox>
      </Flex>
    </VStack>
  );
}

export default AskElla;
