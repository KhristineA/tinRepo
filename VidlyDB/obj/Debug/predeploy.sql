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
if '$(Release)' = '1.0'
begin
--create table (copy of rentals table)
SELECT [Id], 
    [DateRented],
    [DateReturned],
    [Customer_Id],
    [Movie_Id],
    [FirstName], 
    [LastName]
INTO [RentalsBackUp]
FROM [Rentals];
--remove fullname and lastname columns
ALTER TABLE [Rentals]
DROP COLUMN [FirstName], [LastName];
--add column fullname
ALTER TABLE [Rentals]
ADD [FullName] nvarchar(100);
end
GO
