import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Create from './pages/Create'
import Layout from './components/Layout';
import Notes from './pages/Notes'
import { createTheme, ThemeProvider } from '@mui/material';
import { purple } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3f51b5'
    },
    secondary: purple
  }
}) 

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/">
              <Notes />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}
