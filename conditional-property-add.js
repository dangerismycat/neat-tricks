// conditionally add properties to an object literal

const obj = {
  ...(prop && { prop }),
};

// short-circuits on conditional check of prop
// (obv this syntax fails for falsy values, so more specific conditional check would be needed),
// spreads `{ prop }` obj over outer obj if conditional check passes
