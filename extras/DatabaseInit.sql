drop database up_app;
create database up_app;


create table Students(
				StudentID int primary key, 
				Password not null,
				FirstName varchar(20) not null,
				LastName varchar(20) not null
				);
insert into Students values(1043882, 'auth' ,'Gift','Langa')
insert into Students values(1198990, 'auth' ,'Kwazi','Thusi')
insert into Students values(1122367, 'auth' ,'Wavhudi','Thitshivhe')
insert into Students values(1048980, 'auth' ,'Mokete','k')


create table Buildings(
				BuildingID int primary key,
				BuildingName varchar(100) unique not null,
				BuildingType varchar(100) not null,
				Abbreviation varchar(100) not null,
				Latitude float not null, 
				Longitude float not null
				);
INSERT INTO Buildings VALUES(1,'Bozzoli Sports Pavillion A','Exam Hall','Bozzol',-26.186852,28.030087) 
INSERT INTO Buildings VALUES(2,'The Sanctuary','Services','Sanctu',-26.188083,28.030806) 
INSERT INTO Buildings VALUES(3,'Jubilee Hall','Residence','Jubs',-26.18818,28.032607) 
INSERT INTO Buildings VALUES(4,'The Planetarium','Services','Plane',-26.188332,28.028306) 
INSERT INTO Buildings VALUES(5,'Mens Residence Hall','Residence','Mens R',-26.188965,28.03047) 
INSERT INTO Buildings VALUES(6,'International House Hall','Residence','Intern',-26.189124,28.031133) 
INSERT INTO Buildings VALUES(7,'Old Mutual Sports Hall','Exam Hall','Old Mu',-26.189407,28.029298) 
INSERT INTO Buildings VALUES(8,'Old Mutual Gym','Services','OMG',-26.189459,28.029169) 
INSERT INTO Buildings VALUES(9,'John Moffat','Lecture','John M',-26.190174,28.029306) 
INSERT INTO Buildings VALUES(10,'School of Construction Economics and Management','Lecture','Constr',-26.190341,28.028654) 
INSERT INTO Buildings VALUES(11,'The Matrix','Services','Matrix',-26.18995,28.030731) 
INSERT INTO Buildings VALUES(12,'Umthombo Building','Lecture','Umthom',-26.190508,28.030705) 
INSERT INTO Buildings VALUES(13,'William Cullen Library','Library','WCL',-26.19066,28.029414) 
INSERT INTO Buildings VALUES(14,'Wartenweiler Library','Library','Wartenweiler',-26.191003,28.030768) 
INSERT INTO Buildings VALUES(15,'Emthonjeni Community Centre','Services','Emthonjeni',-26.186852,28.030087) 
INSERT INTO Buildings VALUES(16,'Oppenheimer Life Sciences','Lecture','OLS',-26.191485,28.032057) 
INSERT INTO Buildings VALUES(17,'Oppenheimer Life Sciences Library','Library','OLS Library',-26.191497,28.032287) 
INSERT INTO Buildings VALUES(18,'Humphrey Raikes','Lecture','Chemistry',-26.191594,28.031324) 
INSERT INTO Buildings VALUES(19,'Physics Building','Lecture','Physics',-26.191519,28.031329) 
INSERT INTO Buildings VALUES(20,'Solomon Mahlangu House','Lecture','Senate',-26.192768,28.030592) 
/* join table of the above tables */

create table StudentVenues(
				StudentID int not null,
				BuildingID int not null,

				foreign key (StudentID) references Students(StudentID) ,
				foreign key (BuildingID) references Buildings(BuildingID)
				)

