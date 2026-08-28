import "dotenv/config";

import express, { Request, Response } from "express";
import cors from "cors";
import { supabase } from "./supabase.js";

const app = express();

const PORT = Number(process.env.PORT || 4000);
const FRONTEND_URL =
  process.env.FRONTEND_URL || "http://localhost:3000";

// =====================================================
// MIDDLEWARE
// =====================================================

app.use(
  cors({
    origin: FRONTEND_URL,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());


// =====================================================
// HOME / SERVER CHECK
// =====================================================

app.get("/", (_req: Request, res: Response) => {
  res.json({
    success: true,
    message: "Invisible Grill Backend API",
    status: "running",
  });
});


// =====================================================
// HEALTH CHECK
// =====================================================

app.get("/api/health", (_req: Request, res: Response) => {
  res.json({
    success: true,
    message: "Invisible Grill backend is running",
    port: PORT,
  });
});


// =====================================================
// SUPABASE CONNECTION TEST
// =====================================================

app.get(
  "/api/test-supabase",
  async (_req: Request, res: Response) => {
    try {
      const { error } = await supabase
        .from("contact_messages")
        .select("id")
        .limit(1);

      if (error) {
        console.error("Supabase error:", error);

        return res.status(500).json({
          success: false,
          message: "Supabase connection failed",
          error: error.message,
        });
      }

      return res.status(200).json({
        success: true,
        message: "Supabase connection is working",
      });
    } catch (error) {
      console.error("Supabase test error:", error);

      return res.status(500).json({
        success: false,
        message: "Unable to connect to Supabase",
      });
    }
  }
);


// =====================================================
// LOGIN
// =====================================================

app.post(
  "/api/auth/login",
  async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body;

      // Validate input
      if (!email || !password) {
        return res.status(400).json({
          success: false,
          message: "Email and password are required",
        });
      }

      // Login with Supabase
      const { data, error } =
        await supabase.auth.signInWithPassword({
          email,
          password,
        });

      if (error) {
        console.error("Login error:", error);

        return res.status(401).json({
          success: false,
          message: "Invalid email or password",
        });
      }

      return res.status(200).json({
        success: true,
        message: "Login successful",
        user: data.user,
        session: data.session,
      });
    } catch (error) {
      console.error("Login server error:", error);

      return res.status(500).json({
        success: false,
        message: "Internal server error",
      });
    }
  }
);


// =====================================================
// CONTACT FORM
// =====================================================

app.post(
  "/api/contact",
  async (req: Request, res: Response) => {
    try {
      const {
        name,
        email,
        phone,
        subject,
        message,
      } = req.body;

      // Validate required fields
      if (!name || !email || !message) {
        return res.status(400).json({
          success: false,
          message:
            "Name, email and message are required",
        });
      }

      // Save contact message to Supabase
      const { data, error } = await supabase
        .from("contact_messages")
        .insert({
          name: String(name).trim(),
          email: String(email).trim(),
          phone: phone
            ? String(phone).trim()
            : null,
          subject: subject
            ? String(subject).trim()
            : null,
          message: String(message).trim(),
        })
        .select()
        .single();

      if (error) {
        console.error(
          "Contact form Supabase error:",
          error
        );

        return res.status(500).json({
          success: false,
          message:
            "Could not save contact message",
        });
      }

      return res.status(201).json({
        success: true,
        message:
          "Contact message submitted successfully",
        data,
      });
    } catch (error) {
      console.error(
        "Contact form server error:",
        error
      );

      return res.status(500).json({
        success: false,
        message: "Internal server error",
      });
    }
  }
);


// =====================================================
// 404 ROUTE
// =====================================================

app.use(
  (_req: Request, res: Response) => {
    res.status(404).json({
      success: false,
      message: "API route not found",
    });
  }
);


// =====================================================
// START SERVER
// =====================================================

app.listen(PORT, "0.0.0.0", () => {
  console.log(
    `Invisible Grill backend running on port ${PORT}`
  );

  console.log(
    `Frontend URL: ${FRONTEND_URL}`
  );

  console.log(
    `Health: http://localhost:${PORT}/api/health`
  );
});