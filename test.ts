import { expectType, expectError } from "tsd";

const concat: {
  (value1: string, value2: string): string;
  (value1: number, value2: number): number;
} = (v1: any, v2: any) => v1 + v2;

describe("concatenating strings", () => {
  it("returns string", async () => {
    expectType<string>(concat("foo", "bar"));
  });
  it("works", () => {
    expect(concat("foo", "bar")).toBe("foobar");
  });
});

describe("concatenating numbers", () => {
  it("returns string", async () => {
    expectType<string>(concat(1, 2));
  });
  it("works", () => {
    expect(concat(1, 2)).toBe("12");
  });
});

describe("concatenating booleans", () => {
  it("rejects boolean parameters", async () => {
    expectError(
      // @ts-expect-error
      concat("foo", false)
    );
    // @ts-expect-error
    expectError(concat(true, false));
  });
});