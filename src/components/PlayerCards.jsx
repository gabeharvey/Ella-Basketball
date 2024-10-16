/* eslint-disable react/prop-types */
import { Box, Text, VStack, SimpleGrid, useBreakpointValue } from '@chakra-ui/react';
import { useState } from 'react';

function Card({ frontImg, bio, flipSound }) {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    flipSound.play();
    setFlipped(!flipped);
  };

  return (
    <Box w="300px" h="400px" perspective="1000px" mb="10px">
      <Box
        w="100%"
        h="100%"
        position="relative"
        style={{ transformStyle: 'preserve-3d' }}
        transition="transform 0.6s"
        transform={flipped ? 'rotateY(180deg)' : 'rotateY(0deg)'}
        onClick={handleFlip}
      >
        <Box
          position="absolute"
          style={{ backfaceVisibility: 'hidden' }}
          w="100%"
          h="100%"
          borderRadius="12px"
          boxShadow="0 0 15px rgba(0, 0, 0, 0.7)"
        >
          <Box
            bgImage={`url(${frontImg})`}
            bgSize="cover"
            bgPosition="center"
            borderRadius="12px"
          borderColor="#D2042D"
          borderWidth="3px"
            w="100%"
            h="100%"
            display="flex"
            alignItems="center"
            justifyContent="center"
          ></Box>
        </Box>
        <Box
          bgColor="#4B4B4B"
          bgImage="linear-gradient(-45deg, #ebebeb 25%, transparent 25%, transparent 50%, #38393d 50%, #000000 75%, transparent 75%, transparent)"
          bgSize="1px 1px;"
          position="absolute"
          style={{ backfaceVisibility: 'hidden' }}
          w="100%"
          h="100%"
          borderRadius="12px"
          borderColor="#D2042D"
          borderWidth="3px"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          boxShadow="0 0 15px rgba(0, 0, 0, 0.7)"
          transform="rotateY(180deg)"
          p={5}
        >
          {/* <Text fontSize="2xl" fontWeight="bold" color="#F28C28" fontFamily="'Teko', sans-serif">
            {name}
          </Text> */}
          <Text mt={4} color="#F8F8F8" fontFamily="'Teko', sans-serif" fontSize="xl" fontWeight="medium" textAlign="center">
          {bio}
          </Text>
        </Box>
      </Box>
    </Box>
  );
}

function PlayerCards() {
  const flipSound = new Audio('/card-flip.mp3');

  const players = [
    {
      frontImg: "basketball-placeholder.png",
      name: "Ella Ramirez",
      bio: "Ella Ramirez is a sharpshooter, with an average of 45% from three-point range, making her a dangerous player on the perimeter."
    },
    {
      frontImg: "basketball-placeholder.png",
      name: "Ella Ramirez",
      bio: "Ella Ramirez is known for her explosive first step, allowing her to drive past defenders with ease."
    },
    {
      frontImg: "basketball-placeholder.png",
      name: "Ella Ramirez",
      bio: "Ella Ramirez has a remarkable basketball IQ, enabling her to read defenses and make smart decisions on the court."
    },
    {
      frontImg: "basketball-placeholder.png",
      name: "Ella Ramirez",
      bio: "Ella Ramirez excels in transition, averaging over 15 fast break points per game."
    },
    {
      frontImg: "basketball-placeholder.png",
      name: "Ella Ramirez",
      bio: "Ella Ramirez has shown impressive defensive skills, regularly locking down the opponent's best scorer."
    },
    {
      frontImg: "basketball-placeholder.png",
      name: "Ella Ramirez",
      bio: "Ella Ramirez possesses exceptional ball-handling skills, often leaving defenders off balance."
    },
    {
      frontImg: "basketball-placeholder.png",
      name: "Ella Ramirez",
      bio: "Ella Ramirez is known for her clutch performances, scoring an average of 20 points in the fourth quarter."
    },
    {
      frontImg: "basketball-placeholder.png",
      name: "Ella Ramirez",
      bio: "Ella Ramirez has developed a reliable mid-range jump shot, adding versatility to her offensive game."
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
        Player Cards    
      </Text>
      <Text fontSize="2xl" fontWeight="medium" color="#ebebeb" fontFamily="'Teko', sans-serif">
        Click on a card to see player card info
        </Text>

      <SimpleGrid
        columns={columns}
        spacing={{ base: 3, sm: 5 }} 
        justifyItems="center"
      >
        {players.map((player, index) => (
          <Card 
            key={index} 
            frontImg={player.frontImg} 
            name={player.name} 
            bio={player.bio}
            flipSound={flipSound} 
          />
        ))}
      </SimpleGrid>
    </VStack>
  );
}

export default PlayerCards;