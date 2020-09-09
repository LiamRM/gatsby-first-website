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
import * as firebase from "firebase"

var config = {
  apiKey: "AIzaSyD2sXlNameacge0NKM9qcOZsMGIVDuai7A",
  authDomain: "elf-withdrawals.firebaseapp.com",
  databaseURL: "https://elf-withdrawals.firebaseio.com",
  projectId: "elf-withdrawals",
  storageBucket: "elf-withdrawals.appspot.com",
  messagingSenderId: "151253140254",
  appId: "1:151253140254:web:e02428ede5302701397f0f",
  measurementId: "G-0YDKKJDQF4",
}
firebase.initializeApp(config)

const db = firebase.firestore()
const docRef = db.collection("data").doc("hugs")

var donations = 0

// setting the donations
db.collection("data")
  .doc("hugs")
  .onSnapshot(function (doc) {
    if (doc && doc.exists) {
      // window.location.reload(false)
      console.log("Current data: ", doc.data())
      const myData = doc.data()
      donations = myData.hugs
    }
  })

function addOneHug(donations) {
  donations = donations + 1
  console.log("Donations ", donations)
  // Saving to database
  db.collection("data").doc("hugs").set({
    hugs: donations,
  })
}
function addTenHugs(donations) {
  donations = donations + 10
  console.log("Donations ", donations)
  // Saving to database
  db.collection("data").doc("hugs").set({
    hugs: donations,
  })
}
function addHundredHugs(donations) {
  donations = donations + 100
  console.log("Donations ", donations)
  // Saving to database
  db.collection("data").doc("hugs").set({
    hugs: donations,
  })
}

function refreshPage() {
  window.location.reload(false)
}

function getRealtimeUpdates() {
  docRef.onSnapshot(function (doc) {
    if (doc && doc.exists) {
      // window.location.reload(false)
      console.log("Current data: ", doc.data())
      const myData = doc.data()
      donations = myData.hugs
    }
  })
}

export default function Home() {
  return (
    // const hugs = {0}
    <div style={{ color: `purple` }}>
      <Link to="/contact/">Are you a kilogram of steel or feathers?</Link>
      <Grid
        container
        spacing={1}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: "10vh" }}
      >
        <h1>The Elf Withdrawal Relief Fund</h1>
        <p>A noble effort for Pandoalas to help out Koandas in need.</p>
        <Grid item xs={12}>
          <img src={pandaGIF} alt="Panda hug" />
        </Grid>
        <Grid item xs={12}>
          <Typography id="totaldonations" variant="h4">
            Total Donations: {donations}
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              addOneHug(donations)
              getRealtimeUpdates()
            }}
          >
            Donate 1 hug
          </Button>
        </Grid>
        <Grid item xs={4}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              addTenHugs(donations)
              getRealtimeUpdates()
            }}
          >
            Donate 10 hugs
          </Button>
        </Grid>
        <Grid item xs={4}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              addHundredHugs(donations)
              getRealtimeUpdates()
              console.log("Local donations: ", donations)
            }}
          >
            Donate 100 hugs
          </Button>
        </Grid>
        <Grid item xs={4}>
          <Button
            variant="contained"
            color="green"
            onClick={() => {
              refreshPage()
              // window.location.reload(true)
            }}
          >
            Refresh
          </Button>
        </Grid>
      </Grid>
    </div>
  )
}
