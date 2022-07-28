import { Switch, Route } from "react-router-dom"
import NotFound from '../NotFound/NotFound'
import Login from '../Login/Login'
import Register from '../Register/Register'
import NoteList from '../NoteList/NoteList'
import Detail from '../Detail/Detail'
import NewNote from '../NewNote/NewNote'

export default function Page(props){
    return (
        <Switch>
            <Route 
                path="/login" 
                component={Login} 
                userToggle={props.userToggle}
            />
            <Route 
                path="/register" 
                component={Register} 
                userToggle={props.userToggle}
            />
            <Route 
                path="/note/:title" 
                component={Detail} 
                exact 
            />
            <Route 
                path="/note" 
                component={NewNote} 
                exact 
            />
            <Route 
                path="/" 
                component={NoteList} 
                exact 
            />
            <Route 
                component={NotFound} 
            />
        </Switch>
    )
}