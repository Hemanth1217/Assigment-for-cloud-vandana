import java.util.*;
public class pangram_check {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        String s = sc.nextLine();
//        String s = "The quick brown fox jumps over the lazy dog";
        HashSet<Character> chs = new HashSet<>();
        for (char c : s.toLowerCase().toCharArray()) {
            if (c == ' ') {
                continue;
            }
            chs.add(c);
        }
        if (chs.size() == 26) {
            System.out.println("It is pangram");
        } else {
            System.out.println("It is not a pangram");
        }
    }

}