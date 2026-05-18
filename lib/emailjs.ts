import emailjs from "@emailjs/browser"

export type ContactFormPayload = {
  name: string
  email: string
  subject: string
  message: string
}

const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? ""
const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? ""
const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? ""

let initialized = false

export function isEmailJsConfigured(): boolean {
  return Boolean(publicKey && serviceId && templateId)
}

function ensureInitialized() {
  if (!initialized && publicKey) {
    emailjs.init({ publicKey })
    initialized = true
  }
}

/** EmailJS şablonundaki değişken adlarıyla eşleşmeli ({{from_name}} vb.) */
export function toTemplateParams(data: ContactFormPayload) {
  return {
    from_name: data.name,
    reply_to: data.email,
    user_email: data.email,
    subject: data.subject,
    message: data.message,
  }
}

export function getEmailJsErrorMessage(error: unknown): string {
  if (error && typeof error === "object" && "text" in error) {
    const text = (error as { text?: string }).text
    if (typeof text === "string" && text.trim()) return text
  }
  if (error instanceof Error && error.message) return error.message
  return "Mesaj gönderilemedi. Lütfen bir süre sonra tekrar deneyin."
}

export async function sendContactEmail(data: ContactFormPayload): Promise<void> {
  if (!isEmailJsConfigured()) {
    throw new Error(
      "EmailJS yapılandırılmadı. .env.local dosyasına NEXT_PUBLIC_EMAILJS_* değerlerini ekleyin.",
    )
  }

  ensureInitialized()
  await emailjs.send(serviceId, templateId, toTemplateParams(data))
}
