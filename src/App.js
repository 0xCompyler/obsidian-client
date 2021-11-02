import AuthProvider from "@contexts/Auth/AuthProvider";
import Create from "@pages/Create";
import Landing from "@pages/Landing";
import NotFound from "@pages/NotFound";
import React from "react";

import {
	BrowserRouter as Router,
	Switch,
	Route,
} from "react-router-dom";

const App = () => {
	return (
		<AuthProvider>
			<Router>
				<Switch>
					<Route
						path="/"
						exact
						component={Landing}
					/>
					<Route
						path="/create"
						exact
						component={Create}
					/>
					<Route
						path="*"
						component={NotFound}
					/>
				</Switch>
			</Router>
		</AuthProvider>
	)
}

export default App
