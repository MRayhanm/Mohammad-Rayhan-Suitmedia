import { Container, VStack, Text, HStack, Box, FormControl,
    FormLabel, Input, Center, Button} from "@chakra-ui/react";
import { BsLightbulb, BsBank2 } from "react-icons/bs";
import { FaBalanceScale } from "react-icons/fa";
import { IconContext } from "react-icons";
const Home = () => {
    return (
      <div>
        <Container>
            <VStack>
                <Text as='b'>OUR VALUES</Text>
                <IconContext.Provider
                    value={{ color: 'white', size: '25px' }}>
                    <HStack spacing={10}>
                        <Box height={200} width={300} bgColor='red.400'>
                            <VStack p={25}>
                                <BsLightbulb/>
                                <Text color='white' as='b'>INNOVATIVE</Text>
                                <Text color='white' fontSize='sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, Maxime exercitationem dolorem deserunt, unde, eaque ipsa?</Text>
                            </VStack>
                        </Box>
                        <Box height={200} width={300} bgColor='green.400'>
                            <VStack p={25}>
                                <BsBank2/>
                                <Text color='white' as='b'>LOYALITY</Text>
                                <Text color='white' fontSize='sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, Maxime exercitationem dolorem deserunt, unde, eaque ipsa?</Text>
                            </VStack>
                        </Box>
                        <Box height={200} width={300} bgColor='blue.400'>
                            <VStack p={25}>
                                <FaBalanceScale/>
                                <Text color='white' as='b'>RESPECT</Text>
                                <Text color='white' fontSize='sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, Maxime exercitationem dolorem deserunt, unde, eaque ipsa?</Text>
                            </VStack>
                        </Box>
                    </HStack>
                </IconContext.Provider>
            </VStack>
        </Container>
        <Center pt={100} pb={100}>
            <VStack width={400}>
            <Text as='b' fontSize='xl'>CONTACT US</Text>
                <FormControl>
                    <FormLabel>Name</FormLabel>
                    <Input height={30} type='text' />
                </FormControl>
                <FormControl>
                    <FormLabel>Email</FormLabel>
                    <Input height={30} type='email' />
                </FormControl>
                <FormControl>
                    <FormLabel>Message</FormLabel>
                    <Input height={100} type='text' />
                </FormControl>
                <Button
                    width={400}
                    colorScheme='teal'
                    type='submit'>
                    Submit
                </Button>
            </VStack>
        </Center>
      </div>
    );
  };
  export default Home;