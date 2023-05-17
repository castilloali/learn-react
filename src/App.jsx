import "./style.css"

export default function News() {
  return (
    <div className="parnet">
      <form className="from">
        <div className="form-row">
          <label htmlFor="item" className="header">New Item</label>
          <input type="text" id="item" />
        </div>
        <button className="btn">Add</button>
      </form>
    </div>
  )
}