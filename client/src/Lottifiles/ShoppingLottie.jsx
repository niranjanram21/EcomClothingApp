/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import animationData from './ShoppingCart.json'// Your Lottie animation JSON file

const LottieAnimation = ({ width, height }) => {
    const containerRef = useRef(null);

    useEffect(() => {
        const anim = lottie.loadAnimation({
            container: containerRef.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: animationData,
        });

        return () => anim.destroy(); // Clean up animation on unmount
    }, []);

    return <div ref={containerRef} style={{ width, height }} />;
};

export default LottieAnimation;
