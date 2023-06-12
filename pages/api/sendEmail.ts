import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from 'nodemailer';
import dotenv from "dotenv";

dotenv.config();

const sendEmail = async(req: NextApiRequest, res: NextApiResponse) => {

    const {name, email, message} = req.body;

    const transporter = nodemailer.createTransport({
        port: 465,
            host: 'smtp.gmail.com',
            auth: {
                user: 'aspiazusa@gmail.com',
                pass: process.env.PASSWORD,
            },
            secure: true,
    })

    const mailOptions = {
        from: 'paspiazusabando@gmail.com',
        to: 'paspiazusabando@gmail.com',
        subject: 'Nuevo mensaje desde el formulario',
        text: `Nombre: ${name}\nEmail: ${email}\nMensaje: ${message}`
    }

    try {
        await transporter.sendMail(mailOptions, (error, info) => {
            if(error){
                console.log(error);
            } else{
                console.log('Correo enviado: ' + info.response)
            }
        })

        res.status(200).json({ message: 'Correo eviado con éxito' });

    } catch (error) {
        res.status(500).json({ message: 'Error al enviar el correo' });
    }
}

export default sendEmail;