import { useState, useEffect } from "react";
import vedio from "../assets/Map.mp4"



export default function  TextileAssociates() {


  return (
    <div style={{ maxWidth: "900px", margin: "0 auto" }}>
      
<foreignObject x="40" y="40" width="920" height="920">
  <video
    src={vedio}
    autoPlay
    loop
    muted
    playsInline
    style={{
      width: "100%",
      height: "100%",
      objectFit: "cover",

    }}
  />
</foreignObject>





      
    </div>
  );
}

