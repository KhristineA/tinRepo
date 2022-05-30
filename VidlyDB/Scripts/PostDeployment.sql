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
:r C:\Users\Dell\source\repos\tinRepo\VidlyDB\Scripts\Release_1.0\PostDeploymentScripts\Rel_1.0_InsertBackUpData.sql
:r C:\Users\Dell\source\repos\tinRepo\VidlyDB\Scripts\Release_1.0\PostDeploymentScripts\Rel_1.0_DropBackUpTable.sql
end