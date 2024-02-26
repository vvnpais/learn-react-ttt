import Tile from "./Tile";
import Strike from "./Strike";
function Board({ tiles, onTileClick, playerTurn, strikeClass }){
    return (
        <div className="board">
        <Tile playerTurn={playerTurn} onClick={()=>onTileClick(0)} value={tiles[0]} className="rb bb"/>    
        <Tile playerTurn={playerTurn} onClick={()=>onTileClick(1)} value={tiles[1]} className="lb rb bb"/>    
        <Tile playerTurn={playerTurn} onClick={()=>onTileClick(2)} value={tiles[2]} className="lb bb"/>    
        <Tile playerTurn={playerTurn} onClick={()=>onTileClick(3)} value={tiles[3]} className="rb tb bb"/>    
        <Tile playerTurn={playerTurn} onClick={()=>onTileClick(4)} value={tiles[4]} className="lb rb tb bb"/>    
        <Tile playerTurn={playerTurn} onClick={()=>onTileClick(5)} value={tiles[5]} className="lb tb bb"/>    
        <Tile playerTurn={playerTurn} onClick={()=>onTileClick(6)} value={tiles[6]} className="rb tb"/>    
        <Tile playerTurn={playerTurn} onClick={()=>onTileClick(7)} value={tiles[7]} className="lb rb tb"/>    
        <Tile playerTurn={playerTurn} onClick={()=>onTileClick(8)} value={tiles[8]} className="lb tb"/>    
        <Strike strikeClass={strikeClass}/>
        </div>
    );
};

export default Board;