import React from "react";
import Navbar from "./Navbar";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { dogs } from "./App";

it("renders without crashing", () => {
    render(<MemoryRouter><Navbar dogs={dogs} /></MemoryRouter>);
});