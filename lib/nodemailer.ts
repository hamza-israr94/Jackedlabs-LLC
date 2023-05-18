import nodemailer from 'nodemailer';

const email = process.env.EMAIL;

const password = process.env.EMAIL_PASS;

export const transpoter = nodemailer.createTransport({
  host: 'smtpout.secureserver.net',
  port: 587,
  auth: {
    user: email,
    pass: password,
  },
});

export const mailOptions = {
  from: email,
  to: email,
};
