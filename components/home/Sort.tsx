"use client";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useRouter, useSearchParams } from "next/navigation";
import styles from "./Sort.module.css";
function Sort() {
  const searchParams = useSearchParams();
  const sort =
    ["asc", "desc"].find((el) => el === searchParams.get("sort")) ?? "asc";
  const router = useRouter();
  return (
    <FormControl className={styles.formControl}>
      <InputLabel id="sort">Sort</InputLabel>
      <Select
        labelId="sort"
        id="sort-select"
        value={sort}
        label="Sort"
        onChange={(e) => {
          const newSearchParams = new URLSearchParams(searchParams);
          newSearchParams.delete("page");
          newSearchParams.set("sort", e.target.value);
          router.replace(`/?${newSearchParams}`);
        }}
      >
        <MenuItem value={"asc"}>Price (from low to high)</MenuItem>
        <MenuItem value={"desc"}>Price (from high to low)</MenuItem>
      </Select>
    </FormControl>
  );
}

export default Sort;
