import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Notes from './pages/Notes'
import Create from './pages/Create'
import { createTheme, ThemeProvider } from '@mui/material';
import { purple } from '@mui/material/colors';

// To create a custom theme, we will import the createTheme and ThemeProvider. ThemeProvider is a wrapper that takes an object (createTheme below) to style whatever is in that wrapper.
const theme = createTheme({
  palette: {
    primary: {
      main: '#fefefe'
    },
    // The below line will import the purple object from materialUI. This is why we don't have to specify a color like the primary color above. The color objects have a variety of shades built in.
    secondary: purple
  }
}) 

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Notes />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
