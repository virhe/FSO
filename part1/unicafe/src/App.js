import React, { useState } from "react"

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const increaseGoodCounter = () => setGood(good + 1)
  const increaseNeutralCounter = () => setNeutral(neutral + 1)
  const increaseBadCounter = () => setBad(bad + 1)

  const total = good + neutral + bad

  const stats = {
    goodStat: {
      text: "good",
      value: good,
    },
    neutralStat: {
      text: "neutral",
      value: neutral,
    },
    badStat: {
      text: "bad",
      value: bad,
    },
    all: {
      text: "all",
      value: total,
    },
    average: {
      text: "average",
      value: (good + bad * -1) / total,
    },
    positive: {
      text: "positive",
      value: (good / total) * 100,
    },
  }

  return (
    <div>
      <Header text="Give feedback" />

      <Button onClick={increaseGoodCounter} text={stats.goodStat.text} />
      <Button onClick={increaseNeutralCounter} text={stats.neutralStat.text} />
      <Button onClick={increaseBadCounter} text={stats.badStat.text} />

      <Header text="Statistics" />

      <Statistics stats={stats} />
    </div>
  )
}

const Header = ({ text }) => <h2>{text}</h2>

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = ({ stats }) => {
  if (stats.all.value === 0) {
    return <p>No feedback given</p>
  }

  return (
    <table>
      <tbody>
        <StatisticLine text={stats.goodStat.text} value={stats.goodStat.value} />
        <StatisticLine text={stats.neutralStat.text} value={stats.neutralStat.value} />
        <StatisticLine text={stats.badStat.text} value={stats.badStat.value} />
        <StatisticLine text={stats.all.text} value={stats.all.value} />
        <StatisticLine text={stats.average.text} value={stats.average.value} />
        <StatisticLine text={stats.positive.text} value={stats.positive.value} />
      </tbody>
    </table>
  )
}

export default App
