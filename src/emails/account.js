const sgMail = require('@sendgrid/mail')
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0



sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'jojo@gmail.com',
        subject: 'Thanks for logging',
        text: `Welcome to our app, ${name}.'`
    })
}

module.exports = {
  sendWelcomeEmail  
}