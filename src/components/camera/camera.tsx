import React, { useEffect, useRef, useState } from 'react';
import { RxCross2 } from "react-icons/rx";
import { MdOutlineAddAPhoto } from "react-icons/md";
import { MdOutlineSettingsBackupRestore } from "react-icons/md";
import { IoIosSave } from "react-icons/io";

enum CameraStateEnum {
  TAKEING_PHOTO,
  PREVIEWING_PHOTO,
  SAVE_PHOTO
}
type CameraProps = {
  setIsOff: (isOff: boolean) => void,
  setImageTaken:(canvas : HTMLCanvasElement) => void,
}
export default function Camera(props: CameraProps) { 
  const divRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  // const imageRef = useRef<HTMLImageElement | null>(null);

  const [cameraState, setCameraState] = useState<CameraStateEnum>(CameraStateEnum.TAKEING_PHOTO);
  const [cameraStream, setCameraStream] = useState<MediaStream | null>(null);

  useEffect(() => {
    // Request access to the camera
    const startCamera = async () => {
      try {
        if (videoRef.current && divRef.current && canvasRef.current) {
          videoRef.current.width = divRef.current?.clientWidth;
          videoRef.current.height = divRef.current?.clientHeight;
          
          canvasRef.current.width = divRef.current?.clientWidth;
          canvasRef.current.height = divRef.current?.clientHeight;
        }
        const stream = await navigator.mediaDevices.getUserMedia({ video: {width: divRef.current?.clientWidth,   // Request a width of 1280px
          height: divRef.current?.clientHeight,
        }
        });
        
        if (videoRef.current && divRef.current && canvasRef.current) {
          videoRef.current.srcObject = stream;
          setCameraStream(stream);
        }
      } catch (error) {
        console.error("Error accessing the camera:", error);
      }
    };

    startCamera();

    // Cleanup when component unmounts
    return () => {
      if (videoRef.current?.srcObject) {
        const stream = videoRef.current.srcObject as MediaStream;
        stream.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  const handleCameraClick = () => { 
    const context = canvasRef.current?.getContext('2d');
    setCameraState(CameraStateEnum.PREVIEWING_PHOTO);
    
    // Draw video frame onto the canvas
    if (context && videoRef.current && canvasRef.current && divRef.current) {
      const videoWidth = videoRef.current.videoWidth; // Actual video resolution
      const videoHeight = videoRef.current.videoHeight;
      
      context.drawImage(videoRef.current, 0, 0, videoWidth, videoHeight);
      // // Convert canvas to data URL and display it
      // const imageDataUrl = canvasRef.current?.toDataURL('image/png');
      // if(imageRef.current && imageDataUrl)
      //   imageRef.current.src = imageDataUrl;
    }
  }

  const handleCameraRefresh = () => {
    setCameraState(CameraStateEnum.TAKEING_PHOTO);
  }
  const handleCameraSave = () => { 
    if (canvasRef.current) { 
      const image = canvasRef.current;      
      props.setImageTaken(image);
    }
  }
  const handleCameraClose = () => { 
    if (cameraState !== null) { 
      
      cameraStream?.getTracks().forEach((track) => {
        track.stop();
      });
      setCameraStream(null);
      props.setIsOff(true);
    }
  }
    return (
      <div ref={divRef}
        className={`w-full h-full absolute left-0 top-0 flex justify-center items-center overflow-hidden ${window.innerWidth <= 768 ? "max-h-[720px]" : ""}`}>
        <button className='absolute left-1 top-1 z-30' onClick={handleCameraClose}><RxCross2 size={20} className='fill-svgStrokeColor0'/></button>
        <video ref={videoRef} autoPlay className={ `${cameraState===CameraStateEnum.TAKEING_PHOTO ? "" : "hidden"} absolute left-0 top-0`} />
        <canvas ref={canvasRef} />
          <div className="w-full absolute bottom-10 flex justify-center items-center flex-row">
          <button onClick={handleCameraClick} className='p-3 border-2 border-svgStrokeColor0 bg-fontColor0 rounded-[50%]'>
            <MdOutlineAddAPhoto size={30} className='fill-svgStrokeColor0'/>
          </button>
            {cameraState === CameraStateEnum.PREVIEWING_PHOTO && <div className='flex flex-col'>           
            <button onClick={handleCameraRefresh} className='p-1 mb-3 bg-fontColor0 rounded-[50%]'>
              <MdOutlineSettingsBackupRestore size={20} className='fill-svgStrokeColor0' /></button>            
            <button onClick={handleCameraSave} className='p-1 bg-fontColor0 rounded-[50%]'>
              <IoIosSave size={20} className='fill-svgStrokeColor0'/>
            </button>
          </div>}          
          </div>
        </div>        
    );
}