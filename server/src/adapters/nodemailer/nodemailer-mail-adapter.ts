import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "0a5b17039c6e51",
    pass: "bf88736fe7bb98"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: 'Equipe Feedet <oi@feedget.com>',
      to: 'Camila Marçal <camiladcmarcal@gmail.com>',
      subject,
      html: body,
    });
  }
}