import axios from "axios";

const baseUrl: string = "https://techhk.aoscdn.com";

export const enhanceImageFunction = async (file: File): Promise<string> => {
  try {
    // code to upload an image
    const taskId = await uploadImage(file);

    //code to enhanced image and fetch enhanced image url
    const enhancedImageUrl = await pollForEnhancedImage(taskId);

    return enhancedImageUrl.image;
  } catch (error) {
    if (error instanceof Error) {
      console.log("Error : ", error.message);
    } else {
      console.log("Internal server error!");
    }
    throw error;
  }
};

//function to upload an image
const uploadImage = async (file: File): Promise<string> => {
  const formData = new FormData();

  formData.append("image_file", file);

  const { data } = await axios.post(
    `${baseUrl}/api/tasks/visual/scale`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
        "X-API-KEY": import.meta.env.VITE_PICWISH_API_KEY,
      },
    }
  );

  if (!data.data.task_id) {
    throw new Error("An error occurred while uploading the image.");
  }

  return data.data.task_id;
};

// function to fetch the data of enhanced image
const fetchEnhancedImage = async (taskId: string): Promise<any> => {
  try {
    const { data } = await axios.get(
      `${baseUrl}/api/tasks/visual/scale/${taskId}`,
      {
        headers: {
          "X-API-KEY": import.meta.env.VITE_PICWISH_API_KEY,
        },
      }
    );

    if (!data.data) {
      throw new Error("An error occurred while enhancing the image.");
    }

    return data.data;
  } catch (error) {
    if (error instanceof Error) {
      console.log("Error : ", error.message);
    } else {
      console.log("Internal server error!");
    }
    throw error;
  }
};

// function to await the enhanced image api
const pollForEnhancedImage = async (taskId: string, retries: number = 0) => {
  const result = await fetchEnhancedImage(taskId);

  if (result.state === 4) {
    if (retries >= 20) {
      throw new Error("An error occurred while enhancing the image.");
    }

    await new Promise((res) => {
      setTimeout(res, 2000);
    });

    return pollForEnhancedImage(taskId, retries + 1);
  }

  return result;
};
