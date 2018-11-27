using System.Collections.Generic;
using System.Threading.Tasks;
using EacademyApp.API.Models;
 namespace EacademyApp.API.Data
{
    public interface IEacademyRepository
    {
        void Add<T>(T entity) where T: class;
        void Delete<T>(T entity) where T: class;
        Task<bool> SaveAll();
        Task<IEnumerable<Student>> GetStudents();
        Task<Student> GetStudent(int id);
    }
}
