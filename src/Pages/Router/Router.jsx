import { Switch, Route } from "react-router-dom"
import NotFound from '../NotFound/NotFound'
import Login from '../../components/Login/Login'
import Register from '../../components/Register/Register'
import NoteList from '../../components/NoteList/NoteList'
import Detail from '../Detail/Detail'
import NewNote from '../NewNote/NewNote'

export default function Page(props){
    return (
        <Switch>
            <Route 
                path="/login" 
                component={Login} 
            />
            <Route 
                path="/register" 
                component={Register} 
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