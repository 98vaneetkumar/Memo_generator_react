export const getAllMeme=async()=>{
    const response=await fetch("https://api.imgflip.com/get_memes")
    return await response.json()
}