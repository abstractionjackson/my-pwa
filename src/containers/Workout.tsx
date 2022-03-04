import { useState } from "react"

export default function Workout() {
    const [workouts, setWorkouts] = useState([])
    return (
        <main>
            <header>
                <h1>Working Out Title</h1>
                <h2>create, read, update, delete</h2>
            </header>
        </main>
    )
}