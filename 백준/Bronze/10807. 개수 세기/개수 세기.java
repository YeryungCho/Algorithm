import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        int length = scanner.nextInt();
        int count = 0;
        int[] num = new int[length];
        
        for (int i = 0; i < length; i++) {
            num[i] = scanner.nextInt();
        }
        
        int answer = scanner.nextInt();
        
        for (int i = 0; i < length; i++) {
            if (answer == num[i]) {
                count += 1;
            }
        }
        
        System.out.println(count);
        scanner.close();
    }
}