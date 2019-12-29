

let World = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 21,2, 2, 2, 2, 2, 21,2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 13, 1, 1, 1,21,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21,2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 21,0,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 1, 12,1, 1, 11,1, 1, 12,1, 1, 0, 1, 0, 0, 0, 1, 1, 1, 13,1, 1, 1, 22,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 22,2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 13,0, 0, 0, 0, 0, 0, 0, 0, 0, 13,1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 2, 2, 21,2, 2, 4, 2, 2, 21,2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 22,0, 0, 0, 22,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 13,0, 0, 0, 0, 0, 0, 0, 0, 0, 13,1, 1, 1, 12,1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 1, 1, 1, 12,1, 1, 4, 1, 1, 12,1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 21, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 4, 1, 1, 0, 0, 0, 13,0, 0, 0, 13,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 2, 2, 2, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 2, 2, 2, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 2, 2, 2, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 13,0, 0, 0, 13,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 21,0, 0, 0, 21,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 21,4, 21,2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0],
    [13,0, 0, 0, 13,1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 13,1, 0, 0, 0, 0, 0, 1, 13,1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0],
    [1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 13, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0],
    [1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12,3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0],
    [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0],
    [1, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 13,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 31,0],
    [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0],
    [1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12,3, 3, 3, 0, 0, 0, 0, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0],
    [1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 13,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 3, 3, 0, 0, 3, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0],
    [1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 11,1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1,11, 1, 1, 0, 0, 0, 0, 3, 0, 0, 3, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0],
    [11,0, 0, 0, 11,1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 3, 3, 4, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 3, 0, 0, 0, 3, 3, 3, 0, 3, 3, 0, 3, 3, 3, 0],
    [1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 3, 0, 0, 0, 0, 0, 0, 3, 0, 0, 3, 0, 0, 0, 0],
    [1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 3, 0, 0, 3, 0, 3, 0, 3, 0, 3, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 3, 3, 3, 0, 3, 0, 3, 0, 3, 0, 3, 3, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 13,0, 0, 0, 13,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0],
    [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 31,0, 0, 0],
    [1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0],
    [1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 12,1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 3, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 0, 3, 0, 3, 0, 3, 0, 3, 3, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 13,52,1, 1, 0, 0, 0, 0, 3, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 3, 0, 3, 0, 3, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 41,0, 5, 1, 0, 0, 0, 0, 3, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 13,52,1, 1, 0, 0, 0, 0, 3, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 11,1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 12,1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 3, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 52,1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 4, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 5, 0, 41,0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 3, 0, 0, 0, 3, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 52,13,0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 4, 0, 0, 0, 4, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 3, 0, 0, 0, 3, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 3, 0, 0, 0, 3, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 0, 0, 0, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 3, 0, 0, 0, 3, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 4, 0, 0, 0, 4, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 3, 0, 0, 0, 3, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 0, 0, 0, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 31, 3, 3, 31,3, 3, 32,3, 3, 31,3, 3, 31,3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];
let Doors = {};

let Push = {
    15: {
        30: [0, 2]
    },
    6: {
        10: [0, 2]
    },
    42: {
        18: [0, 2]
    },
    43: {
        17: [0, 2]
    },
    46: {
        13: [0, 2]
    }
};

const enemies = [
    new Enemy(33.5, 26.5, "guard", 100, 2, 0),
    new Enemy(38.5, 54.5, "guard", 100, 2, 0),
];

const sprites = [
    // Test
    // {
    //     x: 33.5,
    //     y: 26.5,
    //     dir: [
    //         'guardStandBack',
    //         'guardStandBackLeft',
    //         'guardStandLeft',
    //         'guardStandFrontLeft',
    //         'guardStandFront',
    //         'guardStandFrontRight',
    //         'guardStandRight',
    //         'guardStandBackRight',
    //     ],
    //     id: 'guard',
    //     point: 100,
    //     health: 2,
    //     dropItem: "ammoPack",
    //     deathFrame: 1
    // },

    // Spawn Room

    // Green lights
    {
        x: 34.5,
        y: 50.5,
        id: 'greenLight'
    },

    {
        x: 34.5,
        y: 45.5,
        id: 'greenLight'
    },

    {
        x: 34.5,
        y: 54.5,
        id: 'greenLight'
    },

    {
        x: 38.5,
        y: 54.5,
        id: 'greenLight'
    },

    {
        x: 30.5,
        y: 54.5,
        id: 'greenLight'
    },

    // Guards

    {
        x: 31.5,
        y: 50.5,
        id: 'death_5'
    },

    // {
    //     x: 38.5,
    //     y: 54.5,
    //     dir: [
    //         'guardStandFront',
    //         'guardStandFrontRight',
    //         'guardStandRight',
    //         'guardStandBackRight',
    //         'guardStandBack',
    //         'guardStandBackLeft',
    //         'guardStandLeft',
    //         'guardStandFrontLeft',
    //     ],
    //     id: 'guard',
    //     point: 100,
    //     health: 2,
    //     dropItem: "ammoPack",
    //     deathFrame: 1
    // },

    // Skeletons

    {
        x: 40.4,
        y: 50.5,
        id: 'skeletonPile'
    },

    {
        x: 38.5,
        y: 45.5,
        id: 'skeletonLaying'
    },

    {
        x: 28.5,
        y: 44.5,
        id: 'skeletonPile'
    },

    // Ammo

    {
        x: 39.5,
        y: 54.5,
        id: 'ammoPack'
    },

    // FoodPack

    {
        x: 34.5,
        y: 55.5,
        id: 'foodPack'
    },

    {
        x: 37.5,
        y: 50.5,
        id: 'foodPack'
    },

    {
        x: 29.5,
        y: 44.5,
        id: 'foodPack'
    },

    // ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    // ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    // ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    // Hallway

    // Lights
    {
        x: 34.5,
        y: 41.5,
        id: 'greenLight'
    },

    {
        x: 34.5,
        y: 37.5,
        id: 'greenLight'
    },

    {
        x: 34.5,
        y: 34.5,
        id: 'greenLight'
    },



    // ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    // ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    // ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    // Big room

    // Chandeliers

        // Center
    {
        x: 34.5,
        y: 26.5,
        id: 'chandelier'
    },

        // Center Right
    {
        x: 40.5,
        y: 26.5,
        id: 'chandelier'
    },

    // Center Left
    {
        x: 29.5,
        y: 26.5,
        id: 'chandelier'
    },

    // Plants

        // Bottom Right
    {
        x: 42,
        y: 29,
        id: 'bluePlant'
    },

        // Bottom Left
    {
        x: 27.5,
        y: 29.5,
        id: 'bluePlant'
    },

        // Top Right
    {
        x: 42,
        y: 23.6,
        id: 'bluePlant'
    },

        // Top Left
    {
        x: 27.5,
        y: 23.5,
        id: 'bluePlant'
    },

        // Center Left
    {
        x: 32.5,
        y: 22.5,
        id: 'bluePlant'
    },

        // Center Right
    {
        x: 36.5,
        y: 22.5,
        id: 'bluePlant'
    },

    // ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    // ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    // ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    // Right of Big room

    // Down Path

    // Health
    {
        x: 59.5,
        y: 34.5,
        id: 'stew'
    },

    // Pot
    {
        x: 60.4,
        y: 37.4,
        id: 'pot'
    },

    // ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    // ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    // Forward Path

    // Barrel

        // Right most Top barrel
    {
        x: 62,
        y: 22.7,
        id: 'barrel'
    },

         // Below Right most Top barrel
    {
        x: 62,
        y: 23.3,
        id: 'barrel'
    },

        // Left Right most Top barrels
    {
        x: 61.2,
        y: 22.7,
        id: 'barrel'
    },

    {
        x: 60.4,
        y: 22.7,
        id: 'barrel'
    },

    // Pond next to barrel
    {
        x: 59.4,
        y: 22.7,
        id: 'pond'
    },

    // Food
    {
        x: 55.5,
        y: 22.6,
        id: 'foodPack'
    },

    {
        x: 58.5,
        y: 28.5,
        id: 'foodPack'
    },

    {
        x: 61.5,
        y: 30.5,
        id: 'foodPack'
    },

    // Table
    {
        x: 57.5,
        y: 28.5,
        id: 'table'
    },

    {
        x: 60.5,
        y: 28.5,
        id: 'table'
    },

    // Well empty
    {
        x: 60.5,
        y: 31.2,
        id: 'wellEmpty'
    },

    // Well fill
    {
        x: 57.5,
        y: 31.2,
        id: 'wellFill'
    },

    // ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    // ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    // ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    // Hallway 2

    // Green light

        // Bottom
    {
        x: 34.5,
        y: 19.5,
        id: 'greenLight'
    },

        // Middle
    {
        x: 34.5,
        y: 15.5,
        id: 'greenLight'
    },

    // Top
    {
        x: 34.5,
        y: 11.5,
        id: 'greenLight'
    },

    // Armor
    {
        x: 37.5,
        y: 15.5,
        id: 'armor'
    },

    // ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    // Hidden

    // Ammo
    {
        x: 28.5,
        y: 17.5,
        id: 'ammoPack'
    },

    {
        x: 28.5,
        y: 16.5,
        id: 'ammoPack'
    },

    // SMG
    {
        x: 28.5,
        y: 18.5,
        id: 'smg'
    },

    // Health
    {
        x: 29.5,
        y: 17.5,
        id: 'medPack'
    },

    {
        x: 29.5,
        y: 18.5,
        id: 'medPack'
    },

    // ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    // ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    // ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    // After second hallway

    // Chandelier
    {
        x: 34.5,
        y: 4.5,
        id: 'chandelier'
    },

    // Tables with chairs

        // Center
    {
        x: 34.5,
        y: 2.5,
        id: 'tableChair'
    },

        // Right
    {
        x: 37.5,
        y: 2.5,
        id: 'tableChair'
    },

        // Left
    {
        x: 31.5,
        y: 2.5,
        id: 'tableChair'
    },

    // Blue pot

        // Right
    {
        x: 39.5,
        y: 1.5,
        id: 'bluePot'
    },

        // Left
    {
        x: 29.5,
        y: 1.5,
        id: 'bluePot'
    },

    // ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    // ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    // Treasure room

    // Treasure
    {
        x: 41.5,
        y: 3.5,
        id: 'cross'
    },

    {
        x: 42.5,
        y: 3.5,
        id: 'cross'
    },

    {
        x: 43.5,
        y: 3.5,
        id: 'chalice'
    },

    {
        x: 43.5,
        y: 4.5,
        id: 'cross'
    },

    {
        x: 43.5,
        y: 5.5,
        id: 'chalice'
    },

    {
        x: 42.5,
        y: 5.5,
        id: 'chalice'
    },

    {
        x: 41.5,
        y: 5.5,
        id: 'chalice'
    },

    // ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    // ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    // ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    // Hallway 3
    // Green light

        // Right
    {
        x: 24.5,
        y: 4.5,
        id: 'greenLight'
    },

        // Left
    {
        x: 19.5,
        y: 4.5,
        id: 'greenLight'
    },

     // Left down
    {
        x: 19.5,
        y: 10.5,
        id: 'greenLight'
    },

    // ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    // ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    // ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    // After hallway 3

    // Green lamp

        // Top right
    {
        x: 13.5,
        y: 8.5,
        id: 'greenLamp'
    },

        // Bottom right
    {
        x: 13.5,
        y: 12.5,
        id: 'greenLamp'
    },

        // Top left
    {
        x: 7.5,
        y: 8.5,
        id: 'greenLamp'
    },

        // Bottom left
    {
        x: 7.5,
        y: 12.5,
        id: 'greenLamp'
    },

    // Table

     // Middle
    {
        x: 10.5,
        y: 10.5,
        id: 'tableChair'
    },

    // Flag

        // Middle left
    {
        x: 6.5,
        y: 10.5,
        id: 'flag'
    },

    // Yellow plant

        // Left
    {
        x: 9.5,
        y: 7.5,
        id: 'yellowPlant'
    },

        // Right
    {
        x: 11.5,
        y: 7.5,
        id: 'yellowPlant'
    },

    // Treasure

        // Right plant
    {
        x: 12.5,
        y: 7.5,
        id: 'chalice'
    },

     // Down plant
    {
        x: 11.5,
        y: 8.5,
        id: 'cross'
    },

        // Right top eagle
    {
        x: 8.5,
        y: 7.5,
        id: 'chalice'
    },

        // Front top eagle
    {
        x: 7.5,
        y: 7.5,
        id: 'cross'
    },

        // Front bottom eagle
    {
        x: 7.5,
        y: 13.5,
        id: 'chest'
    },

    // Left bottom eagle
    {
        x: 6.5,
        y: 13.5,
        id: 'chest'
    },

    // Left upper eagle
    {
        x: 6.5,
        y: 12.5,
        id: 'chest'
    },

    // ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    // Hidden 2

        // Ammo Line left
    {
        x: 6.5,
        y: 5.5,
        id: 'ammoPack'
    },

    {
        x: 6.5,
        y: 4.5,
        id: 'ammoPack'
    },

    {
        x: 6.5,
        y: 3.5,
        id: 'ammoPack'
    },

    {
        x: 6.5,
        y: 2.5,
        id: 'ammoPack'
    },

        // Ammo Line right
    {
        x: 7.5,
        y: 5.5,
        id: 'ammoPack'
    },

    {
        x: 7.5,
        y: 4.5,
        id: 'ammoPack'
    },

    {
        x: 7.5,
        y: 3.5,
        id: 'ammoPack'
    },

    {
        x: 7.5,
        y: 2.5,
        id: 'ammoPack'
    },

        // Treasure Line left
    {
        x: 8.5,
        y: 5.5,
        id: 'chest'
    },

    {
        x: 8.5,
        y: 4.5,
        id: 'chest'
    },

    {
        x: 8.5,
        y: 3.5,
        id: 'chest'
    },

    {
        x: 8.5,
        y: 2.5,
        id: 'cross'
    },

     // Treasure Line right
    {
        x: 9.5,
        y: 4.5,
        id: 'chest'
    },

    {
        x: 9.5,
        y: 3.5,
        id: 'cross'
    },

    {
        x: 9.5,
        y: 2.5,
        id: 'cross'
    },

    // ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    // ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    // ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    // hallway 4

    // Green light
        // Top
    {
        x: 10.5,
        y: 16.5,
        id: 'greenLight'
    },

        // Bottom
    {
        x: 10.5,
        y: 19.5,
        id: 'greenLight'
    },

    // ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    // ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    // ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    // After hallway 4

    // Green light

        // Top right
    {
        x: 12.5,
        y: 24.5,
        id: 'greenLight'
    },

        // Top left
    {
        x: 8.5,
        y: 24.5,
        id: 'greenLight'
    },

        // Bottom right
    {
        x: 12.5,
        y: 28.5,
        id: 'greenLight'
    },

        // Bottom left
    {
        x: 8.5,
        y: 28.5,
        id: 'greenLight'
    },

    // Blue plant

        // Top right
    {
        x: 13.5,
        y: 23.5,
        id: 'bluePlant'
    },

        // Top left
    {
        x: 7.5,
        y: 23.5,
        id: 'bluePlant'
    },

        // Bottom right
    {
        x: 13.5,
        y: 29.5,
        id: 'bluePlant'
    },

        // Bottom left
    {
        x: 7.5,
        y: 29.5,
        id: 'bluePlant'
    },

    // ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    // ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    // ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    // After hallway 5

    //Green light
        // Top room
    {
        x: 2.5,
        y: 14.5,
        id: 'greenLight'
    },

    //Barrel
        // Top room
    {
        x: 3.5,
        y: 13.5,
        id: 'barrel'
    },

    //Green light
        // Left hallway top top
    {
        x: 2.5,
        y: 18.5,
        id: 'greenLight'
    },

        // Left hallway top bottom
    {
        x: 2.5,
        y: 22.5,
        id: 'greenLight'
    },

        // Left hallway bottom top
    {
        x: 2.5,
        y: 31.5,
        id: 'greenLight'
    },

        // Left hallway bottom bottom
    {
        x: 2.5,
        y: 37.5,
        id: 'greenLight'
    },

    // Green light
        // Left hallway right room
    {
        x: 6.5,
        y: 35.5,
        id: 'greenLight'
    },

    // Green barrel
        // Left hallway right room
    {
        x: 7.5,
        y: 34.5,
        id: 'barrelGreen'
    },

    // Food
        // Left hallway right room
    {
        x: 5.5,
        y: 36.5,
        id: 'foodPack'
    },
    // Bottom hallway

    // Green light
        // Left
    {
        x: 6.5,
        y: 40.5,
        id: 'greenLight'
    },

        // Top
    {
        x: 10.5,
        y: 35.5,
        id: 'greenLight'
    },

        // Right
    {
        x: 14.5,
        y: 40.5,
        id: 'greenLight'
    },

    // ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    // ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    // ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    // After hallway bottom

    // MedPack
    {
        x: 19.5,
        y: 43.5,
        id: 'medPack'
    },

    // Orb
    {
        x: 14.5,
        y: 48.5,
        id: 'orb'
    },
];
