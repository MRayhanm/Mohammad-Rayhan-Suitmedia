
import './App.css';
import { Box, Stack, HStack, VStack, Text, Button, ButtonGroup, Center, Menu,
  MenuButton,
  MenuList,
  MenuItem} from '@chakra-ui/react'
import ImageSlider, { SlideData } from './component/imageslide';
import Home from './component/home';
import { FaFacebookSquare, FaTwitter } from "react-icons/fa";
import { BiCopyright } from "react-icons/bi";
import { IconContext } from "react-icons";


function App() {
  return (
    <div>
      <div className='navbar'>
        <HStack spacing={500} pl={100}>
          <Text as='b' fontSize='20px'>
            COMPANY
          </Text>
          <HStack spacing='24px'>
          <Menu>
            <MenuButton as={Button} colorScheme='gray' variant='ghost' color='blackAlpha.700'>
              ABOUT
            </MenuButton>
            <MenuList>
              <MenuItem>HISTORY</MenuItem>
              <MenuItem>VISIPN MISSION</MenuItem>
            </MenuList>
          </Menu>
          <Button colorScheme='gray' variant='ghost' color='blackAlpha.700'>
            OUR WORK
          </Button>
          <Button colorScheme='gray' variant='ghost' color='blackAlpha.700'>
            OUR TEAM
          </Button>
          <Button colorScheme='gray' variant='ghost' color='blackAlpha.700'>
            CONTACT
          </Button>
          </HStack>
        </HStack>
      </div>
      <Box>
        <ImageSlider slides={SlideData} />
      </Box>
      <Home/>
      <div className='footbar'>
        <Center>
          <IconContext.Provider value={{ color: 'white', size: '25px' }}>
            <VStack>
              <HStack spacing='2px'>
              <Text fontSize='xs' color='white'>
                Copyright 
              </Text>
              <IconContext.Provider value={{ color: 'white', size: '15px' }}>
              <BiCopyright/>
              </IconContext.Provider>
              <Text fontSize='xs' color='white'>
                2016. PT Company
              </Text>
              </HStack>
              <HStack>
                <FaFacebookSquare/>
                <FaTwitter/>
              </HStack>
            </VStack>
          </IconContext.Provider>
        </Center>
      </div>
    </div>
  );
}

export default App;
