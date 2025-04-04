/* eslint-disable react/prop-types */
import { Box, Text, VStack, SimpleGrid, useBreakpointValue } from '@chakra-ui/react';

function VideoCard({ videoSrc, title, description }) {
  return (
    <Box w="300px" h="400px" mb="10px">
      <Box
        w="100%"
        h="100%"
        borderRadius="12px"
        borderWidth="4px"
        borderColor="#D2042D"
        boxShadow="0 0 15px rgba(0, 0, 0, 0.7)"
        overflow="hidden"
        bgColor="#D2042D"
        bgImage="linear-gradient(-45deg, #D2042D 25%, transparent 25%, transparent 50%, #D2042D 50%, #D2042D 75%, transparent 75%, transparent)"
        bgSize="1px 1px"
        display="flex"
        flexDirection="column"
      >
        <Box w="100%" h="70%">
          <video
            src={videoSrc}
            controls
            style={{
              width: '100%',
              height: '100%',
              borderRadius: '12px 12px 0 0',
              objectFit: 'cover',
            }}
          />
        </Box>
        <Box p={3} textAlign="center" bgColor="#F5F5F5" h="30%">
          <Text fontSize="2xl" fontWeight="semibold" color="#000000" fontFamily="'Teko', sans-serif">
            {title}
          </Text>
          <Text mt={2} fontSize="lg" fontWeight="bold" color="#000000" fontFamily="'Roboto+Condensed', system-ui">
            {description}
          </Text>
        </Box>
      </Box>
    </Box>
  );
}

function HoopsFilm() {
  const videos = [
    {
      videoSrc: "ella-vid-1.MOV",
      title: "Ella Game Winner",
      description: "Buzzer Beater",
    },
    {
      videoSrc: "ella-vid-2.MOV",
      title: "Ella Training",
      description: "Intense Basketball Workout",
    },
    {
      videoSrc: "ella-vid-3.MOV",
      title: "Ella Dribbling Techniques",
      description: "Dribbling Skills",
    },
    {
      videoSrc: "ella-vid-4.MOV",
      title: "Ella Fastbreak",
      description: "Fastbreak Skills",
    },
    {
      videoSrc: "../video5.mp4",
      title: "Ella Defense Capabilities",
      description: "Defensive Skills",
    },
    {
      videoSrc: "../video6.mp4",
      title: "Ella Passing Skills",
      description: "Amazing Assists",
    },
    {
      videoSrc: "../video7.mp4",
      title: "Ella All-Star Game",
      description: "All-Star Highlights",
    },
    {
      videoSrc: "../video8.mp4",
      title: "Ella High School Highlights",
      description: "Elite High School Plays",
    },
  ];

  const columns = useBreakpointValue({ base: 1, sm: 1, md: 2, lg: 3, xl: 4 });

  return (
    <VStack
      spacing={8}
      align="center"
      justify="center"
      p={{ base: 5, md: 10 }}
      bgImage="url('/basketball.png')"
      bgSize="contain"
      bgPosition="center"
      bgRepeat="no-repeat"
      mt={{ base: 12, md: 16 }}
      mb={{ base: 12, md: 16 }}
    >
      <Text fontSize="4xl" fontWeight="medium" color="#D2042D" fontFamily="'Teko', sans-serif">
        Hoops Film
      </Text>
      <SimpleGrid columns={columns} spacing={{ base: 3, sm: 5 }} justifyItems="center">
        {videos.map((video, index) => (
          <VideoCard
            key={index}
            videoSrc={video.videoSrc}
            title={video.title}
            description={video.description}
          />
        ))}
      </SimpleGrid>
    </VStack>
  );
}

export default HoopsFilm;