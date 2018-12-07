//template for CRUD

SELECT
    id,
    name,
    track_id as "trackId",
    start_date as "startDate"
    FROM student
    ORDER BY name;

SELECT
    id,
    name,
    track_id as "trackId",
    start_date as "startDate"
FROM student
WHERE id = $1;

INSERT INTO student (name, track_id, start_date)
VALUES($1, $2, $3)
RETURNING
    id,
    name,
    track_id as "trackId",
    start_date