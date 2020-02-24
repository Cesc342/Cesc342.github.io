import java.util.Scanner;
public class proba1{
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        proba1 hola = new proba1();
        System.out.println("Hello World");
        System.out.println("");
        System.out.println("Vols marxar? Si-1 No-0");
        int i = in.nextInt();
        if(i == 1){
            hola.adeu();
        }
        in.close();
    }
    public void adeu(){
        System.out.println("Adeu");
    }
}