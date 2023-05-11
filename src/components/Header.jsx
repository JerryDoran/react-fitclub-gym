import { Flex, Image, List, ListItem, Box, Divider } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const mobile = window.innerWidth <= 768 ? true : false;

  return (
    <Flex justifyContent="space-between" alignItems="center">
      <Image
        src="https://github.com/ZainRk/FitClub-Starter/blob/master/src/assets/logo.png?raw=true"
        alt="logo"
        width="10rem"
        height="3rem"
      />
      {menuOpen === false && mobile === true ? (
        <Box
          cursor="pointer"
          backgroundColor="#3c3f45"
          padding=".5rem"
          borderRadius="5px"
          onClick={() => setMenuOpen(true)}
          position={{ base: 'fixed', md: 'static' }}
          right={{ base: '10', md: '-200' }}
        >
          <Image
            src="https://github.com/ZainRk/FitClub-Starter/blob/master/src/assets/bars.png?raw=true"
            alt="hamburger"
            width="1.5rem"
            height="1.25rem"
          />
        </Box>
      ) : (
        <List
          display="flex"
          gap="2rem"
          color="white"
          fontWeight="semibold"
          fontSize="16px"
          flexDirection={{ base: 'column', md: 'row' }}
          backgroundColor={{ base: '#3c3f45', md: 'transparent' }}
          padding={{ base: '2rem', md: '0' }}
          zIndex={{ base: '99', md: '7' }}
          position={{ base: 'fixed', md: 'static' }}
          right={{ base: '2rem', md: 'auto' }}
          marginTop={{ base: '20rem', md: 'auto' }}
          borderRadius="7px"
        >
          <ListItem
            cursor="pointer"
            _hover={{ color: '#f48915', transition: 'color 200ms ease-in-out' }}
          >
            <Link
              to="home"
              span={true}
              smooth={true}
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
          </ListItem>
          <ListItem
            cursor="pointer"
            _hover={{ color: '#f48915', transition: 'color 200ms ease-in-out' }}
          >
            <Link
              to="programs"
              span={true}
              smooth={true}
              onClick={() => setMenuOpen(false)}
            >
              Programs
            </Link>
          </ListItem>
          <ListItem
            cursor="pointer"
            _hover={{ color: '#f48915', transition: 'color 200ms ease-in-out' }}
          >
            <Link
              to="reasons"
              span={true}
              smooth={true}
              onClick={() => setMenuOpen(false)}
            >
              Why Us
            </Link>
          </ListItem>
          <ListItem
            cursor="pointer"
            _hover={{ color: '#f48915', transition: 'color 200ms ease-in-out' }}
          >
            <Link
              to="plans"
              span={true}
              smooth={true}
              onClick={() => setMenuOpen(false)}
            >
              Plans
            </Link>
          </ListItem>
          <ListItem
            cursor="pointer"
            _hover={{ color: '#f48915', transition: 'color 200ms ease-in-out' }}
          >
            <Link
              to="testimonials"
              span={true}
              smooth={true}
              onClick={() => setMenuOpen(false)}
            >
              Testimonials
            </Link>
          </ListItem>
        </List>
      )}
    </Flex>
  );
}
