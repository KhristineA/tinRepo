CREATE TABLE [dbo].[MembershipTypes] (
    [Id]               TINYINT        NOT NULL,
    [SignUpFee]        SMALLINT       NOT NULL,
    [DurationInMonths] TINYINT        NOT NULL,
    [DiscountRate]     TINYINT        NOT NULL,
    [Name]             NVARCHAR (MAX) NOT NULL,
    CONSTRAINT [PK_dbo.MembershipTypes] PRIMARY KEY CLUSTERED ([Id] ASC)
);

