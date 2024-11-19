type TypesMap = {
  mmkv: symbol;
};

const Types: TypesMap = {
  mmkv: Symbol.for('MMKV'),
}

export {
  Types,
  type TypesMap,
};
