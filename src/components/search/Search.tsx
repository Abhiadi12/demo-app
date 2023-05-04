import React from "react";
import TextField from "@mui/material/TextField";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { changeKeyWord } from "@/redux/search/searchSlice";

function Search() {
  const { keyword } = useAppSelector((state) => state.search);
  const dispatch = useAppDispatch();

  return (
    <div style={{ margin: "10px" }}>
      <TextField
        name="search"
        value={keyword}
        onChange={(e) => dispatch(changeKeyWord(e.target.value))}
        placeholder="Search"
      />
    </div>
  );
}

export default Search;
