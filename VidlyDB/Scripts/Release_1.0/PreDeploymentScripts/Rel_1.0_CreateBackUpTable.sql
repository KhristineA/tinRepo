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