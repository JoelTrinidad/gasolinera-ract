import {
  Grid,
  Heading,
  Box,
  Image,
  GridItem,
  Button,
  Stack,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { ArrowBackIcon } from "@chakra-ui/icons";
import ImageConfeti from "../assets/img/confeti.png";
import ImageCar from "../assets/img/car.png";
import ImageGasoil from "../assets/img/gasoil.png";
import ImageMoney from "../assets/img/money-pig.png";
import ImageDrop from "../assets/img/drop.png";
import ImageCapital from "../assets/img/capital.png";

export default function Resume() {
  const surtidor = localStorage.getItem("surtidor");
  const typeGasoil = localStorage.getItem("typeGasoil");
  const priceGasoil = localStorage.getItem("priceGasoil");
  const payment = localStorage.getItem("payment");
  const quantity = localStorage.getItem("quantity");

  const resumeData = [
    {
      title: "Surtidor",
      result: surtidor,
      image: "",
    },
  ];

  return (
    <>
      <Grid marginBottom={5} textAlign="center">
        <Heading size="lg">¡Puedes suministrarte"</Heading>
        <Image
          src={ImageConfeti}
          alt="Congratulations"
          width="100px"
          margin="0 auto"
        />
      </Grid>
      <Grid textAlign="center" paddingBottom="4rem">
        <Heading marginBottom="40px" size="lg">
          Resumen del pedido:
        </Heading>
        <Grid templateColumns="repeat(2, 1fr)" gap={9}>
          <GridItem
            w="100%"
            borderRadius="10"
            boxShadow="0px 4px 10px -4px rgb(117 117 177)"
            padding="25px 15px"
          >
            <Box minHeight="50px">
              <Heading size="sm">Titulo</Heading>
              <Heading size="md" fontWeight="800">
                Resultado
              </Heading>
            </Box>
            <Image
              src={ImageConfeti}
              alt="alt de prueba"
              width="100px"
              margin="0 auto"
            />
          </GridItem>
        </Grid>
      </Grid>
    </>
  );
}
