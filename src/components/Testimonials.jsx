import { Box, Flex, Image, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { testimonialsData } from '../data/testimonialsData';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);
const MotionImage = motion(Image);
const MotionText = motion(Text);

export default function Testimonials() {
  const [selected, setSelected] = useState(0);
  const testimonialsLength = testimonialsData.length;

  const transition = { type: 'spring', duration: 2 };

  return (
    <Flex
      gap="1rem"
      padding="0 2rem"
      flexDirection={{ base: 'column', md: 'row' }}
      id="testimonials"
    >
      {/* Left Side */}
      <Flex
        flexDirection="column"
        flex="1 1"
        gap="2rem"
        textTransform="uppercase"
        color="whiteAlpha.800"
      >
        <Text color="#f48915" fontWeight="bold" letterSpacing="1px">
          Testimonials
        </Text>
        <Text
          className="special-text"
          letterSpacing="1px"
          fontWeight="bold"
          fontSize="3rem"
          marginBotton="-2rem"
        >
          What they
        </Text>
        <Text
          letterSpacing="1px"
          fontWeight="bold"
          fontSize="3rem"
          marginTop="-2rem"
        >
          say about us
        </Text>
        <MotionText
          key={selected}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={transition}
          textTransform="none"
          textAlign="justify"
          letterSpacing="2px"
          lineHeight="40px"
        >
          {testimonialsData[selected].review}
        </MotionText>
        <Box>
          <Text display="inline" color="#f48915">
            {testimonialsData[selected].name} -{' '}
          </Text>
          <Text display="inline">{testimonialsData[selected].status}</Text>
        </Box>
      </Flex>

      {/* Right Side */}
      <Flex
        flex="1"
        position="relative"
        flexDirection={{ base: 'column', md: 'row' }}
        alignItems={{ base: 'center', md: 'auto' }}
        justifyContent={{ base: 'center', md: 'auto' }}
        gap={{ base: '2rem', md: 'auto' }}
      >
        <MotionBox
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={transition}
          position={{ base: 'relative', md: 'absolute' }}
          display={{ base: 'none', md: 'block' }}
          width="17rem"
          height="20rem"
          border="2px solid orange"
          backgroundColor="transparent"
          right="9rem"
          top=".9rem"
        />
        <MotionBox
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={transition}
          position={{ base: 'relative', md: 'absolute' }}
          display={{ base: 'none', md: 'block' }}
          width="17rem"
          height="19rem"
          border="2px solid orange"
          background="linear-gradient(210.41deg, #fa5042 1.14%, #ffa739 100.75%)"
          right="7rem"
          top="4rem"
        />

        <MotionImage
          key={selected}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={transition}
          src={testimonialsData[selected].image}
          alt="testimonial"
          position={{ base: 'relative', md: 'absolute' }}
          width="17rem"
          height="20rem"
          objectFit="cover"
          right={{ base: '0', md: '8rem' }}
          top={{ base: '0', md: '2rem' }}
          alignSelf={{ base: 'center', md: 'auto' }}
        />
        <Flex
          gap="1rem"
          position="absolute"
          display="flex"
          bottom={{ base: '-3rem', md: '1rem' }}
          left={{ base: 'auto', md: '3rem' }}
        >
          <Image
            src="https://github.com/ZainRk/FitClub-Starter/blob/master/src/assets/leftArrow.png?raw=true"
            alt="testimonial"
            width="1.5rem"
            cursor="pointer"
            onClick={() =>
              selected === 0
                ? selected(testimonialsLength - 1)
                : setSelected((prev) => prev - 1)
            }
          />
          <Image
            src="https://github.com/ZainRk/FitClub-Starter/blob/master/src/assets/rightArrow.png?raw=true"
            alt="testimonial"
            width="1.5rem"
            cursor="pointer"
            onClick={() =>
              selected === testimonialsLength - 1
                ? selected(0)
                : setSelected((prev) => prev + 1)
            }
          />
        </Flex>
      </Flex>
    </Flex>
  );
}
