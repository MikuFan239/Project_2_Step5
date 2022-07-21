//Reference: https://www.geeksforgeeks.org/how-to-create-a-custom-progress-bar-component-in-react-js/
import React from 'react'
  
const ProgressBar = ({bgcolor, progress, height}) => {
     
    const Parentdiv = {
        height: height,
        width: '100%',
        backgroundColor: 'white',
        borderRadius: 50,
      }
      
      const Childdiv = {
        height: '100%',
        width: `${progress}%`,
        backgroundColor: bgcolor,
        borderRadius:40,
        textAlign: 'right'
      }
      
      const progresstext = {
        padding: 10,
        color: 'white',
        // fontSize: '1vw',
        fontWeight: 900
      }
        
    return (
        <div style={Parentdiv}>
        <div style={Childdiv}>
            <span style={progresstext}>{`${progress}%`}</span>
        </div>
        </div>
    )
}
  
export default ProgressBar;