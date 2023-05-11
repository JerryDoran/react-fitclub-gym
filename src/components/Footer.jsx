import { Box, Flex, Image } from '@chakra-ui/react';

export default function Footer() {
  return (
    <Box position="relative">
      <Box border="1px solid #777" zIndex={5} />
      <Flex
        padding="1rem 2rem"
        flexDirection="column"
        gap="4rem"
        alignItems="center"
        justifyContent="center"
        height="20rem"
        zIndex={5}
      >
        <Flex gap="4rem">
          <Image
            src="https://github.com/ZainRk/FitClub-Starter/blob/master/src/assets/github.png?raw=true"
            alt="social icon"
            height="2rem"
            width="2rem"
            cursor="pointer"
          />
          <Image
            src="https://github.com/ZainRk/FitClub-Starter/blob/master/src/assets/instagram.png?raw=true"
            alt="social icon"
            height="2rem"
            width="2rem"
            cursor="pointer"
          />
          <Image
            src="https://github.com/ZainRk/FitClub-Starter/blob/master/src/assets/linkedin.png?raw=true"
            alt="social icon"
            height="2rem"
            width="2rem"
            cursor="pointer"
          />
        </Flex>
        <Box>
          <Image
            src="https://github.com/ZainRk/FitClub-Starter/blob/master/src/assets/logo.png?raw=true"
            alt="logo"
            width="10rem"
          />
        </Box>
      </Flex>
      {/* <div className="footer-blur-1" />
      <div className="footer-blur-2" /> */}
    </Box>
  );
}
