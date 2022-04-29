CREATE TABLE [dbo].[Movies] (
    [Id]              INT            IDENTITY (1, 1) NOT NULL,
    [Name]            NVARCHAR (255) NOT NULL,
    [GenreId]         TINYINT        NOT NULL,
    [DateAdded]       DATETIME       NOT NULL,
    [ReleaseDate]     DATETIME       NOT NULL,
    [NumberInStock]   TINYINT        NOT NULL,
    [NumberAvailable] TINYINT        DEFAULT ((0)) NOT NULL,
    CONSTRAINT [PK_dbo.Movies] PRIMARY KEY CLUSTERED ([Id] ASC),
    CONSTRAINT [FK_dbo.Movies_dbo.Genres_GenreId] FOREIGN KEY ([GenreId]) REFERENCES [dbo].[Genres] ([Id]) ON DELETE CASCADE
);


GO
CREATE NONCLUSTERED INDEX [IX_GenreId]
    ON [dbo].[Movies]([GenreId] ASC);

