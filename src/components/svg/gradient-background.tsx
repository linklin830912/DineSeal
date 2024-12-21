import React from 'react';
export default function GradientBackground() { 
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"> 
            <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style={{stopColor: "#FF7EB3", stopOpacity: 1}} />
                <stop offset="100%" style={{stopColor: "#FFD6E0", stopOpacity: 1}} />
                </linearGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#gradient)" />
        </svg>        
    );
}