type TypesMap = {
  // cache
  mmkv: symbol;

  // local
  watermelon: symbol;

  // infrastructure
  reactQuery: symbol
};

const Types: TypesMap = {
  // cache
  mmkv: Symbol.for('MMKV'),

  // local
  watermelon: Symbol.for('WatermelonDb'),

  // infrastructure
  reactQuery: Symbol.for('ReactQuery'),
}

export {
  Types,
  type TypesMap,
};
