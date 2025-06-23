import { Form, redirect, useActionData } from "react-router-dom";

// UI Component
export default function Login() {
  const error = useActionData() as string | undefined;

  return (
    <div className="max-w-sm mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <Form method="post" className="flex flex-col gap-4">
        <input name="email" placeholder="Email" className="border p-2" required />
        <input name="password" type="password" placeholder="Password" className="border p-2" required />
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Login</button>
      </Form>
    </div>
  );
}

// Action handles login form submission
export const action = async ({ request }: { request: Request }) => {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");

  if (email === "admin@devsync.in" && password === "123456") {
    return redirect("/profile");
  }

  return new Response(JSON.stringify("Invalid credentials. Try again."), {
    status: 401,
    headers: { "Content-Type": "application/json" },
  });
};

// Optional SEO meta
export const meta = () => [{ title: "Login - DevSync" }];

// Optional Error UI
export function ErrorBoundary({ error }: { error: Error }) {
  return <div className="text-red-600 p-4">Login Error: {error.message}</div>;
}
