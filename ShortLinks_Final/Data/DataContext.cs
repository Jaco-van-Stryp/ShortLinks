using Microsoft.EntityFrameworkCore;
using ShortLinks_Final.Entities;

namespace ShortLinks_Final.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options) : base(options)
        {
            
        }
        public DbSet<User> User {  get; set; }
        public DbSet<Links> Links {  get; set; }
    }
}
