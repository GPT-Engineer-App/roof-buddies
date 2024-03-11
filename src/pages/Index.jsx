import React from "react";
import { Box, Container, Heading, Text, Stack, Button, Image, Flex, Icon, useColorModeValue } from "@chakra-ui/react";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW={"5xl"}>
      <Stack textAlign={"center"} align={"center"} spacing={{ base: 8, md: 10 }} py={{ base: 20, md: 28 }}>
        <Heading fontWeight={600} fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }} lineHeight={"110%"}>
          Quality Roofing <br />
          <Text as={"span"} color={"orange.400"}>
            For Your Home
          </Text>
        </Heading>
        <Text color={"gray.500"} maxW={"3xl"}>
          We provide the best in class roofing services with a team of experienced professionals dedicated to keeping your home safe and secure no matter the weather.
        </Text>
        <Stack spacing={6} direction={"row"}>
          <Button rounded={"full"} px={6} colorScheme={"orange"} bg={"orange.400"} _hover={{ bg: "orange.500" }}>
            Get a Quote
          </Button>
          <Button rounded={"full"} px={6}>
            Learn More
          </Button>
        </Stack>
        <Flex w={"full"}>
          <Image rounded={"md"} alt={"feature image"} src="https://images.unsplash.com/photo-1635424710928-0544e8512eae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxyb29maW5nfGVufDB8fHx8MTcxMDE1MzE2M3ww&ixlib=rb-4.0.3&q=80&w=1080" objectFit={"cover"} />
        </Flex>
      </Stack>

      <Box p={4}>
        <Stack spacing={4} divider={<StackDivider borderColor={useColorModeValue("gray.100", "gray.700")} />}>
          <Feature icon={<Icon as={FaPhoneAlt} w={5} h={5} />} title={"Emergency Services"} text={"Available 24/7 for any roofing emergencies. Fast and reliable service when you need it most."} />
          <Feature icon={<Icon as={FaEnvelope} w={5} h={5} />} title={"Free Consultation"} text={"Contact us for a free roofing consultation. We’ll assess your needs and provide you with a competitive quote."} />
        </Stack>
      </Box>
    </Container>
  );
};

const Feature = ({ title, text, icon }) => {
  return (
    <Stack direction={"row"} align={"center"}>
      <Flex w={8} h={8} align={"center"} justify={"center"} rounded={"full"} bg={"orange.100"} color={"orange.500"}>
        {icon}
      </Flex>
      <Stack direction={"column"} spacing={0} fontSize={"sm"}>
        <Text fontWeight={600}>{title}</Text>
        <Text color={"gray.500"}>{text}</Text>
      </Stack>
    </Stack>
  );
};

const StackDivider = ({ borderColor }) => <Box border={0} borderBottom={1} borderColor={borderColor} />;

export default Index;
