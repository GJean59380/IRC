import React from 'react';
import { Container, Box, Text, Tabs, TabList, Tab, TabPanel, TabPanels } from "@chakra-ui/react";
import Login from "../components/Authentification/Login";
import Signup from "../components/Authentification/Signup";

const Homepage = () => {
    return (
        <Container maxW='xl' centerContent>
            <Box
                d="flex"
                justifyContent="center"
                p={3}
                bg={"white"}
                w="100%"
                m="40px 0 15px 0"
                borderRadius="lg"
                borderWidth="1px"
                textAlign="center"
            >
                <Text fontSize="4xl" fontFamily="Work sans" color="black">IRC Chat Project</Text>
            </Box>
            <Box bg="white" w="100%" p={4} borderRadius="lg" borderWidth="1px">
                <Tabs variant='soft-rounded'>
                    <TabList mb="1em">
                        <Tab width="50%">Login</Tab>
                        <Tab width="50%">Sign Up</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel><Login/></TabPanel>
                        <TabPanel><Signup/></TabPanel>
                    </TabPanels>
                </Tabs>
            </Box>
        </Container>
    )
}

export default Homepage