'use client';

import React, { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

type InputProps = {
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  Icon?: React.ElementType;
  onIconClick?: () => void;
};

const Input: React.FC<InputProps> = ({
  type = "text",
  placeholder,
  value,
  onChange,
  className = "",
  Icon,
  onIconClick,
}) => {
  return (
    <div className={`flex items-center border border-gray-200 rounded px-3 py-1 bg-white ${className}`}>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="flex-grow outline-none text-black bg-white"
      />
      {Icon && (
        <button onClick={onIconClick} className="ml-2 p-1" aria-label="icon button" type="button">
          <Icon className="h-5 w-5 text-black" />
        </button>
      )}
    </div>
  );
};

const SearchInput = () => {
  const [term, setTerm] = useState("");
  
  const handleSearch = () => {
    alert(`Searching for: ${term}`);
  };

  return (
    <Input
      placeholder="What are you looking for?"
      value={term}
      onChange={(e) => setTerm(e.target.value)}
      Icon={MagnifyingGlassIcon}
      onIconClick={handleSearch}
      className="w-64"
    />
  );
};

export default SearchInput;
