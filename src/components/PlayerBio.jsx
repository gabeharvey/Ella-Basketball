import { Box, Text, VStack, Heading, Grid , Flex} from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion.create(Box); 

function PlayerProfile() {
  const player = {
    frontImg: "basketball-placeholder.png",
    secondImg: "basketball-placeholder.png",
    name: "Player Bio", 
    bioCategories: [
      { title: "Class", description: "2030" },
      { title: "Position", description: "SG" },
      { title: "Height", description: "5'5\"" },
      { title: "Weight", description: "115 lbs" },
      { title: "Place of Birth", description: "San Antonio, TX" },
      { title: "High School", description: "Churchill High School" },
      { title: "Club Team", description: "Elite" },
    ],
  };

  return (
    <VStack
      spacing={10}
      p={6}
      // bgImage="url('/basketball.png')"
      bgSize="contain"
      bgPosition="center"
      bgRepeat="no-repeat"
      mt={12} 
    >
      <Heading fontSize="4xl" fontWeight="medium" color="#D2042D" fontFamily="'Teko', sans-serif" mb="5">
        {player.name}
      </Heading>
      <Flex flexDirection="row" flexWrap="wrap" justifyContent="center" alignItems="center">
      {/* <Box
        w={{ base: '90%', md: '400px' }}
        h="500px" 
        minW="350px"
        borderRadius="12px"
        boxShadow="0 0 15px rgba(0, 0, 0, 0.7)"
        overflow="hidden"
      > */}
        <MotionBox
          bgImage={`url(${player.frontImg})`} 
          bgSize="cover"
          bgPosition="center"
          borderRadius="12px"
          borderColor="#ebebeb"
          borderWidth="3px"
          minH="500px"
          minW="350px"
          m="5"
          initial={{ scale: 0.9, opacity: 0.5 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, ease: 'easeOut' }} 
        >
      </MotionBox>
      <MotionBox
        w={{ base: '90%', md: '500px' }}
        h="750px"
        minW="320px"
        m="5"
        bgColor="#ebebeb"
        bgImage="linear-gradient(-45deg, #ebebeb 25%, transparent 25%, transparent 50%, #ebebeb 50%, #ebebeb 75%, transparent 75%, transparent)"
        bgSize="1px 1px"
        borderRadius="12px"
        borderWidth="5px"
        borderColor="#D2042D"
        boxShadow="0 0 15px rgba(0, 0, 0, 0.7)"
        p={6}
        initial={{ scale: 0.9, opacity: 0.5 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, ease: 'easeOut' }} 
      >
        <Grid gap={4}>
          {player.bioCategories.map((category, index) => (
            <Box key={index} p={3} bgColor="transparent" borderRadius="8px">
              <Text color="#000000" fontWeight="bold" fontFamily="'Teko', sans-serif" fontSize="lg">
                {category.title}
              </Text>
              <Text color="#000000" fontFamily="'Roboto+Condensed', system-ui" fontSize="lg" fontWeight="semibold" mt={1}>
                {category.description}
              </Text>
            </Box>
          ))}
        </Grid>
      </MotionBox>
      {/* </Box> */}
      </Flex>
    </VStack>
  );
}

export default PlayerProfile;