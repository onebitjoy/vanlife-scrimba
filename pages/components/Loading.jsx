import ReactLoading from 'react-loading'

function Loading() {
  return (
    <div style={{ background: "white", width: "inherit", height: "10vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div>
        <ReactLoading type={"spin"} color={"gray"} width={50} height={50} />
      </div>
    </div>
  )
}

export default Loading
