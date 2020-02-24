import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

public class proba3{
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        System.out.print("Path cosa que vols llegir: ");
        String path = in.nextLine();
        in.close();
        try{
            File f = new File(path);
            Scanner sc = new Scanner(f);
            while(sc.hasNextLine()){
                String data = sc.nextLine();
                System.out.println(data);
            }
            sc.close();
        }catch(FileNotFoundException e){
            System.out.println("ERROR");
            e.printStackTrace();
        }
    }
}