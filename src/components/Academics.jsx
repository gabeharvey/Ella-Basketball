import { Box, VStack, Heading, Flex, Link, Text, Grid } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion.create(Box);

function Academics() {
  const academicAchievements = [
    { title: "Grades", description: "A Honor Roll" },
    { title: "Attendance", description: "Perfect Attendance" },
    { title: "Extracurriculars", description: "Member of Debate Team" },
    { title: "Volunteer", description: "5 Volunteer Hours Per Quarter"}
  ];

  return (
    <VStack spacing={10} p={6} mt={12} align="center">
      <Heading fontSize="4xl" fontWeight="medium" color="#D2042D" fontFamily="'Teko', sans-serif" mb="5">
        Academics
      </Heading>

      <Flex direction="column" alignItems="center" width="100%">
        
        {/* First Box: A Photo */}
        <MotionBox
          w={{ base: '90%', md: '500px' }}
          h="400px"
          m="5"
          bgImage="url('/ella-1.png')" 
          bgSize="cover"
          bgPosition="center"
          borderRadius="12px"
          borderWidth="4px"
          borderColor="#D2042D"
          boxShadow="0 0 15px rgba(0, 0, 0, 0.7)"
          initial={{ scale: 0.9, opacity: 0.5 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, ease: 'easeOut' }}
        />
        
        {/* Second Box: Link to Transcripts */}
        <MotionBox
          w={{ base: '90%', md: '500px' }}
          h="120px"
          m="5"
          bgColor="#ebebeb"
          borderRadius="12px"
          borderWidth="4px"
          borderColor="#D2042D"
          boxShadow="0 0 15px rgba(0, 0, 0, 0.7)"
          display="flex"
          alignItems="center"
          justifyContent="center"
          initial={{ scale: 0.9, opacity: 0.5 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, ease: 'easeOut' }}
        >
          <Link
            href="https://transcripts-link.com"  
            isExternal
            color="#000000"
            fontWeight="bold"
            fontSize="lg"
            p={3}
            _hover={{ color: '#e47608', textDecoration: 'underline' }}
          >
            View Academic Transcripts
          </Link>
        </MotionBox>
        
        {/* Third Box: Academic Achievements */}
        <MotionBox
          w={{ base: '90%', md: '500px' }}
          minH="400px"
          m="5"
          bgColor="#ebebeb"
          borderRadius="12px"
          borderWidth="4px"
          borderColor="#D2042D"
          boxShadow="0 0 15px rgba(0, 0, 0, 0.7)"
          p={6}
          initial={{ scale: 0.9, opacity: 0.5 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, ease: 'easeOut' }}
        >
          <Heading fontSize="2xl" fontWeight="bold" color="#D2042D" fontFamily="'Teko', sans-serif" mb="5">
            Academic Achievements
          </Heading>
          <Grid gap={4}>
            {academicAchievements.map((achievement, index) => (
              <Box key={index} p={3} bgColor="transparent" borderRadius="8px">
                <Text color="#000000" fontWeight="bold" fontFamily="'Teko', sans-serif" fontSize="lg">
                  {achievement.title}
                </Text>
                <Text color="#000000" fontFamily="'Roboto+Condensed', system-ui" fontSize="lg" fontWeight="semibold" mt={1}>
                  {achievement.description}
                </Text>
              </Box>
            ))}
          </Grid>
        </MotionBox>

      </Flex>
    </VStack>
  );
}

export default Academics;
