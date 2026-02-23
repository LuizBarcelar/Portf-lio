import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    // Backend validation
    if (!name || name.length < 3) {
      return NextResponse.json(
        { error: "Nome inválido." },
        { status: 400 }
      );
    }

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Email inválido." },
        { status: 400 }
      );
    }

    if (!message || message.length < 10) {
      return NextResponse.json(
        { error: "Mensagem inválida." },
        { status: 400 }
      );
    }

    // Send email via Resend
    const data = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: process.env.NEXT_PUBLIC_CONTACT_EMAIL as string,
      subject: `Nova mensagem de ${name}`,
      html: `
        <h2>Nova mensagem do Portfólio</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${message}</p>
        <br />
        <p>Enviado automaticamente pelo formulário do portfólio.</p>
      `,
    });

    return NextResponse.json(
      { success: true, message: "Email enviado com sucesso!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erro ao enviar email:", error);
    return NextResponse.json(
      { error: "Erro interno ao enviar email" },
      { status: 500 }
    );
  }
}
