"use client";

import { Button } from "@mui/material";

function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex-1 flex gap-2 flex-col items-center justify-center">
      <h2 className="text-xl font-bold">{error.message}</h2>
      <Button onClick={reset}>Click Here to reset</Button>
    </div>
  );
}

export default ErrorPage;
