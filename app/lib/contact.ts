const WHATSAPP_NUMBER = "554891645940";

export function buildWhatsAppLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
