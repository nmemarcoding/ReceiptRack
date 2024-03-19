import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar/navbar';
import useImageToText from '../../hooks/useImageToText';

export default function AddReceiptPage() {
    const [isMobileDevice, setIsMobileDevice] = useState(false);
    const [capturedImages, setCapturedImages] = useState([]);
    const [currentImage, setCurrentImage] = useState(null);
    const [imageTexts, setImageTexts] = useState({}); // Store text for each image

    const { isLoading, text, error } = useImageToText(currentImage);

    useEffect(() => {
        const checkDeviceType = () => {
            const isMobile = /Mobi|Android/i.test(navigator.userAgent);
            setIsMobileDevice(isMobile);
        };

        checkDeviceType();
    }, []);

    useEffect(() => {
        if (text) {
            // Store the text for the current image
            setImageTexts(prevTexts => ({ ...prevTexts, [currentImage]: text }));
            console.log("Extracted text:", text);
        }
    }, [text, currentImage]);

    const handleFileChange = (event) => {
        event.preventDefault(); // Prevent any default action
        const files = event.target.files;
        if (files && files[0]) {
            const file = files[0];
            const reader = new FileReader();
            reader.onload = function(e) {
                const imageUrl = e.target.result;
                setCapturedImages(prevImages => [...prevImages, imageUrl]);
                setCurrentImage(imageUrl); // Set image for OCR
            };
            reader.readAsDataURL(file);
        }
    };

    const handleChooseFromGallery = (event) => {
        event.preventDefault(); // Prevent any default action
        document.getElementById('file-upload').click();
    };

    const handleScanReceipt = (event) => {
        event.preventDefault(); // Prevent any default action
        const fileInput = document.getElementById('file-upload');
        if (isMobileDevice) {
            fileInput.setAttribute('capture', 'environment');
        } else {
            console.log("Opening gallery...");
        }
        fileInput.click();
    };

    return (
        <div className="min-h-screen bg-green-100 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 mb-[90px]">
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                    Add Your Receipt
                </h2>
                <p className="mt-2 text-center text-sm text-gray-600">
                    Upload a photo of your receipt and we'll extract the text for you.
                </p>
                {/* Wrap the input and buttons in a div instead of a form to avoid default form submission behavior */}
                <div>
                    <input
                        type="file"
                        accept="image/*"
                        name="receipt"
                        id="file-upload"
                        className="sr-only"
                        onChange={handleFileChange}
                    />
                    <button
                        type="button" // Specify button type to avoid unintended submissions
                        onClick={handleChooseFromGallery}
                        className="mt-4 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                    >
                        Choose from Gallery
                    </button>
                    {isMobileDevice && (
                        <button
                            type="button" // Specify button type to avoid unintended submissions
                            onClick={handleScanReceipt}
                            className="mt-4 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                            Scan Receipt
                        </button>
                    )}
                </div>
                <div className="mt-4">
                    {capturedImages.map((image, index) => (
                        <div key={index} className="mt-4 w-full">
                            <img src={image} alt={`Captured receipt ${index}`} className="rounded-md border border-gray-300" />
                            {isLoading && currentImage === image && <p>Loading...</p>}
                            {error && currentImage === image && <p>Error occurred: {error}</p>}
                            {imageTexts[image] && <p>Extracted Text: {imageTexts[image]}</p>}
                        </div>
                    ))}
                </div>
            </div>
            <Navbar currentPage={"add-receipt"} />
        </div>
    );
}
