namespace WebApplication1.Models
{
    public class DBMockStudents
    {
        public static List<Student> students = new List<Student>() {
            new Student(){Id=1, Name="avi" , Grade=100 },
            new Student(){Id=2, Name="benny" , Grade=98 },
            new Student(){Id=3, Name="chalrie" , Grade=97},
            new Student(){Id=4, Name="dora" , Grade=99 },
        };
    }
}
