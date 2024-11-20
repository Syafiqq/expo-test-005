type TypesMap = {
  // cache
  mmkv: symbol;

  // local
  watermelon: symbol;

  // remote
  axios: symbol

  // infrastructure
  reactQuery: symbol
};

const Types: TypesMap = {
  // cache
  mmkv: Symbol.for('MMKV'),

  // local
  watermelon: Symbol.for('WatermelonDb'),

  // remote
  axios: Symbol.for('Axios'),

  // infrastructure
  reactQuery: Symbol.for('ReactQuery'),
}

export {
  Types,
  type TypesMap,
};
