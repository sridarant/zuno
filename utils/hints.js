export function getHint(concept, level){
  const hints = {
    addition: ["Think direction 👀","Start from first number","Move forward step by step"],
    subtraction: ["Go backward 👀","Subtract step by step","Count carefully"],
    negative: ["Two negatives…","Combine them","Becomes more negative"]
  };
  const set = hints[concept] || ["Think step by step"];
  return set[Math.min(level, set.length-1)];
}
