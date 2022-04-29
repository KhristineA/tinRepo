CREATE TABLE [dbo].[RentDetails]
(
	[Id] INT IDENTITY (1, 1) NOT NULL, 
    [RentId] INT NOT NULL, 
    [Movie_Id] INT NOT NULL, 
    [DateReturned] DATETIME NULL,
    CONSTRAINT [PK_dbo.RentDetail] PRIMARY KEY CLUSTERED ([Id] ASC),
    CONSTRAINT [FK_dbo.RentDetail_dbo.RentHeader_RentId] FOREIGN KEY ([RentId]) REFERENCES [dbo].[RentHeaders] ([RentId])  ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT [FK_dbo.RentDetail_dbo.Movies_Movie_Id] FOREIGN KEY ([Movie_Id]) REFERENCES [dbo].[Movies] ([Id])  ON DELETE CASCADE ON UPDATE CASCADE

)

GO
CREATE INDEX [IX_RentDetails_RentId] ON [dbo].[RentDetails] ([RentId])

