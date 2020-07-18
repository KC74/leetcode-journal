/**
 * The challenge:
 *
 * Given an array of integers, return indices of the two numbers such that they add up to a specific target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 *
 * My own words:
 *
 * I will be given an array of integers and I need to return two indices which sum up to a given target integer.
 * There is only one solution to each target and the same element cannot be used twice.
 *
 * The example:
 *
 * Given nums = [2, 7, 11, 15], target = 9,
 * Because nums[0] + nums[1] = 2 + 7 = 9,
 * return [0, 1].
 *
 * The plan:
 *
 * Things given to me are:
 * - an array of integers
 * - a target that's an integer
 *
 * Each element is unique which means that we should not see any duplicate numbers. With that in mind, we can utilize a hashmap where we can find the complement
 * of each target. With each iteration of the array, if the complement is not found, we can add the current array integer as the key and the current index as the value
 * to the hashmap. If the complement is found, we should return the current index and the complement's value.
 *
 * The pseudocode:
 *
 * 1. complement = target - index[i]
 * 2. does the complement exist in the hashmap?
 * 3. if true, return i and complement value - this is our answer
 * 4. if false, add current integer as key and index as value
 *
 * Testing the plan:
 *
 * Example #1
 *
 * arr = [2, 7, 11, 15], target = 9
 *
 * 1st iteration:
 * i = 0
 * hashmap = {};
 *
 * 1. complement = target(9) - 2nd number(2) = 7
 * 2. does complement exist in hashmap? no
 * 3. skip
 * 4. set [ 2, 0 ]
 *
 * 2nd iteration:
 * i = 1
 * hashmap = {
 *  2: 0
 * }
 *
 * 1. complement = target(9) - 2nd number(7) = 2
 * 2. does complement exist in hashmap? yes
 * 3. return [ 1, 0 ]
 *
 * Example #2
 *
 * arr = [5, 6, 7, 12], target = 13
 *
 * 1st iteration:
 * i = 0
 * hashmap = {}
 *
 * 1. complement = 13 - 5 = 8
 * 2. does complement exist in map? no
 * 3. skip
 * 4. set [ 5, 0 ]
 *
 * 2nd iteration:
 * i = 1
 * hashmap = {
 *  5: 0
 * }
 *
 * 1. complement = 13 - 6 = 7
 * 2. does complement exist in map? no
 * 3. skip
 * 4. set [ 6, 1 ]
 *
 * 3rd iteration:
 * i = 2
 * hashmap = {
 *  5: 0,
 *  6: 1
 * }
 *
 * 1. complement = 13 - 7 = 6
 * 2. does complement exist in map? yes
 * 3. return [ 1, 2 ]
 *
 * Time complexity:
 *
 * The complexity for this solution is O(n) because no matter how large the inputs are,
 * the growth in runtime is linear.
 *
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (map.has(complement)) {
      return [map.get(complement), i];
    }

    map.set(nums[i], i);
  }
};
