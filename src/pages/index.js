import React from "react"
import { Link } from "gatsby"

export default function Home() {
  return (
    <div style={{ color: `purple` }}>
      <Link to="/contact/">Click for a secret message</Link>
      <h1>Hello Chuck!</h1>
      <p>Woah, it's a terrible webpage but it's on the ~web~</p>
    </div>
  )
}
