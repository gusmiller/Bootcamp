
DECLARE 
	@Source nvarchar(30) = N'CODE',
	@Area nvarchar(30) = N'REACT',
	@GitCode nvarchar(30) = N'https://vitejs.dev/',
	@Description nvarchar(30) = N'Rapid development tool designed for modern web projects'

INSERT INTO GITCheatsheet (Source, Area, GitCode, Description, DateCreated) 
VALUES (@Source, @Area, @GitCode, @Description, GETDATE())

--Template to insert into GIT Cheatsheet
--INSERT INTO GITCheatsheet (Source, Area, GitCode, Description) 
--VALUES (N'LINKS',N'BOOKMARK', 
--N'<a href=""></a>',
--N'')

--INSERT INTO GITCheatsheet (Source, Area, GitCode, Description) VALUES (N'LINKS',N'MONGODB',N'','')

SELECT TOP (1000) [Id]
      ,[Source]
      ,[Area]
      ,[Description]
      ,[GitCode]
      ,[DateCreated]
      ,[DateUpdated]
  FROM [NCM].[dbo].[GITCheatsheet] where Source=@Source order by DateCreated desc