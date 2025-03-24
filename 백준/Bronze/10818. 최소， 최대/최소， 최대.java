import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int tempInt = sc.nextInt();
        
        int max = tempInt;
        int min = tempInt;
        
        for (int i = 1; i < n; i++) {
            int newInt = sc.nextInt();
            if (newInt > max) {
                max = newInt;
            }
            if (newInt < min) {
                min = newInt;
            }
        }
        
        System.out.println(min + " " + max);
        sc.close();
    }
}