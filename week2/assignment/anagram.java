import java.util.Arrays;


public class anagram {
    public static void main(String[] args) {
        Boolean a = isAnagram("art", "rat");
        System.out.println(a);
    }

    public static Boolean isAnagram(String s, String t) {
        char[] arr1 = s.toCharArray();
        Arrays.sort(arr1);
        s = new String(arr1);

        char[] arr2 = t.toCharArray();
        Arrays.sort(arr2);
        t = new String(arr2);
        
        System.out.println();
        System.out.println();
        System.out.println(s);
        System.out.println(t);

        if(!t.equals(s)) {
            return false;
        }
        else {
            return true;
        }
    }
}
