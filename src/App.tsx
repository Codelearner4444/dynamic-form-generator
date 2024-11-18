import React, { useState } from "react";
import JSONEditor from "./components/JSONEditor";
import FormGenerator from "./components/FormGenerator";
import Layout from "./components/Layout";

const App: React.FC = () => {
  const [jsonSchema, setJsonSchema] = useState("");

  return (
    <Layout>
      <JSONEditor schema={jsonSchema} onSchemaChange={setJsonSchema} />
      <FormGenerator schema={jsonSchema} />
    </Layout>
  );
};

export default App;
