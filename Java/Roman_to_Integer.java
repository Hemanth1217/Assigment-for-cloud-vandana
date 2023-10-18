import java.util.*;

public class Roman_to_Integer {
    static int converter(String s) {
        HashMap<Character, Integer> Map = new HashMap<>();
        Map.put('I', 1);
        Map.put('V', 5);
        Map.put('X', 10);
        Map.put('L', 50);
        Map.put('C', 100);
        Map.put('D', 500);
        Map.put('M', 1000);

        int res = 0;
        for (int i = 0; i < s.length() - 1; i++) {
            if (Map.get(s.charAt(i)) < Map.get(s.charAt(i + 1))) {
                res -= Map.get(s.charAt(i));
            } else {
                res += Map.get(s.charAt(i));
            }
        }
        res += Map.get(s.charAt(s.length() - 1));
        return res;

    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String str = sc.nextLine();
        System.out.println(converter(str));

    }
}
