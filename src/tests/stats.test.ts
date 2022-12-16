import { average, sum } from "../stats";
import * as statsAsync from "../statsAsync";

describe("Stats should", () => {
  test("calculates the sum of all elements of array", () => {
    const result = sum([1, 2, 3]);
    const expected = 6;

    expect(expected).toBe(result);
  });

  test("calculate the average of all elements of array", () => {
    const result = average([1, 2, 3]);
    const expected = 2;

    expect(expected).toBe(result);
  });
});

describe("Stats should async", () => {
  test("calculates the sum of all elements of array (async)", async () => {
    const result = await statsAsync.sum([1, 2, 3]);
    const expected = 6;

    expect(expected).toBe(result);
  });

  test("calculate the average of all elements of array (async)", async () => {
    const result = await statsAsync.average([1, 2, 3]);
    const expected = 2;

    expect(expected).toBe(result);
  });
});
