
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface FormGeneratorProps {
  schema: string;
}

const FormGenerator: React.FC<FormGeneratorProps> = ({ schema }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const parsedSchema = schema ? JSON.parse(schema) : { fields: [] };

  const onSubmit: SubmitHandler<any> = (data) => {
    console.log("Form Data:", data);
    alert("Form submitted successfully!");
  };

  const renderField = (field: any) => {
    switch (field.type) {
      case "text":
        return (
          <div key={field.name} className="mb-4">
            <label className="block mb-1">{field.label}</label>
            <input
              {...register(field.name, { required: field.required })}
              type="text"
              className="border rounded p-2 w-full"
            />
            {errors[field.name] && (
              <span className="text-red-500 text-sm">This field is required</span>
            )}
          </div>
        );
      case "number":
        return (
          <div key={field.name} className="mb-4">
            <label className="block mb-1">{field.label}</label>
            <input
              {...register(field.name, { required: field.required })}
              type="number"
              className="border rounded p-2 w-full"
            />
            {errors[field.name] && (
              <span className="text-red-500 text-sm">This field is required</span>
            )}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-4 border rounded">
      {parsedSchema.fields.map((field: any) => renderField(field))}
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Submit
      </button>
    </form>
  );
};

export default FormGenerator;
