import java.util.Scanner;

public class proba2{
    public static void main(String[] args) {
        boolean error = false;
        Scanner in = new Scanner(System.in);
        System.out.println("0-Sumar");
        System.out.println("1-Restar");
        System.out.println("2-Multiplicar");
        System.out.println("3-Dividir");
        int opc = in.nextInt();

        float resultat = 0f;
        System.out.println("Valor 1: ");
        float v1 = in.nextFloat();
        System.out.println("Valor 2: ");
        float v2 = in.nextFloat();

        System.out.print(".");
        if(opc == 0){
            resultat = v1 + v2;
            System.out.print(".");
        }else if(opc == 1){
            resultat = v1 - v2;
            System.out.print(".");
        }else if(opc == 2){
            resultat = v1 * v2;
            System.out.print(".");
        }else if(opc == 3){
            resultat = v1 / v2;
            System.out.print(".");
        }else{
            System.out.println("");
            System.out.println("ERROR: Opció NO Existen");
            error = true;
        }

        if(!error){
            System.out.print(". ");
            System.out.println("Resultat: " + resultat);
        }

        in.close();
    }
}