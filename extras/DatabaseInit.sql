drop database up_app;
create database up_app;


create table Students(
				StudentID int primary key, 
				FirstName varchar(20) not null,
				LastName varchar(20) not null
				);

create table Buildings(
				BuildingID int primary key,
				BuildingName varchar(100) unique not null,
				Latitude int not null, 
				Longitude int not null
				);

/* join table of the above tables */

create table StudentVenues(
				StudentID int not null,
				BuildingID int not null,

				foreign key (StudentID) references Students(StudentID) ,
				foreign key (BuildingID) references Buildings(BuildingID)
				)
