export function getHint(concept, level){
  const hints = {
    addition: ["Start from -5 👀","Move forward step by step","Where do you land?"],
    subtraction: ["Go backward 👀","Subtract step by step","Count carefully"],
    negative: ["Two negatives…","Combine them","Becomes more negative"]
  };
  const set = hints[concept] || ["Think step by step"];
  return set[Math.min(level, set.length-1)];
}
