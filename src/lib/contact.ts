export type InquiryPayload = {
  name: string;
  email: string;
  message: string;
  website?: string;
};

export function validateInquiry(payload: InquiryPayload) {
  if (payload.website) {
    return { ok: false as const, error: "Spam detected." };
  }

  if (!payload.name.trim() || !payload.email.trim() || !payload.message.trim()) {
    return { ok: false as const, error: "Please complete all required fields." };
  }

  if (!/^\S+@\S+\.\S+$/.test(payload.email)) {
    return { ok: false as const, error: "Please enter a valid email address." };
  }

  return { ok: true as const };
}
