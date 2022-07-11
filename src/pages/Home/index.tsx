import React from 'react'
const Home = () => {
    return (
        <div style={
            {
                backgroundColor: 'rgb(4,7,32)',
                height: '100%',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
            }
        }>
            <p style={
                {
                   fontSize:'40px',
                    /*设置线性渐变*/
                   background: '-webkit-linear-gradient(left, #0f0, #00f) 0 0 no-repeat',
                   WebkitBackgroundSize:'160px',
                   WebkitBackgroundClip:'text',
                   WebkitTextFillColor:' rgba(255, 255, 255, 0.3)',
                }
            }> coding or die</p>
        </div>
    )
}

export default Home;