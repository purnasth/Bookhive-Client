"use client";
import { WhiteLogo } from "@/components/micro/logo";
import { Box, Text, Flex } from "@chakra-ui/react";
import { ReactNode, FC } from "react";
type TLayout = {
  children: ReactNode;
  layoutHeader: string;
};
const AuthLayout: FC<TLayout> = ({ children, layoutHeader }) => {
  return (
    <Flex flexDir={["column", "column", "row"]}>
      <Box
        h={["50vh", "50vh", "100vh"]}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        w={["100%", "100%", "50%"]}
        px={"1em"}
        bg={"brand.100"}
        bgImage={
          "https://res.cloudinary.com/dhdqt4xwu/image/upload/v1684644531/bookhive/authbg_kaalqb.png"
        }
        bgSize={"cover"}
        bgPos={"center"}>
        <Box>
          <WhiteLogo />
          <Text
            fontWeight={"bold"}
            fontSize={["20px ", "40px"]}
            color={"white"}>
            Welcome Back!
          </Text>
          <Text my={"1em"}>
            To Keep Connected with us pleased login with your personal info.
          </Text>
        </Box>
      </Box>
      <Box w={["100%", "100%", "50%"]} mx={"2em"} py={"2em"}>
        <Box width={["100%", "100%", "550px"]} mx={"auto"} py={"3em"}>
          <Text fontWeight={"bold"} fontSize={["20px", "20px", "25px"]}>
            {layoutHeader}
          </Text>
          {children}
        </Box>
      </Box>
    </Flex>
  );
};
export default AuthLayout;
