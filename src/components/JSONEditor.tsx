import React, { useState } from "react";

interface JSONEditorProps {
  schema: string;
  onSchemaChange: (schema: string) => void;
}

const JSONEditor: React.FC<JSONEditorProps> = ({ schema, onSchemaChange }) => {
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    try {
      JSON.parse(value);
      setError(null);
    } catch (err) {
      setError("Invalid JSON");
    }
    onSchemaChange(value);
  };

  return (
    <div className="flex flex-col">
      <textarea
        className="border rounded p-2 w-full h-60"
        value={schema}
        onChange={handleChange}
        placeholder="Enter JSON schema here..."
      />
      {error && <div className="text-red-500 text-sm mt-2">{error}</div>}
    </div>
  );
};

export default JSONEditor;
