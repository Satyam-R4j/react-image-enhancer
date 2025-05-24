import axios from "axios";

const API_KEY = 'wxr4o0tw9fhuqv1ps';
const BASE_URL = 'https://techhk.aoscdn.com';

// ✅ MAIN FUNCTION
export const enhancedImageAPI = async (file) => {
    try {
        const task_id = await uploadImage(file); // ✅ Uses correct field name
        console.log("Uploaded, task ID:", task_id);

        const enhancedImageData = await fetchEnhancedImage(task_id);
        console.log("Enhanced Image Data:", enhancedImageData);

        // ✅ CORRECTED: Use actual key for URL (you may need to change this depending on the response)
        console.log("Enhanced Image URL:", enhancedImageData.output_url); // <-- CHANGE 'output_url' if needed

    } catch (error) {
        console.log("Error enhancing image: ", error.message);
    }
};

// ✅ UPLOAD IMAGE FUNCTION
const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append("image_file", file);

    const { data } = await axios.post(`${BASE_URL}/api/tasks/visual/scale`, formData, {
        headers: {
            "Content-Type": "multipart/form-data",
            "X-API-KEY": API_KEY,
        }
    });

    // ✅ FIXED: Correct key from API response
    if (!data?.data?.task_id) {
        throw new Error("Failed to upload image! Task id not found.");
    }

    return data.data.task_id; // ✅ RETURN correct task ID
};
const fetchEnhancedImage = async (task_id) => {
  const maxRetries = 30;
  let retries = 0;

  while (retries < maxRetries) {
    const { data } = await axios.get(`${BASE_URL}/api/tasks/visual/scale/${task_id}`, {
      headers: {
        "X-API-KEY": API_KEY,
      },
    });

    if (!data?.data) {
      throw new Error("Failed to fetch Enhanced Image!");
    }

    const { state, state_detail } = data.data;

    console.log(`Attempt ${retries + 1}: state=${state}, state_detail=${state_detail}`);

    // If your API docs say state=3 means finished, check that, otherwise adjust accordingly
    if (state === 3 || state_detail.toLowerCase() === "completed" || state_detail.toLowerCase() === "success") {
      return data.data.output_url || data.data.image_url || data.data.image;
    }

    retries++;
    await new Promise((resolve) => setTimeout(resolve, 3000)); // 3 sec delay
  }

  throw new Error("Timed out waiting for image enhancement to complete.");
};
