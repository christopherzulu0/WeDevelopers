import React from "react";
import { Flex } from "@chakra-ui/react";
import { User } from "firebase/auth";
import AuthModal from "../../Auth/AuthModal";
import AuthButtons from "./AuthButtons";
import Icons from "./Icons";
isFinite

type RightContentProps = {
  user: User;
};

const RightContent: React.FC<RightContentProps> = ({ user }) => {
  return (
    <>
      <AuthModal />
      <Flex justifyContent="space-between" alignItems="center">
        {user ? <Icons /> : <AuthButtons />}
      
      </Flex>
    </>
  );
};
export default RightContent;
