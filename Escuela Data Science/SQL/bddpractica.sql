CREATE TABLE STUDENTS (
  STUDENTID INTEGER AUTO_INCREMENT PRIMARY KEY,
  FIRSTNAME VARCHAR(50),
  LASTNAME VARCHAR(50),
  AGE INT,
  EMAIL VARCHAR(100),
  LOADDATE TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UPDATEDATE TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );
  
  CREATE TABLE INSTRUCTORS (
    INSTRUCTORID INTEGER AUTO_INCREMENT  PRIMARY KEY,
    FIRSTNAME VARCHAR(50),
    LASTNAME VARCHAR(50),
    AGE INT,
    EMAIL VARCHAR(100),
    LOADDATE TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UPDATEDATE TIMESTAMP DEFAULT CURRENT_TIMESTAMP
   );
   
   CREATE TABLE COURSES(
  	 COURSEID INTEGER AUTO_INCREMENT PRIMARY KEY,
     COURSENAME VARCHAR(100),
     DESCRIPTION TEXT,
     INSTRUCTORID INT,
     DURATIONHOURS INT,
     LOAD_DATE TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
     UPDATEDATE TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
     FOREIGN KEY (INSTRUCTORID) REFERENCES INSTRUCTORS(INSTRUCTORID)
     );
     
     
     CREATE TABLE ENROLLMENT(
       ENROLLMENTID INT AUTO_INCREMENT PRIMARY KEY,
       ENROLLMENTDATE TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
       UPDATEDATE TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
       COURSEID INT,
       INSTRUCTORID INT,
       STUDENTID INT,
       FOREIGN KEY (INSTRUCTORID) REFERENCES INSTRUCTORS(INSTRUCTORID),
       FOREIGN KEY (STUDENTID) REFERENCES STUDENTS(STUDENTID),
       FOREIGN KEY (COURSEID) REFERENCES COURSES(COURSEID)
       
       );
       
       
use SCHOOL;
DROP table COURSES, ENROLLMENT, students,INSTRUCTORS;
create database SCHOOL;


select * from INSTRUCTORS where salary between 30000 and 55000;
alter table instructors add column Salary float not null;

select firstname, lastname from students where lastname like '%o%';

select firstname, lastname from students where firstname like 'm%' and age = 22 and lastname like '%o%';

select firstname, lastname, age from students where age in (20,22);

select COURSEID, COUNT(studentid) from ENROLLMENT GROUP BY COURSEID;

select COURSEID, COUNT(studentid) from ENROLLMENT GROUP BY COURSEID having count(studentid) > 2;

select min(age), max(age) from students;

select 
	age, case  
	when age between 18 and 20 then 'Team A'
    when firstname = 'Maria' then 'Team M'
	else 'Team B'
    end as "Team"
from students
order by Team;



-- views examples
create or replace view vw_students as
select studentid, firstname, lastname from students;

drop view vw_students;

create or replace view courses_school as 
select COURSEID, COUNT(studentid) from ENROLLMENT GROUP BY COURSEID having count(studentid) > 1;


-- temporal and MATERIALIZED views
CREATE TEMPORARY table vv_students AS
select firstname, lastname, age from students where age in (20,22);

-- create MATERIALIZED view vw_students as
-- select firstname, lastname, age from students where age in (20,22);

-- proceddure

DELIMITER //
CREATE PROCEDURE InsertEmployee (
	IN Name VARCHAR(50), 
    IN Surname VARCHAR(50), 
    IN DepartmentId INT,
    IN Salary DECIMAL(10,2),
    IN HireDate DATE
    )
BEGIN
    INSERT INTO Employees VALUES 
		(Name, Surname, DepartmentId, Salary, HireDate);
END;
//
DELIMITER ;






