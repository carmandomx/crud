const QuoteItem = ({ text, clase, id, handleDelete }) => {
  return (
    <div>
      {text} - {clase} -{' '}
      <button
        onClick={() => {
          handleDelete(id)
        }}
      >
        X
      </button>
    </div>
  )
}

export default QuoteItem
