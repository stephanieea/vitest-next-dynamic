import { describe, expect, test } from "vitest";
import { render, screen } from '@testing-library/react';
import Animals from "./animals.jsx";

vi.mock('next/dynamic', () => ({
	default: async (load) => {
		const module = await load();
		const component = module.default;
		return (...args) => component(...args);
	},
}));


describe("Animals", () => {
  test("render dynamic text", () => {
    render(<Animals/>);
		expect(screen.getByText('DOGS'))
  });
});
