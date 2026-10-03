import { RuleTester } from "eslint";
import { describe, it } from "vitest";
import rule from "../no-sw-extension-override";

describe("no-sw-extension-override", () => {
	const ruleTester = new RuleTester({
		languageOptions: { ecmaVersion: 2015, sourceType: "module" },
	});

	it("should be a valid override", () => {
		ruleTester.run("no-sw-extension-override", rule, {
			valid: [
				{
					code: `Shopwell.Component.override('sw-foo', {})`,
				},
				{
					code: `Shopwell.Component.extend('sw-extension-foo', {})`,
				},
				{
					code: `const { Component } = Shopwell; Component.extend('sw-extension-foo', {})`,
				},
				{
					code: `const Component = Shopwell.Component; Component.extend('sw-extension-foo', {})`,
				},
			],
			invalid: [],
		});
	});

	it("should be an invalid override", () => {
		ruleTester.run("no-sw-extension-override", rule, {
			valid: [],
			invalid: [
				{
					code: `Shopwell.Component.override('sw-extension-foo', {})`,
					errors: [
						{
							message: "Changing the Shopwell Extension Manager is not allowed",
						},
					],
				},
				{
					code: `const { Component } = Shopwell; Component.override('sw-extension-foo', {})`,
					errors: [
						{
							message: "Changing the Shopwell Extension Manager is not allowed",
						},
					],
				},
				{
					code: `const Component = Shopwell.Component; Component.override('sw-extension-foo', {})`,
					errors: [
						{
							message: "Changing the Shopwell Extension Manager is not allowed",
						},
					],
				},
			],
		});
	});
});
