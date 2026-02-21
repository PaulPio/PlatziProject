-- Class from Web dev simpler
create database record_company;
use record_company;

create table bands (
	id INT NOT NULL AUTO_INCREMENT,
	name VARCHAR (255) NOT NULL,
    PRIMARY KEY (id)
);

create table albums (
	id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR (255) NOT NULL,
    release_year INT,
    band_id INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (band_id) REFERENCES bands(id)
);

insert into bands (name) values ('Iron Maiden');

insert into bands (name) values ('Deuce') , ("Avenged Sevenfold"),('Ankor');

select id as 'ID', name as 'Band name' from bands;

select * from bands order by name;

insert into albums (name, release_year, band_id)
values ('The Number of the Beasts',1985,1), ('Power Slave',1984,1),('Nightmare',2018,2), ('Nightmare',2020,3), ('Test Album',Null,3);

select * from albums;

select distinct name as 'Album Name' from albums;

update albums set release_year = 1982 where id = 1;

select * from albums where release_year < 2000;

select * from albums where name LIKE '%er%' or band_id =2;

select * from albums where release_year = 1984 and band_id = 1;

select * from albums where release_year between 1500 and 2030;

select * from albums where release_year is not null;
delete from albums where id=5;
select * from albums;

select * from bands join albums on bands.id = albums.band_id;

select * from bands left join albums on bands.id = albums.band_id;

select * from bands right join albums on bands.id = albums.band_id;

select sum(release_year) from albums;


select avg(release_year) from albums;


select count(release_year) from albums;

select band_id, count(band_id) from albums group by band_id;

select b.name as band_name, count(a.id) as num_albums from bands as b left join albums as a on b.id = a.band_id group by b.id;

select b.name as band_name, count(a.id) as num_albums from bands as b left join albums as a on b.id = a.band_id group by b.id having num_albums =1;

drop database record_company;

CREATE DATABASE record_company;
USE record_company;

CREATE TABLE bands (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE albums (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  release_year INT,
  band_id INT NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (band_id) REFERENCES bands(id)
);


-- Exercise 1
create table songs (
	id INT NOT NULL AUTO_INCREMENT,
	name VARCHAR (255) NOT NULL,
    length float not null,
    album_id int not null,
	FOREIGN KEY (album_id) REFERENCES albums(id),
    PRIMARY KEY (id)
);
-- Exercise 2
select name as 'Band Name' from bands;

-- Exercise 3, this one selects the oldest album by using the 'order by' to order the albums based on release year, and 'limit 1' to only select 1 album, which should be the oldest
select * from albums where release_year is not null order by release_year limit 1;

-- Exercise 4, Get all Bands that have Albums, for this we use the join to use as inner join. the query 'albums on bands.id = albums.band_id' 
-- links the band.id with the albums.band_id, this means tthat the query will only retrive those items that actually have a band_id attached to the album
-- for this we use the foreign keys that are listed on the tables, this will select the items that are equal, this means the bands id that are equal is the bands table with the ones in the albums table that also has their own band id
select distinct bands.name as 'Band name' from bands
join albums on bands.id = albums.band_id;


-- Exercise 5, Get all Bands that have No Albums
select bands.name AS 'Band Name'
FROM bands
left join albums on bands.id = albums.band_id
group by bands.id -- Unlike in the example on the video, we should group by bands id to avoid errors given that there is no album for that band, it wont appear on the albums table at all, so we need to group by the bands table info
having count(albums.id) = 0;

-- other option is simply selection the talbe which has null info when comparing with the albums table
SELECT 
	bands.name AS 'Band Name',
    bands.id as 'band id'
FROM bands
LEFT JOIN albums ON bands.id = albums.band_id
WHERE albums.id IS NULL;


-- Exercise 6 Get the Longest Album  
SELECT 
    albums.name AS Name, 
    albums.release_year AS 'Release Year', 
    SUM(songs.length) AS Duration
FROM albums
JOIN songs ON albums.id = songs.album_id
GROUP BY albums.id
ORDER BY Duration DESC
LIMIT 1;

-- Explanation  
/*
SELECT, when used multiple times to select multiple rows that we want in our query
JOIN songs ON albums.id = songs.album_id
Links the albums table with the songs table to access song lengths.
SUM(songs.length) AS Duration
Uses SUM() to calculate the total length of all songs in each album.
GROUP BY albums.id
Groups the result by album so we get one row per album.
ORDER BY Duration DESC
Sorts the albums in descending order by total duration.
LIMIT 1 
Selects only the longest album. */

-- 7. Update the Release Year of the Album with no Release Year
-- To find out which album has no release year
SELECT 
	albums.name AS 'Band Name',
    albums.release_year as 'Release',
    albums.id
from albums
order by id;

select * from albums where release_year is null;
    -- album id wiht no release year is 4;

-- To update it
update albums set release_year = 1986 where id = 4;


-- 8. Insert a record for your favorite Band and one of their Albums

-- First we create the band, located the id for that band, and then create the new album
insert into bands(name) values ("Rawayana");
select * from bands;
INSERT INTO albums(name,release_year,band_id) VALUES ('Trippy Caribean',2016,8); 
select * from albums;

-- 9. Delete the Band and Album you added in #8
-- first we delete the album and then the band
delete from albums where band_id = 8;
delete from bands where id = 8;

-- 10. Get the Average Length of all Songs

-- We select all songs and use the avg function to get the avg

select avg(songs.length) as "Average Song Duration"
from songs;

-- 11. Select the longest Song off each Album
 /*Return the album name as Album, the album release year as Release Year, and the longest song length as Duration.*/
 -- First we select the rows that we want to show
SELECT 
	albums.name as Album, 
    albums.release_year as 'Release Year',
    max(songs.length) as Duration
from albums -- then we join the albums table with the songs table based in the album id that is linked is both tables
join songs on  albums.id = songs.album_id
group by albums.id -- We grop by album id so each song is linked by album
order by Duration; -- optional,  with this , we order the query depending on which is the shortest long song of each album


-- 12. Get the number of Songs for each Band
-- This is one of the toughest question on the list. It will require you to chain together two joins instead of just one. 
-- Return the band name as Band, the number of songs as Number of Songs.

Select  -- First we select the rows that we want to returns, bands name for the band name, and the count of songs for each band using the count function with the album id that mathces each album
	bands.name as 'Band',
    count(songs.album_id) as 'Number os Songs'
from albums
join songs on albums.id = songs.album_id -- we linked the query of the songs album id attribute with the albums id
join bands on albums.band_id = bands.id -- we linked again with the the bands id of album and band table
group by Band; -- we group by the name of the band








