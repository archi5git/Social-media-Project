const ImageKit=require("imagekit")

const imagekit=new ImageKit({
    publicKey:process.env.IMAGEKIT_PUBLIC,
    privateKey:process.env.IMAGEKIT_PRIVATE,
    urlEndpoint:process.env.IMAGEKIT_URL
});
async function uploadfile(file,fileName){
    const response=await imagekit.upload({
        file:file,
        fileName:fileName,
        folder:"socialmedia"
    })
    return response
}
module.exports = { uploadfile };