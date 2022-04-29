CREATE TABLE [dbo].[Rentals] (
    [Id]           INT      IDENTITY (1, 1) NOT NULL,
    [DateRented]   DATETIME NOT NULL,
    [DateReturned] DATETIME NULL,
    [Customer_Id]  INT      NOT NULL,
    [Movie_Id]     INT      NOT NULL,
    CONSTRAINT [PK_dbo.Rentals] PRIMARY KEY CLUSTERED ([Id] ASC),
    CONSTRAINT [FK_dbo.Rentals_dbo.Customers_Customer_Id] FOREIGN KEY ([Customer_Id]) REFERENCES [dbo].[Customers] ([Id]) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT [FK_dbo.Rentals_dbo.Movies_Movie_Id] FOREIGN KEY ([Movie_Id]) REFERENCES [dbo].[Movies] ([Id]) ON DELETE CASCADE ON UPDATE CASCADE
);


GO
CREATE NONCLUSTERED INDEX [IX_Customer_Id]
    ON [dbo].[Rentals]([Customer_Id] ASC);


GO
CREATE NONCLUSTERED INDEX [IX_Movie_Id]
    ON [dbo].[Rentals]([Movie_Id] ASC);

