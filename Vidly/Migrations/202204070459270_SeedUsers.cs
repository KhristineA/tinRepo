namespace Vidly.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class SeedUsers : DbMigration
    {
        public override void Up()
        {
            Sql(@"
INSERT INTO [dbo].[AspNetUsers] ([Id], [Email], [EmailConfirmed], [PasswordHash], [SecurityStamp], [PhoneNumber], [PhoneNumberConfirmed], [TwoFactorEnabled], [LockoutEndDateUtc], [LockoutEnabled], [AccessFailedCount], [UserName]) VALUES (N'27f2c5bb-9305-45ab-b6a3-b918009d634b', N'admin@vidly.com', 0, N'ANYPGevlqmVhM0fLSMBITEqb3T4K4LliWulUmLgD7DHW0PIaqDFykjdib/Xi3I4cnw==', N'e42ac0a4-5a45-4a7a-9e75-3c2c177c9378', NULL, 0, 0, NULL, 1, 0, N'admin@vidly.com')
INSERT INTO [dbo].[AspNetUsers] ([Id], [Email], [EmailConfirmed], [PasswordHash], [SecurityStamp], [PhoneNumber], [PhoneNumberConfirmed], [TwoFactorEnabled], [LockoutEndDateUtc], [LockoutEnabled], [AccessFailedCount], [UserName]) VALUES (N'c0529346-235e-4712-a002-0f989785adf5', N'guest@vidly.com', 0, N'AG8zRldXC6LtoAxFxSswOF4V+6R2hmXflByc7UzPSBMTKlwN4TI/kEgi0MnIqyXWgA==', N'2a393845-4775-49f4-a53d-6fb990cf2506', NULL, 0, 0, NULL, 1, 0, N'guest@vidly.com')

INSERT INTO [dbo].[AspNetRoles] ([Id], [Name]) VALUES (N'026fc4b4-d438-44b9-8ed8-101b5058149f', N'CanManageMovies')

INSERT INTO [dbo].[AspNetUserRoles] ([UserId], [RoleId]) VALUES (N'27f2c5bb-9305-45ab-b6a3-b918009d634b', N'026fc4b4-d438-44b9-8ed8-101b5058149f')
");
        }
        
        public override void Down()
        {
        }
    }
}
