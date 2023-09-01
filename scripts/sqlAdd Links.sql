DECLARE 
	@Source as nvarchar(15) = N'JAVASCRIPT',
	@Areas as nvarchar(15) = N'LINKS',
	@Descript as nvarchar(MAX) = N'Bootstrap Grid System',
	@Link as nvarchar(MAX) = N'https://www.tutorialrepublic.com/twitter-bootstrap-tutorial/bootstrap-grid-system.php'

INSERT INTO GITCheatsheet (Source,Area,Description,GitCode) VALUES (@Source,@Areas,@Descript,N'<a href="' + @Link + '">' + @Link + '</a>')

SELECT TOP (1000) [Id]
      ,[Source]
      ,[Area]
      ,[Description]
      ,[GitCode]
      ,[DateCreated]
      ,[DateUpdated]
  FROM [NCM].[dbo].[GITCheatsheet] WHERE Source=N'JAVASCRIPT'