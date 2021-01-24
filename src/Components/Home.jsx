import React from 'react';
import app from "../firebase"
import ImagesUpload from "./ImagesUpload"

const Home = () => {
    return ( 
        <>
        <h1>Home</h1>
        <button onClick={() => app.auth().signOut()}>sign out</button>
        <h2>upload styles</h2>
        <ImagesUpload/>
        </>
     );
}
 
export default Home;
