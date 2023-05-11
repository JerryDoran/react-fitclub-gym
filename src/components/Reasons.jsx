import { Flex, Grid, Image, Text, Box } from '@chakra-ui/react';

export default function Reasons() {
  return (
    <Flex
      id="reasons"
      padding="0 2rem"
      gap="2rem"
      flexDirection={{ base: 'column', md: 'row' }}
    >
      <Grid
        flex="1 1"
        gridTemplateColumns="12rem 14rem 30rem"
        gap="1rem"
        gridAutoRows={{ base: 'auto', md: '1fr' }}
        overflow={{ base: 'hidden', md: 'auto' }}
      >
        <Image
          src="https://github.com/ZainRk/FitClub-Starter/blob/master/src/assets/image1.png?raw=true"
          alt="gym website"
          objectFit="cover"
          width="12rem"
          gridRow="1/3"
          height="28rem"
        />
        <Image
          src="https://github.com/ZainRk/FitClub-Starter/blob/master/src/assets/image2.png?raw=true"
          alt="gym website"
          objectFit="cover"
          width="40rem"
          height="16rem"
          gridColumn="2/4"
        />
        <Image
          src="https://github.com/ZainRk/FitClub-Starter/blob/master/src/assets/image3.png?raw=true"
          alt="gym website"
          width="20rem"
          gridColumn="2/3"
          gridRow="2"
        />
        <Image
          src="https://github.com/ZainRk/FitClub-Starter/blob/master/src/assets/image4.png?raw=true"
          alt="gym website"
          width="25rem"
          objectFit="cover"
          gridRow="2"
          gridColumn="3/4"
          height="11.2rem"
        />
      </Grid>
      <Flex
        textTransform="uppercase"
        flex="1 1"
        gap="1rem"
        flexDirection="column"
      >
        <Text fontWeight="bold" color="orange.400">
          some reasons
        </Text>
        <Box color="white" fontSize="3rem" fontWeight="bold">
          <Text display="inline" className="special-text">
            why
          </Text>
          <Text display="inline"> choose us?</Text>
        </Box>
        <Flex flexDirection="column" gap="1rem">
          <Flex
            alignItems="center"
            gap="1rem"
            fontSize="1rem"
            color="white"
            fontWeight="bold"
          >
            <Image
              src="https://github.com/ZainRk/FitClub-Starter/blob/master/src/assets/tick.png?raw=true"
              alt="gym site"
              width="2rem"
              height="2rem"
            />
            <Text textTransform="uppercase">over 140+ expert coaches</Text>
          </Flex>
          <Flex
            alignItems="center"
            gap="1rem"
            fontSize="1rem"
            color="white"
            fontWeight="bold"
          >
            <Image
              src="https://github.com/ZainRk/FitClub-Starter/blob/master/src/assets/tick.png?raw=true"
              alt="gym site"
              width="2rem"
              height="2rem"
            />
            <Text textTransform="uppercase">
              train smarter and faster than before
            </Text>
          </Flex>
          <Flex
            alignItems="center"
            gap="1rem"
            fontSize="1rem"
            color="white"
            fontWeight="bold"
          >
            <Image
              src="https://github.com/ZainRk/FitClub-Starter/blob/master/src/assets/tick.png?raw=true"
              alt="gym site"
              width="2rem"
              height="2rem"
            />
            <Text textTransform="uppercase">
              1 free program for new members
            </Text>
          </Flex>
          <Flex
            alignItems="center"
            gap="1rem"
            fontSize="1rem"
            color="white"
            fontWeight="bold"
          >
            <Image
              src="https://github.com/ZainRk/FitClub-Starter/blob/master/src/assets/tick.png?raw=true"
              alt="gym site"
              width="2rem"
              height="2rem"
            />
            <Text textTransform="uppercase">reliable partners</Text>
          </Flex>
        </Flex>
        <Text color="gray.400" fontWeight="semibold" marginTop="2rem">
          OUR PARTNERS
        </Text>
        <Flex gap="1rem">
          <Image
            src="https://github.com/ZainRk/FitClub-Starter/blob/master/src/assets/nb.png?raw=true"
            alt="partners"
            width="2.5rem"
          />
          <Image
            src="https://github.com/ZainRk/FitClub-Starter/blob/master/src/assets/adidas.png?raw=true"
            alt="partners"
            width="2.5rem"
          />
          <Image
            src="https://github.com/ZainRk/FitClub-Starter/blob/master/src/assets/nike.png?raw=true"
            alt="partners"
            width="2.5rem"
          />
        </Flex>
      </Flex>
    </Flex>
  );
}
