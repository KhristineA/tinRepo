using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using Microsoft.AspNet.Identity.EntityFramework;

namespace Vidly.Models
{
    public class ApplicationDbContext : IdentityDbContext<ApplicationUser>
    {
        public DbSet<Customer> Customers { get; set; }
        public DbSet<Movie> Movies { get; set; }
        public DbSet<MembershipType> MembershipTypes { get; set; }
        public DbSet<Genre> Genres { get; set; }
        public DbSet<Rental> Rentals { get; set; }
        public DbSet<RentalHeader> RentalHeaders { get; set; }
        public DbSet<RentalDetail> RentalDetails { get; set; }
        public DbSet<RentHeader> RentHeaders { get; set; }
        public DbSet<RentDetail> RentDetails { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<RentHeader>()
                .HasKey(x => x.RentId);
            modelBuilder.Entity<RentDetail>()
                .HasKey(x => x.Id);
            modelBuilder.Entity<Customer>()
                .Property(x => x.Name)
                .HasColumnName("CustomerName");
        }

        public ApplicationDbContext()
            : base("DefaultConnection", throwIfV1Schema: false)
        {
            //disable initializer
            Database.SetInitializer<ApplicationDbContext>(null);
        }

        public static ApplicationDbContext Create()
        {
            return new ApplicationDbContext();
        }
    }
}