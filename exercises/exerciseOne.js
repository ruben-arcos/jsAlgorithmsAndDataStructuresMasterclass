/**
Frequency Counter - validAnagram
Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

Examples:

validAnagram('', '') // true
validAnagram('aaz', 'zza') // false
validAnagram('anagram', 'nagaram') // true
validAnagram("rat","car") // false) // false
validAnagram('awesome', 'awesom') // false
validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana') // false
validAnagram('qwerty', 'qeywrt') // true
validAnagram('texttwisttime', 'timetwisttext') // true
//Note: You may assume the string contains only lowercase alphabets.

Time Complexity - O(n)
*/

function validAnagram(str1, str2) {
    if (str1.length !== str2.length) {
        return false
    }
    
    let lettersStr1 = {}
    let lettersStr2 = {}
    
    for (let val of str1) {
        lettersStr1[val] = (lettersStr1[val] || 0) + 1
    }
    for (let val of str2) {
        lettersStr2[val] = (lettersStr2[val] || 0) + 1
    }
    for (let key in lettersStr1) {
        if (lettersStr1[key] !== lettersStr2[key]) {
            return false
        }
    }
    return true
  }

  console.log(validAnagram('', '')) // true
  console.log(validAnagram('aaz', 'zza')) // false
  console.log(validAnagram('anagram', 'nagaram')) // true
  console.log(validAnagram("rat","car")) // false // false
  console.log(validAnagram('awesome', 'awesom')) // false
  console.log(validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana')) // false
  console.log(validAnagram('qwerty', 'qeywrt')) // true
  console.log( validAnagram('texttwisttime', 'timetwisttext')) // true