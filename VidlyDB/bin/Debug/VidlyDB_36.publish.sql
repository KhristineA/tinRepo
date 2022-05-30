﻿/*
Deployment script for aspnet-Vidly-20220401120511

This code was generated by a tool.
Changes to this file may cause incorrect behavior and will be lost if
the code is regenerated.
*/

GO
SET ANSI_NULLS, ANSI_PADDING, ANSI_WARNINGS, ARITHABORT, CONCAT_NULL_YIELDS_NULL, QUOTED_IDENTIFIER ON;

SET NUMERIC_ROUNDABORT OFF;


GO
:setvar Release "2.0"
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
/*
 Pre-Deployment Script Template							
--------------------------------------------------------------------------------------
 This file contains SQL statements that will be executed before the build script.	
 Use SQLCMD syntax to include a file in the pre-deployment script.			
 Example:      :r .\myfile.sql								
 Use SQLCMD syntax to reference a variable in the pre-deployment script.		
 Example:      :setvar TableName MyTable							
               SELECT * FROM [$(TableName)]					
--------------------------------------------------------------------------------------
*/
--if '$(Release)' = '1.0'
--begin
--:r .\Rel_1.0_CreateBackUp.sql
--:r .\Rel_1.0_DropColumns.sql
--:r .\Rel_1.0_InsertColumn.sql
--end
GO

GO
/*
The column [dbo].[Rentals].[FullName] is being dropped, data loss could occur.
*/

IF EXISTS (select top 1 1 from [dbo].[Rentals])
    RAISERROR (N'Rows were detected. The schema update is terminating because data loss might occur.', 16, 127) WITH NOWAIT

GO
PRINT N'Altering Table [dbo].[Rentals]...';


GO
ALTER TABLE [dbo].[Rentals] DROP COLUMN [FullName];


GO
ALTER TABLE [dbo].[Rentals]
    ADD [FirstName] NVARCHAR (50) NULL,
        [LastName]  NVARCHAR (50) NULL;


GO
/*
Post-Deployment Script Template							
--------------------------------------------------------------------------------------
 This file contains SQL statements that will be appended to the build script.		
 Use SQLCMD syntax to include a file in the post-deployment script.			
 Example:      :r .\myfile.sql								
 Use SQLCMD syntax to reference a variable in the post-deployment script.		
 Example:      :setvar TableName MyTable							
               SELECT * FROM [$(TableName)]					
--------------------------------------------------------------------------------------
*/
--if '$(Release)' = '1.0'
--begin
--:r .\Rel_1.0_InsertBackUpData.sql
--:r .\Rel_1.0_DropBackUpTable.sql
--endC:\Users\Dell\source\repos\tinRepo\VidlyDB\dbo\Tables\Movies.sql
GO

GO
PRINT N'Update complete.';


GO
