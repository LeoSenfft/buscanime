"use client";

import ThemeContextProvider from "@/contexts/themeContext";
import { client } from "@/lib/apollo";
import { ApolloProvider } from "@apollo/client";
import React from "react";

interface ProvidersProps {
  children: React.ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <ApolloProvider client={client}>
      <ThemeContextProvider>{children}</ThemeContextProvider>
    </ApolloProvider>
  );
}
