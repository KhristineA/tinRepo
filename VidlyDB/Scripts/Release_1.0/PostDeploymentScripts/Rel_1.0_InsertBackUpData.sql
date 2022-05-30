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