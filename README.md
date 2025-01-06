# Garage Management System

A full-stack application for managing a garage business, including vehicle service tracking, appointments, inventory, and billing.

## Features

- Dashboard with real-time updates
- User authentication (admin, mechanic, customer)
- Vehicle service tracking
- Appointment scheduling
- Inventory management
- Billing and invoicing
- Notification system
- Reports generation

## Tech Stack

- Frontend: React
- Backend: Node.js, Express
- Database: MongoDB
- Real-time updates: Socket.io

## Project Structure

```
garage-management-system/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── services/      # API services
│   │   └── utils/         # Utility functions
│   └── package.json
├── server/                 # Node.js backend
│   ├── config/            # Configuration files
│   ├── controllers/       # Route controllers
│   ├── models/           # MongoDB models
│   ├── routes/           # API routes
│   ├── middleware/       # Custom middleware
│   └── server.js         # Main server file
└── README.md
```

## Setup Instructions

1. Clone the repository
2. Install dependencies:
   ```bash
   # Install backend dependencies
   cd server
   npm install

   # Install frontend dependencies
   cd ../client
   npm install
   ```

3. Set up environment variables:
   Create `.env` file in server directory with:
   ```
   MONGODB_URI=your_mongodb_uri
   PORT=5000
   JWT_SECRET=your_jwt_secret
   ```

4. Start the application:
   ```bash
   # Start backend server
   cd server
   npm run dev

   # Start frontend (in a new terminal)
   cd client
   npm start
   ```

5. Access the application:
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000

## API Endpoints

- `/api/auth`: Authentication routes
- `/api/vehicles`: Vehicle management
- `/api/appointments`: Appointment scheduling
- `/api/inventory`: Inventory management
- `/api/services`: Service records
- `/api/invoices`: Billing and invoices
- `/api/notifications`: Notification system
- `/api/parts`: Parts management
- `/api/dashboard`: Dashboard data
- `/api/reports`: Report generation

## Deployment

1. Deploy the backend to a Node.js hosting service
2. Deploy the frontend to Vercel or similar
3. Set up MongoDB Atlas for the database
4. Configure environment variables in your hosting platform

## License

MIT License 