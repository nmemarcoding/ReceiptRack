import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar/navbar';

export default function AddReceiptPage() {
    const [isMobileDevice, setIsMobileDevice] = useState(false);
    const [capturedImages, setCapturedImages] = useState([]);

    useEffect(() => {
        const checkDeviceType = () => {
            const isMobile = /Mobi|Android/i.test(navigator.userAgent);
            setIsMobileDevice(isMobile);
        };

        checkDeviceType();
    }, []);

    const handleFileChange = (event) => {
        const files = event.target.files;
        if (files.length > 0) {
            const file = files[0];
            const reader = new FileReader();
            reader.onload = function(event) {
                setCapturedImages([...capturedImages, event.target.result]);
            };
            reader.readAsDataURL(file);
        }

        // Remove the capture attribute after file is selected
        const fileInput = document.getElementById('file-upload');
        fileInput.removeAttribute('capture');
    };

    const handleChooseFromGallery = () => {
        const fileInput = document.getElementById('file-upload');
        fileInput.removeAttribute('capture'); // Remove capture attribute
        fileInput.click(); // Programmatically trigger file input to choose from gallery
    };

    const handleScanReceipt = () => {
        if (isMobileDevice) {
            const fileInput = document.getElementById('file-upload');
            fileInput.setAttribute('capture', 'environment'); // Set capture attribute to open camera
            fileInput.click(); // Programmatically trigger file input to open camera
        } else {
            // Handle opening the camera for non-mobile devices
            console.log("Opening camera...");
        }
    };

    return (
        <div className="min-h-screen bg-green-100 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 mb-[90px]">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        Add Your Receipt
                    </h2>
                    <p className="mt-2 text-center text-sm text-gray-600">
                        Upload a photo of your receipt
                    </p>
                </div>
                <form className="mt-8 space-y-6" action="#" method="POST">
                    <input
                        type="file"
                        accept="image/*"
                        name="receipt"
                        id="file-upload"
                        className="sr-only"
                        onChange={handleFileChange}
                    />
                    <label
                        htmlFor="file-upload"
                        className="cursor-pointer relative block w-full rounded-md border border-gray-300 bg-white py-2 px-3 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                    >
                        <span>Choose from Gallery</span>
                        <span className="absolute right-0 px-3 py-2 text-green-600">📂</span>
                    </label>
                    {isMobileDevice && (
                        <button
                            type="button"
                            onClick={handleScanReceipt}
                            className="cursor-pointer relative block w-full rounded-md border border-gray-300 bg-white mt-4 py-2 px-3 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                        >
                            <span>Scan Receipt</span>
                            <span className="absolute right-0 px-3 py-2 text-green-600">📷</span>
                        </button>
                    )}
                </form>
                <div className="mt-4">
                    {capturedImages.map((image, index) => (
                        <img key={index} src={image} alt={`Captured ${index}`} className="mt-4 w-full rounded-md border border-gray-300" />
                    ))}
                </div>
            </div>
            <Navbar currentPage={"add-receipt"} />
        </div>
    );
}
