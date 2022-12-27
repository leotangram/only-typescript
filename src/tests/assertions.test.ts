describe("assertions", () => {
  test("toBe", () => {
    expect(1 + 2).toBe(3);
    expect(1 + 2).not.toBe(4);
  });

  test("toEqual", () => {
    expect(1 + 2).toEqual(3);
    expect(1 + 2).not.toEqual(4);
    expect({ foo: "foo", bar: "bar" }).toEqual({ foo: "foo", bar: "bar" });
    expect({ foo: "foo", bar: "bar" }).not.toEqual({ foo: "foo", bar: "foo" });
    expect([1, 2, 3]).toEqual([1, 2, 3]);
    expect([1, 2, 3]).not.toEqual([0, 1, 2]);
  });

  test("verification", () => {
    expect(true).toBeTruthy();
    expect(false).toBeFalsy();
    expect(null).toBeNull();
    expect(undefined).toBeUndefined();
    expect({}).toBeDefined();
  });

  test("falsy values", () => {
    expect(false).toBeFalsy();
    expect(undefined).toBeFalsy();
    expect(null).toBeFalsy();
    expect(NaN).toBeFalsy();
    expect(0).toBeFalsy();
    expect(-0).toBeFalsy();
    expect(0n).toBeFalsy();
    expect("").toBeFalsy();
  });

  test("numbers", () => {
    expect(1).toBeGreaterThan(0);
    expect(1).toBeGreaterThanOrEqual(0);
    expect(1).toBeLessThan(2);
    expect(1).toBeLessThanOrEqual(2);
  });

  test("regular expression", () => {
    expect("Leo").toMatch(/eo/);
  });

  test("to contain", () => {
    expect([0, 1, 2]).toContain(2);
    expect([
      { foo: "foo", bar: "bar" },
      { foo: "foo", bar: "foo" },
    ]).toContainEqual({ foo: "foo", bar: "foo" });
  });
});
