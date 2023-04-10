--tabelle anlegen

CREATE TABLE roller(

rollerID INT PRIMARY KEY AUTOINCREMENT,
fahrzeugArt TEXT,
preis DOUBLE,
ausgeliehen INT,
standort TEXT


)

-- Tabelle löschen

DROP TABLE roller



--Datensatz speichern


INSERT INTO 
roller (rollerID, fahrzeugArt, preis, ausgeliehen, standort)
VALUES (01, "Roller", 0.17, 0, "Heidelberg")

-- DELETE FROM
-- fahrzeuge
-- WHERE fahrzeugID NOT NULL