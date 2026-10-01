/**
 * Inquiry Form Configuration
 * Powered by Web3Forms (Free, fast email delivery with no backend required)
 * 
 * Quick Setup:
 * 1. Go to https://web3forms.com
 * 2. Enter your email to get your free access key instantly.
 * 3. Paste it in `.env` as `VITE_WEB3FORMS_ACCESS_KEY=your-key` OR replace `YOUR_ACCESS_KEY_HERE` below.
 */

export const inquiryConfig = {
  // Paste your Web3Forms Access Key here or in .env
  web3formsAccessKey: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "efa50f56-d682-4b78-8f58-b610e1b0d74a",

  // Email where inquiries will be received
  recipientEmail: "sdmdkop@gmail.com",

  // Optional WhatsApp inquiry number (format: country code + number, e.g. 919822012345)
  whatsappNumber: "918983626675",

  // Default subject line for inquiries
  emailSubject: "New Admission Inquiry - Shri Dattabal High School"
};
