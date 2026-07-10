import Mailgen from 'mailgen';
import nodemailer from 'nodemailer';

const sendEmail = async(options) => {
    const mailGenerator = new Mailgen({
        theme : 'default',
        product : {
            name : 'TrackForge',
            link : 'http://localhost:3000/'
        }
    })

    const emailTextual = mailGenerator.generatePlaintext(options.mailgenContent);

    const emailHTML = mailGenerator.generate(options.mailgenContent);

    const transporter = nodemailer.createTransport({
        host : process.env.SMTP_HOST,
        port : process.env.SMTP_PORT,
        auth : {
            user : process.env.SMTP_USER,
            pass : process.env.SMTP_PASS
        }

    })

    const mail = {
        from: "demomailtrap@Mailgen.io",
        to : options.email,
        subject : options.subject,
        text : emailTextual,
        html : emailHTML
    }


    try{
        await transporter.sendMail(mail);
        console.log('Email sent successfully \n',mail);
    } catch (error) {
        console.error('Error sending email:', error);
        throw error;
    }
}

const registerMail = (username) => {
    return {
        body : {
            name : username,
            intro : 'Welcome to TrackForge! We are very excited to have you on board.',
            outro : 'Need help, or have questions? Just reply to this email, we\'d love to help.'
        }
    }
}

export  {registerMail, sendEmail};
