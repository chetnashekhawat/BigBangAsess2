

using BigReact.Models;
using Microsoft.EntityFrameworkCore;

namespace BigReact.Data
{
    public class HospitalDbContext : DbContext
    {

       
        
            public HospitalDbContext(DbContextOptions options) : base(options) { }

            public DbSet<Doctor> Doctors { get; set; }
            public DbSet<Patient> Patients { get; set; }
            public DbSet<User> Users { get; set; }

            protected override void OnModelCreating(ModelBuilder modelBuilder)
            {
               
                   
            }

        
    }
}
