import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class shuffle {
    public static void main(String[] args) {
        List<Integer> list = new ArrayList<>();
        for (int i = 1; i < 8; i++) {
            list.add(i);
        }
        Collections.shuffle(list);
        for (int element : list) {
            System.out.print(element + " ");
        }
    }
}