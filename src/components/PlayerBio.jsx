import { Box, Text, VStack, Heading, Grid, Flex, Link } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaInstagram, FaTwitter, FaYoutube, FaFacebook } from 'react-icons/fa'; // Importing social media icons

const MotionBox = motion.create(Box);

function PlayerProfile() {
  const player = {
    frontImg: "ella-1.png",
    secondImg: "basketball-placeholder.png",
    name: "Player Bio",
    bioCategories: [
      { title: "Class", description: "2030" },
      { title: "Position", description: "PG" },
      { title: "Height", description: "5'2\"" },
      { title: "Weight", description: "115 lbs" },
      { title: "Place of Birth", description: "Austin, TX" },
      { title: "High School", description: "Churchill" },
      { title: "Club Team", description: "AUSTIN UNBREAKABLE" },
    ],
    socialMedia: {
      instagram: "https://www.instagram.com/ball.like.a.girl/?igsh=dmZ3bm1rcm02aWI2",
      twitter: "https://twitter.com",
      youtube: "https://www.youtube.com/playlist?list=PLSEq-j7RX3Khy2j9WLxR-43-DBYYgk179",
      facebook: "https://www.facebook.com/p/Takeover-Basketball-Training-100084297781668/",
    },
  };

  return (
    <VStack
      spacing={10}
      p={6}
      bgSize="contain"
      bgPosition="center"
      bgRepeat="no-repeat"
      mt={12}
    >
      <Heading fontSize="4xl" fontWeight="medium" color="#D2042D" fontFamily="'Teko', sans-serif" mb="5">
        {player.name}
      </Heading>
      <Flex flexDirection="row" flexWrap="wrap" justifyContent="center" alignItems="center">
        {/* First Box: Player Image */}
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
        />

        {/* Second Box: Bio Information */}
        <MotionBox
          w={{ base: '90%', md: '500px' }}
          h="800px"
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

          {/* Social Media Icons */}
          <Flex justifyContent="center" mt={8}>
            <Link href={player.socialMedia.instagram} color="#000000" isExternal mx={3} fontSize="2xl" _hover={{ color: '#E4405F' }}>
              <FaInstagram />
            </Link>
            <Link href={player.socialMedia.twitter} color="#000000" isExternal mx={3} fontSize="2xl" _hover={{ color: '#1DA1F2' }}>
              <FaTwitter />
            </Link>
            <Link href={player.socialMedia.youtube} color="#000000" isExternal mx={3} fontSize="2xl" _hover={{ color: '#FF0000' }}>
              <FaYoutube />
            </Link>
            <Link href={player.socialMedia.facebook} color="#000000" isExternal mx={3} fontSize="2xl" _hover={{ color: '#1877F2' }}>
              <FaFacebook />
            </Link>
          </Flex>
        </MotionBox>
      </Flex>
    </VStack>
  );
}

export default PlayerProfile;
