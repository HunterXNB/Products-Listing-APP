"use client";
import { seedDB } from "@/actions/seedDB";
import { Button } from "@mui/material";
import React, { useTransition } from "react";

function Header() {
  const [isPending, startTransition] = useTransition();
  return (
    <nav className="flex justify-center items-center py-2">
      {/* a button to seed the database */}
      <Button
        disabled={isPending}
        variant="contained"
        onClick={() => {
          startTransition(async () => await seedDB());
        }}
      >
        Seed To Database
      </Button>
    </nav>
  );
}

export default Header;
