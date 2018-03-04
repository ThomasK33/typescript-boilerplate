import index from "@src/index";
import { expect } from "chai";
import "mocha";

// tslint:disable:no-unused-expression

describe("Index file", () => {
	it("should return true", () => {
		const result = index();
		expect(result).to.be.true;
	});
});
