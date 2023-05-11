import { Icon, Flex, Text, Box, Image } from '@chakra-ui/react';
import { programsData } from '../data/programsData';
import { IoBarbellSharp } from 'react-icons/io5';

export default function Programs() {
  return (
    <Flex id="programs" flexDirection="column" gap="2rem" padding="0 2rem">
      <Flex
        gap={{ base: '1rem', md: '5rem' }}
        flexDirection={{ base: 'column', md: 'row' }}
        fontWeight="bold"
        fontSize={{ base: '2xl', md: '3rem' }}
        marginTop={{ base: '2rem', md: 'auto' }}
        justifyContent="center"
        alignItems="center"
        color="white"
        textTransform="uppercase"
        fontStyle="italic"
      >
        <span className="special-text">Explore our</span>
        <span style={{ marginTop: '-5px', padding: 0 }}>Programs</span>
        <span className="special-text">to shape you</span>
      </Flex>
      <Flex
        gap={{ base: '2rem', md: '1rem' }}
        flexDirection={{ base: 'column', md: 'row' }}
      >
        {programsData.map((program) => (
          <Flex
            key={program.heading}
            flexDirection="column"
            backgroundColor="gray"
            padding="2rem"
            gap="1rem"
            color="white"
            justifyContent="space-between"
            borderRadius="10px"
            cursor="pointer"
            transition="all"
            transitionDuration="200ms"
            _hover={{ backgroundColor: '#f48915', marginTop: '-10px' }}
          >
            <Icon as={program.image} width="2rem" height="2rem" />
            <Text fontSize="1.3rem" fontWeight="bold">
              {program.heading}
            </Text>
            <Text lineHeight="1.75" fontSize="1rem">
              {program.details}
            </Text>
            <Flex alignItems="center" gap="2rem">
              <Text>Join Now</Text>
              <Image
                src="https://github.com/ZainRk/FitClub-Starter/blob/master/src/assets/rightArrow.png?raw=true"
                alt="right arrow"
                cursor="pointer"
                width="1rem"
              />
            </Flex>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
}
