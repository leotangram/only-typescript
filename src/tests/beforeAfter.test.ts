describe("Use case", () => {
  beforeAll(() => {
    console.log("Antes de todos los test (before all)");
  });

  beforeEach(() => {
    console.log("Antes de cada test (before each)");
  });

  afterAll(() => {
    console.log("Después de todos los test (after all)");
  });

  afterEach(() => {
    console.log("Después de cada test (before each)");
  });

  test("should first", () => {
    console.log("Test 1");
  });

  test("should second", () => {
    console.log("Test 2");
  });
});
