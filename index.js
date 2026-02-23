import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import nodemailer from 'nodemailer';
import multer from 'multer';
import path from 'path';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// Get __dirname equivalent for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

// Set view engine to EJS
app.set('view engine', 'ejs');

// Set the views directory - based on your folder structure
app.set('views', join(__dirname, 'views', 'Ejs components'));

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: false }));
app.use(express.json()); // Parse JSON bodies

// Serve static files from 'public' directory
app.use(express.static(join(__dirname, 'public')));

// Configure multer for file uploads with better error handling
const storage = multer.memoryStorage();
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB limit per file (reduced from 10MB)
    files: 5 // Maximum 5 files
  },
  fileFilter: (req, file, cb) => {
    // Allowed file types
    const allowedTypes = /pdf|dwg|rvt|jpg|jpeg|png/;
    const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = allowedTypes.test(file.mimetype);
    
    if (mimetype && extname) {
      return cb(null, true);
    } else {
      cb(new Error('Only PDF, DWG, RVT, JPG, and PNG files are allowed'));
    }
  }
});

// Email transporter configuration
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER || "apnibhook@gmail.com",
    pass: process.env.EMAIL_PASS || "cqvm bfqe rpbw mfcp",
  },
});

// Verify email connection
transporter.verify((error, success) => {
  if (error) {
    console.error("Email transporter error:", error);
  } else {
    console.log("Email server is ready to send messages");
  }
});

// Home routes
app.get('/', (req, res) => {
    res.render('benny');
});

app.get('/benny', (req, res) => {
    res.render('benny');
});

///////////////////////////About US
app.get('/about', (req, res) => {
    res.render('about', { 
        title: 'About Page',
        message: 'Welcome to Benny Estimates!' 
    });
});

app.get('/services-area', (req, res) => {
    res.render('About US/Services Area', {
        title: 'Services Area',
        message: 'Our Service Areas'
    });
});

app.get('/testinomals', (req, res) => {
    res.render('About US/Testinomals', {
        title: 'Services Area',
        message: 'Our Service Areas'
    });
});

////////////////////////////////Our Services
app.get('/construction-takeoff-services', (req, res) => {
    res.render('Our Services/Construction Takeoff Services/Construction Takeoff Services', {
        title: 'Services Area',
        message: 'Our Service Areas'
    });
});

app.get('/cost-estimating-services', (req, res) => {
    res.render('Our Services/Cost Estimating Services/Cost Estimating Services', {
        title: 'Services Area',
        message: 'Our Service Areas'
    });
});

app.get('/commercial-estimating-services', (req, res) => {
    res.render('Our Services/Commercial Estimating Services', {
        title: 'Services Area',
        message: 'Our Service Areas'
    });
});

app.get('/construction-estimating-consultant', (req, res) => {
    res.render('Our Services/Construction Estimating Consultant', {
        title: 'Services Area',
        message: 'Our Service Areas'
    });
});

app.get('/industrial-estimating-services', (req, res) => {
    res.render('Our Services/Industrial Estimating Services', {
        title: 'Services Area',
        message: 'Our Service Areas'
    });
});

app.get('/preliminary-estimate-services', (req, res) => {
    res.render('Our Services/Preliminary Estimate Services', {
        title: 'Services Area',
        message: 'Our Service Areas'
    });
});

app.get('/residential-estimating-services', (req, res) => {
    res.render('Our Services/Residential Estimating Services', {
        title: 'Services Area',
        message: 'Our Service Areas'
    });
});

app.get('/virtual-bid-management', (req, res) => {
    res.render('Our Services/Virtual Bid Management', {
        title: 'Services Area',
        message: 'Our Service Areas'
    });
});

////////////////////////////////// Trades
app.get('/concrete-estimating-services', (req, res) => {
    res.render('Trades/Concrete Estimating Services', {
        title: 'Services Area',
        message: 'Our Service Areas'
    });
});

app.get('/electrical-estimating-services', (req, res) => {
    res.render('Trades/Electrical Estimating Services', {
        title: 'Services Area',
        message: 'Our Service Areas'
    });
});

app.get('/interior-&-exterior-finishes-estimating-services', (req, res) => {
    res.render('Trades/Interior & Exterior Finishes Estimating Services', {
        title: 'Services Area',
        message: 'Our Service Areas'
    });
});

app.get('/lumber-takeoff-services', (req, res) => {
    res.render('Trades/Lumber Takeoff Services', {
        title: 'Services Area',
        message: 'Our Service Areas'
    });
});

app.get('/masonry-estimating-services', (req, res) => {
    res.render('Trades/Masonry Estimating Services', {
        title: 'Services Area',
        message: 'Our Service Areas'
    });
});

app.get('/MEP-estimating-services', (req, res) => {
    res.render('Trades/MEP Estimating Services', {
        title: 'Services Area',
        message: 'Our Service Areas'
    });
});

app.get('/metal-estimating-services', (req, res) => {
    res.render('Trades/Metal Estimating Services', {
        title: 'Services Area',
        message: 'Our Service Areas'
    });
});

app.get('/opening-estimating-services', (req, res) => {
    res.render('Trades/Opening Estimating Services', {
        title: 'Services Area',
        message: 'Our Service Areas'
    });
});

app.get('/siteWork-estimating-services', (req, res) => {
    res.render('Trades/SiteWork Estimating Services', {
        title: 'Services Area',
        message: 'Our Service Areas'
    });
});

app.get('/thermal-&-moisture-protection-estimating-services', (req, res) => {
    res.render('Trades/Thermal & Moisture Protection Estimating Services', {
        title: 'Services Area',
        message: 'Our Service Areas'
    });
});

/////////////////////////////////////////Blogs
app.get('/construction-business-management', (req, res) => {
    res.render('Blogs/Construction Business Management', {
        title: 'Services Area',
        message: 'Our Service Areas'
    });
});

app.get('/construction-business-setup-and-legal', (req, res) => {
    res.render('Blogs/Construction Business Setup and Legal', {
        title: 'Services Area',
        message: 'Our Service Areas'
    });
});

app.get('/construction-materials-and-procurement', (req, res) => {
    res.render('Blogs/Construction Materials and Procurement', {
        title: 'Services Area',
        message: 'Our Service Areas'
    });
});

app.get('/construction-technology-and-innovation', (req, res) => {
    res.render('Blogs/Construction Technology and Innovation', {
        title: 'Services Area',
        message: 'Our Service Areas'
    });
});

app.get('/cost-estimation-and-takeoffs', (req, res) => {
    res.render('Blogs/Cost Estimation and Takeoffs', {
        title: 'Services Area',
        message: 'Our Service Areas'
    });
});

app.get('/sustainable-and-advanced-construction', (req, res) => {
    res.render('Blogs/Sustainable and Advanced Construction', {
        title: 'Services Area',
        message: 'Our Service Areas'
    });
});

////////////////Our Projects
app.get('/our-projects', (req, res) => {
    res.render('Our Projects/Our Projects', {
        title: 'Services Area',
        message: 'Our Service Areas'
    });
});

///////////////Contact Us - GET route (display form)
app.get('/contact-us', (req, res) => {
    res.render('Contact Us/Contact Us', {
        title: 'Contact Us',
        message: 'Get in touch with us'
    });
});

///////////////Contact Us - POST route (handle form submission)
app.post('/api/contact-us', (req, res) => {
  // Use upload middleware with error handling
  upload.array('files', 5)(req, res, async function(err) {
    // Handle multer errors
    if (err) {
      console.error("Multer error:", err);
      if (err.code === 'LIMIT_FILE_SIZE') {
        return res.status(400).json({
          success: false,
          message: "File too large. Maximum size is 5MB per file."
        });
      }
      if (err.code === 'LIMIT_FILE_COUNT') {
        return res.status(400).json({
          success: false,
          message: "Too many files. Maximum 5 files allowed."
        });
      }
      if (err.code === 'LIMIT_UNEXPECTED_FILE') {
        return res.status(400).json({
          success: false,
          message: "Unexpected file field. Please use 'files' as the field name."
        });
      }
      return res.status(400).json({
        success: false,
        message: err.message || "File upload error"
      });
    }

    try {
      const { name, company, email, phone, subject, message } = req.body;
      const files = req.files;

      // Log received data for debugging
      console.log("Received form submission:", {
        name,
        company,
        email,
        phone,
        subject,
        message: message?.substring(0, 50) + "...",
        fileCount: files?.length || 0
      });

      // Validate required fields
      if (!name || !company || !email || !phone || !subject || !message) {
        return res.status(400).json({
          success: false,
          message: "All required fields must be filled!",
        });
      }

      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({
          success: false,
          message: "Please provide a valid email address!",
        });
      }

      // Check total file size (max 10MB total)
      if (files && files.length > 0) {
        const totalSize = files.reduce((sum, file) => sum + file.size, 0);
        const totalSizeMB = (totalSize / (1024 * 1024)).toFixed(2);
        
        if (totalSize > 10 * 1024 * 1024) {
          return res.status(400).json({
            success: false,
            message: `Total file size (${totalSizeMB}MB) exceeds 10MB limit`
          });
        }
        
        console.log(`Processing ${files.length} file(s), total size: ${totalSizeMB}MB`);
      }

      // Prepare email content
      let htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%); color: white; padding: 20px; border-radius: 10px 10px 0 0; }
          .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
          .field { margin-bottom: 20px; }
          .label { font-weight: bold; color: #4b5563; margin-bottom: 5px; }
          .value { background: white; padding: 12px; border-radius: 6px; border: 1px solid #e5e7eb; }
          .message-box { background: white; padding: 15px; border-radius: 6px; border-left: 4px solid #3b82f6; margin-top: 10px; }
          .footer { margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; font-size: 12px; color: #6b7280; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2 style="margin:0;">New Contact Form Submission</h2>
          </div>
          <div class="content">
            <div class="field">
              <div class="label">📋 Contact Details</div>
              <div class="value">
                <strong>Name:</strong> ${name}<br>
                <strong>Company:</strong> ${company}<br>
                <strong>Email:</strong> <a href="mailto:${email}">${email}</a><br>
                <strong>Phone:</strong> <a href="tel:${phone}">${phone}</a>
              </div>
            </div>
            
            <div class="field">
              <div class="label">📌 Subject</div>
              <div class="value">${subject}</div>
            </div>
            
            <div class="field">
              <div class="label">💬 Message</div>
              <div class="message-box">
                ${message.replace(/\n/g, '<br>')}
              </div>
            </div>
            
            ${files && files.length > 0 ? `
            <div class="field">
              <div class="label">📎 Attachments (${files.length})</div>
              <div class="value">
                ${files.map(file => `• ${file.originalname} (${(file.size / 1024).toFixed(2)} KB)`).join('<br>')}
              </div>
            </div>
            ` : ''}
            
            <div class="footer">
              <p>This message was sent from the Benny Estimates contact form.</p>
              <p>Submitted on: ${new Date().toLocaleString()}</p>
            </div>
          </div>
        </div>
      </body>
      </html>
    `;

    // Plain text version
    let textContent = `
NEW CONTACT FORM SUBMISSION
============================

CONTACT DETAILS:
----------------
Name: ${name}
Company: ${company}
Email: ${email}
Phone: ${phone}

SUBJECT:
--------
${subject}

MESSAGE:
--------
${message}

${files && files.length > 0 ? `
ATTACHMENTS:
------------
${files.map(file => `• ${file.originalname} (${(file.size / 1024).toFixed(2)} KB)`).join('\n')}
` : ''}

---
Submitted on: ${new Date().toLocaleString()}
    `;

      // Email options
      const mailOptions = {
        from: `"Benny Estimates Contact" <${process.env.EMAIL_USER || "apnibhook@gmail.com"}>`,
        to: process.env.CONTACT_EMAIL || "Ben@bennyestimates.com",
        replyTo: email,
        subject: `New Contact: ${subject} - ${name} from ${company}`,
        html: htmlContent,
        text: textContent,
      };

      // Add attachments if files were uploaded
      if (files && files.length > 0) {
        mailOptions.attachments = files.map(file => ({
          filename: file.originalname,
          content: file.buffer,
          contentType: file.mimetype,
        }));
        console.log(`Added ${files.length} attachment(s) to email`);
      }

      // Send email
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error("Error sending contact email:", error);
          return res.status(500).json({
            success: false,
            message: "Failed to send message. Please try again later.",
          });
        }

        console.log("Contact form email sent successfully:", info.messageId);

        // Send auto-reply to the user
        const autoReplyOptions = {
          from: `"Benny Estimates" <${process.env.EMAIL_USER || "apnibhook@gmail.com"}>`,
          to: email,
          subject: "Thank you for contacting Benny Estimates",
          html: `
          <!DOCTYPE html>
          <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%); color: white; padding: 20px; border-radius: 10px 10px 0 0; text-align: center; }
              .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
              .message-box { background: white; padding: 20px; border-radius: 8px; border-left: 4px solid #3b82f6; margin: 20px 0; }
              .signature { margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; }
              .button { display: inline-block; padding: 10px 20px; background-color: #3b82f6; color: white; text-decoration: none; border-radius: 5px; margin-top: 15px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h2 style="margin:0;">Thank You for Contacting Us!</h2>
              </div>
              <div class="content">
                <p>Dear ${name},</p>
                
                <p>Thank you for reaching out to Benny Estimates. We have received your message and will get back to you as soon as possible.</p>
                
                <div class="message-box">
                  <p style="margin:0;"><strong>Here's a copy of your message:</strong></p>
                  <hr style="margin:10px 0; border:1px solid #e5e7eb;">
                  <p><strong>Subject:</strong> ${subject}</p>
                  <p><strong>Message:</strong><br>${message.replace(/\n/g, '<br>')}</p>
                </div>
                
                <p><strong>What happens next?</strong></p>
                <ul>
                  <li>One of our team members will review your inquiry</li>
                  <li>We typically respond within 2-4 business hours</li>
                  <li>For urgent matters, please call us at <a href="tel:+12898017224">+1 (289) 801-7224</a></li>
                </ul>
                
                <div style="text-align: center;">
                  <a href="http://localhost:3000/contact-us" class="button">Visit Our Website</a>
                </div>
                
                <div class="signature">
                  <p style="margin:0;"><strong>Best regards,</strong></p>
                  <p style="margin:5px 0;">The Benny Estimates Team</p>
                  <p style="margin:5px 0; color:#6b7280;">
                    <i class="ri-mail-line"></i> ${process.env.CONTACT_EMAIL || "Ben@bennyestimates.com"}<br>
                    <i class="ri-phone-line"></i> +1 (289) 801-7224
                  </p>
                </div>
              </div>
            </div>
          </body>
          </html>
        `,
        text: `
Thank you for contacting Benny Estimates!

Dear ${name},

Thank you for reaching out to Benny Estimates. We have received your message and will get back to you as soon as possible.

Here's a copy of your message:
----------------------------------------
Subject: ${subject}

Message:
${message}
----------------------------------------

What happens next?
- One of our team members will review your inquiry
- We typically respond within 2-4 business hours
- For urgent matters, please call us at +1 (289) 801-7224

Best regards,
The Benny Estimates Team
${process.env.CONTACT_EMAIL || "Ben@bennyestimates.com"}
+1 (289) 801-7224
        `,
        };

        transporter.sendMail(autoReplyOptions, (autoReplyError, autoReplyInfo) => {
          if (autoReplyError) {
            console.error("Error sending auto-reply:", autoReplyError);
          } else {
            console.log("Auto-reply sent to:", email);
          }
        });

        res.status(200).json({
          success: true,
          message: "Your message has been sent successfully! We'll get back to you within 24 hours.",
        });
      });
    } catch (error) {
      console.error("Error in contact form:", error);
      res.status(500).json({
        success: false,
        message: "Internal server error. Please try again later.",
      });
    }
  });
});

// Start server
app.listen(3000, () => {
    console.log("Server started successfully on port 3000");
    console.log("Views directory path:", join(__dirname, 'views', 'Ejs components'));
    console.log("Email configured for:", process.env.EMAIL_USER || "apnibhook@gmail.com");
});