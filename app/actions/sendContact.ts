"use server";

export async function sendContact(formData: FormData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  if (!name || !email || !message) {
    return { success: false };
  }

  const mailto = `mailto:luizbarcelar2014@gmail.com
  ?subject=Contato de ${name}
  &body=Mensagem: ${message}%0AEmail: ${email}`;

  return {
    success: true,
    mailto,
  };
}
