'use client';
// components/ImageUpload.tsx
import React, { useState } from 'react';

const ImageUpload: React.FC = () => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [uploadedImageUrl, setUploadedImageUrl] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    // Função para lidar com a seleção do arquivo
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setSelectedFile(e.target.files[0]);
        }
    };

    // Função para fazer o upload da imagem
    const handleUpload = async () => {
        if (!selectedFile) return;

        setIsLoading(true);

        try {
            // Converte o arquivo para base64
            const base64File = await convertToBase64(selectedFile);

            // Faz a requisição para o endpoint de upload
            const response = await fetch('/api/services/images/upload', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ file: base64File }),
            });

            if (!response.ok) {
                throw new Error('Falha ao fazer o upload da imagem');
            }

            const data = await response.json();
            setUploadedImageUrl(data.url); // Define a URL da imagem enviada
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };

    // Função para converter o arquivo para base64
    const convertToBase64 = (file: File): Promise<string> => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result as string);
            reader.onerror = (error) => reject(error);
        });
    };

    return (
        <div>
            <input type="file" accept="image/*" onChange={handleFileChange} />
            <button onClick={handleUpload} disabled={isLoading || !selectedFile}>
                {isLoading ? 'Uploading...' : 'Upload Image'}
            </button>
            {uploadedImageUrl && (
                <div>
                    <p>Image uploaded successfully:</p>
                    <img src={uploadedImageUrl} alt="Uploaded" style={{ width: '200px', height: 'auto' }} />
                </div>
            )}
        </div>
    );
};

export default ImageUpload;
