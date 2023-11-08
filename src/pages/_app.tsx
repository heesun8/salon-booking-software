import { type Session } from "next-auth";
// import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import { api } from "~/utils/api";
// import { ShoppingCartProvider } from '../context/ShoppingCartContext'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '../components/chakraUI/ChakraTheme'
import "~/styles/globals.css";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps }, //@typescript-eslint/no-unused-vars
}) => {
  return (
    // <ShoppingCartProvider>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    // </ShoppingCartProvider>
  );
};

export default api.withTRPC(MyApp);
