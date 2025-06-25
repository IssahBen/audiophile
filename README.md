# 🎧 Audiophile

**Audiophile** is a modern, scalable e-commerce platform designed for high-end audio equipment. Built with **React**, **Ruby on Rails 7**, **Tailwind CSS**, and **Stripe**, it delivers a seamless shopping experience with secure checkout, responsive design, and optimized performance for both desktop and mobile users.

---

## 🚀 Features

- 🛍️ **Product Catalog**
  - Beautifully presented audio products with dynamic filtering and categorization.

- 🛒 **Cart & Checkout**
  - Real-time cart updates, order summary, and secure payment via Stripe.

- 🔐 **Authentication**
  - Secure sign up/login with Devise and JWT (or session-based auth).

- 📦 **Order Management**
  - Backend for managing orders, payments, and inventory.

- 💬 **Responsive UI**
  - Fully mobile-optimized with Tailwind CSS for a sleek user interface.

---

## 🛠 Tech Stack

| Layer        | Tech Stack                             |
|--------------|-----------------------------------------|
| Frontend     | React, Tailwind CSS, Axios              |
| Backend      | Ruby on Rails 7 (API-only mode)         |
| Authentication | Devise, JWT or session-based auth     |
| Database     | PostgreSQL                              |
| Payments     | Stripe API                              |
| Deployment   | Netlify (frontend), Render/Heroku (API) |

---

## 📦 Setup & Installation

### 🔧 Backend (Rails API)

```bash
git clone https://github.com/yourusername/phile_api.git
cd phile_api

bundle install
rails db:create db:migrate db:seed

# Set up credentials for Stripe & JWT
EDITOR="code --wait" bin/rails credentials:edit

rails s
