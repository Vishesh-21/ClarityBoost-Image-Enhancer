export const enhanceImageFunction = async (file: File): Promise<string> => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const enhancedUrl = URL.createObjectURL(file);
  return enhancedUrl;
};
