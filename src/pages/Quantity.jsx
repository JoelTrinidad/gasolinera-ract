import { useState, useEffect } from "react";
import { Grid, Heading, GridItem, Button, Stack, Box } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";

export default function Quantity() {
  const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

  return (
    <>
      <Grid marginBottom={5}>
        <Heading size="lg">Pulse importe</Heading>
        <Heading size="lg" fontWeight="800">
          {" "}
          Contador de dolares
        </Heading>
      </Grid>
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        {numbers.map((number) => (
          <GridItem
            key={number}
            w="100%"
            h="20"
            bgGradient="linear(to-r, gray.200, gray.500)"
            display="flex"
            alignItems="center"
            justifyContent="center"
            fontWeight="700"
            boxShadow="0px 4px 10px -3px rgb(117 117 177)"
            cursor="pointer"
            _hover={{ shadow: "2xl" }}
            onClick={() => console.log(number)}
          >
            {number}
          </GridItem>
        ))}
      </Grid>
    </>
  );
}
