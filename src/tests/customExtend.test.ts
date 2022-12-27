declare namespace jest {
  interface Matchers<R> {
    customToBe(value): CustomMatcherResult;
    isExactly<T>(...items: T[]): CustomMatcherResult;
  }
}

expect.extend({
  customToBe(expected, received) {
    return {
      pass: expected === received,
      message: () => `Expected: ${expected} \nReceived: ${received}`,
    };
  },
  isExactly<T>(expectedList: T[], ...values: T[]) {
    const haveTheSameLength = expectedList.length === values.length;
    const haveTheSameElements = () =>
      values
        .map((_: T, i: number) => values[i] === expectedList[i])
        .reduce(
          (previous: boolean, current: boolean) => previous && current,
          true
        );

    return {
      pass: haveTheSameLength && haveTheSameElements(),
      message: () => `Expected: ${expectedList} \nReceived: ${values}`,
    };
  },
});

test("custom assertion (extending)", () => {
  const list = [10, 20, 30];

  expect(list.length).customToBe(3);
  expect(list).isExactly(10, 20, 30);
});
