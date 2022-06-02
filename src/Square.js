export default function Square({index, value}) {

  return (
        <div className='square'
             data-index={index}>
          {value}
        </div>
  );
}
