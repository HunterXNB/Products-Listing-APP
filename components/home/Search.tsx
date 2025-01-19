"use client";
import { TextField } from "@mui/material";
import { X } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import { useState } from "react";
import styles from "./Search.module.css";
function Search() {
  const searchParams = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(
    searchParams.get("search") ?? ""
  );
  const router = useRouter();
  const onSearchChange = useDebouncedCallback((searchTerm: string) => {
    if (searchParams.get("search") !== searchTerm) {
      const newSearchParams = new URLSearchParams(searchParams);
      newSearchParams.set("search", searchTerm);
      newSearchParams.delete("page");
      router.replace(`/?${newSearchParams}`);
    }
  }, 800);

  return (
    <div className={`${styles["search-container"]}`}>
      <TextField
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
          onSearchChange(e.target.value);
        }}
        id="standard-search"
        className="w-full"
        label="Search"
        variant="outlined"
      />
      {searchTerm && (
        <X
          onClick={() => {
            setSearchTerm("");
            router.replace("/");
          }}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-20 text-red-600 hover:text-red-800 cursor-pointer transition-colors duration-300"
        />
      )}
    </div>
  );
}

export default Search;
