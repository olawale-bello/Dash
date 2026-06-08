// Dash — Personal Configuration
// This file pre-loads your identity and Firebase credentials into the app.

const DASH_CONFIG = {

  // ── Personal info ─────────────────────────────────────────────────────────
  user: {
    name:          'Wale',
    currency:      'EUR',          // EUR | USD | GBP | NGN
    monthlyTarget: 2000,           // income target used on the dashboard
  },

  // ── Firebase (Firestore) ──────────────────────────────────────────────────
  // Used by migrate.html to auto-fill the connection form.
  // Firebase web keys are designed to be public — security comes from
  // Firestore Security Rules, not from keeping this key secret.
  firebase: {
    apiKey:            'AIzaSyD2ovVm9wfJQhFszp3SxWeJcoagfIZdgtI',
    authDomain:        'wale-0s.firebaseapp.com',
    projectId:         'wale-0s',
    storageBucket:     'wale-0s.firebasestorage.app',
    messagingSenderId: '487487301272',
    appId:             '1:487487301272:web:aa7ac81bbf0890d4e3d2ed',
  },

};
