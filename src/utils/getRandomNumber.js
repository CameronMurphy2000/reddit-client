/* eslint-disable import/no-anonymous-default-export */
/**
 * @param {number} min
 * @param {number} max
 */
export default (min, max) => {
  return Math.floor(Math.random() * max) + min;
};