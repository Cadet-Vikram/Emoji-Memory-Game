export const loadState = () => {
  try {
    const serialized = localStorage.getItem('emojiGameState');
    return serialized ? JSON.parse(serialized) : undefined;
  } catch {
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const serialized = JSON.stringify(state);
    localStorage.setItem('emojiGameState', serialized);
  } catch {
    // ignore write errors
  }
};
