/* eslint-disable react/prop-types */
import { Box, Text, VStack, SimpleGrid, useBreakpointValue } from '@chakra-ui/react';
import { useState } from 'react';

function Card({ frontImg, bio, funFact, flipSound, cardNumber }) { 
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
        {/* Front Side */}
        <Box
          position="absolute"
          style={{ backfaceVisibility: 'hidden' }}
          w="100%"
          h="100%"
          borderRadius="12px"
          boxShadow="0 0 15px rgba(0, 0, 0, 0.7)"
          bg="#000000" 
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
            flexDirection="column"
            alignItems="center"
            justifyContent="flex-end"
          >
            <Text
              bg="transparent"
              w="100%"
              color="#D2042D"
              fontSize="3xl"
              fontFamily="'Teko', sans-serif"
              fontWeight="bold"
              textAlign="center"
              p={2}
              borderBottomRadius="12px"
            >
              Ella Ramirez #32
            </Text>
          </Box>
        </Box>

        {/* Back Side */}
<Box
  position="absolute"
  style={{ backfaceVisibility: 'hidden' }}
  w="100%"
  h="100%"
  borderRadius="12px"
  borderColor="#D2042D"
  borderWidth="3px" 
  boxShadow="0 0 15px rgba(0, 0, 0, 0.7)"
  transform="rotateY(180deg)"
  bgGradient="linear(to-br, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.7))" 
  display="flex"
  flexDirection="column"
  alignItems="center"
  justifyContent="center"
  p={5}
>
  {/* Team Logo */}
  <Box mb={2}>
    <img src="/club-logo.png" alt="Team Logo" style={{ width: '100px', height: 'auto' }} /> {/* Increased size */}
  </Box>

  {/* Player Stats */}
  <Text mt={2} color="#F8F8F8" fontFamily="'Teko', sans-serif" fontWeight="bold" fontSize="md" textAlign="center"> {/* Decreased font size */}
    Points Per Game: 25
  </Text>
  <Text color="#F8F8F8" fontFamily="'Teko', sans-serif" fontWeight="bold" fontSize="md" textAlign="center"> {/* Decreased font size */}
    Rebounds Per Game: 8
  </Text>
  <Text mt={4} color="#F8F8F8" fontFamily="'Teko', sans-serif" fontWeight="bold" fontSize="md" textAlign="center"> {/* Decreased font size */}
    Card #{cardNumber} 
  </Text>
  <Text mt={4} color="#F8F8F8" fontFamily="'Teko', sans-serif" fontWeight="bold" fontSize="lg" textAlign="center">
    {bio}
  </Text>
  <Text mt={2} color="#F8F8F8" fontFamily="'Teko', sans-serif" fontWeight="bold" fontSize="md" textAlign="center"> {/* Decreased font size */}
    Fun Fact: {funFact}
  </Text>
  <Box
    position="absolute"
    top="0"
    left="0"
    right="0"
    bottom="0"
    borderRadius="12px"
    bg="rgba(255, 255, 255, 0.1)"
    backdropFilter="blur(10px)"
    opacity="0.5"
    pointerEvents="none" 
  />
</Box>

      </Box>
    </Box>
  );
}

function PlayerCards() {
  const flipSound = new Audio('/card-flip.mp3');

  const players = [
    {
      frontImg: "ella-2.png",
      bio: "Ella Ramirez is a sharpshooter, with an average of 45% from three-point range, making her a dangerous player on the perimeter.",
      funFact: "Loves to practice her trick shots.",
      cardNumber: 1
    },
    {
      frontImg: "ella-3.png",
      bio: "Ella Ramirez is known for her explosive first step, allowing her to drive past defenders with ease.",
      funFact: "Enjoys playing the piano.",
      cardNumber: 2
    },
    {
      frontImg: "ella-4.png",
      bio: "Ella Ramirez has a remarkable basketball IQ, enabling her to read defenses and make smart decisions on the court.",
      funFact: "Has a pet parrot named Dunk.",
      cardNumber: 3
    },
    {
      frontImg: "ella-5.png",
      bio: "Ella Ramirez excels in transition, averaging over 15 fast break points per game.",
      funFact: "Favorite movie is Space Jam.",
      cardNumber: 4
    },
    {
      frontImg: "basketball-placeholder-1.png",
      bio: "Ella Ramirez has shown impressive defensive skills, regularly locking down the opponent's best scorer.",
      funFact: "Once scored 50 points in a single game.",
      cardNumber: 5
    },
    {
      frontImg: "basketball-placeholder-1.png",
      bio: "Ella Ramirez possesses exceptional ball-handling skills, often leaving defenders off balance.",
      funFact: "Loves to skateboard in her free time.",
      cardNumber: 6
    },
    {
      frontImg: "basketball-placeholder-1.png",
      bio: "Ella Ramirez is known for her clutch performances, scoring an average of 20 points in the fourth quarter.",
      funFact: "Adores classic rock music.",
      cardNumber: 7
    },
    {
      frontImg: "basketball-placeholder-1.png",
      bio: "Ella Ramirez has developed a reliable mid-range jump shot, adding versatility to her offensive game.",
      funFact: "Wants to become a coach one day.",
      cardNumber: 8
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
      <Text fontSize="2xl" fontWeight="medium" color="#D2042D" fontFamily="'Teko', sans-serif">
        Click on a card to see more info
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
            bio={player.bio} 
            funFact={player.funFact}
            flipSound={flipSound} 
            cardNumber={player.cardNumber} 
          />
        ))}
      </SimpleGrid>
    </VStack>
  );
}

export default PlayerCards;
