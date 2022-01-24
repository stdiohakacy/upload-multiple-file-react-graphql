import { createUploadLink } from "apollo-upload-client";
import React from "react";
import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client'
import FileUpload from "./FileUpload";

function App() {
  const uploadLink = createUploadLink({ 
  uri: "http://localhost:3001/graphql" });
  const client = new ApolloClient({ link: uploadLink, cache: new InMemoryCache(), });
  return (
    <div className="App">
      <ApolloProvider client={client}>
        <FileUpload />
      </ApolloProvider>
    </div>
  );
}
export default App;