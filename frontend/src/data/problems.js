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
      { input: "nums = [2,7,11,15], target = 9", output: "[0,1]" },
      { input: "nums = [3,2,4], target = 6", output: "[1,2]" },
      { input: "nums = [3,3], target = 6", output: "[0,1]" },
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
console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));`,
      python: `def twoSum(nums, target):
    # Write your solution here
    pass

print(twoSum([2,7,11,15], 9))
print(twoSum([3,2,4], 6))
print(twoSum([3,3], 6))`,
      java: `import java.util.*;

class Solution {
    public static int[] twoSum(int[] nums, int target) {
        // Write your solution here
        return new int[0];
    }

    public static void main(String[] args) {
        System.out.println(Arrays.toString(twoSum(new int[]{2,7,11,15}, 9)));
        System.out.println(Arrays.toString(twoSum(new int[]{3,2,4}, 6)));
        System.out.println(Arrays.toString(twoSum(new int[]{3,3}, 6)));
    }
}`,
      cpp: `#include <bits/stdc++.h>
using namespace std;

vector<int> twoSum(vector<int>& nums, int target) {
    // Write your solution here
    return {};
}

int main() {
    vector<int> a = {2,7,11,15};
    vector<int> b = {3,2,4};
    vector<int> c = {3,3};
    auto r1 = twoSum(a, 9);
    auto r2 = twoSum(b, 6);
    auto r3 = twoSum(c, 6);
    for(auto& v: r1) cout<<v<<" "; cout<<""<<endl;
    for(auto& v: r2) cout<<v<<" "; cout<<""<<endl;
    for(auto& v: r3) cout<<v<<" "; cout<<""<<endl;
}`,
    },
    expectedOutput: {
      javascript: "[0,1]\n[1,2]\n[0,1]",
      python: "[0, 1]\n[1, 2]\n[0, 1]",
      java: "[0, 1]\n[1, 2]\n[0, 1]",
      cpp: "0 1\n1 2\n0 1",
    },
  },

  "valid-parentheses": {
    id: "valid-parentheses",
    title: "Valid Parentheses",
    difficulty: "Easy",
    category: "Stack",
    description: {
      text: "Given a string s ... determine if the input string is valid.",
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

console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));`,
      python: `def isValid(s):
    # Write your solution here
    pass

print(isValid("()"))
print(isValid("()[]{}"))
print(isValid("(]"))`,
      java: `class Solution {
    public static boolean isValid(String s) {
        // Write your solution here
        return false;
    }

    public static void main(String[] args) {
        System.out.println(isValid("()"));
        System.out.println(isValid("()[]{}"));
        System.out.println(isValid("(]"));
    }
}`,
      cpp: `#include <bits/stdc++.h>
using namespace std;

bool isValid(string s) {
    // Write your solution here
    return false;
}

int main() {
    cout << (isValid("()") ? "true" : "false") << endl;
    cout << (isValid("()[]{}") ? "true" : "false") << endl;
    cout << (isValid("(]") ? "true" : "false") << endl;
}`,
    },
    expectedOutput: {
      javascript: "true\ntrue\nfalse",
      python: "True\nTrue\nFalse",
      java: "true\ntrue\nfalse",
      cpp: "true\ntrue\nfalse",
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
      "0 ≤ nodes ≤ 50",
      "-100 ≤ Node.val ≤ 100",
      "Both lists sorted",
    ],
    starterCode: {
      javascript: `function mergeTwoLists(l1, l2) {
  // Write your solution here
}

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
      cpp: `#include <bits/stdc++.h>
using namespace std;

vector<int> mergeTwoLists(vector<int>& l1, vector<int>& l2) {
    // Write your solution here
    return {};
}

int main() {
    vector<int> a={1,2,4}, b={1,3,4};
    auto r = mergeTwoLists(a,b);
    for(int x:r) cout<<x<<" ";
    cout<<endl;
}`,
    },
    expectedOutput: {
      javascript: "[1,1,2,3,4,4]",
      python: "[1, 1, 2, 3, 4, 4]",
      java: "[1, 1, 2, 3, 4, 4]",
      cpp: "1 1 2 3 4 4",
    },
  },

  "binary-search": {
    id: "binary-search",
    title: "Binary Search",
    difficulty: "Easy",
    category: "Array • Binary Search",
    description: {
      text: "Given a sorted array ... return index or -1",
      notes: ["O(log n) required"],
    },
    examples: [
      { input: "nums = [-1,0,3,5,9,12], target = 9", output: "4" },
      { input: "nums = [-1,0,3,5,9,12], target = 2", output: "-1" },
    ],
    constraints: ["1 ≤ nums.length ≤ 10⁴", "-10⁴ ≤ nums[i], target ≤ 10⁴"],
    starterCode: {
      javascript: `function search(nums, target) {
  // Write your solution here
}

console.log(search([-1,0,3,5,9,12], 9));
console.log(search([-1,0,3,5,9,12], 2));`,
      python: `def search(nums, target):
    # Write your solution here
    pass

print(search([-1,0,3,5,9,12], 9))
print(search([-1,0,3,5,9,12], 2))`,
      java: `class Solution {
    public static int search(int[] nums, int target) {
        // Write your solution here
        return -1;
    }

    public static void main(String[] args) {
        System.out.println(search(new int[]{-1,0,3,5,9,12}, 9));
        System.out.println(search(new int[]{-1,0,3,5,9,12}, 2));
    }
}`,
      cpp: `#include <bits/stdc++.h>
using namespace std;

int search(vector<int>& nums, int target) {
    // Write your solution here
    return -1;
}

int main() {
    vector<int> a={-1,0,3,5,9,12};
    cout<<search(a,9)<<endl;
    cout<<search(a,2)<<endl;
}`,
    },
    expectedOutput: {
      javascript: "4\n-1",
      python: "4\n-1",
      java: "4\n-1",
      cpp: "4\n-1",
    },
  },

  // ---------- MEDIUM ----------

  "3sum": {
    id: "3sum",
    title: "3Sum",
    difficulty: "Medium",
    category: "Array • Two Pointers",
    description: {
      text: "Given an integer array nums ... return all unique triplets that sum to zero.",
      notes: ["No duplicate triplets."],
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
      cpp: `#include <bits/stdc++.h>
using namespace std;

vector<vector<int>> threeSum(vector<int>& nums) {
    // Write your solution here
    return {};
}

int main() {
    vector<int> a={-1,0,1,2,-1,-4};
    auto r=threeSum(a);
    for(auto& t: r){ cout<<"["<<t[0]<<","<<t[1]<<","<<t[2]<<"]"; }
    cout<<endl;
}`,
    },
    expectedOutput: {
      javascript: "[[-1,-1,2],[-1,0,1]]",
      python: "[[-1, -1, 2], [-1, 0, 1]]",
      java: "[[-1, -1, 2], [-1, 0, 1]]",
      cpp: "[-1,-1,2][-1,0,1]",
    },
  },

  "longest-substring-without-repeating-characters": {
    id: "longest-substring-without-repeating-characters",
    title: "Longest Substring Without Repeating Characters",
    difficulty: "Medium",
    category: "String • Sliding Window",
    description: {
      text: "Given a string s ... return length of the longest substring without repeating characters.",
      notes: [],
    },
    examples: [
      { input: 's = "abcabcbb"', output: "3" },
      { input: 's = "bbbbb"', output: "1" },
      { input: 's = "pwwkew"', output: "3" },
    ],
    constraints: [
      "0 ≤ s.length ≤ 5 * 10⁴",
      "s may include letters, digits, symbols, spaces",
    ],
    starterCode: {
      javascript: `function lengthOfLongestSubstring(s) {
  // Write your solution here
}

console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));`,
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
        System.out.println(lengthOfLongestSubstring("abcabcbb"));
        System.out.println(lengthOfLongestSubstring("bbbbb"));
        System.out.println(lengthOfLongestSubstring("pwwkew"));
    }
}`,
      cpp: `#include <bits/stdc++.h>
using namespace std;

int lengthOfLongestSubstring(string s) {
    // Write your solution here
    return 0;
}

int main() {
    cout<<lengthOfLongestSubstring("abcabcbb")<<endl;
    cout<<lengthOfLongestSubstring("bbbbb")<<endl;
    cout<<lengthOfLongestSubstring("pwwkew")<<endl;
}`,
    },
    expectedOutput: {
      javascript: "3\n1\n3",
      python: "3\n1\n3",
      java: "3\n1\n3",
      cpp: "3\n1\n3",
    },
  },
  "palindrome-number": {
    id: "palindrome-number",
    title: "Palindrome Number",
    difficulty: "Easy",
    category: "Math • Two Pointers",
    description: {
      text: "Given an integer x, return true if x is a palindrome, and false otherwise.",
      notes: [
        "An integer is a palindrome when it reads the same backward as forward.",
        "Negative numbers are not palindromes.",
      ],
    },
    examples: [
      { input: "x = 121", output: "true" },
      { input: "x = -121", output: "false" },
      { input: "x = 10", output: "false" },
    ],
    constraints: ["-2^31 ≤ x ≤ 2^31 - 1"],
    starterCode: {
      javascript: `function isPalindrome(x) {
  // Write your solution here
}

console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));`,
      python: `def isPalindrome(x):
    # Write your solution here
    pass

print(isPalindrome(121))
print(isPalindrome(-121))
print(isPalindrome(10))`,
      java: `class Solution {
    public static boolean isPalindrome(int x) {
        // Write your solution here
        return false;
    }

    public static void main(String[] args) {
        System.out.println(isPalindrome(121));
        System.out.println(isPalindrome(-121));
        System.out.println(isPalindrome(10));
    }
}`,
      cpp: `#include <bits/stdc++.h>
using namespace std;

bool isPalindrome(int x) {
    // Write your solution here
    return false;
}

int main() {
    cout << (isPalindrome(121) ? "true" : "false") << endl;
    cout << (isPalindrome(-121) ? "true" : "false") << endl;
    cout << (isPalindrome(10) ? "true" : "false") << endl;
}`,
    },
    expectedOutput: {
      javascript: "true\nfalse\nfalse",
      python: "True\nFalse\nFalse",
      java: "true\nfalse\nfalse",
      cpp: "true\nfalse\nfalse",
    },
  },
  "remove-duplicates-from-sorted-array": {
    id: "remove-duplicates-from-sorted-array",
    title: "Remove Duplicates from Sorted Array",
    difficulty: "Easy",
    category: "Array • Two Pointers",
    description: {
      text: "Given a sorted array nums, remove the duplicates in-place such that each unique element appears only once.",
      notes: [
        "You must return k where k is the number of unique elements.",
        "It must be done in O(1) extra memory.",
      ],
    },
    examples: [
      { input: "nums = [1,1,2]", output: "2, nums = [1,2,_]" },
      {
        input: "nums = [0,0,1,1,1,2,2,3,3,4]",
        output: "5, nums = [0,1,2,3,4,_...]",
      },
    ],
    constraints: [
      "1 ≤ nums.length ≤ 3 * 10⁴",
      "-100 ≤ nums[i] ≤ 100",
      "nums is sorted in non-decreasing order",
    ],
    starterCode: {
      javascript: `function removeDuplicates(nums) {
  // Write your solution here
}

console.log(removeDuplicates([1,1,2]));
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));`,
      python: `def removeDuplicates(nums):
    # Write your solution here
    pass

print(removeDuplicates([1,1,2]))
print(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))`,
      java: `class Solution {
    public static int removeDuplicates(int[] nums) {
        // Write your solution here
        return 0;
    }

    public static void main(String[] args) {
        System.out.println(removeDuplicates(new int[]{1,1,2}));
        System.out.println(removeDuplicates(new int[]{0,0,1,1,1,2,2,3,3,4}));
    }
}`,
      cpp: `#include <bits/stdc++.h>
using namespace std;

int removeDuplicates(vector<int>& nums) {
    // Write your solution here
    return 0;
}

int main() {
    vector<int> a={1,1,2};
    vector<int> b={0,0,1,1,1,2,2,3,3,4};
    cout<<removeDuplicates(a)<<endl;
    cout<<removeDuplicates(b)<<endl;
}`,
    },
    expectedOutput: {
      javascript: "2\n5",
      python: "2\n5",
      java: "2\n5",
      cpp: "2\n5",
    },
  },
  "plus-one": {
    id: "plus-one",
    title: "Plus One",
    difficulty: "Easy",
    category: "Array",
    description: {
      text: "Given a non-empty array of digits representing a non-negative integer, increment the integer by one.",
      notes: [
        "The digits are stored such that the most significant digit is first.",
      ],
    },
    examples: [
      { input: "digits = [1,2,3]", output: "[1,2,4]" },
      { input: "digits = [9]", output: "[1,0]" },
    ],
    constraints: ["1 ≤ digits.length ≤ 100", "0 ≤ digits[i] ≤ 9"],
    starterCode: {
      javascript: `function plusOne(digits) {
  // Write your solution here
}

console.log(plusOne([1,2,3]));
console.log(plusOne([9]));`,
      python: `def plusOne(digits):
    # Write your solution here
    pass

print(plusOne([1,2,3]))
print(plusOne([9]))`,
      java: `class Solution {
    public static int[] plusOne(int[] digits) {
        // Write your solution here
        return new int[0];
    }

    public static void main(String[] args) {
        System.out.println(Arrays.toString(plusOne(new int[]{1,2,3})));
        System.out.println(Arrays.toString(plusOne(new int[]{9})));
    }
}`,
      cpp: `#include <bits/stdc++.h>
using namespace std;

vector<int> plusOne(vector<int>& digits) {
    // Write your solution here
    return {};
}

int main() {
    vector<int> a={1,2,3}, b={9};
    auto r1=plusOne(a);
    auto r2=plusOne(b);
    for(int x:r1) cout<<x<<" "; cout<<endl;
    for(int x:r2) cout<<x<<" "; cout<<endl;
}`,
    },
    expectedOutput: {
      javascript: "[1,2,4]\n[1,0]",
      python: "[1, 2, 4]\n[1, 0]",
      java: "[1, 2, 4]\n[1, 0]",
      cpp: "1 2 4\n1 0",
    },
  },
  "best-time-to-buy-and-sell-stock": {
    id: "best-time-to-buy-and-sell-stock",
    title: "Best Time to Buy and Sell Stock",
    difficulty: "Easy",
    category: "Greedy • Array",
    description: {
      text: "Given an array prices where prices[i] is the price of a stock on day i, return the maximum profit.",
      notes: ["You must buy first before selling."],
    },
    examples: [
      { input: "prices = [7,1,5,3,6,4]", output: "5" },
      { input: "prices = [7,6,4,3,1]", output: "0" },
    ],
    constraints: ["1 ≤ prices.length ≤ 10⁵", "0 ≤ prices[i] ≤ 10⁴"],
    starterCode: {
      javascript: `function maxProfit(prices) {
  // Write your solution here
}

console.log(maxProfit([7,1,5,3,6,4]));
console.log(maxProfit([7,6,4,3,1]));`,
      python: `def maxProfit(prices):
    # Write your solution here
    pass

print(maxProfit([7,1,5,3,6,4]))
print(maxProfit([7,6,4,3,1]))`,
      java: `class Solution {
    public static int maxProfit(int[] prices) {
        // Write your solution here
        return 0;
    }

    public static void main(String[] args) {
        System.out.println(maxProfit(new int[]{7,1,5,3,6,4}));
        System.out.println(maxProfit(new int[]{7,6,4,3,1}));
    }
}`,
      cpp: `#include <bits/stdc++.h>
using namespace std;

int maxProfit(vector<int>& prices) {
    // Write your solution here
    return 0;
}

int main() {
    vector<int> a={7,1,5,3,6,4};
    vector<int> b={7,6,4,3,1};
    cout<<maxProfit(a)<<endl;
    cout<<maxProfit(b)<<endl;
}`,
    },
    expectedOutput: {
      javascript: "5\n0",
      python: "5\n0",
      java: "5\n0",
      cpp: "5\n0",
    },
  },
  "climbing-stairs": {
    id: "climbing-stairs",
    title: "Climbing Stairs",
    difficulty: "Easy",
    category: "Dynamic Programming",
    description: {
      text: "You are climbing a staircase with n steps. Each time you can climb 1 or 2 steps. Return how many distinct ways you can climb to the top.",
      notes: [],
    },
    examples: [
      { input: "n = 2", output: "2" },
      { input: "n = 3", output: "3" },
    ],
    constraints: ["1 ≤ n ≤ 45"],
    starterCode: {
      javascript: `function climbStairs(n) {
  // Write your solution here
}

console.log(climbStairs(2));
console.log(climbStairs(3));`,
      python: `def climbStairs(n):
    # Write your solution here
    pass

print(climbStairs(2))
print(climbStairs(3))`,
      java: `class Solution {
    public static int climbStairs(int n) {
        // Write your solution here
        return 0;
    }

    public static void main(String[] args) {
        System.out.println(climbStairs(2));
        System.out.println(climbStairs(3));
    }
}`,
      cpp: `#include <bits/stdc++.h>
using namespace std;

int climbStairs(int n) {
    // Write your solution here
    return 0;
}

int main() {
    cout<<climbStairs(2)<<endl;
    cout<<climbStairs(3)<<endl;
}`,
    },
    expectedOutput: {
      javascript: "2\n3",
      python: "2\n3",
      java: "2\n3",
      cpp: "2\n3",
    },
  },
  "product-of-array-except-self": {
    id: "product-of-array-except-self",
    title: "Product of Array Except Self",
    difficulty: "Medium",
    category: "Array • Prefix • Suffix",
    description: {
      text: "Given an integer array nums, return an array answer such that answer[i] is equal to the product of all elements except nums[i].",
      notes: ["Do not use division and run in O(n)."],
    },
    examples: [
      { input: "nums = [1,2,3,4]", output: "[24,12,8,6]" },
      { input: "nums = [-1,1,0,-3,3]", output: "[0,0,9,0,0]" },
    ],
    constraints: ["2 ≤ nums.length ≤ 10^5", "-30 ≤ nums[i] ≤ 30"],
    starterCode: {
      javascript: `function productExceptSelf(nums) {
  // Write your solution here
}

console.log(productExceptSelf([1,2,3,4]));
console.log(productExceptSelf([-1,1,0,-3,3]));`,
      python: `def productExceptSelf(nums):
    # Write your solution here
    pass

print(productExceptSelf([1,2,3,4]))
print(productExceptSelf([-1,1,0,-3,3]))`,
      java: `class Solution {
    public static int[] productExceptSelf(int[] nums) {
        // Write your solution here
        return new int[0];
    }

    public static void main(String[] args) {
        System.out.println(Arrays.toString(productExceptSelf(new int[]{1,2,3,4})));
        System.out.println(Arrays.toString(productExceptSelf(new int[]{-1,1,0,-3,3})));
    }
}`,
      cpp: `#include <bits/stdc++.h>
using namespace std;

vector<int> productExceptSelf(vector<int>& nums) {
    // Write your solution here
    return {};
}

int main() {
    vector<int> a={1,2,3,4};
    vector<int> b={-1,1,0,-3,3};
    auto r1=productExceptSelf(a);
    auto r2=productExceptSelf(b);
    for(int x:r1) cout<<x<<" "; cout<<endl;
    for(int x:r2) cout<<x<<" "; cout<<endl;
}`,
    },
    expectedOutput: {
      javascript: "[24,12,8,6]\n[0,0,9,0,0]",
      python: "[24, 12, 8, 6]\n[0, 0, 9, 0, 0]",
      java: "[24, 12, 8, 6]\n[0, 0, 9, 0, 0]",
      cpp: "24 12 8 6\n0 0 9 0 0",
    },
  },
  "container-with-most-water": {
    id: "container-with-most-water",
    title: "Container With Most Water",
    difficulty: "Medium",
    category: "Array • Two Pointers",
    description: {
      text: "Given n non-negative integers, find two lines that together with the x-axis form a container that holds the most water.",
      notes: ["Use two pointers with O(n) time."],
    },
    examples: [
      { input: "height = [1,8,6,2,5,4,8,3,7]", output: "49" },
      { input: "height = [1,1]", output: "1" },
    ],
    constraints: ["2 ≤ height.length ≤ 10^5", "0 ≤ height[i] ≤ 10^4"],
    starterCode: {
      javascript: `function maxArea(height) {
  // Write your solution here
}

console.log(maxArea([1,8,6,2,5,4,8,3,7]));
console.log(maxArea([1,1]));`,
      python: `def maxArea(height):
    # Write your solution here
    pass

print(maxArea([1,8,6,2,5,4,8,3,7]))
print(maxArea([1,1]))`,
      java: `class Solution {
    public static int maxArea(int[] height) {
        // Write your solution here
        return 0;
    }

    public static void main(String[] args) {
        System.out.println(maxArea(new int[]{1,8,6,2,5,4,8,3,7}));
        System.out.println(maxArea(new int[]{1,1}));
    }
}`,
      cpp: `#include <bits/stdc++.h>
using namespace std;

int maxArea(vector<int>& height) {
    // Write your solution here
    return 0;
}

int main() {
    vector<int> a={1,8,6,2,5,4,8,3,7};
    vector<int> b={1,1};
    cout<<maxArea(a)<<endl;
    cout<<maxArea(b)<<endl;
}`,
    },
    expectedOutput: {
      javascript: "49\n1",
      python: "49\n1",
      java: "49\n1",
      cpp: "49\n1",
    },
  },
  "group-anagrams": {
    id: "group-anagrams",
    title: "Group Anagrams",
    difficulty: "Medium",
    category: "String • Hashing",
    description: {
      text: "Given an array of strings strs, group the anagrams together.",
      notes: ["Use sorted strings or frequency map as keys."],
    },
    examples: [
      {
        input: 'strs = ["eat","tea","tan","ate","nat","bat"]',
        output: '[["eat","tea","ate"],["tan","nat"],["bat"]]',
      },
      { input: 'strs = [""]', output: '[[""]]' },
    ],
    constraints: ["1 ≤ strs.length ≤ 10^4", "0 ≤ strs[i].length ≤ 100"],
    starterCode: {
      javascript: `function groupAnagrams(strs) {
  // Write your solution here
}

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));
console.log(groupAnagrams([""]));`,
      python: `def groupAnagrams(strs):
    # Write your solution here
    pass

print(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))
print(groupAnagrams([""]))`,
      java: `class Solution {
    public static List<List<String>> groupAnagrams(String[] strs) {
        // Write your solution here
        return new ArrayList<>();
    }

    public static void main(String[] args) {
        System.out.println(groupAnagrams(new String[]{"eat","tea","tan","ate","nat","bat"}));
        System.out.println(groupAnagrams(new String[]{""}));
    }
}`,
      cpp: `#include <bits/stdc++.h>
using namespace std;

vector<vector<string>> groupAnagrams(vector<string>& strs) {
    // Write your solution here
    return {};
}

int main() {
    vector<string> a={"eat","tea","tan","ate","nat","bat"};
    vector<string> b={""};
    auto r1=groupAnagrams(a);
    auto r2=groupAnagrams(b);
    for(auto& g: r1){ cout<<"["; for(auto& s:g) cout<<s<<","; cout<<"]"; } cout<<endl;
    for(auto& g: r2){ cout<<"["; for(auto& s:g) cout<<s<<","; cout<<"]"; } cout<<endl;
}`,
    },
    expectedOutput: {
      javascript: '[["eat","tea","ate"],["tan","nat"],["bat"]]\n[[""]]',
      python: "[['eat', 'tea', 'ate'], ['tan', 'nat'], ['bat']]\n[['']]",
      java: "[[eat, tea, ate], [tan, nat], [bat]]\n[[ ]]",
      cpp: "[[eat,tea,ate,][tan,nat,][bat,]]\n[[,]]",
    },
  },
  "longest-palindromic-substring": {
    id: "longest-palindromic-substring",
    title: "Longest Palindromic Substring",
    difficulty: "Medium",
    category: "String • Two Pointers • DP",
    description: {
      text: "Given a string s, return the longest palindromic substring in s.",
      notes: ["Use expanding around center for O(n²)."],
    },
    examples: [
      { input: 's = "babad"', output: '"bab"' },
      { input: 's = "cbbd"', output: '"bb"' },
    ],
    constraints: [
      "1 ≤ s.length ≤ 1000",
      "s consists of only digits and English letters",
    ],
    starterCode: {
      javascript: `function longestPalindrome(s) {
  // Write your solution here
}

console.log(longestPalindrome("babad"));
console.log(longestPalindrome("cbbd"));`,
      python: `def longestPalindrome(s):
    # Write your solution here
    pass

print(longestPalindrome("babad"))
print(longestPalindrome("cbbd"))`,
      java: `class Solution {
    public static String longestPalindrome(String s) {
        // Write your solution here
        return "";
    }

    public static void main(String[] args) {
        System.out.println(longestPalindrome("babad"));
        System.out.println(longestPalindrome("cbbd"));
    }
}`,
      cpp: `#include <bits/stdc++.h>
using namespace std;

string longestPalindrome(string s) {
    // Write your solution here
    return "";
}

int main() {
    cout<<longestPalindrome("babad")<<endl;
    cout<<longestPalindrome("cbbd")<<endl;
}`,
    },
    expectedOutput: {
      javascript: "bab\nbb",
      python: "bab\nbb",
      java: "bab\nbb",
      cpp: "bab\nbb",
    },
  },
  "reverse-linked-list": {
    id: "reverse-linked-list",
    title: "Reverse Linked List",
    difficulty: "Easy",
    category: "Linked List",
    description: {
      text: "Given the head of a singly linked list, reverse the list and return its head.",
      notes: [],
    },
    examples: [
      { input: "head = [1,2,3,4,5]", output: "[5,4,3,2,1]" },
      { input: "head = [1,2]", output: "[2,1]" },
      { input: "head = []", output: "[]" },
    ],
    constraints: ["0 ≤ nodes ≤ 5000", "-5000 ≤ Node.val ≤ 5000"],
    starterCode: {
      javascript: `function reverseList(head) {
  // Write your solution here
}

console.log(reverseList([1,2,3,4,5]));
console.log(reverseList([1,2]));
console.log(reverseList([]));`,
      python: `def reverseList(head):
    # Write your solution here
    pass

print(reverseList([1,2,3,4,5]))
print(reverseList([1,2]))
print(reverseList([]))`,
      java: `class Solution {
    public static int[] reverseList(int[] head) {
        // Write your solution here
        return new int[0];
    }

    public static void main(String[] args) {
        System.out.println(Arrays.toString(reverseList(new int[]{1,2,3,4,5})));
        System.out.println(Arrays.toString(reverseList(new int[]{1,2})));
        System.out.println(Arrays.toString(reverseList(new int[]{})));
    }
}`,
      cpp: `#include <bits/stdc++.h>
using namespace std;

vector<int> reverseList(vector<int>& head) {
    // Write your solution here
    return {};
}

int main() {
    vector<int> a={1,2,3,4,5};
    vector<int> b={1,2};
    vector<int> c={};
    auto r1=reverseList(a);
    auto r2=reverseList(b);
    auto r3=reverseList(c);
    for(int x:r1) cout<<x<<" "; cout<<endl;
    for(int x:r2) cout<<x<<" "; cout<<endl;
    for(int x:r3) cout<<x<<" "; cout<<endl;
}`,
    },
    expectedOutput: {
      javascript: "[5,4,3,2,1]\n[2,1]\n[]",
      python: "[5, 4, 3, 2, 1]\n[2, 1]\n[]",
      java: "[5, 4, 3, 2, 1]\n[2, 1]\n[]",
      cpp: "5 4 3 2 1\n2 1\n",
    },
  },
  "permutation-in-string": {
    id: "permutation-in-string",
    title: "Permutation in String",
    difficulty: "Medium",
    category: "String • Sliding Window",
    description: {
      text: "Given two strings s1 and s2, return true if s2 contains a permutation of s1.",
      notes: ["Check substring window of length |s1|."],
    },
    examples: [
      { input: 's1 = "ab", s2 = "eidbaooo"', output: "true" },
      { input: 's1 = "ab", s2 = "eidboaoo"', output: "false" },
    ],
    constraints: [
      "1 ≤ s1.length, s2.length ≤ 10^4",
      "s consists of lowercase English letters",
    ],
    starterCode: {
      javascript: `function checkInclusion(s1, s2) {
  // Write your solution here
}

console.log(checkInclusion("ab","eidbaooo"));
console.log(checkInclusion("ab","eidboaoo"));`,
      python: `def checkInclusion(s1, s2):
    # Write your solution here
    pass

print(checkInclusion("ab","eidbaooo"))
print(checkInclusion("ab","eidboaoo"))`,
      java: `class Solution {
    public static boolean checkInclusion(String s1, String s2) {
        // Write your solution here
        return false;
    }

    public static void main(String[] args) {
        System.out.println(checkInclusion("ab","eidbaooo"));
        System.out.println(checkInclusion("ab","eidboaoo"));
    }
}`,
      cpp: `#include <bits/stdc++.h>
using namespace std;

bool checkInclusion(string s1, string s2) {
    // Write your solution here
    return false;
}

int main() {
    cout<<(checkInclusion("ab","eidbaooo")?"true":"false")<<endl;
    cout<<(checkInclusion("ab","eidboaoo")?"true":"false")<<endl;
}`,
    },
    expectedOutput: {
      javascript: "true\nfalse",
      python: "True\nFalse",
      java: "true\nfalse",
      cpp: "true\nfalse",
    },
  },
  "fractional-knapsack": {
    id: "fractional-knapsack",
    title: "Fractional Knapsack",
    difficulty: "Medium",
    category: "Greedy • Sorting",
    description: {
      text: "Given the weights and values of N items and a knapsack capacity W, return the maximum value that can be put into the knapsack. You are allowed to break items (take fractions).",
      notes: [
        "Sort by value/weight ratio in descending order.",
        "This is the fractional variant, not 0/1 knapsack.",
        "Use greedy approach.",
      ],
    },
    examples: [
      {
        input: "values = [60, 100, 120], weights = [10, 20, 30], W = 50",
        output: "240.0000",
      },
      {
        input: "values = [10, 20, 30], weights = [5, 10, 15], W = 20",
        output: "40.0000",
      },
    ],
    constraints: [
      "1 ≤ N ≤ 10^5",
      "1 ≤ weights[i], values[i], W ≤ 10^5",
      "Fractional picking allowed",
    ],
    starterCode: {
      javascript: `function fractionalKnapsack(values, weights, W) {
  // Write your solution here
}

console.log(fractionalKnapsack([60,100,120],[10,20,30],50));
console.log(fractionalKnapsack([10,20,30],[5,10,15],20));`,
      python: `def fractionalKnapsack(values, weights, W):
    # Write your solution here
    pass

print(fractionalKnapsack([60,100,120],[10,20,30],50))
print(fractionalKnapsack([10,20,30],[5,10,15],20))`,
      java: `class Solution {
    public static double fractionalKnapsack(int[] values, int[] weights, int W) {
        // Write your solution here
        return 0.0;
    }

    public static void main(String[] args) {
        System.out.println(fractionalKnapsack(new int[]{60,100,120}, new int[]{10,20,30}, 50));
        System.out.println(fractionalKnapsack(new int[]{10,20,30}, new int[]{5,10,15}, 20));
    }
}`,
      cpp: `#include <bits/stdc++.h>
using namespace std;

double fractionalKnapsack(vector<int> values, vector<int> weights, int W) {
    // Write your solution here
    return 0.0;
}

int main() {
    vector<int> v1={60,100,120}, w1={10,20,30};
    vector<int> v2={10,20,30},  w2={5,10,15};
    cout<<fixed<<setprecision(4)<<fractionalKnapsack(v1,w1,50)<<endl;
    cout<<fixed<<setprecision(4)<<fractionalKnapsack(v2,w2,20)<<endl;
}`,
    },
    expectedOutput: {
      javascript: "240\n40",
      python: "240\n40",
      java: "240.0\n40.0",
      cpp: "240.0000\n40.0000",
    },
  },
};
