import { Box, Button, Flex, Icon, Image, Text } from '@chakra-ui/react';
import { plansData } from '../data/plansData';

export default function Plans() {
  return (
    <Flex
      id="plans"
      margin={{ base: '0px', md: 'auto' }}
      padding="0 2rem"
      gap="4rem"
      position="relative"
      zIndex={3}
      flexDirection="column"
    >
      <div className="blur plan-blur-1" />
      <div className="blur plan-blur-2" />
      <Flex
        gap={{ base: '1rem', md: '10rem' }}
        fontSize="40px"
        justifyContent="around"
        flexDirection={{ base: 'column', md: 'row' }}
        alignItems="center"
        width="100%"
        color="whiteAlpha.800"
        fontSize={{ base: '2xl', md: '40px' }}
        marginTop={{ base: '1rem', md: 'auto' }}
      >
        <Text className="special-text">READY TO START</Text>
        <Text marginBottom="5px">YOUR JOURNEY</Text>
        <Text className="special-text">NOW WITH US</Text>
      </Flex>

      {/* Plan Cards */}
      <Flex
        alignItems="center"
        justifyContent="center"
        gap="3rem"
        flexDirection={{ base: 'column', md: 'row' }}
      >
        {plansData.map((plan) => (
          <Flex
            key={plan.name}
            flexDirection="column"
            backgroundColor="#656565"
            color="white"
            gap="2rem"
            padding="1.5rem"
            width="20rem"
            borderRadius="10px"
            className="plan"
          >
            <Icon as={plan.icon} fill="#f48915" width="2rem" height="2rem" />
            <Text fontSize="1rem" fontWeight="bold" letterSpacing="1px">
              {plan.name}
            </Text>
            <Text fontSize="3rem" fontWeight="bold">
              ${plan.price}
            </Text>
            <Flex flexDirection="column" gap="1rem">
              {plan.features.map((feature, index) => (
                <Flex key={index} alignItems="center" gap="1rem">
                  <Image
                    src="https://github.com/ZainRk/FitClub-Starter/blob/master/src/assets/whiteTick.png?raw=true"
                    alt="tick"
                    width="1rem"
                  />
                  <Text>{feature}</Text>
                </Flex>
              ))}
            </Flex>
            <Box fontSize=".8rem">
              <Text>See more benefits -></Text>
            </Box>
            <Button className="btn">Join Now</Button>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
}
