import { useLoaderData, redirect } from "react-router-dom";

// UI Component
export default function Profile() {
  const user = useLoaderData() as { name: string; email: string };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-2">Welcome, {user.name}</h1>
      <p className="text-gray-700">Email: {user.email}</p>
    </div>
  );
}

// Loader fetches user info before rendering
export const loader = async () => {
  // Fake auth check (replace with real session/token check)
  const isLoggedIn = true;

  if (!isLoggedIn) {
    return redirect("/login");
  }

  return { name: "Abhishek Raut", email: "admin@devsync.in" };
};

export const meta = () => [{ title: "Profile - DevSync" }];

export function ErrorBoundary({ error }: { error: Error }) {
  return <div className="text-red-600 p-4">Profile Error: {error.message}</div>;
}
