![Screenshot 2024-11-28 205600](https://github.com/user-attachments/assets/81563784-4348-4e4e-ae1f-ee855f37a009)# Finance Tracker

Welcome to **Finance Tracker**, a web-based application designed to help you monitor and manage your finances effortlessly. This platform provides tools to organize your accounts and track your financial data all in one place.

## Features

1. **User Authentication**:  
   - Sign up for a new account or log in using your existing credentials.  
   - Supports account creation and management.
    ![Screenshot 2024-11-28 205216](https://github.com/user-attachments/assets/d83415ef-e090-4ba4-b129-1f679950c73d)
    ![Screenshot 2024-11-28 205235](https://github.com/user-attachments/assets/824d69e5-3efd-44e3-88a5-5f572b916e58)



2. **Dashboard Overview**:  
   - After signing in, users are greeted with a dashboard showing their financial overview.  
   - Create and manage accounts to organize your financial data.
     ![Screenshot 2024-11-28 205501](https://github.com/user-attachments/assets/469df29b-d305-44a3-8c1f-ee868c2be1a5)
     ![Screenshot 2024-11-28 205816](https://github.com/user-attachments/assets/032c0734-cb91-42f4-9c0b-95b5c865b590)



3. **Create and View Accounts**:  
   - Add new accounts (e.g., checking, savings, investments) and select them to track associated finances.  
   - View consolidated financial data once accounts are added.
     ![Screenshot 2024-11-28 205350](https://github.com/user-attachments/assets/24b2111c-7668-4ace-926d-bac663e002bc)
   - Add new transaction or import [csv file](./transaction_details.csv).
     ![Screenshot 2024-11-28 205403](https://github.com/user-attachments/assets/eaa0042e-2c27-4d35-bd22-7e91e91adad0)

     ![Screenshot 2024-11-28 205600](https://github.com/user-attachments/assets/e73c301f-ae1f-4eb8-8d92-9862002cb5c2)

## How to Use

1. **Sign Up / Log In**:  
   - Visit the [Finance Tracker](https://finance-tracker-alpha-gold.vercel.app/) and create a new account or log in with existing credentials.  

2. **Create Accounts**:  
   - After logging in, navigate to the account creation section on the dashboard.  
   - Add relevant financial accounts by providing required details.  

3. **Dashboard View**:  
   - Once accounts are created, access the dashboard to see your financial summaries and manage data.

## Technologies Used

- **Frontend**:  
  - **React.js** & **Next.js**  
  - **Tailwind CSS** for styling  
  - **React Query** for data fetching and caching  
  - **React Hook Form** for handling forms  
  - **Radix UI** for accessible UI components

- **Authentication**:  
  - **Clerk** for user sign-up and authentication

- **Database**:  
  - **Neon Database** (Serverless)  
  - **Drizzle ORM** for querying the database

- **Other Dependencies**:  
  - **Recharts** for visualizing financial data  
  - **Zod** for schema validation  
  - **Date-fns** for date management  
  - **Lucide React** for icons
    
- **Deployment**:
  -  **Vercel**

## Getting Started (for developers)

Clone the repository and install dependencies:

## Getting Started
```bash

git clone [repository-url]
cd finance-tracker
npm install
```

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
