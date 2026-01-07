# EmailJS Setup Guide for LogiCore Technologies

## Overview
This guide will help you set up EmailJS to send professional contact form emails using the custom HTML template.

## Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (allows 200 emails/month)
3. Verify your email address

## Step 2: Add Email Service
1. In EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail recommended):
   - **Gmail**: Select Gmail and connect your `logicore.tech1@gmail.com` account
   - Follow OAuth connection process
4. Note down your **Service ID** (e.g., `service_abc123`)

## Step 3: Create Email Template
1. Go to **Email Templates** in EmailJS dashboard
2. Click **Create New Template**
3. Copy the entire content from `emailjs-template.html` in your project root
4. Paste it into the **Content** section (HTML editor)
5. Set template settings:
   - **Template Name**: `LogiCore Contact Form`
   - **Subject**: `{{subject}}` (uses dynamic subject from form)
6. Click **Save**
7. Note down your **Template ID** (e.g., `template_xyz789`)

## Step 4: Get Public Key
1. Go to **Account** → **General** in EmailJS dashboard
2. Find your **Public Key** (e.g., `pub_key_123abc`)
3. Copy this key

## Step 5: Configure Environment Variables
1. Open `.env` file in your project root
2. Replace placeholders with your actual values:

```env
VITE_EMAILJS_SERVICE_ID=service_abc123
VITE_EMAILJS_TEMPLATE_ID=template_xyz789
VITE_EMAILJS_PUBLIC_KEY=pub_key_123abc
```

## Step 6: Template Variables Reference
Your template uses these variables (automatically sent from the contact form):

| Variable | Description | Example |
|----------|-------------|---------|
| `{{from_name}}` | Sender's full name | John Doe |
| `{{reply_to}}` | Sender's email address | john@example.com |
| `{{message}}` | Message content | I'm interested in your services... |
| `{{to_email}}` | Your company email | logicore.tech1@gmail.com |
| `{{subject}}` | Email subject line | New inquiry from John Doe |
| `{{timestamp}}` | Submission date/time | Monday, January 7, 2026, 10:30 AM EAT |

## Step 7: Test the Integration
1. Restart your dev server if running:
   ```bash
   npm run dev
   ```
2. Go to the Contact page
3. Fill out and submit the form
4. Check your `logicore.tech1@gmail.com` inbox
5. Verify the email looks professional and all details are correct

## Template Features
✅ **Modern gradient header** with LogiCore branding  
✅ **Organized contact details** in styled boxes  
✅ **Message content** clearly highlighted  
✅ **Quick reply button** for instant responses  
✅ **Professional footer** with company info  
✅ **Fully responsive** design for mobile viewing  
✅ **Timestamp tracking** for inquiry management

## Customization Tips
- **Colors**: Modify gradient colors in the CSS to match your brand
- **Logo**: Replace the text logo with an image URL if you have one
- **Footer**: Update company info, phone, and address as needed
- **Styling**: Adjust padding, fonts, and spacing in the `<style>` section

## Troubleshooting

### Emails Not Sending
- Check browser console for errors
- Verify all three env variables are set correctly
- Ensure EmailJS service is connected and active
- Check EmailJS dashboard quota (free tier: 200/month)

### Template Variables Not Showing
- Ensure variable names match exactly: `{{from_name}}` not `{{fromName}}`
- Check EmailJS template editor for syntax errors
- Verify templateParams in Contact.tsx match template variables

### Gmail Connection Issues
- Use App Passwords if 2FA is enabled on Gmail
- Ensure "Less secure app access" is enabled (if not using OAuth)
- Try reconnecting the Gmail service in EmailJS

## Free Tier Limits
- **200 emails/month**
- **Single service connection**
- **Unlimited templates**

For higher volume, upgrade to EmailJS paid plans.

## Support
- EmailJS Documentation: https://www.emailjs.com/docs/
- LogiCore Contact: logicore.tech1@gmail.com
- WhatsApp: +254 790 010567

---

**Setup Complete!** 🎉  
Your contact form now sends beautiful, professional emails automatically.
