import emailjs from "@emailjs/browser";

const serviceId = "service_oqaz9ms";
const templateId = "template_kcatcjl";
const publicKey = "7fuMNtM66LZ-lSvwD";

const SendEmail = async (content) => {
  const toSend = {
    from_name: content.from_name,
    to_name: content.to_name,
    to_email: content.to_address,
    message: content.message,
  };

  try {
    const resp = await emailjs.send(serviceId, templateId, toSend, publicKey);
    return { status: 1, message: resp.status };
  } catch (err) {
    return { status: 0, message: err };
  }
};

export default SendEmail;
