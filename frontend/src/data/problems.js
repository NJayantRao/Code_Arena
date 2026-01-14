export const problems = {
  "two-sum": {
    id: "two-sum",
    title: "Two Sum",
    difficulty: "Easy",
    category: "Array • Hash Table",
    description: {
      text: "Given an array of integers nums and an integer target, return indices of the two numbers in the array such that they add up to target.",
      notes: [
        "You may assume that each input would have exactly one solution, and you may not use the same element twice.",
        "You can return the answer in any order.",
      ],
    },
    examples: [
      {
        input: "nums = [2,7,11,15], target = 9",
        output: "[0,1]",
        explanation: "Because nums[0] + nums[1] == 9, we return [0, 1].",
      },
      {
        input: "nums = [3,2,4], target = 6",
        output: "[1,2]",
      },
      {
        input: "nums = [3,3], target = 6",
        output: "[0,1]",
      },
    ],
    constraints: [
      "2 ≤ nums.length ≤ 10⁴",
      "-10⁹ ≤ nums[i] ≤ 10⁹",
      "-10⁹ ≤ target ≤ 10⁹",
      "Only one valid answer exists",
    ],
    starterCode: {
      javascript: `function twoSum(nums, target) {
  // Write your solution here
  
}

// Test cases
console.log(twoSum([2, 7, 11, 15], 9)); // Expected: [0, 1]
console.log(twoSum([3, 2, 4], 6)); // Expected: [1, 2]
console.log(twoSum([3, 3], 6)); // Expected: [0, 1]`,
      python: `def twoSum(nums, target):
    # Write your solution here
    pass

# Test cases
print(twoSum([2, 7, 11, 15], 9))  # Expected: [0, 1]
print(twoSum([3, 2, 4], 6))  # Expected: [1, 2]
print(twoSum([3, 3], 6))  # Expected: [0, 1]`,
      java: `import java.util.*;

class Solution {
    public static int[] twoSum(int[] nums, int target) {
        // Write your solution here
        
        return new int[0];
    }
    
    public static void main(String[] args) {
        System.out.println(Arrays.toString(twoSum(new int[]{2, 7, 11, 15}, 9))); // Expected: [0, 1]
        System.out.println(Arrays.toString(twoSum(new int[]{3, 2, 4}, 6))); // Expected: [1, 2]
        System.out.println(Arrays.toString(twoSum(new int[]{3, 3}, 6))); // Expected: [0, 1]
    }
}`,
    },
    expectedOutput: {
      javascript: "[0,1]\n[1,2]\n[0,1]",
      python: "[0, 1]\n[1, 2]\n[0, 1]",
      java: "[0, 1]\n[1, 2]\n[0, 1]",
    },
  },
  "valid-parentheses": {
    id: "valid-parentheses",
    title: "Valid Parentheses",
    difficulty: "Easy",
    category: "Stack",
    description: {
      text: "Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.",
      notes: [
        "An input string is valid if open brackets are closed by the same type of brackets.",
        "Open brackets must be closed in the correct order.",
      ],
    },
    examples: [
      { input: 's = "()"', output: "true" },
      { input: 's = "()[]{}"', output: "true" },
      { input: 's = "(]"', output: "false" },
    ],
    constraints: [
      "1 ≤ s.length ≤ 10⁴",
      "s consists of parentheses only: '()[]{}'",
    ],
    starterCode: {
      javascript: `function isValid(s) {
  // Write your solution here
}

// Test cases
console.log(isValid("()")); // Expected: true
console.log(isValid("()[]{}")); // Expected: true
console.log(isValid("(]")); // Expected: false`,
      python: `def isValid(s):
    # Write your solution here
    pass

# Test cases
print(isValid("()"))       # Expected: True
print(isValid("()[]{}"))   # Expected: True
print(isValid("(]"))       # Expected: False`,
      java: `class Solution {
    public static boolean isValid(String s) {
        // Write your solution here
        return false;
    }

    public static void main(String[] args) {
        System.out.println(isValid("()"));       // Expected: true
        System.out.println(isValid("()[]{}"));   // Expected: true
        System.out.println(isValid("(]"));       // Expected: false
    }
}`,
    },
    expectedOutput: {
      javascript: "true\ntrue\nfalse",
      python: "True\nTrue\nFalse",
      java: "true\ntrue\nfalse",
    },
  },

  "merge-two-sorted-lists": {
    id: "merge-two-sorted-lists",
    title: "Merge Two Sorted Lists",
    difficulty: "Easy",
    category: "Linked List",
    description: {
      text: "Merge two sorted linked lists and return it as a sorted list.",
      notes: [
        "The new list should be made by splicing together the nodes of the first two lists.",
      ],
    },
    examples: [
      { input: "l1 = [1,2,4], l2 = [1,3,4]", output: "[1,1,2,3,4,4]" },
      { input: "l1 = [], l2 = []", output: "[]" },
      { input: "l1 = [], l2 = [0]", output: "[0]" },
    ],
    constraints: [
      "The number of nodes in both lists is in the range [0, 50]",
      "-100 ≤ Node.val ≤ 100",
      "Both l1 and l2 are sorted in non-decreasing order",
    ],
    starterCode: {
      javascript: `function mergeTwoLists(l1, l2) {
  // Write your solution here
}

// Example usage (pseudo)
console.log(mergeTwoLists([1,2,4],[1,3,4]));`,
      python: `def mergeTwoLists(l1, l2):
    # Write your solution here
    pass

print(mergeTwoLists([1,2,4],[1,3,4]))`,
      java: `class Solution {
    public static List<Integer> mergeTwoLists(List<Integer> l1, List<Integer> l2) {
        // Write your solution here
        return new ArrayList<>();
    }

    public static void main(String[] args) {
        System.out.println(mergeTwoLists(Arrays.asList(1,2,4), Arrays.asList(1,3,4)));
    }
}`,
    },
    expectedOutput: {
      javascript: "[1,1,2,3,4,4]",
      python: "[1, 1, 2, 3, 4, 4]",
      java: "[1, 1, 2, 3, 4, 4]",
    },
  },

  "binary-search": {
    id: "binary-search",
    title: "Binary Search",
    difficulty: "Easy",
    category: "Array • Binary Search",
    description: {
      text: "Given a sorted array of integers and a target value, return the index if found. If not, return -1.",
      notes: ["You must write an algorithm with O(log n) runtime complexity."],
    },
    examples: [
      { input: "nums = [-1,0,3,5,9,12], target = 9", output: "4" },
      { input: "nums = [-1,0,3,5,9,12], target = 2", output: "-1" },
    ],
    constraints: [
      "1 ≤ nums.length ≤ 10⁴",
      "-10⁴ ≤ nums[i], target ≤ 10⁴",
      "nums is sorted in ascending order",
    ],
    starterCode: {
      javascript: `function search(nums, target) {
  // Write your solution here
}

console.log(search([-1,0,3,5,9,12], 9)); // Expected: 4
console.log(search([-1,0,3,5,9,12], 2)); // Expected: -1`,
      python: `def search(nums, target):
    # Write your solution here
    pass

print(search([-1,0,3,5,9,12], 9)) # Expected: 4
print(search([-1,0,3,5,9,12], 2)) # Expected: -1`,
      java: `class Solution {
    public static int search(int[] nums, int target) {
        // Write your solution here
        return -1;
    }

    public static void main(String[] args) {
        System.out.println(search(new int[]{-1,0,3,5,9,12}, 9)); // Expected: 4
        System.out.println(search(new int[]{-1,0,3,5,9,12}, 2)); // Expected: -1
    }
}`,
    },
    expectedOutput: {
      javascript: "4\n-1",
      python: "4\n-1",
      java: "4\n-1",
    },
  },

  // ---------------- MEDIUM ----------------

  "3sum": {
    id: "3sum",
    title: "3Sum",
    difficulty: "Medium",
    category: "Array • Two Pointers",
    description: {
      text: "Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i, j, and k are distinct and their sum is zero.",
      notes: ["The solution set must not contain duplicate triplets."],
    },
    examples: [
      { input: "nums = [-1,0,1,2,-1,-4]", output: "[[-1,-1,2],[-1,0,1]]" },
      { input: "nums = [0,1,1]", output: "[]" },
      { input: "nums = [0,0,0]", output: "[[0,0,0]]" },
    ],
    constraints: ["3 ≤ nums.length ≤ 3000", "-10⁵ ≤ nums[i] ≤ 10⁵"],
    starterCode: {
      javascript: `function threeSum(nums) {
  // Write your solution here
}

console.log(threeSum([-1,0,1,2,-1,-4]));`,
      python: `def threeSum(nums):
    # Write your solution here
    pass

print(threeSum([-1,0,1,2,-1,-4]))`,
      java: `class Solution {
    public static List<List<Integer>> threeSum(int[] nums) {
        // Write your solution here
        return new ArrayList<>();
    }

    public static void main(String[] args) {
        System.out.println(threeSum(new int[]{-1,0,1,2,-1,-4}));
    }
}`,
    },
    expectedOutput: {
      javascript: "[[-1,-1,2],[-1,0,1]]",
      python: "[[-1, -1, 2], [-1, 0, 1]]",
      java: "[[-1, -1, 2], [-1, 0, 1]]",
    },
  },

  "longest-substring-without-repeating-characters": {
    id: "longest-substring-without-repeating-characters",
    title: "Longest Substring Without Repeating Characters",
    difficulty: "Medium",
    category: "String • Sliding Window",
    description: {
      text: "Given a string s, find the length of the longest substring without repeating characters.",
      notes: [],
    },
    examples: [
      { input: 's = "abcabcbb"', output: "3" },
      { input: 's = "bbbbb"', output: "1" },
      { input: 's = "pwwkew"', output: "3" },
    ],
    constraints: [
      "0 ≤ s.length ≤ 5 * 10⁴",
      "s consists of English letters, digits, symbols, and spaces",
    ],
    starterCode: {
      javascript: `function lengthOfLongestSubstring(s) {
  // Write your solution here
}

console.log(lengthOfLongestSubstring("abcabcbb")); // Expected: 3
console.log(lengthOfLongestSubstring("bbbbb"));    // Expected: 1
console.log(lengthOfLongestSubstring("pwwkew"));   // Expected: 3`,
      python: `def lengthOfLongestSubstring(s):
    # Write your solution here
    pass

print(lengthOfLongestSubstring("abcabcbb"))
print(lengthOfLongestSubstring("bbbbb"))
print(lengthOfLongestSubstring("pwwkew"))`,
      java: `class Solution {
    public static int lengthOfLongestSubstring(String s) {
        // Write your solution here
        return 0;
    }

    public static void main(String[] args) {
        System.out.println(lengthOfLongestSubstring("abcabcbb")); // 3
        System.out.println(lengthOfLongestSubstring("bbbbb"));    // 1
        System.out.println(lengthOfLongestSubstring("pwwkew"));   // 3
    }
}`,
    },
    expectedOutput: {
      javascript: "3\n1\n3",
      python: "3\n1\n3",
      java: "3\n1\n3",
    },
  },
};
