import {React , useEffect, useRef} from 'react'

const Test = () => {


    const txt = useRef(null)
    useEffect(() => {
    
        window.addEventListener("deviceorientation", (event) => {
            let alpha = event.alpha; // Rotation around Z-axis (0° - 360°)
            let beta = event.beta;   // Rotation around X-axis (-180° to 180°)
            let gamma = event.gamma; // Rotation around Y-axis (-90° to 90°)
        
            console.log(event)
            txt.current.innerText = `Alpha: ${alpha}, Beta: ${beta}, Gamma: ${gamma}`
        });
        return () => {
          // Runs on Unmount
        };
    });
    function requestGyroPermission() {
        if (typeof DeviceOrientationEvent.requestPermission === 'function') {
            DeviceOrientationEvent.requestPermission()
                .then(permissionState => {
                    if (permissionState === "granted") {
                        startSensors();
                    } else {
                        alert("Permission denied. Please allow motion access in settings.");
                    }
                })
                .catch(console.error);
        } else {
            startSensors(); // Non-iOS devices
        }
    }
    
    function startSensors() {
        window.addEventListener("deviceorientation", (event) => {
            console.log(`Alpha: ${event.alpha}, Beta: ${event.beta}, Gamma: ${event.gamma}`);
        });
    
        window.addEventListener("devicemotion", (event) => {
            console.log(`X: ${event.acceleration.x}, Y: ${event.acceleration.y}, Z: ${event.acceleration.z}`);
        });
    }
    

    return (
    <div  style={{  color : "white", fontSize : "40px" }}>
        gyro test
        <p ref={txt}> </p>
        <button onclick="requestGyroPermission">Enable Gyroscope</button>

    </div>
  )
}

export default Test