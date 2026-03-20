# Invoice App

A modern, comprehensive invoice management system built with **React 18** and **Vite**, styled with **Tailwind CSS**. This application features a robust, feature-based modular architecture designed for high maintainability and scalability.

## 🚀 Key Features

- **Authentication**: Secure login and session management.
- **Dashboard**: High-level overview of system metrics and statistics.
- **Product Management**: Create, edit, and track product inventory.
- **Sale System**: Process sale transactions with ease.
- **Voucher Generation**: Generate, view, and manage customer vouchers.
- **User Profile**: Manage user settings and profile information.

## 🛠️ Tech Stack

- **Core**: [React 18](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) + [Flowbite](https://flowbite.com/)
- **State Management**: [Zustand](https://github.com/pmndrs/zustand)
- **Data Fetching**: [SWR](https://swr.vercel.app/) + [Axios](https://axios-http.com/)
- **Forms**: [React Hook Form](https://react-hook-form.com/)
- **Routing**: [React Router DOM v7](https://reactrouter.com/)
- **Utils**: `lodash`, `html2pdf.js`, `print-js`, `sweetalert2`, `react-hot-toast`, `ldrs`

## 📂 Project Structure

The project follows a **Feature-based Modular Architecture**:

```text
src/
├── components/     # Reusable UI components
├── features/       # Modular features (auth, dashboard, product, sale, voucher)
│   └── [feature]/
│       ├── components/
│       ├── hooks/
│       └── pages/
├── hooks/          # Global custom hooks
├── routes/         # Modular routing configuration
├── services/       # API abstraction layers
├── stores/         # Zustand state stores
└── utils/          # Global utility functions
```
