create table usuarios(
	id serial primary key,
  nome text not null,
  email varchar(150) unique not null,
  senha varchar(150) not null
  );
 create table pokemons(
   id serial primary key,
   usuario_id int references usuarios(id),
   nome text not null,
   habilidades varchar(150) not null,
   imagem bytea,
   apelido text
 );

