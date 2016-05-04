//Populate queries for pokemon table

INSERT INTO pokemon (name, type1, hp, att, def, spatt, spdef, spd, move1, move1type, move1pow, move1acc, move1pp, move2, move2type, move2pow, move2acc, move2eff, move2pp, move3, move3type, move3acc, move3eff, move3pp, move4, move4type, move4pow, move4acc, move4eff, move4pp, move1phys, move2phys, move4phys) VALUES ('Pikachu','Electric',70,65,45,80,50,130,'Thunderbolt','Electric',95,100,15,'Quick Attack','Normal',40,100,'priority',30,'Thunder Wave','Electric',100,'Paralysis',20,'Thunder','Electric',120,70,'Paralysis',10,false,true,false);

INSERT INTO pokemon (name, type1, hp, att, def, spatt, spdef, spd, move1, move1type, move1pow, move1acc, move1pp, move2, move2type, move2pow, move2acc, move2pp, move3, move3type, move3acc, move3eff, move3pp, move4, move4type, move4acc, move4eff, move4pp, move1phys, move2phys) VALUES ('Espeon','Psychic',65,65,60,130,95,110,'Psychic','Psychic',90,100,10,'Swift','Normal',60,100,20,'Swagger','Normal',90,'Confusion',15,'Morning Sun','Psychic',100,'GainHP',5,false,true);

INSERT INTO pokemon (name, type1, hp, att, def, spatt, spdef, spd, move1, move1type, move1pow, move1acc, move1pp, move2, move2type, move2pow, move2acc, move2pp, move3, move3type, move3pow, move3acc, move3pp, move4, move4type, move4pow, move4acc, move4pp, move1phys, move2phys, move3phys, move4phys) VALUES ('Snorlax','Normal',160,110,65,65,110,30,'Body Slam','Normal',85,100,15,'Ice Beam','Ice',95,100,10,'Crunch','Dark',80,100,15,'Hyperbeam','Normal',120,100,5,true,false,true,false);

INSERT INTO pokemon (name, type1, hp, att, def, spatt, spdef, spd, move1, move1type, move1pow, move1acc, move1pp, move2, move2type, move2pow, move2acc, move2pp, move3, move3type, move3acc, move3eff, move3pp, move4, move4type, move4pow, move4acc, move4pp, move1phys, move2phys, move4phys) VALUES ('Venasaur','Grass',80,82,83,100,100,80,'Solarbeam','Grass',80,80,15,'Razor Leaf','Grass',55,100,20,'Stun Spore','Electric',75,'Paralysis',15,'Double Edge','Normal',120,70,10,false,false,true);

INSERT INTO pokemon (name, type1, hp, att, def, spatt, spdef, spd, move1, move1type, move1pow, move1acc, move1pp, move2, move2type, move2pow, move2acc, move2pp, move3, move3type, move3pow, move3acc, move3pp, move4, move4type, move4pow, move4acc, move4pp, move1phys, move2phys, move3phys, move4phys) VALUES ('Charizard','Fire',78,84,78,109,85,100,'Fire Blast','Fire',120,85,5,'Fire Fang','Fire',65,95,15,'Brick Break','Fighting',75,100,15,'Slash','Normal',70,100,20,false,true,true,true);

INSERT INTO pokemon (name, type1, hp, att, def, spatt, spdef, spd, move1, move1type, move1pow, move1acc, move1pp, move2, move2type, move2pow, move2acc, move2pp, move3, move3type, move3pow, move3acc, move3pp, move4, move4type, move4pow, move4acc, move4pp, move1phys, move2phys, move3phys, move4phys) VALUES ('Blastoise','Water',79,83,100,85,105,78,'Hydro Pump','Water',120,80,5,'Aqua Tail','Water',90,90,10,'Bite','Dark',60,100,25,'Skull Bash','Normal',70,100,20,false,true,true,true);

//Populate queries for types table

INSERT INTO types (poketype, movetype, result) VALUES ('normal', 'normal', 0);

INSERT INTO types (poketype, movetype, result) VALUES ('normal', 'ice', 0);

INSERT INTO types (poketype, movetype, result) VALUES ('normal', 'psychic', 0);

INSERT INTO types (poketype, movetype, result) VALUES ('normal', 'dark', 0);

INSERT INTO types (poketype, movetype, result) VALUES ('normal', 'electric', 0);

INSERT INTO types (poketype, movetype, result) VALUES ('normal', 'fire', 0);

INSERT INTO types (poketype, movetype, result) VALUES ('normal', 'grass', 0);

INSERT INTO types (poketype, movetype, result) VALUES ('normal', 'water', 0);

INSERT INTO types (poketype, movetype, result) VALUES ('normal', 'fighting', 1);

INSERT INTO types (poketype, movetype, result) VALUES ('psychic', 'normal', 0);

INSERT INTO types (poketype, movetype, result) VALUES ('psychic', 'ice', 0);

INSERT INTO types (poketype, movetype, result) VALUES ('psychic', 'psychic', -1);

INSERT INTO types (poketype, movetype, result) VALUES ('psychic', 'dark', 1);

INSERT INTO types (poketype, movetype, result) VALUES ('psychic', 'electric', 0);

INSERT INTO types (poketype, movetype, result) VALUES ('psychic', 'fire', 0);

INSERT INTO types (poketype, movetype, result) VALUES ('psychic', 'grass', 0);

INSERT INTO types (poketype, movetype, result) VALUES ('psychic', 'water', 0);

INSERT INTO types (poketype, movetype, result) VALUES ('psychic', 'fighting', -1);

INSERT INTO types (poketype, movetype, result) VALUES ('electric', 'normal', 0);

INSERT INTO types (poketype, movetype, result) VALUES ('electric', 'ice', 0);

INSERT INTO types (poketype, movetype, result) VALUES ('electric', 'psychic', 0);

INSERT INTO types (poketype, movetype, result) VALUES ('electric', 'dark', 0);

INSERT INTO types (poketype, movetype, result) VALUES ('electric', 'electric', -1);

INSERT INTO types (poketype, movetype, result) VALUES ('electric', 'fire', 0);

INSERT INTO types (poketype, movetype, result) VALUES ('electric', 'grass', 0);

INSERT INTO types (poketype, movetype, result) VALUES ('electric', 'water', 0);

INSERT INTO types (poketype, movetype, result) VALUES ('electric', 'fighting', 0);

INSERT INTO types (poketype, movetype, result) VALUES ('grass', 'normal', 0);

INSERT INTO types (poketype, movetype, result) VALUES ('grass', 'ice', 1);

INSERT INTO types (poketype, movetype, result) VALUES ('grass', 'psychic', 0);

INSERT INTO types (poketype, movetype, result) VALUES ('grass', 'dark', 0);

INSERT INTO types (poketype, movetype, result) VALUES ('grass', 'electric', -1);

INSERT INTO types (poketype, movetype, result) VALUES ('grass', 'fire', 1);

INSERT INTO types (poketype, movetype, result) VALUES ('grass', 'grass', -1);

INSERT INTO types (poketype, movetype, result) VALUES ('grass', 'water', -1);

INSERT INTO types (poketype, movetype, result) VALUES ('grass', 'fighting', 0);

INSERT INTO types (poketype, movetype, result) VALUES ('fire', 'normal', 0);

INSERT INTO types (poketype, movetype, result) VALUES ('fire', 'ice', -1);

INSERT INTO types (poketype, movetype, result) VALUES ('fire', 'psychic', 0);

INSERT INTO types (poketype, movetype, result) VALUES ('fire', 'dark', 0);

INSERT INTO types (poketype, movetype, result) VALUES ('fire', 'electric', 0);

INSERT INTO types (poketype, movetype, result) VALUES ('fire', 'fire', -1);

INSERT INTO types (poketype, movetype, result) VALUES ('fire', 'grass', -1);

INSERT INTO types (poketype, movetype, result) VALUES ('fire', 'water', 1);

INSERT INTO types (poketype, movetype, result) VALUES ('fire', 'fighting', 0);

INSERT INTO types (poketype, movetype, result) VALUES ('water', 'normal', 0);

INSERT INTO types (poketype, movetype, result) VALUES ('water', 'ice', -1);

INSERT INTO types (poketype, movetype, result) VALUES ('water', 'psychic', 0);

INSERT INTO types (poketype, movetype, result) VALUES ('water', 'dark', 0);

INSERT INTO types (poketype, movetype, result) VALUES ('water', 'electric', 1);

INSERT INTO types (poketype, movetype, result) VALUES ('water', 'fire', -1);

INSERT INTO types (poketype, movetype, result) VALUES ('water', 'grass', 1);

INSERT INTO types (poketype, movetype, result) VALUES ('water', 'water', -1);

INSERT INTO types (poketype, movetype, result) VALUES ('water', 'fighting', 0);


//Update Health Queries:

update pokemon set hp=90  where name="Pikachu";
update pokemon set hp=90  where name="Espeon";
update pokemon set hp=101  where name="Charizard";
update pokemon set hp=103  where name="Blastoise";
update pokemon set hp=102  where name="Venasaur";