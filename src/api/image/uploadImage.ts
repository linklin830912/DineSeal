import { BlobServiceClient, BlockBlobClient, ContainerClient } from '@azure/storage-blob';

const blobSasUrl = process.env.NEXT_PUBLIC_AZURE_BLOB_SAS_URL!;
const containerName = process.env.NEXT_PUBLIC_AZURE_STORAGE_CONTAINER_NAME!;
const imageUrlData = process.env.NEXT_PUBLIC_AZURE_BLOB_SAS_URL_DATA_SAVED!;

export async function uploadImage(newBlobName: string, buffer: Buffer){ 
  try {
    const blobServiceClient: BlobServiceClient = new BlobServiceClient(blobSasUrl);
    const containerClient: ContainerClient = blobServiceClient.getContainerClient(containerName);
    const blockBlobClient: BlockBlobClient = containerClient.getBlockBlobClient(newBlobName);
    const result = await blockBlobClient.uploadData(buffer, {
    blobHTTPHeaders: {
      blobContentType: "image/png", // Set the Content-Type header
      },
    });
    console.log("image uploaded status: ", result._response.status)
  } catch (e){console.log(e);}
}

export async function uploadImageFromCanvas(newBlobName: string, canvas:HTMLCanvasElement | undefined) {
  console.log("uploading") 
  if (canvas) canvas.toBlob(async (blob) => { 
    console.log("blob ", blob) 
     if (blob) { 
          
          const arrayBuffer = await blob.arrayBuffer();
          const buffer = Buffer.from(arrayBuffer);
          uploadImage(newBlobName, buffer);
        }
      }, "image/png")
}