CREATE TABLE [dbo].[RentHeaders]
(
	[RentId] INT IDENTITY (1, 1) NOT NULL , 
    [Customer_Id] INT NOT NULL, 
    [DateRented] DATETIME NOT NULL
    CONSTRAINT [PK_dbo.RentHeaders] PRIMARY KEY CLUSTERED ([RentId] ASC),
    CONSTRAINT [FK_dbo.RentHeaders_dbo.Customers_CustomerId] FOREIGN KEY ([Customer_Id]) REFERENCES [dbo].[Customers] ([Id]) ON DELETE CASCADE ON UPDATE CASCADE

)

GO

CREATE INDEX [IX_RentHeaders_RentId] ON [dbo].[RentHeaders] ([RentId])
