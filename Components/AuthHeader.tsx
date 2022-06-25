import React from "react";
import { Box, Flex, Image } from "@chakra-ui/react";
import { User } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useSetRecoilState } from "recoil";

import { auth } from "../firebase/clientApp";

import RightContent from "./RightContent";

import router from "next/router";


const AuthHeader: React.FC = () => {
  const [user] = useAuthState(auth);

  // Use <Link> for initial build; implement directory logic near end
 

  return (
    <Flex
      bg="white"
      height="44px"
      padding="6px 12px"
      justifyContent={{ md: "space-between" }}
    >
    
     
      <RightContent user={user as User} />
    </Flex>
  );
};
export default AuthHeader;
