/**
 * SD Digital Hub — Secure Configuration File
 * ===========================================
 * ⚠️  IMPORTANT SECURITY RULES:
 *   1. Add this file to your .gitignore — NEVER commit it to GitHub/Git
 *   2. Upload this file manually to your server (cPanel / FTP / hosting panel)
 *   3. This file must be placed at the ROOT of your website: /config.js
 *
 * Supabase anon key is safe for browser use ONLY if Row Level Security (RLS)
 * is enabled on your Supabase tables. Enable RLS at: https://supabase.com/dashboard
 */

// ── Supabase Database Config ──────────────────────────────────────────────────
const SUPABASE_URL      = 'https://uihfadvfmxkikoncytae.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVpaGZhZHZmbXhraWtvbmN5dGFlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODAwMjc3NTUsImV4cCI6MjA5NTYwMzc1NX0.mex-ucpBocgO3GyNfHtUVTFahCfb6Mc9Sa7I2OaRkG4';

// ── Admin Access ──────────────────────────────────────────────────────────────
const ADMIN_SECRET_HASH = 'sddigitalhub-admin-2025';
