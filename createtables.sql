drop table if exists members;
drop table if exists pokemon;
drop table if exists types;

create table members(
	id int not null auto_increment,
	username varchar(25),
	password varchar(45),
	wins int,
	losses int,
	player varchar(25),
	rival varchar(25),
	email varchar(45) not null,
	primary key(id)
);

create table pokemon(
	id int not null auto_increment,
	name varchar(25),
	type1 varchar(25),
	type2 varchar(25),
	hp int not null,
	att int not null,
	def int not null,
	spatt int not null,
	spdef int not null,
	spd int not null, 
	move1 varchar(25),
	move1type varchar(25),
	move1pow int,
	move1acc int not null,
	move1eff varchar(25),
	move1pp int not null,
	move2 varchar(25),
	move2type varchar(25),
	move2pow int,
	move2acc int not null,
	move2eff varchar(25),
	move2pp int not null,
	move3 varchar(25),
	move3type varchar(25),
	move3pow int,
	move3acc int not null,
	move3eff varchar(25),
	move3pp int not null,
	move4 varchar(25),
	move4type varchar(25),
	move4pow int,
	move4acc int not null,
	move4eff varchar(25),
	move4pp int not null,
	move1phys boolean,
	move2phys boolean,
	move3phys boolean,
	move4phys boolean,
	primary key(id)
);

create table types (
	id int not null auto_increment,
	poketype varchar(25),
	movetype varchar(25),
	result int,
	primary key (id)
);