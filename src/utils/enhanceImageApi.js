import axios from "axios";

const API_KEY = 'wxr4o0tw9fhuqv1ps'
const BASE_URL = 'https://techhk.aoscdn.com/api/tasks/visual/scale'

export const enhancedImageAPI = async (file) =>
{

    try
    {

        const task_id = await uploadImage(file)
        console.log("Object", task_id);

        const enhancedImageData = await fetchEnhancedImage(task_id)

        console.log("Enhanced Image Data", enhancedImageData);

        console.log(enhancedImageData);
        // return enhancedImageData
    } catch (error)
    {
        console.log("Error enhancing image: ", error.message);

    }
}

const uploadImage = async (file) =>
{
    const formData = new FormData()
    formData.append("image_file", file)
    // For uploading a image

    const { data } = await axios.post(`${BASE_URL}/api/tasks/visual/scale`, formData, {
        headers: {
            "Content-Type": "multipart/form-data",
            "X-API-KEY": API_KEY
        }
    })

    if (!data?.data?.task_id)
    {
        throw new Error("Failed to upload image! Task id not found.")
    }

    return data.data.task_id
    //Post api = /api/tasks/visual/scale
}

const fetchEnhancedImage = async (task_id) =>
{
    //Get api = /api/tasks/visual/scale/{task_id}

    const { data } = await axios.post(`${BASE_URL}/api/tasks/visual/scale/${task_id}`, {
        headers: {
            "X-API-KEY": API_KEY
        }
    })
    console.log(data.data.image);

}