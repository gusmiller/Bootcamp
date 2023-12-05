DECLARE 
	@Source nvarchar(30) = N'LINKS',
	@Area nvarchar(30) = N'NODEJS',
	@GitCode nvarchar(30) = N'https://sequelize.org/docs/v6/core-concepts/validations-and-constraints/',
	@Description nvarchar(30) = N'Validations are checks performed in the Sequelize level, in pure JavaScript. They can be arbitrarily complex if you provide a custom validator function, or can be one of the built-in validators offered by Sequelize. If a validation fails, no SQL query will be sent to the database at all.'

INSERT INTO GITCheatsheet (Source, Area, GitCode, Description, DateCreated) 
VALUES (@Source, @Area, @GitCode, @Description, GETDATE())

--Template to insert into GIT Cheatsheet
--INSERT INTO GITCheatsheet (Source, Area, GitCode, Description) 
--VALUES (N'LINKS',N'BOOKMARK', 
--N'<a href=""></a>',
--N'')

--INSERT INTO GITCheatsheet (Source, Area, GitCode, Description) 
--VALUES (N'LINKS',N'MONGODB',N'','')

SELECT TOP (1000) [Id]
      ,[Source]
      ,[Area]
      ,[Description]
      ,[GitCode]
      ,[DateCreated]
      ,[DateUpdated]
  FROM [NCM].[dbo].[GITCheatsheet] where Source=@Source order by DateCreated desc