drop database up_app;
create database up_app;


create table Students(
				StudentID int primary key, 
				FirstName varchar(20) not null,
				LastName varchar(20) not null
				);
insert into Students values(1043882,'Gift','Langa')
insert into Students values(1198990,'Kwazi','Thusi')
insert into Students values(1122367,'Wavhudi','Thitshivhe')
insert into Students values(1048980,'Mokete','k')


create table Buildings(
				BuildingID int primary key,
				BuildingName varchar(100) unique not null,
				BuildingType varchar(20) not null,
				Latitude int not null, 
				Longitude int not null
				);
insert into Buildings values(1,'Chamber of Mines','Lecture Hall', 20.3, 26.2)
insert into Buildings values(2,'FNB','Lecture Hall', 20.3, 25.4)
insert into Buildings values(3,'Hall29','Exam Hall', 20.3, 24.6)
insert into Buildings values(4,'SWWDH','Exam Hall', 19.5, 27.4)
insert into Buildings values(5,'Main Dining Hall','Dining Hall', 19.2, 25.1)
insert into Buildings values(6,'Convocation','Dining Hall', 21.7, 23.4)
insert into Buildings values(7,'Wartenweiler','Library', 19.4, 26.7)
insert into Buildings values(8,'Gold Fields','Library', 20.3, 26.2)
insert into Buildings values(9,'West Campus','Kudu Terminal', 20.3, 24)
insert into Buildings values(10,'East Campus','Kudu Terminal', 19.3, 24.8)
/* join table of the above tables */

create table StudentVenues(
				StudentID int not null,
				BuildingID int not null,

				foreign key (StudentID) references Students(StudentID) ,
				foreign key (BuildingID) references Buildings(BuildingID)
				)

