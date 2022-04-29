namespace Vidly.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddRentalHeaderAndDetail : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.RentalDetails",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        RentalId = c.Int(),
                        DateReturned = c.DateTime(),
                        Movie_Id = c.Int(),
                        RentalHeader_Id = c.Int(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Movies", t => t.Movie_Id)
                .ForeignKey("dbo.RentalHeaders", t => t.RentalHeader_Id)
                .Index(t => t.Movie_Id)
                .Index(t => t.RentalHeader_Id);
            
            CreateTable(
                "dbo.RentalHeaders",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        DateRented = c.DateTime(nullable: false),
                        Customer_Id = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Customers", t => t.Customer_Id, cascadeDelete: true)
                .Index(t => t.Customer_Id);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.RentalDetails", "RentalHeader_Id", "dbo.RentalHeaders");
            DropForeignKey("dbo.RentalHeaders", "Customer_Id", "dbo.Customers");
            DropForeignKey("dbo.RentalDetails", "Movie_Id", "dbo.Movies");
            DropIndex("dbo.RentalHeaders", new[] { "Customer_Id" });
            DropIndex("dbo.RentalDetails", new[] { "RentalHeader_Id" });
            DropIndex("dbo.RentalDetails", new[] { "Movie_Id" });
            DropTable("dbo.RentalHeaders");
            DropTable("dbo.RentalDetails");
        }
    }
}
