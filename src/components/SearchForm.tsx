import React, { FormEvent, useState } from "react";
import { Input, Button } from "antd";

type PropsType = {
    onSearch: (searchTerm: string) => void
}

const SearchForm = ({ onSearch }: PropsType) => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onSearch(searchTerm);
    };

    return (
        <form onSubmit={handleSubmit} className="flex items-center space-x-2 mb-4">
            <Input value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} placeholder="Enter search query" />
            <Button type="primary" className="bg-sky-500">
                Search
            </Button>
        </form>
    );
};

export default SearchForm;
