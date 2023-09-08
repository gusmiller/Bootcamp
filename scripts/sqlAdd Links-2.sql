INSERT INTO GITCheatsheet (Source, Area, GitCode, Description) 
VALUES (N'LINKS',N'BOOKMARK', 
N'<a href="https://docs.github.com/en/rest/overview/resources-in-the-rest-api#root-endpoint">https://docs.github.com/en/rest/overview/resources-in-the-rest-api#root-endpoint</a>',
N'Github REST Documentation')

INSERT INTO GITCheatsheet (Source, Area, GitCode, Description) 
VALUES (N'LINKS',N'BOOKMARK', 
N'<a href="https://api.jquery.com/category/ajax/">https://api.jquery.com/category/ajax/</a>',
N'Ajax')

INSERT INTO GITCheatsheet (Source, Area, GitCode, Description) 
VALUES (N'LINKS',N'BOOKMARK', 
N'<a href="https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest">https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest</a>',
N'Xmlhttprequest')

--Template to insert into GIT Cheatsheet
--INSERT INTO GITCheatsheet (Source, Area, GitCode, Description) 
--VALUES (N'LINKS',N'BOOKMARK', 
--N'<a href=""></a>',
--N'')

SELECT TOP (1000) [Id]
      ,[Source]
      ,[Area]
      ,[Description]
      ,[GitCode]
      ,[DateCreated]
      ,[DateUpdated]
  FROM [NCM].[dbo].[GITCheatsheet] where Source=N'LINKS' order by DateCreated desc