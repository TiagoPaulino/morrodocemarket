// pages/api/upload.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import cloudinary from '@/lib/cloudinary/cloudinary';

export const config = {
    api: {
        bodyParser: {
            sizeLimit: '10mb', // Aumenta o limite para 10 MB
        },
    },
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { file } = req.body;

        try {
            // Faz o upload da imagem para o Cloudinary
            const uploadResponse = await cloudinary.uploader.upload(file, {
                folder: 'teste', // Pasta opcional no Cloudinary
            });
            const optimizeUrl = cloudinary.url(uploadResponse.public_id, {
                fetch_format: 'auto',
                quality: 'auto',
            })
            console.log(optimizeUrl)
            res.status(200).json({
                url: uploadResponse.secure_url, // URL segura da imagem
                public_id: optimizeUrl, // ID público da imagem no Cloudinary
            });
        } catch (error) {
            console.error('Erro no upload para Cloudinary:', error);
            res.status(500).json({ error: 'Falha ao fazer o upload da imagem' });
        }
    } else {
        res.status(405).json({ error: 'Método não permitido' });
    }
}
