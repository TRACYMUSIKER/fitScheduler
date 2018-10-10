-- Members Table
CREATE TABLE members(
    memberid serial PRIMARY KEY NOT NULL,
    CardUID INTEGER NOT NULL,
    firstname TEXT NOT NULL,
    lastname TEXT NOT NULL,
    telephone VARCHAR NOT NULL,
    isMember BOOLEAN NOT NULL,
);

-- Events Table
CREATE TABLE events(
  eventsid serial PRIMARY KEY NOT NULL,
    title TEXT NOT NULL,
    instructor TEXT NOT NULL,
    details TEXT NOT NULL,
    startTime VARCHAR NOT NULL,
    endTime VARCHAR NOT NULL,
);


-- Registered Events Table
CREATE TABLE registered(
eventsid INTEGER NOT NULL UNIQUE,
memberid INTEGER NOT NULL UNIQUE,
);



-- Quick Sign Up Table