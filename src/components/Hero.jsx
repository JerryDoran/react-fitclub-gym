import { Box, Button, Flex, Text, Image } from '@chakra-ui/react';
import Header from './Header';
import { motion } from 'framer-motion';

const MotionFlex = motion(Flex);
const MotionImage = motion(Image);

export default function Hero() {
  const transition = { type: 'spring', duration: 2 };
  const mobile = window.innerWidth <= 768 ? true : false;
  return (
    <Flex
      justifyContent="space-between"
      flexDirection={{ base: 'column', lg: 'row' }}
      id="home"
    >
      <div className="blur hero-blur" />
      <Flex
        p="2rem"
        pt="1.5rem"
        flex={3}
        gap="2rem"
        flexDirection="column"
        zIndex={5}
      >
        <Header />
        <Flex
          backgroundColor="#363d42"
          borderRadius="4rem"
          width="fit-content"
          padding="18px 20px"
          textTransform="uppercase"
          color="white"
          position="relative"
          alignItems="center"
          justifyContent="flex-start"
          marginTop={{ base: '2rem', md: '4rem' }}
          fontSize={{ base: 'small', md: 'medium' }}
          alignSelf={{ base: 'center', md: 'flex-start' }}
          transform={{ base: 'scale(.8)', md: 'scale(1)' }}
        >
          <motion.div
            initial={{ left: mobile ? '148px' : '200px' }}
            whileInView={{ left: '8px' }}
            transition={{ ...transition, type: 'tween' }}
            className="hero-slider"
          ></motion.div>
          <Text fontWeight="semibold" zIndex={2}>
            the best fitness club in town
          </Text>
        </Flex>
        <Flex
          flexDirection="column"
          alignItems={{ base: 'center', md: 'flex-start' }}
          gap="1.5rem"
          textTransform="uppercase"
          fontWeight="bold"
          color="white"
          textOverflow="inherit"
        >
          <Box fontSize={{ base: 'xx-large', md: '4.5rem' }}>
            <span className="special-text">Shape </span>
            <Text display="inline">Your</Text>
          </Box>
          <Box fontSize={{ base: 'xx-large', md: '4.5rem' }}>
            <Text display="inline" className="title">
              Ideal body{' '}
            </Text>
          </Box>
          <Box fontSize={{ base: 'medium', md: '1.5rem' }}>
            <Text
              fontWeight={{ base: '400', md: '600' }}
              textTransform="none"
              letterSpacing="1px"
              width={{ base: '100%', md: '80%' }}
              textAlign={{ base: 'center', md: 'left' }}
            >
              In here we will help you to shape and build your ideal body and
              live your life to the fullest
            </Text>
          </Box>
        </Flex>
        {/* FIGURES */}
        <Flex
          gap="2.5rem"
          justifyContent={{ base: 'center', md: 'flex-start' }}
        >
          <Box textAlign={{ base: 'center', md: 'left' }}>
            <Text
              color="white"
              fontSize={{ base: 'large', md: '2rem' }}
              fontWeight="semibold"
            >
              +140
            </Text>
            <Text
              color="#9c9c9c"
              textTransform="uppercase"
              fontWeight="500"
              fontSize={{ base: 'small', md: '2xl' }}
            >
              expert coaches
            </Text>
          </Box>
          <Box textAlign={{ base: 'center', md: 'left' }}>
            <Text
              color="white"
              fontSize={{ base: 'large', md: '2rem' }}
              fontWeight="semibold"
            >
              +978
            </Text>
            <Text
              color="#9c9c9c"
              textTransform="uppercase"
              fontWeight="500"
              fontSize={{ base: 'small', md: '2xl' }}
            >
              members joined
            </Text>
          </Box>
          <Box textAlign={{ base: 'center', md: 'left' }}>
            <Text
              color="white"
              fontSize={{ base: 'large', md: '2rem' }}
              fontWeight="semibold"
            >
              +50
            </Text>
            <Text
              color="#9c9c9c"
              textTransform="uppercase"
              fontWeight="500"
              fontSize={{ base: 'small', md: '2xl' }}
            >
              fitness programs
            </Text>
          </Box>
        </Flex>

        {/* HERO BUTTONS */}
        <Flex gap="2rem" justifyContent={{ base: 'center', md: 'flex-start' }}>
          <Button colorScheme="orange" width="10rem" _hover={{}}>
            Get Started
          </Button>
          <Button
            border="2px solid #f48915"
            variant="outline"
            color="white"
            width="10rem"
            _hover={{}}
          >
            Learn More
          </Button>
        </Flex>
      </Flex>

      {/* RIGHT SIDE */}
      <Box
        flex={1}
        position="relative"
        backgroundColor={{ base: 'none', md: '#f48915' }}
        zIndex={{ base: 10, md: 0 }}
      >
        <Button position="absolute" right="3rem" top="2rem">
          Join Now
        </Button>
        <motion.div
          className="heart-rate"
          transition={transition}
          initial={{ right: '-1rem' }}
          whileInView={{ right: '4rem' }}
        >
          <Image
            src="https://github.com/ZainRk/FitClub-Starter/blob/master/src/assets/heart.png?raw=true"
            alt="heart"
            width="2rem"
          />
          <Text
            display="inline"
            fontWeight="500"
            color="#9c9c9c"
            fontSize="1.25rem"
          >
            Heart Rate
          </Text>
          <Text display="inline" fontWeight="500" color="white" fontSize="2rem">
            116 bpm
          </Text>
        </motion.div>

        {/* HERO IMAGES */}
        <Image
          src="https://github.com/ZainRk/FitClub-Starter/blob/master/src/assets/hero_image.png?raw=true"
          alt="hero"
          position={{ base: 'relative', md: 'absolute' }}
          top={{ base: '4rem', md: '10rem' }}
          right="15rem"
          width={{ base: '15rem', md: '23rem' }}
          left={{ base: '7rem', md: 'auto' }}
          zIndex={1}
          alignSelf={{ base: 'center', md: 'auto' }}
        />
        <MotionImage
          initial={{ right: '11rem' }}
          whileInView={{ right: '30rem' }}
          transition={{ ...transition, duration: '2' }}
          src="https://github.com/ZainRk/FitClub-Starter/blob/master/src/assets/hero_image_back.png?raw=true"
          alt="hero back"
          position="absolute"
          top={{ base: '0rem', md: '4rem' }}
          right="24rem"
          left={{ base: '2rem', md: 'auto' }}
          width="15rem"
          zIndex={-1}
        />

        {/* CALORIES */}
        <MotionFlex
          initial={{ right: '45rem' }}
          whileInView={{ right: '35rem' }}
          transition={{ ...transition, duration: '2' }}
          gap="2rem"
          backgroundColor="#656565"
          borderRadius="5px"
          padding="1rem"
          width="15rem"
          position={{ base: 'relative', md: 'absolute' }}
          top={{ base: '5rem', md: '45rem' }}
          left={{ base: '2rem', md: 'auto' }}
        >
          <Image
            src="https://github.com/ZainRk/FitClub-Starter/blob/master/src/assets/calories.png?raw=true"
            alt="calories"
            width={{ base: '2rem', md: '3rem' }}
          />
          <Flex flexDirection="column" justifyContent="space-between">
            <Text fontWeight="500" color="#9c9c9c">
              Calories Burned
            </Text>
            <Text
              fontWeight="500"
              color="white"
              fontSize={{ base: '1rem', md: '1.5rem' }}
            >
              220 kcal
            </Text>
          </Flex>
        </MotionFlex>
      </Box>
    </Flex>
  );
}
