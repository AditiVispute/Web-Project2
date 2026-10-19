# Paw Palace — React + Express + MongoDB

This folder combines the Paw Palace React/Vite frontend with the supplied Demo Express/Mongoose backend, adapted to work together.

## Requirements
- Node.js and npm
- MongoDB Community Server running locally, unless you configure another MongoDB URI

## 1. Start MongoDB
Start the MongoDB service on your computer. The default connection is:
`mongodb://127.0.0.1:27017/cdac`

This matches the database name in the supplied Demo backend.

## 2. Start the backend
Open a terminal in VS Code and run:

```powershell
cd backend
npm install
npm start
```

Expected terminal messages include:
- `Connected to MongoDB: mongodb://127.0.0.1:27017/cdac`
- `Paw Palace API running at http://localhost:3000`

Keep this terminal running. Test the API at `http://localhost:3000/api/users`.

## 3. Start the frontend
Open a second terminal from the project root (the folder containing the root `package.json`) and run:

```powershell
npm install
npm run dev
```

Open the Vite URL printed in the terminal, usually `http://localhost:5173`.

## User features
- **Add User** sends name, age and place to `POST /api/users`.
- **Show Users** reads records from `GET /api/users`.
- **Delete** removes a record using `DELETE /api/users/:userid`.

The backend returns `{ "dataset": [...] }`, which the Show Users page understands.

## Important
- Do not run `npm run dev` from inside `backend`; run it from the project root.
- Do not run `npm start` from the project root; run it from `backend`.
- If MongoDB is not running, the backend will report a connection error.
- The `views` folder from the original Demo project was not needed for the React UI, so the API backend does not use EJS pages.
