"use client";

import { client } from "@/lib/apollo";
import { ApolloProvider } from "@apollo/client";
import React from "react";

interface ProvidersProps {
  children: React.ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
