import { Request, Response } from "express";
import { sensores_model } from "../models/sensores.models";
import { HTML_ALERT } from "../helpers/html";
import twilio from "twilio";
import nodemailer from "nodemailer";

const accountSid = "AC037b857f4969a5d55b4f804005e2ee00";
const authToken = "2d42fec7345334b4370f2ff156b89b7d";

export const getSensores = async (req: Request, res: Response) => {
  try {
    const data = await sensores_model.find();
    res.json(data);
  } catch (error) {
    res.json(error);
  }
};

export const editarSensores = async (req: Request, res: Response) => {
  try {
    const data = await sensores_model.updateOne(
      { _id: req.body._id },
      req.body
    );
    res.json(data);
  } catch (error) {
    res.json(error);
  }
};

export const enviarAlertas = async (req: Request, res: Response) => {
  try {
    await enviarEmail();
    await enviarSMS();
    await llamar();
    res.send({
      msg: "Alerta enviada correctamente",
    });
  } catch (error) {
    res.send({ msg: error }).status(404);
  }
};

async function enviarEmail() {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "victorcobo22@gmail.com",
      pass: "meoinfddqnwmfxdi",
    },
  });

  let mailOptions = {
    from: "victorcobo22@gmail.com",
    to: "victorcobo22@gmail.com",
    subject: "ALERTA DE ATENCION!",
    text: "EL paciente necesita Ayuda URGENTE",
    html: HTML_ALERT,
  };

  try {
    let info = await transporter.sendMail(mailOptions);
    console.log("Correo enviado: " + info.response);
  } catch (error) {
    console.log(error);
  }
}

async function enviarSMS() {
  const client = twilio(accountSid, authToken);

  try {
    const message = await client.messages.create({
      body: "EL PACIENTE NECESITA AYUDA URGENTE!!",
      from: "+16206229565", // tu número de Twilio
      to: "+573186877835", // el número de teléfono del destinatario
    });
    console.log("Mensaje enviado con éxito. SID del mensaje:", message.sid);
  } catch (error) {
    console.log("Error al enviar el mensaje:", error);
  }
}

async function llamar() {
  const client = twilio(accountSid, authToken);

  try {
    const call = await client.calls.create({
      url: "http://demo.twilio.com/docs/voice.xml",
      from: "+16206229565", // tu número de Twilio
      to: "+573186877835", // el número de teléfono del destinatario
    });
    console.log("Llamada realizada con éxito. SID de la llamada:", call.sid);
  } catch (error) {
    console.log("Error al realizar la llamada:", error);
  }
}
