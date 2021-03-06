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
PRINT N'Dropping Foreign Key [dbo].[FK_dbo.RentHeader_dbo.Customers_CustomerId]...';


GO
ALTER TABLE [dbo].[RentHeaders] DROP CONSTRAINT [FK_dbo.RentHeader_dbo.Customers_CustomerId];


GO
PRINT N'Dropping Foreign Key [dbo].[FK_dbo.RentDetail_dbo.RentHeader_RentId]...';


GO
ALTER TABLE [dbo].[RentDetails] DROP CONSTRAINT [FK_dbo.RentDetail_dbo.RentHeader_RentId];


GO
PRINT N'Starting rebuilding table [dbo].[RentHeaders]...';


GO
BEGIN TRANSACTION;

SET TRANSACTION ISOLATION LEVEL SERIALIZABLE;

SET XACT_ABORT ON;

CREATE TABLE [dbo].[tmp_ms_xx_RentHeaders] (
    [RentId]      INT      IDENTITY (1, 1) NOT NULL,
    [Customer_Id] INT      NOT NULL,
    [DateRented]  DATETIME NOT NULL,
    CONSTRAINT [tmp_ms_xx_constraint_PK_dbo.RentHeaders1] PRIMARY KEY CLUSTERED ([RentId] ASC)
);

IF EXISTS (SELECT TOP 1 1 
           FROM   [dbo].[RentHeaders])
    BEGIN
        SET IDENTITY_INSERT [dbo].[tmp_ms_xx_RentHeaders] ON;
        INSERT INTO [dbo].[tmp_ms_xx_RentHeaders] ([RentId], [Customer_Id], [DateRented])
        SELECT   [RentId],
                 [Customer_Id],
                 [DateRented]
        FROM     [dbo].[RentHeaders]
        ORDER BY [RentId] ASC;
        SET IDENTITY_INSERT [dbo].[tmp_ms_xx_RentHeaders] OFF;
    END

DROP TABLE [dbo].[RentHeaders];

EXECUTE sp_rename N'[dbo].[tmp_ms_xx_RentHeaders]', N'RentHeaders';

EXECUTE sp_rename N'[dbo].[tmp_ms_xx_constraint_PK_dbo.RentHeaders1]', N'PK_dbo.RentHeaders', N'OBJECT';

COMMIT TRANSACTION;

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;


GO
PRINT N'Creating Index [dbo].[RentHeaders].[IX_RentHeaders_RentId]...';


GO
CREATE NONCLUSTERED INDEX [IX_RentHeaders_RentId]
    ON [dbo].[RentHeaders]([RentId] ASC);


GO
PRINT N'Creating Foreign Key [dbo].[FK_dbo.RentDetail_dbo.RentHeader_RentId]...';


GO
ALTER TABLE [dbo].[RentDetails] WITH NOCHECK
    ADD CONSTRAINT [FK_dbo.RentDetail_dbo.RentHeader_RentId] FOREIGN KEY ([RentId]) REFERENCES [dbo].[RentHeaders] ([RentId]);


GO
PRINT N'Checking existing data against newly created constraints';


GO
USE [$(DatabaseName)];


GO
ALTER TABLE [dbo].[RentDetails] WITH CHECK CHECK CONSTRAINT [FK_dbo.RentDetail_dbo.RentHeader_RentId];


GO
PRINT N'Update complete.';


GO
