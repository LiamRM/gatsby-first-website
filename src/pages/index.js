import React from "react"
import pandaGIF from "../gifs/pandahuggif.gif"
import {
  Typography,
  Grid,
  Container,
  AppBar,
  Tabs,
  Tab,
  Button,
} from "@material-ui/core"
import { Link } from "gatsby"
import { render } from "react-dom"

var donations = 784

function addOneHug(donations) {
  donations = donations + 1
  // window.location.reload(false)
  // print(donations)
  // render()
}
function addTenHugs(donations) {
  donations = donations + 10
  // window.location.reload(false)
}
function addHundredHugs(donations) {
  donations = donations + 100
  // window.location.reload(false)
}

export default function Home() {
  return (
    // const hugs = {0}
    <div style={{ color: `purple` }}>
      <Link to="/contact/">Click for a secret message</Link>

      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: "10vh" }}
      >
        <h1>The Elf Withdrawal Relief Fund</h1>
        <p>A noble effort for Pandoalas to help out Koandas in need</p>
        <Grid item xs={12}>
          <img src={pandaGIF} alt="Panda hug" />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h4">Total Donations: {donations}</Typography>
        </Grid>
      </Grid>
      <Grid container alignItems="center" justify="center" spacing={0}>
        <Grid item xs={4}>
          <Button
            variant="contained"
            color="primary"
            onClick={addOneHug(donations)}
          >
            Donate 1 hug
          </Button>
        </Grid>
        <Grid item xs={4}>
          <Button
            variant="contained"
            color="primary"
            onClick={addTenHugs(donations)}
          >
            Donate 10 hugs
          </Button>
        </Grid>
        <Grid item xs={4}>
          <Button
            variant="contained"
            color="primary"
            onClick={addHundredHugs(donations)}
          >
            Donate 100 hugs
          </Button>
        </Grid>
      </Grid>
    </div>
  )
}
