CREATE TABLE [dbo].[Customers] (
    [Id]                       INT            IDENTITY (1, 1) NOT NULL,
    [CustomerName]                     NVARCHAR (255) NOT NULL,
    [IsSubscribedToNewsletter] BIT            DEFAULT ((0)) NOT NULL,
    [MembershipTypeId]         TINYINT        DEFAULT ((0)) NOT NULL,
    [Birthdate]                DATETIME       NULL,
    CONSTRAINT [PK_dbo.Customers] PRIMARY KEY CLUSTERED ([Id] ASC),
    CONSTRAINT [FK_dbo.Customers_dbo.MembershipTypes_MembershipTypeId] FOREIGN KEY ([MembershipTypeId]) REFERENCES [dbo].[MembershipTypes] ([Id]) ON DELETE CASCADE
);


GO
CREATE NONCLUSTERED INDEX [IX_MembershipTypeId]
    ON [dbo].[Customers]([MembershipTypeId] ASC);

