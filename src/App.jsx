import { Box, Text } from '@chakra-ui/react';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Join from './components/Join';
import Plans from './components/Plans';
import Programs from './components/Programs';
import Reasons from './components/Reasons';
import Testimonials from './components/Testimonials';
import './index.css';

export default function App() {
  return (
    <Box className="App">
      <Hero />
      <Programs />
      <Reasons />
      <Plans />
      <Testimonials />
      <Join />
      <Footer />
    </Box>
  );
}
