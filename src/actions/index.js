export const updateCalulator = (value) => ({
  type: 'UPDATE_CALCULATOR',
  value,
  // eslint-disable-next-line
  test: console.log("updateCalulator"),
});

export const fakeThing = (value) => ({
  type: 'FAKEY',
  value,
});
