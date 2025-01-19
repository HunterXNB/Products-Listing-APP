"use client";

import { Button } from "@mui/material";
// global error page
function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex gap-2 flex-col items-center justify-center">
      <h2 className="text-xl font-bold">{error.message}</h2>
      <Button onClick={reset}>Click Here to reset</Button>
    </div>
  );
}

export default ErrorPage;
