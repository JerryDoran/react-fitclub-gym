import { Box, Button, Flex, Input, Text } from '@chakra-ui/react';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Join() {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(formRef.current);

    emailjs
      .sendForm(
        'service_9626sbm',
        'template_n02f609',
        formRef.current,
        'IE7ILYoQqrxWnvJkS'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <Flex
      id="join"
      padding="0 2rem"
      gap={{ base: '1rem', md: '10rem' }}
      justifyContent="center"
      flexDirection={{ base: 'column', md: 'row' }}
    >
      {/* Left */}
      <Box color="white" fontSize="3rem" fontWeight="bold" position="relative">
        <Box
          position="absolute"
          width="10.5rem"
          border="2px solid orange"
          borderRadius="10px"
        />
        <Box>
          <Text display="inline" className="special-text">
            READY TO{' '}
          </Text>
          <Text display="inline">LEVEL UP</Text>
        </Box>
        <Box>
          <Text display="inline">YOUR BODY</Text>
          <Text display="inline" className="special-text">
            {' '}
            WITH US?
          </Text>
        </Box>
      </Box>
      {/* Right */}
      <Flex justifyContent="center" alignItems="flex-end">
        <form className="emailContainer" ref={formRef} onSubmit={sendEmail}>
          <Input
            type="email"
            name="user_email"
            placeholder="Enter your email"
            outline="none"
            _placeholder={{ opacity: 1, color: 'gray.300' }}
            color="white"
          />
          <Button
            backgroundColor="orange.400"
            color="white"
            letterSpacing="1px"
            padding="2px 30px"
            _hover={{ backgroundColor: 'orange.500' }}
            type="submit"
          >
            Join Now
          </Button>
        </form>
      </Flex>
    </Flex>
  );
}
