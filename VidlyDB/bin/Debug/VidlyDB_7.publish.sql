/*
Deployment script for aspnet-Vidly-20220401120511

This code was generated by a tool.
Changes to this file may cause incorrect behavior and will be lost if
the code is regenerated.
*/

GO
SET ANSI_NULLS, ANSI_PADDING, ANSI_WARNINGS, ARITHABORT, CONCAT_NULL_YIELDS_NULL, QUOTED_IDENTIFIER ON;

SET NUMERIC_ROUNDABORT OFF;


GO
:setvar DatabaseName "aspnet-Vidly-20220401120511"
:setvar DefaultFilePrefix "aspnet-Vidly-20220401120511"
:setvar DefaultDataPath "C:\Users\Dell\AppData\Local\Microsoft\Microsoft SQL Server Local DB\Instances\MSSQLLocalDB\"
:setvar DefaultLogPath "C:\Users\Dell\AppData\Local\Microsoft\Microsoft SQL Server Local DB\Instances\MSSQLLocalDB\"

GO
:on error exit
GO
/*
Detect SQLCMD mode and disable script execution if SQLCMD mode is not supported.
To re-enable the script after enabling SQLCMD mode, execute the following:
SET NOEXEC OFF; 
*/
:setvar __IsSqlCmdEnabled "True"
GO
IF N'$(__IsSqlCmdEnabled)' NOT LIKE N'True'
    BEGIN
        PRINT N'SQLCMD mode must be enabled to successfully execute this script.';
        SET NOEXEC ON;
    END


GO
USE [$(DatabaseName)];


GO
PRINT N'Rename refactoring operation with key 620ea126-e8c1-4f80-ac52-d1b1ad154261 is skipped, element [dbo].[RentHeader].[Id] (SqlSimpleColumn) will not be renamed to RentId';


GO
PRINT N'Creating Table [dbo].[RentDetail]...';


GO
CREATE TABLE [dbo].[RentDetail] (
    [Id]           INT      IDENTITY (1, 1) NOT NULL,
    [RentId]       INT      NOT NULL,
    [MovieId]      INT      NOT NULL,
    [DateReturned] DATETIME NULL,
    CONSTRAINT [PK_dbo.RentDetails] PRIMARY KEY CLUSTERED ([Id] ASC)
);


GO
PRINT N'Creating Table [dbo].[RentHeader]...';


GO
CREATE TABLE [dbo].[RentHeader] (
    [RentId]     INT      IDENTITY (1, 1) NOT NULL,
    [CustomerId] INT      NOT NULL,
    [DateRented] DATETIME NOT NULL,
    CONSTRAINT [PK_dbo.RentHeader] PRIMARY KEY CLUSTERED ([RentId] ASC)
);


GO
PRINT N'Creating Foreign Key [dbo].[FK_dbo.RentDetails_dbo.RentHeader_RentId]...';


GO
ALTER TABLE [dbo].[RentDetail] WITH NOCHECK
    ADD CONSTRAINT [FK_dbo.RentDetails_dbo.RentHeader_RentId] FOREIGN KEY ([RentId]) REFERENCES [dbo].[RentHeader] ([RentId]);


GO
PRINT N'Creating Foreign Key [dbo].[FK_dbo.RentDetails_dbo.Movies_MovieId]...';


GO
ALTER TABLE [dbo].[RentDetail] WITH NOCHECK
    ADD CONSTRAINT [FK_dbo.RentDetails_dbo.Movies_MovieId] FOREIGN KEY ([MovieId]) REFERENCES [dbo].[Movies] ([Id]);


GO
PRINT N'Creating Foreign Key [dbo].[FK_dbo.RentHeader_dbo.Customers_CustomerId]...';


GO
ALTER TABLE [dbo].[RentHeader] WITH NOCHECK
    ADD CONSTRAINT [FK_dbo.RentHeader_dbo.Customers_CustomerId] FOREIGN KEY ([CustomerId]) REFERENCES [dbo].[Customers] ([Id]);


GO
-- Refactoring step to update target server with deployed transaction logs
IF NOT EXISTS (SELECT OperationKey FROM [dbo].[__RefactorLog] WHERE OperationKey = '620ea126-e8c1-4f80-ac52-d1b1ad154261')
INSERT INTO [dbo].[__RefactorLog] (OperationKey) values ('620ea126-e8c1-4f80-ac52-d1b1ad154261')

GO

GO
PRINT N'Checking existing data against newly created constraints';


GO
USE [$(DatabaseName)];


GO
ALTER TABLE [dbo].[RentDetail] WITH CHECK CHECK CONSTRAINT [FK_dbo.RentDetails_dbo.RentHeader_RentId];

ALTER TABLE [dbo].[RentDetail] WITH CHECK CHECK CONSTRAINT [FK_dbo.RentDetails_dbo.Movies_MovieId];

ALTER TABLE [dbo].[RentHeader] WITH CHECK CHECK CONSTRAINT [FK_dbo.RentHeader_dbo.Customers_CustomerId];


GO
PRINT N'Update complete.';


GO
