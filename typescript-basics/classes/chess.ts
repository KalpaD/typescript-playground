
// Represents a chess game
class Game {}


// A set of coordinates for a piece
class Position {
    constructor(private file: File,
                private rank: Rank) {}

    distanceFrom(position: Position) {
        return {
            rank: Math.abs(position.rank - this.rank),
            file: Math.abs(position.file.charCodeAt(0) - this.file.charCodeAt(0))
        }
    }
}

// A chess piece
abstract class Piece {
    protected position: Position
    constructor(private readonly color: Color,
                file: File,
                rank: Rank) {
        this.position = new Position(file, rank)
    }

    moveTo(position: Position) {
        this.position = position
    }

    abstract canMove(position: Position): boolean
}


class King extends Piece {
    canMove(position: Position): boolean {
        let distance = this.position.distanceFrom(position)
        return distance.rank < 2 && distance.file < 2
    }
}

class Queen extends Piece {
    canMove(position: Position): boolean {
        let distance = this.position.distanceFrom(position)
        return distance.rank < 2 && distance.file < 2
    }
}
class Bishop extends Piece {}
class Knight extends Piece {}
class Rook extends Piece {}
class Pawn extends Piece {}

type Color = 'Black' | 'White'
type File = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H'
type Rank = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8

