export const validateJSON = (json: string): boolean => {
    try {
      JSON.parse(json);
      return true;
    } catch (err) {
      return false;
    }
  };
  