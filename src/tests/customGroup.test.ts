test("custom assertions (grouping)", () => {
  const list = [10, 20, 30];
  const list2 = [{ value: 10 }, { value: 20 }, { value: 30 }];

  expect(list.length).toBe(3);
  expect(list[0]).toBe(10);
  expect(list[1]).toBe(20);
  expect(list[2]).toBe(30);
  expect(list.length).toEqual(3);
  expect(list[0]).toEqual(10);
  expect(list[1]).toEqual(20);
  expect(list[2]).toEqual(30);

  expectThatList(list).isExactly(10, 20, 30);

  expectThatList(list2).isExactly({ value: 10 }, { value: 20 }, { value: 30 });
});

function expectThatList<T>(list: T[]) {
  return listMatchers(list);
}

function listMatchers<T>(list: T[]) {
  return {
    isExactly(...items: T[]) {
      expect(items.length).toBe(list.length);
      items.forEach((_, i) => {
        expect(items[i]).toEqual(list[i]);
      });
    },
  };
}
