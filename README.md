# Virtual Front Desk – Frontend

Frontend part of the Virtual Front Desk Programming Practice Project.
This application provides a simple worksheet UI and communicates with the backend API using a session-based flow.

## Tech Stack

- React
- TypeScript
- Tailwind CSS
- Axios
- Vite

## Features

- Session-based worksheet flow
- Fetching worksheet tasks from backend API
- Task and option display with interactive states
- Answer submission with immediate result feedback
- Session token handling via `sessionStorage`
- Reusable and modular React components

## Environment Configuration

The frontend expects a running backend API.

If needed, configure the API base URL in the axios setup file:

```bash
src/api/api.ts
```

Example:

```ts
baseURL: "https://virtual-front-desk-backend-2bff.onrender.com";
```

Ensure the backend is running and accessible from this URL.

## Project Setup

1. Install dependencies:

```bash
npm install
```

2. Start development server:

```bash
npm run dev
```

The application will be available at:

```arduino
http://localhost:5173
```

2. Build for production:

```bush
npm run build
npm run preview
```

## Application Flow

1. A session token is requested from the backend and stored in `sessionStorage`
2. Worksheet tasks are fetched from the backend
3. User selects an option for a task
4. The answer is sent to the backend with the session token
5. The result (correct / incorrect) is displayed immediately

## Project Structure

```
src/
├─ api/
│ └─ api.ts             # Axios configuration and API calls
├─ components/
│ ├─ Header.tsx         # Header component
│ ├─ TaskCard.tsx       # Worksheet task container
│ └─ OptionButton.tsx   # Option button component
├─ pages/
│ └─ Worksheet.tsx      # Main worksheet page
├─ types/
│ └─ index.ts           # TypeScript interfaces
├─ App.tsx
├─ index.css            # Tailwind CSS setup
└─ main.tsx             # Application entry point
```

## API Usage

**Get Worksheet Tasks**

Fetches worksheet tasks and options from the backend API.

**Submit Worksheet Task Answer**

Sends selected optionId for a given taskId.
Authorization is handled via Bearer token stored in sessionStorage.

## Deployment

Frontend is deployed on:

https://virtual-front-desk-frontend-seven.vercel.app/

Backend API is deployed on Render:

https://virtual-front-desk-backend-2bff.onrender.com

## Notes

- Session token is reused if already present in `sessionStorage`
- API communication is handled via Axios
- Components are designed to be reusable and extendable

## Author

Svitlana Havrylets
