function resolvePort(value) {
  if (value === undefined || value === null || value === "") return 5000;
  if (typeof value !== "string" && typeof value !== "number") {
    throw new TypeError("PORT must be a valid number");
  }
  const parsed = Number(value);
  if (!Number.isInteger(parsed) || parsed < 1 || parsed > 65535) {
    throw new RangeError("PORT must be an integer between 1 and 65535");
  }
  return parsed;
}
module.exports = {resolvePort};
