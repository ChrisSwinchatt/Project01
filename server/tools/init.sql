/* Create database. */
create database if not exists serverdb;
use serverdb;

/* Drop any existing tables. */
drop table if exists location;
drop table if exists client;
drop table if exists server;
drop table if exists request;
drop table if exists price;

/* Create new tables. */
create table client (
    name    varchar(50)   not null,
    address varbinary(16) not null,
    time     int          not null,
    PRIMARY KEY(id)
);

create table server (
    id      int           not null,
    address varbinary(16) not null,
    PRIMARY KEY(id)
);

create table request (
    id        int         not null, -- Request ID.
    client    int         not null, -- Client ID.
    url       varchar(28) not null, -- Requested URL.
    method    varchar(4)  not null, -- Request method.
    server    int         not null, --
    startTime int         not null, --
    endTime   int         not null, --
    status    int         not null, --
    PRIMARY KEY(id)
);

create table location (
    id        int    not null,
    client    int    not null,
    time      int    not null,
    longitude double not null,
    latitude  double not null,
    PRIMARY KEY(id))
);

create table price (
    id        int          not null,
    price     int          not null,
    date      date         not null,
    postcode  varchar(8),
    paon      varchar(50),
    saon      varchar(50),
    street    varchar(50),
    locality  varchar(50),
    town      varchar(50),
    district  varchar(50),
    county    varchar(50),
    latitude  double       not null,
    longitude double       not null,
    PRIMARY KEY(id)
);
