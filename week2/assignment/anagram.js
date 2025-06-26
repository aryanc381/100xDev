function isAnagram(s, t) {
    if (s.length !== t.length) return false;
    const sorted1 = s.split('').sort().join('');
    const sorted2 = t.split('').sort().join('');
    
    return sorted1 === sorted2;
}

s = "anagram";
t = "bolaomj";

console.log(isAnagram(s, t));