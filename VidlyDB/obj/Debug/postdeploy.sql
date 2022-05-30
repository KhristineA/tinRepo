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
if '$(Release)' = '1.0'
begin
--insert all data from backup table to main table
--concat firstname and lastname
UPDATE
    [Rentals]
SET
    [Rentals].[FullName] =  s.[FirstName] + ' ' + s.[LastName]
FROM 
    [Rentals] d
    INNER JOIN [RentalsBackUp] s
        ON d.[Id] = s.[Id];
DROP TABLE [RentalsBackUp];
end
GO
