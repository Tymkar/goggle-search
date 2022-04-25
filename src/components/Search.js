import React from "react";
import { Links } from "./Links";
import { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import { useResultContext } from "../contexts/ResultContextProvider";

export const Search = () => {
  const [text, setText] = useState("");
  const { setSearchTerm } = useResultContext();
  const [debouncedValue] = useDebounce(text, 300);

  useEffect(() => {
    if (debouncedValue) {
      setSearchTerm(debouncedValue);
    }
  }, [debouncedValue]);

  return (
    <div className="realtive sm:ml-48 md:ml-72 sm:-mt-10 mt-3">
      <input
        value={text}
        type="text"
        className="sm:w-96 w-80 h-10 dark:bg-gray-200 border rounded-full shadow-sm outline-none p-6 text-black hover:shadow-lg"
        placeholder="Search..."
        onChange={(e) => setText(e.target.value)}
      />
      {text && (
        <button
          type="button"
          className="absolue top-1.5 right-4 text-gray-500 ml-1 text-lg"
          onClick={() => setText("")}
        >
          ❌
        </button>
      )}
      <Links />
    </div>
  );
};
