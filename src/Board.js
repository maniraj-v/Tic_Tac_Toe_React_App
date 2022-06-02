import Square from './Square'
export default function Board(props) {
  
  const {moves, processResult} = props;
  return (
    <section className="board" onClick={processResult}>
      {
        moves.map((move, index) =>{
          return <Square key={index} index={index} value={move}/>
        })
      }
    </section>
  );
}
