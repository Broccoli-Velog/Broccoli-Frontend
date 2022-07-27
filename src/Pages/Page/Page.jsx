import { Switch, Route } from "react-router-dom"
import NotFound from '../NotFound/NotFound'
import Login from '../Login/Login'
import Register from '../Register/Register'
import NoteList from '../NoteList/NoteList'
import Note from '../Note/Note'
import NewNote from '../NewNote/NewNote'

export default function Page(){
    return (
        <Switch>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/note/:title" component={Note} exact />
            <Route path="/note" component={NewNote} exact />
            <Route path="/" component={NoteList} exact />
            <Route component={NotFound} />
        </Switch>
    )
}