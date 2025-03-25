import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        int first = scanner.nextInt();
        int second = scanner.nextInt();
        
        System.out.println(first * (second%10));
        System.out.println(first * (second%100 / 10));
        System.out.println(first * (second%1000 / 100));
        System.out.println(first * second);
        
        scanner.close();
    }
}