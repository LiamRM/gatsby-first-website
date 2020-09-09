import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import { Typography } from "@material-ui/core"

// var date1 = Date("04/06/2019")
// var date2 = Date("09/09/2020")
// var difference_In_Time = date2.getTime() - date1.getTime()
// var difference_In_Days = Difference_In_Time / (1000 * 3600 * 24)

export default function Contact() {
  return (
    <div style={{ color: "teal" }}>
      <Link to="/">Back to Donations</Link>
      <Header headerText="Cause ahduntgeddit...how did a bombshell like you wind up liking me?"></Header>
      {/* <p>How long we've been together: {Difference_In_Days} days</p> */}
    </div>
  )
}
