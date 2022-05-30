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
:r C:\Users\Dell\source\repos\tinRepo\VidlyDB\Scripts\Release_1.0\PreDeploymentScripts\Rel_1.0_CreateBackUpTable.sql
:r C:\Users\Dell\source\repos\tinRepo\VidlyDB\Scripts\Release_1.0\PreDeploymentScripts\Rel_1.0_DropTwoColumns.sql
:r C:\Users\Dell\source\repos\tinRepo\VidlyDB\Scripts\Release_1.0\PreDeploymentScripts\Rel_1.0_AddNewColumn.sql
end