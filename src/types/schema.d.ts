export interface Field {
    name: string;
    label: string;
    type: string;
    required?: boolean;
  }
  
  export interface FormSchema {
    fields: Field[];
  }
  